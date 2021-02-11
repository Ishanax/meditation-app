//make arrow function named 'app'
const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video');

  //sounds (make sure to use'ALL' for all buttons)
  const sounds = document.querySelectorAll('.sound-picker button');
  //Time display
  const timeDisplay = document.querySelector('.time-display');
  //Get the lenght of the outline(the blue circle)
  const outlineLength = outline.getTotalLength();
  //Duration
  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  //Play sound function on click button
    play.addEventListener('click', () =>{
      checkPlaying(song);
    });

    // create function to stop and play the sound
    const checkPlaying = song => {
      if(song.paused){
        song.play();
        video.play();
        play.src = './svg/pause.svg';
      }
      else{
        song.pause();
        video.pause();
        play.src = './svg/play.svg'
      }
    };

    //Animate the circle 
      //als long as song keeps going this will update, wills top updating when song stops
    song.ontimeupdate = () =>{
      let currentTime = song.currentTime;
    }
};


app();