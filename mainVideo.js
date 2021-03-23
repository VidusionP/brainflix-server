const express = require('express');
const router = express.Router();
const mainVideo = require('./Data/mainVideo.json')

router.get('/:id', (req,res) => {
    const itemId = req.params.id;
    const item = mainVideo.find(item => item.id === itemId)
    if (item){
        res.json(item)
    } else {
        res.send("Error")
    }
})




module.exports=router