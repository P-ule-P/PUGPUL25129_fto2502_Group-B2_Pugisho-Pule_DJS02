import { seasons } from "../initialData/data.js";
import { genres } from "../initialData/data.js";

/**
 * Displays a modal with detailed podcast information.
 * This function populates and shows a modal element with the given podcast's title,
 * image, description, genre tags, last updated date, and season info.
 *
 * @function showModal
 * @param {Object} podcast - The podcast object to display in the modal.
 * @param {number} podcast.id - Unique identifier of the podcast.
 * @param {string} podcast.title - Title of the podcast.
 * @param {string} podcast.image - URL of the podcast's cover image.
 * @param {string} podcast.description - Text description of the podcast.
 * @param {number[]} podcast.genres - Array of genre IDs associated with the podcast.
 * @param {string|number|Date} podcast.updated - Date when the podcast was last updated.
 * @returns {void}
 */
export function showModal(podcast) {
  // Show the modal by removing the 'hidden' class
  const modal = document.getElementById("podcastModal");
  modal.classList.remove("hidden");

  // Set the podcast title, image, and description in the modal
  document.getElementById("modalTitle").textContent = podcast.title;
  document.getElementById("modalImage").src = podcast.image;
  document.getElementById("modalDescription").textContent = podcast.description;

  // Format the updated date to a human-readable string
  document.getElementById(
    "modalUpdated"
  ).textContent = `📅 Last updated: ${new Date(
    podcast.updated
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`;

  // Map genre IDs to their corresponding names and render them as tags
  const genreLabels = podcast.genres.map((id) => {
    const genre = genres.find((g) => g.id === id);
    return `<span class="tag">${genre?.title || "Unknown"}</span>`;
  });
  document.getElementById("modalGenres").innerHTML = genreLabels.join("");

  // Find the seasons associated with this podcast by ID
  const seasonObj = seasons.find((s) => s.id === podcast.id);
  const seasonList = seasonObj?.seasonDetails || [];

  // Clear previous season content and render current seasons
  const modalSeasons = document.getElementById("modalSeasons");
  modalSeasons.innerHTML = seasonList
    .map(
      (s) => `
    <div>
      <strong>${s.title}</strong> <span class="episode-count"> ${s.episodes} episodes </span>
    </div>
  `
    )
    .join("");

  // Setup close modal button handler
  document.querySelector(".close-modal").onclick = () => {
    modal.classList.add("hidden");
  };
}
