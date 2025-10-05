/**
 * Simple HTTP server for Saraswathy Bakery Website
 * Author: Replit Expert
 * Version: 1.0
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the port - use a different port than the React app
const PORT = process.env.PORT || 3000;

// MIME types for different file extensions
const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.ttf': 'font/ttf',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'font/otf'
};

// Create the server
const server = http.createServer((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

    // Parse the URL to get the pathname
    let filePath = req.url;
    
    // Default to index.html if the path is '/'
    if (filePath === '/') {
        filePath = '/index.html';
    }
    
    // Serve serve.html at the root for easy navigation during development
    if (filePath === '/index.html' && process.env.NODE_ENV === 'development') {
        filePath = '/serve.html';
    }
    
    // Build the file path
    filePath = path.join(__dirname, filePath);
    
    // Get the file extension
    const extname = String(path.extname(filePath)).toLowerCase();
    
    // Set the content type based on the file extension
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';
    
    // Read the file
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // Page not found - serve the 404 page
                fs.readFile(path.join(__dirname, '404.html'), (error, content) => {
                    if (error) {
                        // If 404.html is not found, send a simple 404 response
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end('<html><body><h1>404 Not Found</h1><p>The page you requested does not exist.</p></body></html>');
                    } else {
                        // Serve the 404.html page
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end(content, 'utf-8');
                    }
                });
            } else {
                // Server error
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`);
                console.error(`Server Error: ${error.code}`);
            }
        } else {
            // Success - serve the file
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

// Start the server
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}/`);
    console.log(`In development mode: ${process.env.NODE_ENV === 'development'}`);
    console.log('Press Ctrl+C to stop the server');
});

// Handle server error
server.on('error', (error) => {
    console.error(`Server error: ${error.message}`);
});

// Handle process termination
process.on('SIGINT', () => {
    console.log('Server is shutting down');
    server.close(() => {
        console.log('Server has been terminated');
        process.exit(0);
    });
});