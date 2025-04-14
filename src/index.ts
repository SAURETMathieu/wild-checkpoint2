import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import "reflect-metadata";
import { AppDataSource } from "./config/db";
import { getSchema } from "./schema";

const port = 4000;

const initialize = async () => {
  const schema = await getSchema();

  const server = new ApolloServer({
    schema,
  });

  await AppDataSource.initialize();

  const { url } = await startStandaloneServer(server, {
    listen: { port },
  });

  console.log(`🚀 Server ready at ${url} 🚀`);
};

initialize().catch((err) => {
  console.error(err);
});
