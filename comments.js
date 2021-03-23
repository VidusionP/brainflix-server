const express = require('express');
const router = express.Router();
const sideVideo = require('./Data/sideVideo.json')
const mainVideo = require('./Data/mainVideo.json')
const uuid = require('uuid/v4')


router.get ('/', (req,res) => {
    res.json(sideVideo);
})

router.post ('/', (req,res, next) => {
    const { body } = req;
    const titleName = req.body.title
    const descriptionBody = req.body.description
    const randomID = uuid().substr(0, 10)
    const newStudent = {
        id: `${randomID}`,
        title: titleName,
        channel: "Vidu",
        image: "https://i.imgur.com/yFS8EBr.jpg",
        description: descriptionBody,
        views: "1,546,451",
        likes: "120,302",
        duration: "8:36",
        video: "I have no video",
        timestamp: 1547003624000,
        comments: [
            {
                "name": "Micheal Lyons",
                "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
                "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                "likes": 0,
                "timestamp": 1545162149000
            },
            {
                "name": "Gary Wong",
                "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                "likes": 0,
                "timestamp": 1544595784046
            },
            {
                "name": "Theodore Duncan",
                "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
                "likes": 0,
                "timestamp": 1542262984046
            }
        ]
    }
    const newStudentVideo = {
        id: `${randomID}`,
        title: titleName,
        channel: "Vidu",
        image: "https://i.imgur.com/yFS8EBr.jpg",
    }
    sideVideo.push(newStudentVideo)
    mainVideo.push(newStudent)
    res.status(201).json(sideVideo)
    return;
    
})

module.exports=router