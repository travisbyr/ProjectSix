// DOM selectors
const musicContainer = document.getElementById('musicContainer')

const playBtn  = document.getElementById('play')
const prevBtn  = document.getElementById('prev')
const nextBtn  = document.getElementById('next')

const audio    = document.getElementById('audio')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')

const title = document.getElementById('title')
const cover = document.getElementById('cover')

// Songs title array
const songs = {'blue-reeves', 'slow-snow', 'the-roads'}

//Keep track of songs
let songIndex = 2;

// Add song details into DOM
loadSong(songs{songIndex})

// Update song details
function loadSong(song) {
    title.innerText = song
    audio.src = `../assets/audio/${song}.mp3`
    cover.src = `../assets/images/${song}.jpg`
}

// Play song
function playSong() {
    musicContainer.classList.add(`play`)
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

// Pause song
function pauseSong() {
    musicContainer.classList.remove(`play`)
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

// Prev song
function prevSong() {
    songIndex--

    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songList])

    playSong()
}

// Next song
function nextSong() {
    songIndex++

    if(songIndex > song.length) {
        songIndex = 0
    }
    loadSong(songs[songIndex])

    playSong()
}

// Update progress bar
function updateProgress(e) {
    const {duration, currentTIme} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}