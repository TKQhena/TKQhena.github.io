
var typed = new Typed(".auto-type", {
  strings: [
    "Software Developer",
    "Front-end Developer",
    "Back-end Developer",
    "Fullstack Developer",
    "Game Developer",
  ],
  typeSpeed: 40,
  backSpeed: 40,
  loop: true,
});



window.onscroll = function () {
  getSticky();
};

var nav = document.getElementById("navbar");

var sticky = nav.offsetTop;

function getSticky() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  })
})
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=>observer.observe(el));


window.addEventListener("load", (e) => {
  const Skills = document.getElementById("btnSkills");
  const Interests = document.getElementById("btnInterests");
  const activeContent = document.getElementById("inputText");
  activeContent.innerHTML = `<div class="row" id="activeText">
          <div class="col-sm-6">
           <h5 class="skill">C#</h5>
          <div class="progress">
            <div class="progress-bar" style="width: 85%">85%</div>
          </div>
          <h5 class="skill">SQL</h5>
          <div class="progress">
            <div class="progress-bar" style="width: 80%">80%</div>
          </div>
          <h5 class="skill">HTML</h5>
          <div class="progress">
            <div class="progress-bar" style="width: 95%">95%</div>
          </div>
          <h5 class="skill">Photoshop</h5>
          <div class="progress">
            <div class="progress-bar" style="width: 40%">40%</div>
          </div>
        </div>
         <div class="col-sm-6">
           <h5 class="skill">CSS</h5>
          <div class="progress">
            <div class="progress-bar" style="width: 90%">90%</div>
          </div>
          <h5 class="skill">Javascript</h5>
          <div class="progress">
            <div class="progress-bar" style="width: 70%">70%</div>
          </div>
          <h5 class="skill">C++</h5>
          <div class="progress">
            <div class="progress-bar" style="width: 60%">60%</div>
          </div>
          <h5 class="skill">Animation</h5>
          <div class="progress">
            <div class="progress-bar" style="width: 30%">30%</div>
          </div>
        </div>
        </div>`;
    Skills.classList.add("active");

  Skills.addEventListener("click", (e) => {
    const currentText = document.getElementById("activeText");
    activeContent.removeChild(currentText);
    activeContent.innerHTML = `<div class="row" id="activeText">
          <div class="col-sm-6">
           <h5 class="skill">C#</h5>
          <div class="progress">
            <div class="progress-bar" style="width: 85%">85%</div>
          </div>
          <h5 class="skill">SQL</h5>
          <div class="progress">
            <div class="progress-bar" style="width: 80%">80%</div>
          </div>
          <h5 class="skill">HTML</h5>
          <div class="progress">
            <div class="progress-bar" style="width: 95%">95%</div>
          </div>
          <h5 class="skill">Photoshop</h5>
          <div class="progress">
            <div class="progress-bar" style="width: 40%">40%</div>
          </div>
        </div>
         <div class="col-sm-6">
           <h5 class="skill">CSS</h5>
          <div class="progress">
            <div class="progress-bar" style="width: 90%">90%</div>
          </div>
          <h5 class="skill">Javascript</h5>
          <div class="progress">
            <div class="progress-bar" style="width: 70%">70%</div>
          </div>
          <h5 class="skill">C++</h5>
          <div class="progress">
            <div class="progress-bar" style="width: 60%">60%</div>
          </div>
          <h5 class="skill">Animation</h5>
          <div class="progress">
            <div class="progress-bar" style="width: 30%">30%</div>
          </div>
        </div>
        </div>`;
    Skills.classList.add("active");
    Interests.classList.remove("active");
  });

  Interests.addEventListener('click',(e)=>{
    let currentText = document.getElementById("activeText");
    activeContent.removeChild(currentText);
    activeContent.innerHTML = `<div class="row container-fluid justify-content-around" id="activeText">
              <div class="card bg-dark" style="width: 18rem">
              <img src="Components/Images/ping-pong.JPG" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Ping-Pong</h5>
                <p class="card-text">
                  A simple Ping-Pong game coded in Javascript and first project coded in the language
                </p>
                <a href="#" class="btn btn-primary">View on GitHub</a>
              </div>
            </div>
            <div class="card bg-dark" style="width: 18rem">
              <img src="Components/Images/To-do.JPG" class="card-img-top" alt="to-do list" />
              <div class="card-body">
                <h5 class="card-title">To-do List</h5>
                <p class="card-text">
                  Javascript to-do list as an introduction to event listeners in Javascript
                </p>
                <a href="https://github.com/TKQhena/To-do-list" class="btn btn-primary">View on GitHub</a>
              </div>
            </div>
            </div>`;
    Skills.classList.remove("active")
    Interests.classList.add("active")

  })
});

