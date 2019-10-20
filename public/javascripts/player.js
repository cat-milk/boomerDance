let audioOb = document.getElementById('audioPlayer');
let playButton = document.getElementById('playButton');
let backButton = document.getElementById('backButton');
let forwardButton = document.getElementById('forwardButton');
let trackList = {};
let recivedTrackList = false;
let currentTrack=0;

fetch('/trackList').then((responce)=>{
    return responce.json();
}).then((data)=>{
    trackList = data.trackList;
    recivedTrackList = true;
}).catch(err => {
    console.log(err);
})

;

if(audioOb.paused){
    playButton.src = './images/play.svg';
}

playButton.addEventListener('click', (e) => {
    if(audioOb.paused){
        audioOb.play();
        playButton.src = './images/pause.svg';
    }else{
        audioOb.pause();
        playButton.src = './images/play.svg';
    }
});

setInterval(() => {console.log(currentTrack)},500);

forwardButton.addEventListener('click',()=>{
    if(currentTrack===trackList.length-1){
        currentTrack = 0;
    }else{
        currentTrack++ ;
    }
    console.log(`Forwards clicked: ${currentTrack}`);
    audioOb.pause();
    audioOb.src=`./Audio/${trackList[currentTrack]}`;
    let trackName = trackList[currentTrack].slice(0, trackList.length-8);
    trackName = trackName.replace("_", " ");
    document.getElementById('trackName').innerHTML=trackName;
    audioOb.play();
});


backButton.addEventListener('click',()=>{
    if(currentTrack===0) {
        currentTrack = trackList.length-1
    }else{
        currentTrack--;
    }
    console.log(`Backwards clicked: ${currentTrack}`);
    audioOb.pause();
    audioOb.src=`./Audio/${trackList[currentTrack]}`;
    let trackName = trackList[currentTrack].slice(0, trackList.length-8);
    trackName = trackName.replace("_", " ");
    document.getElementById('trackName').innerHTML=trackName;
    audioOb.play();
});
