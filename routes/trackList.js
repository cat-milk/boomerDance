let express = require('express');
let router = express.Router();
let fs = require('fs');
//request at /trackList
router.get('/', function(req, res, next) {
    let trackList = fs.readdirSync('./public/Audio');
    console.log(trackList);
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({trackList:trackList}));
});

function getTrackList(){
    let songArray = [];
    fs.readdir('./public/Audio', (err, data)=>{
        if (err) throw err;
        songArray.push(data);
    });
    return songArray;
}

module.exports = router;