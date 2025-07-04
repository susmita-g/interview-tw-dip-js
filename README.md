# Data Transformation Exercises
This repository contains **two exercises** designed to evaluate your ability to:
- Transform and validate JSON data against a schema
- Extract and flatten fields from nested objects
- Write clean, testable JavaScript code

---

## ✅ Prerequisites
Make sure you have **Node.js** and **npm** installed on your machine.

---

### Folder Structure
├── input.js            # Provided input object
├── schema.js           # Avro schema for validation
├── transform.js        # Write your transformation logic here
├── transform.test.js   # Write test cases here
├── index.js            # Entry point to run transformation and schema validation

---

# 🧪 Exercise 1: Schema-Based Transformation

### 📋 Objective

Transform an input object to match a specific **Avro schema**. Your output will be validated against the schema.

## ✅ Tasks
- Read the input1 from `input.js`
- Write transformation logic in `transform.js`
- Output must match `schema.js`
- Optional: Write test cases in `transform.test.js`


---


# Exercise 2: Flatten the Nested JSON

### 📋 Objective

Transform the given input object into the expected output as shown below.

## ✅ Tasks
- Read the input2 from `input.js`
- Write transformation logic in `flatten.js`
- Optional: Write test cases in `flatten.test.js`

## Expecte Output:
{
  engine: "2.0L Turbo",
  fuel: "Gasoline",
  features: "Sunroof|Leather Seats|Keyless Entry",
  retail_price: "23000"
};


---


## Run the code
```bash
npm install
npm run start     # Runs index.js and validates your output
npm test          # Runs test cases (if any)

--
