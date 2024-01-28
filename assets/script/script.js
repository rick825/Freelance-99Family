window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  console.log("running fixed");
  var nav = document.querySelector('.nav');
  var topnav = document.querySelector('.navtop');

  if (document.body.scrollTop > 85 || document.documentElement.scrollTop > 85) {
       topnav.classList.add('navtophide');
  } else {
       topnav.classList.remove('navtophide');
  }
}



const navshow = () =>{
  //console.log("nav show");
  const ham = document.querySelector('.ham');
  const navbot = document.querySelector('.navbot');

  ham.addEventListener('click',()=>{
    console.log('Shownav-->')
   navbot.classList.toggle('navbotshow');
  });
}


navshow();


const addressshow = () =>{
  const changebutton  = document.querySelector('.change-deliver-to');
  const addressbox = document.querySelector('.address-model');
  const cross = document.querySelector('.cross');

  changebutton.addEventListener('click',()=>{
    addressbox.classList.add('address-model-show');
  })

  cross.addEventListener('click',()=>{
    addressbox.classList.remove('address-model-show');
  })
}

addressshow();