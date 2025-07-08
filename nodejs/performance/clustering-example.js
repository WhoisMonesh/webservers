const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  
  console.log(Master  is running);
  console.log(Forking for  CPUs);
  
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker, code, signal) => {
    console.log(Worker  died);
    cluster.fork(); // Create a new worker
  });
} else {
  // Worker process - create HTTP server
  const http = require('http');
  
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(Hello from worker );
  }).listen(3000);
  
  console.log(Worker  started);
}
