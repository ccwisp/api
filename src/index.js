const http = require('http');
const server = require('./server');
const { port } = require('./config').server;

async function bootstrap() {
  return http.createServer(server.callback()).listen(port);
}

bootstrap()
  .then(server =>
    console.log(`🚀 Server listening on port ${server.address().port}!`),
  )
  .catch(err => {
    setImmediate(() => {
      console.error('Unable to run the server because of the following error:');
      console.error(err);
      process.exit();
    });
  });
