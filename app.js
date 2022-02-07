// local reviews data
const reviews = [
    {
      id: 1,
      name: "jack sparrow",
      job: "web developer",
      img:"avatar-2.png",
      text:
       "Change the world by being yourself."
    },
    {
      id: 2,
      name: "Barbosa",
      job: "web designer",
      img:
      "avatar-3.png",
      text:"Every moment is a fresh beginning"   
     },
    {
      id: 3,
      name: "Jhon smith",
      job: "intern",
      img:
      "avatar-4.jpg",
      text:"Whatever you do, do it well. "
    },
    {
      id: 4,
      name: "Leonardo ",
      job: "the boss",
      img:
      "avatar.jpg",
      text:"Die with memories, not dreams"
    },
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });
  