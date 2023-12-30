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