/**
 * Module providing access to data related to paintings, artists, and galleries.
 * Includes methods to retrieve paintings by various criteria, fetch artists' information,
 * and access gallery data.
 */

const paintingsData = require('../data/paintings-nested.json');
const artistsData = require('../data/artists.json');
const galleriesData = require('../data/galleries.json');

/**
 * Retrieves all paintings data.
 * @returns {Array} An array containing all paintings.
 */
const getPaintings = () => {
  return paintingsData;
};

/**
 * Retrieves a painting by its ID.
 * @param {number} id The ID of the painting to retrieve.
 * @returns {Object|undefined} The painting object if found, otherwise undefined.
 */
const getPaintingById = (id) => {
  return paintingsData.find(painting => painting.paintingID === parseInt(id));
};

/**
 * Retrieves paintings belonging to a specific gallery.
 * @param {number} galleryId The ID of the gallery to filter paintings.
 * @returns {Array} An array containing paintings associated with the specified gallery.
 */
const getPaintingsByGalleryId = (galleryId) => {
  return paintingsData.filter(painting => painting.gallery.galleryID === galleryId);
};

/**
 * Retrieves paintings created by a specific artist.
 * @param {number} artistId The ID of the artist to filter paintings.
 * @returns {Array} An array containing paintings created by the specified artist.
 */
const getPaintingsByArtistId = (artistId) => {
  return paintingsData.filter(painting => painting.artist.artistID === artistId);
};

/**
 * Retrieves paintings created within a given year range.
 * @param {number} minYear The minimum year of the range.
 * @param {number} maxYear The maximum year of the range.
 * @returns {Array} An array containing paintings created within the specified year range.
 */
const getPaintingsByYearRange = (minYear, maxYear) => {
  const paintings =  paintingsData.filter(painting => painting.yearOfWork >= minYear && painting.yearOfWork <= maxYear);
  return paintings;
};

/**
 * Retrieves paintings based on a specific color name.
 * @param {string} colorName The name of the color to match.
 * @returns {Array} An array containing paintings with the specified dominant color.
 */
const getPaintingsByColorName = (colorName) => {
  const matchingPaintings = paintingsData.filter((painting) =>
    painting.details.annotation.dominantColors.some(
      (color) => color.name.toLowerCase() === colorName
    )
  );
  return matchingPaintings;
};

/**
 * Retrieves all artists data.
 * @returns {Array} An array containing all artists' information.
 */
const getArtists = () => {
  return artistsData;
};

/**
 * Retrieves artists' data based on the specific nationality / country name.
 * @param {string} nationality The name of the given artists' nationality.
 * @returns {Array} An array containing the artists' information.
 */
const getArtistsByCountry = (nationality) => {
  const artists = artistsData.filter(artist =>
    artist.Nationality.toLowerCase() === nationality
  );

  return artists;
};

/**
 * Retrieves all galleries data.
 * @returns {Array} An array containing all galleries' information.
 */
const getGalleries = () => {
  return galleriesData;
};

/**
 * Retreves galleries data based on the specific country name.
 * @param {string} country The name of the given country
 * @returns {Array} An array containing all the galleries' information.
 */
const getGalleryByCountry = (country) => {
  const galleries = galleriesData.filter(gallery => gallery.GalleryCountry.toLowerCase() === country);
  return galleries;
}

// Exports functions providing access to data
module.exports = {
  getPaintings,
  getPaintingById,
  getPaintingsByGalleryId,
  getPaintingsByArtistId,
  getPaintingsByYearRange,
  getPaintingsByColorName,
  getArtists,
  getArtistsByCountry,
  getGalleries,
  getGalleryByCountry
};
