var subPic= document.querySelectorAll('.item img')
var mainPic = document.getElementById('mainPic')


// subPic.forEach(el => {
//   el.addEventListener('click', function (e) {
//     var mainSrc = e.target.getAttribute('src')
//     mainPic.setAttribute("src", mainSrc)
//   })

// });




subPic.forEach(element => {
  element.addEventListener('click', function(e){
    var picSrc= this.getAttribute('src')
    mainPic.setAttribute("src", picSrc)


  })
  
});

