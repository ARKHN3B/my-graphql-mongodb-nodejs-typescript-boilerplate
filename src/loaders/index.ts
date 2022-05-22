import mongooseLoader from "./mongoose";

type LoaderExportType = {
  init: () => void
}

async function init(this: LoaderExportType) {
  await mongooseLoader();
  console.log("MongoDB Initialized");
}

export default {
  init,
};
