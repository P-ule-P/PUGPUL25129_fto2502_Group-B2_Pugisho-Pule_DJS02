import { genres } from "../initialData/data.js";

/**
 * Maps an array of genre IDs to their full string names.
 * @param {number[]} genreIds - IDs of genres (e.g. [1, 3])
 * @returns {string[]} Array of genre titles (e.g. ['True Crime', 'History'])
 */
export function mapGenreIdsToNames(genreIds) {
  return genreIds.map((id) => {
    const genre = genres.find((g) => g.id === id);
    return genre ? genre.title : "Unknown";
  });
}
