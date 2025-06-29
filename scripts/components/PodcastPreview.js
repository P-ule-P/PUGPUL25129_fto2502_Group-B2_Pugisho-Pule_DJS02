import { genres } from "../initialData/data.js";
import { formatTimeAgo } from "../utils/time.js";

/**
 * Custom Web Component for displaying a podcast preview.
 *
 * @class PodcastPreview
 * @extends HTMLElement
 */
class PodcastPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.podcastData = null;
  }

  /**
   * Sets the data for the podcast and renders it.
   * @param {Object} data - Podcast data object.
   */
  set data(data) {
    this.podcastData = data;
    this.render();
  }

  /**
   * Dispatches a custom event when the component is clicked.
   */
  handleClick = () => {
    this.dispatchEvent(
      new CustomEvent("podcast-clicked", {
        detail: this.podcastData,
        bubbles: true,
        composed: true,
      })
    );
  };

  /**
   * Renders the component UI.
   */
  render() {
    if (!this.podcastData) return;

    const {
      title,
      image,
      genres: genreIds,
      seasons,
      updated,
    } = this.podcastData;

    const genreNames = genreIds
      .map((id) => genres.find((g) => g.id === id)?.title || "Unknown")
      .join(", ");

    const template = document.createElement("template");
    template.innerHTML = `
      <style>
        .card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          cursor: pointer;
          transition: transform 0.2s;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .card:hover {
          transform: scale(1.02);
        }

        .cover {
          width: 100%;
          border-radius: 6px;
        }

        h3 {
          margin: 0;
          font-size: 1rem;
        }

        .meta {
          font-size: 0.85rem;
          color: #666;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
        }

        .tag {
          background: #eee;
          border-radius: 4px;
          padding: 0.2rem 0.5rem;
          font-size: 0.75rem;
        }
      </style>

      <div class="card">
        <img src="${image}" alt="${title} cover" class="cover" />
        <h3>${title}</h3>
        <p class="meta">${seasons} season${seasons !== 1 ? "s" : ""}</p>
        <div class="tags">
          ${genreNames
            .split(", ")
            .map((g) => `<span class="tag">${g}</span>`)
            .join("")}
        </div>
        <p class="meta">Updated ${formatTimeAgo(updated)}</p>
      </div>
    `;

    this.shadowRoot.innerHTML = "";
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot
      .querySelector(".card")
      .addEventListener("click", this.handleClick);
  }
}

customElements.define("podcast-preview", PodcastPreview);
