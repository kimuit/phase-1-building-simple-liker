// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


let click = []
document.addEventListener('DOMContentLoaded',()=>{
  let likeIcons = document.querySelectorAll('.like-glyph')
  likeIcons.forEach((icon, sign)=>{
    click.push(false)
    icon.setAttribute('id', `${sign}`)
    icon.addEventListener('click', (event)=>{
      let serverCall = mimicServerCall()
      serverCall.then(()=>{
          let icon = event.target
          let sign = event.target.getAttribute('id')
          let isClicked = click[sign]
          if(isClicked){
            icon.innerHTML = EMPTY_HEART
            click[sign] = false
          }else{
            icon.innerHTML = FULL_HEART
            click[sign] = true
          }
        },
      
        ).catch(
          (error)=> handleError(error)
        )
    })
  })
})
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
