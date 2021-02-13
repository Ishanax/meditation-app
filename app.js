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
  const timeSelect = document.querySelectorAll('.time-select button');
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

  //Select sound
  timeSelect.forEach(option =>{
    option.addEventListener('click', function(){
      fakeDuration = this.getAttribute("data-time");
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration%60)}`; //our minutes

    })
  })

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
      let elapsed = fakeDuration - currentTime;
      let seconds = Math.floor(elapsed % 60); //when the elapsed time gets to sixty it will reset back to 
      let minutes = Math.floor(elapsed / 60);

      //Animate the progress circle
      let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
      outline.style.strokeDashoffset = progress;

      //Animate the text
      timeDisplay.textContent = `${minutes}:${seconds}`;
    };
};


app();