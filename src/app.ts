import "dotenv/config";

import loaders from "./loaders";
import server  from "./server";

/**
 * Start the node process
 */
async function run() {
  await loaders.init();

  server.listen({port: 4000})
    .then(({url}) => {
      console.log(`🚀 Server ready at ${url}`);
    })
    .catch(console.error);
}

run();
