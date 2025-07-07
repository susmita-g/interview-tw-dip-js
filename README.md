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
├── input.js                # Provided input object
├── schema.js               # Avro schema for validation (Exercise 1)
├── transform.js            # Write your transformation logic here (Exercise 1)
├── test_transform.test.js  # Write test cases here
├── flatten.js              # Write your flattening logic here (Exercise 2)
├── index.js                # Entry point to run transformation and schema validation

---

# 🧪 Exercise 1: Schema-Based Transformation

### 📋 Objective

Return data for totalPrice (price+fee), certified, contactID, fullName, isPerson
Transform input1 from **input.js** to match the schema in **schema.js**. Your output will be validated against the avro schema.

## ✅ Tasks
- Read the input1 from `input.js`
- Write transformation logic in `transform.js`
- Output must match `schema.js`
- Write test cases in `test_transform.test.js`


---


# Exercise 2: Flatten the Nested JSON

### 📋 Objective

Transform the given input object into the expected output as shown below.

## ✅ Tasks
- Read the input2 from `input.js`
- Write transformation logic in `flatten.js`
- Write test cases in `test_flatten.test.js`

## Expected Output:
{
  engine: "2.0L Turbo",
  fuel: "Gasoline",
  features: "Sunroof|Leather Seats|Keyless Entry",
  retail_price: "23000"
};


---


## Run the code
```bash
npm install       # Install dependecies
npm run start     # Runs index.js and validates your output
npm test          # Runs test cases (if any)

--
