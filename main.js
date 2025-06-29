import { podcasts } from "./scripts/initialData/data.js";
import { showModal } from "./scripts/UI/modal.js";

function renderPodcasts(podcastList) {
  const container = document.getElementById("podcastList");
  container.innerHTML = "";

  podcastList.forEach((podcast) => {
    const preview = document.createElement("podcast-preview");
    preview.data = podcast;
    container.appendChild(preview);
  });

  container.addEventListener("podcast-clicked", (e) => {
    showModal(e.detail);
  });
}

renderPodcasts(podcasts);
