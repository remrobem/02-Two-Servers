// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7000;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end('If you can read this, then you are still alive. Good for you.');
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});


// or alternative ************************************************************************** */

var http = require("http");

http.createServer(function(request, response) {
response.end('You need to start reading more important stuff than this')

}).listen(7500, function() {
  console.log("server listening on 7500")
});