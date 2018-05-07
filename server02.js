// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT0 = 7000;
var PORT1 = 7001;

// Create a generic function to handle requests and responses
function handleRequest0(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end('00 If you can read this, then you are still alive. Good for you.');
}
function handleRequest1(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end('01 If you can read this, then you are still alive. Good for you.');
  }
// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server0 = http.createServer(handleRequest0);
var server1 = http.createServer(handleRequest1);

// Start our server so that it can begin listening to client requests.
server0.listen(PORT0, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT0);
});
server1.listen(PORT1, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT1);
  });





// port 7500 */

// var http = require("http");

http.createServer(function(request, response) {
response.end('You need to start reading more important stuff than this')

}).listen(7500, function() {
  console.log("server listening on 7500")
});