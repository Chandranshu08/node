const express = require('express');
const app = express();
const PORT = 3000;


// Custom middleware function
const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Call the next middleware or route handler
};


// Use the middleware for all routes
app.use(loggerMiddleware);


// A sample route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


// Another sample route
app.get('/about', (req, res) => {
    res.send('About Page');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
