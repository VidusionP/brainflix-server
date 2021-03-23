const express = require('express');
const app = express();
const commentRoutes = require('./comments');
const mainVideo = require('./mainVideo');
const cors = require('cors');

app.use(cors());
app.use(express.json())


app.use("/videos", commentRoutes)

app.use("/videos", mainVideo)

app.listen(8000, () => {
    console.log("Hello Everyone!")
})