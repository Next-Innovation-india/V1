let index = 1;
const container=document.getElementById('slider')

document.querySelector(".mob").addEventListener("click", (e) => {
  slider(e, ".main-scene__image.desktop img");
});
document.addEventListener("DOMContentLoaded", () => {
  autoSlider(".main-scene__image.desktop img");
});
document.querySelector(".mob").addEventListener("click", (e) => {
    slider(e, ".main-scene__image.mob img");
});
document.addEventListener("DOMContentLoaded", () => {
    autoSlider(".main-scene__image.mob img");
});


function autoSlider(img) {
  
 console.log(container);

  let image = document.querySelectorAll(img);
  let animation = document.querySelectorAll(".slide");

  animation.forEach((elem) => {
    elem.classList.remove("slide");
  });

  for (let i = 0; i < image.length; i++) {
    const element = image[i];

setTimeout(() => {
  element.classList.add('slide')
  container.className=container.className.replace('slide','')
  container.classList.add('slide')
}, 100);
    element.style.display = "none";
  }




  index++;

  if (index < 1) {
    index = image.length;
  } else if (index > image.length) {
    index = 1;
  }
  image[index - 1].style.display = "block";
  setTimeout(() => {
    autoSlider(img);
  }, 10000);
}



function dotSlides(id) {
    let image = document.querySelectorAll(".main-scene__image.desktop img");
    console.log(image);
    for (let i = 0; i < image.length; i++) {
        const element = image[i];
        element.style.display = "none";
      }
      index=id
      image[index].style.display = "block";


      container.className=container.className.replace('slide','')

  setTimeout(() => {
    container.classList.add('slide')
  }, 100);
  }



function slider(e, img) {
  let image = document.querySelectorAll(img);


  for (let i = 0; i < image.length; i++) {
    const element = image[i];
    element.style.display = "none";
  }
  if (e.target.classList.contains("prev")) {
    console.log("prev");
    index--;
  } else if (e.target.classList.contains("next")) {
    index++;
  }

  if (index < 1) {
    index = image.length;
  } else if (index > image.length) {
    index = 1;
  }
  container.className=container.className.replace('slide','')

  setTimeout(() => {
    container.classList.add('slide')
  }, 100);
  image[index - 1].style.display = "block";
  
  console.log(index);
}
