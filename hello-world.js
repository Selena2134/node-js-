console.log('hello world !');

/* tache 02 */

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});


/* tache 03 */

const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err , data) => {
  if (err){
    console.log('error happened ');
  }
  else{
    console.log('File created!');
  }
});

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err){
    console.log('error');
  }
  else{
    console.log(data.toString());
  }
});

