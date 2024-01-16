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