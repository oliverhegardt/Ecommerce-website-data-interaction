//require express library

//create express server

//require all the librarys I need
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

// here I configure my dotenv so I can use my env file.

dotenv.config();
//here I connect to my mongoDB, password and DB name
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successful!"))
    .catch((error) => {
        console.log(error);
    });
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});
