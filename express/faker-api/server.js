const { faker } = require('@faker-js/faker');

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomPhoneNumber = faker.phone.phoneNumber(); // (279) 329-8663 x30233

const express = require("express");
const app = express();
const port = 8000;



class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.phoneNumber = faker.phone.phoneNumber();
        this.idx = faker.datatype.uuid();
    }
}

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.Address = {
            "street": faker.address.streetName(),
            "city": faker.address.cityName(),
            "state": faker.address.state(),
            "zipCode": faker.address.zipCode(),
            "country": faker.address.countryCode(),
        }
        this.idx = faker.internet.email();
    }
}

// api endpoints --> http://localhost:8000/api/
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});


app.get("/api/users/new", (req, res) => {
    let newUser = new User();
    res.json({ newUser })
})

app.get("/api/company/new", (req, res) => {
    let newCompany = new Company();
    res.json({ newCompany })
})

app.get("/api/users/company", (req, res) => {
    let newUser = new User();
    let newCompany = new Company();
    res.json({results: newUser, newCompany })
})

app.listen(port, () => console.log(`Listening on port: ${port}`));