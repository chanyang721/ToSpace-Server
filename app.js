const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// var port = process.env.PORT || 80,
//     http = require('http'),
//     fs = require('fs');
//
// module.exports = app;
//
// var app = http.createServer(function (req, res) {
//
//   if (req.url.indexOf('/img') != -1) {
//     var filePath = req.url.split('/img')[1];π
//     fs.readFile(__dirname + '/public/img' + filePath, function (err, data) {
//       if (err) {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.write('Error 404: Resource not found.');
//         console.log(err);
//       } else {
//         res.writeHead(200, {'Content-Type': 'image/svg+xml'});
//         res.write(data);
//       }
//       res.end();
//     });
//   } else if (req.url.indexOf('/js') != -1) {
//     var filePath = req.url.split('/js')[1];
//     fs.readFile(__dirname + '/public/js' + filePath, function (err, data) {
//       if (err) {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.write('Error 404: Resource not found.');
//         console.log(err);
//       } else {
//         res.writeHead(200, {'Content-Type': 'text/javascript'});
//         res.write(data);
//       }
//       res.end();
//     })
//   } else if(req.url.indexOf('/css') != -1) {
//     var filePath = req.url.split('/css')[1];
//     fs.readFile(__dirname + '/public/css' + filePath, function (err, data) {
//       if (err) {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.write('Error 404: Resource not found.');
//         console.log(err);
//       } else {
//         res.writeHead(200, {'Content-Type': 'text/css'});
//         res.write(data);
//       }
//       res.end();
//     });
//   } else {
//     fs.readFile(__dirname + '/public/index.html', function (err, data) {
//       if (err) {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.write('Error 404: Resource not found.');
//         console.log(err);
//       } else {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//       }
//       res.end();
//     });
//   }
// }).listen(port, '0.0.0.0', () => {
//     console.log('Server is running http://localhost:' + port);
// });
