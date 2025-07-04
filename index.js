const avro = require("avsc");
const schema = require("./schema");
const { input1 } = require("./input");
const transform = require("./transform");

const type = avro.Type.forSchema(schema);

// ===== TRANSFORM LOGIC STARTS HERE =====
const transformed = transform(input1);




// ===== TRANSFORM LOGIC ENDS HERE =====

// Validate output
const isValid = type.isValid(transformed);
if (isValid) {
  console.log("\n✅ Schema validation passed");
} else {
  console.error("\n❌ Schema validation failed");
}
