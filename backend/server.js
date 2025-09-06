const express = require ("express");
const mongoose = require ("mongoose");
const cors = require ("cors");


const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(  ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB Connection error:", err));


app.listen(5000, () => {
    console.log("🚀 server running on port ~ 5000")

})