const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "My SpellBook API",
    description: "An API that stores spells for a TTRPG",
  },
  host: "localhost:4000",
  schemes: ["https"],
};

const outputfile = "./swagger.json";
const endpointFiles = ["./server/routes/index.js"];

// Run to
swaggerAutogen(outputfile, endpointFiles, doc);

// Generates the swagger.json file
swaggerAutogen(outputfile, endpointFiles, doc).then(async () => {
  await import("./app.js");
});
