// DOM selectors
const musicContainer = document.getElementById("music-container")
const playBtn = document.getElementById('play')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const audio = document.getElementById('audio')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')
const title = document.getElementById('title')
const cover = document.getElementById('cover')
// Song title array
const songs = ['blue-reeves', 'slow-snow', 'the-roads']
// Test auto indexer
// let songsAuto = []
// let fs = require('fs')
// fs.readdirSync('../assets/audio/').forEach( elm => {
//     songsAuto.push(elm)
// })
// Keep track of songs
let songIndex = 2
// Load song details into DOM
loadSong(songs[songIndex])
// Update song details 
function loadSong(song) {
    title.innerText = song
    audio.src = `../assets/audio/${song}.mp3`
    cover.src = `../assets/images/${song}.jpg`
}
// Play song 
function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.replace('fa-play', 'fa-pause')
    audio.play()
}
// Pasue song
function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.replace('fa-pause', 'fa-play')
    audio.pause()
}
// Prev song
function prevSong() {
    songIndex--
    if(songIndex < 0){
        songIndex = songs.length -1
    }
    loadSong(songs[songIndex])
    playSong()
}
// Next song
function nextSong() {
    songIndex++
    if(songIndex >= songs.length) {
        songIndex = 0
    }
    loadSong(songs[songIndex])
    playSong()
}
// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}
// Set progress bar
function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration    
}
// Event Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')
    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})
// Prev/Next song
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)
// Time update event
audio.addEventListener('timeupdate', updateProgress)
// Set song time
progressContainer.addEventListener('click', setProgress)
// Song end
audio.addEventListener('ended', nextSong)