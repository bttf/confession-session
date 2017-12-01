const express = require('express');
const PORT = process.env.PORT || 3001;
const path = require('path');
const glob = require('glob');

const app = express();

/**
 * list of collection dirs
 */
const collections = glob.sync(path.join(__dirname, 'collections', '*'));

/**
 * function that retrieves list of files in a collection dir, then returns a
 * middleware function that will send a randomly selected file
 */
const selectImageAtRandom = collection => {
  const images = glob.sync(path.join(collection, '*.*'));
  return (req, res) => {
    const randomIndex = Math.floor(Math.random() * images.length);
    res.sendFile(images[randomIndex]);
  };
};

/**
 * for every collection dir, we want to define an endpoint for each and serve
 * a randomly selected file from respective directory on a GET request
 */
collections.forEach(collection => {
  // TODO: dasherize collection name
  const uri = path.basename(collection);

  app.get(`/${uri}`, selectImageAtRandom(collection));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
