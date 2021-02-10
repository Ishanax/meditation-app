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
      song.play()
    });

};


app();