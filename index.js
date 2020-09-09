const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolvers");
require("dotenv").config({ path: ".env" });



mongoose.connect(
    process.env.BBDD,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    },
    (err, _) => {
      if (err) {
        console.log("Error de conexion");
      } else {
        server();
      }
    }
  );
  function server() {
    const serverApollo = new ApolloServer({
      typeDefs,
      resolvers,
    });

    serverApollo.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
        console.log("###############################");
        console.log(`Servidor listo en la url ${url}`);
        console.log("###############################");
      });
}