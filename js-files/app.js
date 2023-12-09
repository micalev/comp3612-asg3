const express = require('express');
const app = express();
const handlers = require('./handler');

// API endpoints for paintings
app.get('/api/paintings', handlers.handleGetPaintings);
app.get('/api/painting/:id', handlers.handleGetPaintingById);
app.get('/api/painting/gallery/:id', handlers.handleGetPaintingByGalleryId);
app.get('/api/painting/artist/:id', handlers.handleGetPaintingByArtistId);
app.get('/api/painting/year/:min/:max', handlers.handleGetPaintingsByYearRange);
app.get('/api/painting/title/:text', handlers.handleGetPaintingsByTitle);
app.get('/api/painting/color/:name', handlers.handleGetPaintingsByColorName);

// API endpoints for artists
app.get('/api/artists', handlers.handleGetArtists);
app.get('/api/artists/:country', handlers.handleGetArtistByCountry);

// API endpoints for galleries
app.get('/api/galleries', handlers.handleGetGalleries);
app.get('/api/galleries/:country', handlers.handleGalleryByCountry);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
