const input1 = {
  price: 28995,
  mileage: "47000",
  certified: "yes",
  comments: "",
  buyer: {
    contactID: "A1234",
    firstName: "John",
    lastName: "Doe",
    suffix: "SR",
    isPerson: "Y"
  }
};


const input2 = {
  vehicle: {
    specs: {
      engine: "2.0L Turbo",
      fuel: "Gasoline"
    },
    features: [
      { 
        id: "feature1",
        name: "Sunroof" 
      },
      { 
        id: "feature2",
        name: "Leather Seats" 
      },
      { 
        id: "feature3",
        name: "Keyless Entry" 
      }
    ],
    price: {
      retail: "23000",
      invoice: "21000"
    }
  }
};



module.exports = { input1, input2 };