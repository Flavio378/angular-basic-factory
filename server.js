const Hapi = require('hapi');
const Path = require('path');

const server = new Hapi.Server();
server.connection({port: 3000});

server.register(require('inert'), (err) => {

  if(err){
    throw err;
  }
  // route for static files
  server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory:{
          path: 'public'
        }
      }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply){
      reply.file('./index.html');
    }
  });

  server.start(function(err){
    if(err){
      throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
  });

});
