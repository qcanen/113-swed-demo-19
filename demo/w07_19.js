const p =document.querySelector('.show-classdemo')
console.log('show-classdemo',p);


function showDemo(item) {
switch(item){
  case 'w02_intro_19':
    p.innerHTML =`<iframe src='./w02_intro_19/index.html
    ' width="100%" height="100%" />`
  break
  case 'w03_card_19':
    p.innerHTML =`<iframe src='./w03_card_19/
    ' width="100%" height="100%" />`
  break
case 'w06_blog_19':
  p.innerHTML =`<iframe src='./w06_blog_19/
  ' width="100%" height="100%" />`
  break
}

}