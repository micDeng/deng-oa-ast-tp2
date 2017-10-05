module.exports = {
  
    logic: function (req, res) {
      // Write a response header
      res.writeHead(200, {'Content-Type': 'text/plain'});
      // Write a response content
      res.end('Hello World !');
    },
    port: "8888", 
    address: "127.0.0.1"
}
