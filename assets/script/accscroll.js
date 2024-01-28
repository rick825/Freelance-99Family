window.onscroll = function () {
    scrollAcc();
  };


  function scrollAcc() {
    console.log("running fixed");
    var acleft = document.querySelector('.acleftcont');
  
    if (document.body.scrollTop > 380 || document.documentElement.scrollTop > 380) {
         acleft.classList.add('acleftshow');
    } else {
         acleft.classList.remove('acleftshow');
    }
  }