// Create web server that serves the comments API

// Import the express module
const express = require('express');

// Create an instance of the express module
const app = express();

// Import the comments data
const comments = require('./data/comments');

// Import the products data
const products = require('./data/products');

// Import the cors module
const cors = require('cors');

// Use the cors middleware
app.use(cors());

// Create a route that sends all of the comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a route that sends all of the comments for a product
app.get('/products/:productId/comments', (req, res) => {
    const productId = Number(req.params.productId);
    const productComments = comments.filter(comment => comment.productId === productId);
    res.json(productComments);
});

// Create a route that sends all of the comments for a product
app.get('/products/:productId', (req, res) => {
    const productId = Number(req.params.productId);
    const product = products.find(product => product.id === productId);
    res.json(product);
});

// Create a route that sends a specific comment
app.get('/comments/:commentId', (req, res) => {
    const commentId = Number(req.params.commentId);
    const comment = comments.find(comment => comment.id === commentId);
    res.json(comment);
});

// Create a route that sends a specific product
app.get('/products/:productId', (req, res) => {
    const productId = Number(req.params.productId);
    const product = products.find(product => product.id === productId);
    res.json(product);
});

// Create a route that sends all of the products
app.get('/products', (req, res) => {
    res.json(products);
});

// Start the server on port 4001
app.listen(4001, () => {
    console.log('Server is listening on port 4001');
});