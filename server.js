const express = require('express');
const app = express();
const commentRoutes = require('./comments');
const mainVideo = require('./mainVideo');
const cors = require('cors');
const port = process.env.PORT || 8000
app.use(cors());
app.use(express.json())


app.use("/videos", commentRoutes)

app.use("/videos", mainVideo)

app.listen(port, () => console.log('server started on port', port))