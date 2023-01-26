// Render a h3 tag with id=”h” with text “Please click on the identical tiles to verify that you are not a robot.”
let heading = document.createElement('h3');
heading.setAttribute('id', 'h');
heading.innerHTML = 'Please click on the identical tiles to verify that you are not a robot.';
document.body.prepend(heading);

// created button
let btnArr = ['reset','verify'];
for(let t of btnArr){
  let btn = document.createElement('button');
  btn.setAttribute('id', t);
  btn.innerHTML = t.toUpperCase();
  btn.style.display = 'none'; 
  document.body.append(btn);
}

let imgClass = ['img1', 'img2', 'img3', 'img4', 'img5'];
let randonIndex = Math.floor(Math.random() * imgClass.length); 
let randomImg = imgClass[randonIndex];
//push the random image to the imageClass array
imgClass.push(randomImg);

// shuffle the array - so that the image will generate randomly at each position after reloading the page
let shuffled = imgClass.sort(() => Math.random() - 0.5);

let images = document.querySelectorAll('img');
//setting attribtues - class name to all img
for (let i = 0; i <= images.length-1; i++) {
  images[i].setAttribute('class', imgClass[i]);
  images[i].setAttribute('id', i);
}
// let k = 0;
// for(let t of imageClass){
//   images[k].setAttribute('class', t);
//   k++; 
// }

for(let t of images){
  t.addEventListener('click', userOrRobot)
}
let resetBtn = document.getElementById('reset');
let verifyBtn = document.getElementById('verify');
    let prevImgId = '';
    let count = 0;
    function userOrRobot(e){
      let imgId = e.target.getAttribute('id');
      let imgClass = e.target.getAttribute('class');
      let img = document.getElementById(imgId);
     resetBtn.style.display = 'block';
     let currentImgId = e.target.id;
     //selected - clicked on any image
     if(currentImgId != prevImgId){
      images[currentImgId].classList.add('selected');
      count++;
      prevImgId = currentImgId;
      if(count == 2){
        verifyBtn.style.display = 'block';
      }
     }
    }

  resetBtn.addEventListener('click', ()=>{
  verifyBtn.style.display = 'none';
  resetBtn.style.display = 'none';
  count=0;
  selectedImg = document.querySelectorAll('.selected');
  for(let t of selectedImg){
    t.classList.remove('selected');
  }
  // reset button removes the <p> tag from html
  let p = document.querySelector('p'); 
  p.parentNode.removeChild(p);
  });

  verifyBtn.addEventListener('click', ()=>{
    let para = document.createElement('p');
    selectedImg = document.querySelectorAll('.selected'); 
    let class1 = selectedImg[0].className;
    let class2 = selectedImg[1].className;
    if(class1 == class2){
      para.innerHTML = 'You are a human. Congratulations!';
    }else{
      para.innerHTML = `We can't verify you as a human.`;
    }
    verifyBtn.style.display = 'none';
    document.body.append(para);
  })

