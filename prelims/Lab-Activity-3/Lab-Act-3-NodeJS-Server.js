// Task Name: Lab 3
// Author: Custodio, Archie D.
// Section: WD - 201

var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server 
    if (req.url == '/') { //check the URL of the current request

        // set response header
        res.writeHead(200, {'Content-Type': 'text/html' });

        // set response content
        res.write('<html><body><h1>Welcome to my Node.js Application</h1> <p>Welcome Archie Custodio. This is an activity about basics of Node.js</p> </body></html>'); 
        res.end();

    }
    else if (req.url == '/About') {

        res.writeHead (200, {'Content-Type': 'text/html' }); 
        res.write('<html><body><h1>This is the About Page</h1> <p>Hello Archie Custodio. This activity will teach on how to deal with a simple server and local modules in Node.js</p> </body></html>'); 
        res.end();

    }
    else if (req.url == '/contact') {

        res.writeHead(200, {'Content-Type': 'text/html' }); 
        res.write('<html><body><h1>This is the Contact Page</h1> <p>Archie Custodio, if you want additional details about this activity go to this site://https://www.tutorialsteacher.com/node.js/nodejs-tutorials</p></body></html>'); 
        res.end();
        
    }
    else if (req.url == '/gallery') {

        res.writeHead (200, {'Content-Type': 'text/html' }); 
        res.write('<html><body><h1>This is the Gallery Page</h1> </body></html>'); 
        res.end();
    }
    else

        res.end('Invalid Request!');

});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')