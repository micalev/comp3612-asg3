/**
 * 	This module will encapsulate all the route handlers for this API.
 */

const dataProvider = require('./dataProvider');

// Handler to get all the paintings from paintings-nested.json
const handleGetPaintings = (req, res) => {
  const paintings = dataProvider.getPaintings();
  res.json(paintings);
};

// Handler to get all the paintings by ID
const handleGetPaintingById = (req, res) => {
  const paintingId = req.params.id;
  const painting = dataProvider.getPaintingById(paintingId);

  if (painting) {
    res.json(painting);
  } else {
    res.status(404).json({ message: 'Painting with the id: ' + paintingId + ' is not found' });
  }
};

// Handler to get all the paintings by their gallery ID
const handleGetPaintingByGalleryId = (req, res) => {
  const galleryId = parseInt(req.params.id);
  const paintingsList = dataProvider.getPaintingsByGalleryId(galleryId);

  if (paintingsList.length > 0) {
    res.json(paintingsList);
  } else {
    res.status(404).json({ message: 'No paintings found for the gallery ID: ' + galleryId });
  }
};

// Handler to get all the paintings by their artist ID
const handleGetPaintingByArtistId = (req, res) => {
  const artistId = parseInt(req.params.id);
  const paintingsList = dataProvider.getPaintingsByArtistId(artistId);

  if (paintingsList.length > 0) {
    res.json(paintingsList);
  } else {
    res.status(404).json({ message: 'No paintings found for the artist ID: ' + artistId });
  }
};

// Handler to get all the paintings within the given year range
const handleGetPaintingsByYearRange = (req, res) => {
  const { min, max } = req.params; // Retrieve min and max from request params

  const minYear = parseInt(min); // Convert min to an integer
  const maxYear = parseInt(max); // Convert max to an integer

  // Check if minYear and maxYear are valid numbers
  if (isNaN(minYear) || isNaN(maxYear)) {
    res.status(400).json({ message: 'Invalid min/max year format' });
    return;
  }

  const paintings = dataProvider.getPaintingsByYearRange(minYear, maxYear);

  if (paintings.length > 0) {
    res.json(paintings);
  } else {
    res.status(404).json({ message: 'No paintings found within the given year range of min: ' + minYear + ' and max: ' + maxYear });
  }
};

// Handler to get all the paintings by their title
const handleGetPaintingsByTitle = (req, res) => {
  const searchText = req.params.text.toLowerCase(); // Convert search text to lowercase for case-insensitive comparison

  const paintings = dataProvider.getPaintings();
  const filteredPaintings = paintings.filter(painting =>
    painting.title.toLowerCase().includes(searchText)
  );

  if (filteredPaintings.length > 0) {
    res.json(filteredPaintings);
  } else {
    res.status(404).json({ message: 'No paintings found with the provided title text: ' + searchText });
  }
};

// Handler to get all the paintings that contains the color name provided
const handleGetPaintingsByColorName = (req, res) => {
  const colorName = req.params.name.toLowerCase();
  const paintingsList = dataProvider.getPaintingsByColorName(colorName);

  if (paintingsList.length > 0) {
    res.json(paintingsList);
  } else {
    res.status(404).json({ message: 'No paintings found with the provided color name: ' + colorName });
  }
};

// Handler to get all the artists from artists.json
const handleGetArtists = (req, res) => {
  const artists = dataProvider.getArtists();
  res.json(artists);
};

// Handler to get all the aritsts within the provided country name
const handleGetArtistByCountry = (req, res) => {
  const country = req.params.country.toLowerCase();
  const artistsList = dataProvider.getArtistsByCountry(country);

  if (artistsList.length > 0) {
    res.json(artistsList);
  } else {
    res.status(404).json({ message: 'No artists found within the country: ' + country });
  }
}

// Handler to get all the galleries from galleries.json
const handleGetGalleries = (req, res) => {
  const galleries = dataProvider.getGalleries();
  res.json(galleries);
}

// Handler to get all the galleries within the provided country name
const handleGalleryByCountry = (req, res) => {
  const country = req.params.country.toLowerCase();
  const galleriesList = dataProvider.getGalleryByCountry(country);

  if (galleriesList.length > 0) {
    res.json(galleriesList);
  } else {
    res.status(404).json({ message: 'No galleries found within the country: ' + country });
  }
};

// Exported handlers for the various endpoints
module.exports = {
  handleGetPaintings,
  handleGetPaintingById,
  handleGetPaintingByGalleryId,
  handleGetPaintingByArtistId,
  handleGetPaintingsByYearRange,
  handleGetPaintingsByTitle,
  handleGetPaintingsByColorName,
  handleGetArtists,
  handleGetArtistByCountry,
  handleGetGalleries,
  handleGalleryByCountry
};
