const express=require("express");
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Pyment");
const courseRoutes = require("./routes/Course");


const database = require("./config/database");
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv');
const cors = require("cors");
const {cloudinaryConnect} = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const bodyparser = require("body-parser");


dotenv.config();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cookieParser());

app.use(
    cors()
)

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp",
    })
)

// cloudinary connection
cloudinaryConnect();

// routes
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/profile",profileRoutes);
app.use("/api/v1/course",courseRoutes);
app.use("/api/v1/payment",paymentRoutes);

// def route
app.get("/",(req, res) => {
    return res.json({
        success:true,
        message:"Your server is up and running....",
    });
});

// const user = require("./routes/User");
// app.use("/api/v1",userRoutes);

app.listen(PORT, ()=>{
    console.log(`App is listening at ${PORT}`);
});

require("./config/database").connect();
