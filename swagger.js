const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "My SpellBook API",
    description: "An API that stores spells for a TTRPG",
  },
  host: "https://cadrian-spellbooks-project.onrender.com",
  schemes: ["http"],
};

const outputfile = "./swagger.json";
const endpointFiles = ["./server/routes/index.js"];

// Run to
swaggerAutogen(outputfile, endpointFiles, doc);

// Generates the swagger.json file
swaggerAutogen(outputfile, endpointFiles, doc).then(async () => {
  await import("./app.js");
});
