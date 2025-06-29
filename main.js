import { podcasts } from "./scripts/initialData/data.js";
import { showModal } from "./scripts/UI/modal.js";

/**
 * Renders the list of podcast previews into the DOM.
 *
 * @function renderPodcasts
 * @param {Array<Object>} podcastList - Array of podcast objects to render as preview components.
 * @returns {void}
 */
function renderPodcasts(podcastList) {
  const container = document.getElementById("podcastList");

  // Clear any existing previews
  container.innerHTML = "";

  // Create and append a <podcast-preview> component for each podcast
  podcastList.forEach((podcast) => {
    const preview = document.createElement("podcast-preview");

    // Assign podcast data to the component via its public property
    preview.data = podcast;

    container.appendChild(preview);
  });

  // Listen for the custom 'podcast-clicked' event dispatched by each podcast-preview
  container.addEventListener("podcast-clicked", (e) => {
    // Show the modal with details using the provided podcast data
    showModal(e.detail);
  });
}

// Initialize the app with the full list of podcasts
renderPodcasts(podcasts);
