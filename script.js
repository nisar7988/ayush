
const flex = document.querySelector('.flex')
const flexChild = flex.children
flexChild[1].addEventListener("click", () => {
    flexChild[1].classList.add('post-hover')
    flexChild[0].classList.remove('post-hover')

})
flexChild[0].addEventListener("click", () => {
    flexChild[0].classList.add('post-hover')
    flexChild[1].classList.remove('post-hover')

})


document.querySelector('#more').addEventListener('click',()=>{
   document.querySelector('.aside').classList.toggle('visib')
})




window.onload = function () {
    setTimeout(()=>{
  
        document.querySelector('.load').classList.add('visib')
window.screenTop(0)
    },2000)
  
   
  }

  

