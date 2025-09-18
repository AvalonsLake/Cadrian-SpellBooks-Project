const swaggerAutogen = require("swagger-autogen");

const doc = {
    info: {
        title: "MyStudent API",
        description: "An API That Stores Spell Data for a TTRPG"
    },
    host: "cadrian-spellbooks-project.onrender.com",
    schemes: ["https"],
};

const outputfile = "./swagger.json";
const endpointFiles = ["./server/routes/index.js"];

// Run to
swaggerAutogen(outputfile, endpointFiles, doc);

// Generates the swagger.json file
swaggerAutogen(outputfile, endpointFiles, doc).then(async () => {
    await import("./app.js")
})