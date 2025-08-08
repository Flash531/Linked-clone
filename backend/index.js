const express = require('express');
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();
require('./connection');
const app = express();

app.use(express.json());
app.use(cookieParser());
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.get('/',(req,res) => {
    res.send({
        message:"  a backend server,  ON PORT 4000"
    })
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});
