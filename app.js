
let sideBarOpen = false;
let sideBar = document.querySelector(".side-bar");


const OpenSideBar = () => {
  if (!sideBarOpen) {
    sideBarOpen = true;
    sideBar.classList.add('side-bar-responsive');
  }
};

const CloseSideBar = () => {
  if (sideBarOpen) {
    sideBarOpen = false;
    sideBar.classList.remove('side-bar-responsive');
  }
};

const currDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const arrowIcon = document.querySelectorAll(".icons span");


let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
  currDate.innerText = `${months[currMonth]}, ${currYear}`;
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateofMonth = new Date(currYear, currMonth+1, 0).getDate();
  let lastDayofMonth = new Date(currYear, currMonth+1, 0).getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

  let liTag = "";

  for(let i = firstDayofMonth; i > 0 ; i--) {
    liTag += `<li class="inactive"> ${lastDateofLastMonth-i+1}</li>`;
  }

  for(let i = 1; i <= lastDateofMonth; i++) {
    let isToday = "";
    if (i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear()) {
        isToday = "active";
    } else {
        isToday = "";
    }
        liTag += `<li class="${isToday}">${i}</li>`;
  }

  let j =1;

  for(let i = lastDayofMonth+1; i <= 6; i++) {
    liTag += `<li class="inactive"> ${j}</li>`;
    j++;
}
  daysTag.innerHTML = liTag;
};

renderCalendar();

arrowIcon.forEach(icon => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if(currMonth < 0 || currMonth > 11){
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();

    }

    renderCalendar();

  });

});

const todayDateElement = document.getElementById("today-date");

const currentDate = new Date();

const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});

todayDateElement.textContent = formattedDate;


let inputTask = document.querySelector("#input-task");
let list = document.querySelector("#list");

inputTask.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addItem(inputTask.value);
    inputTask.value = "";
  }
});

let addItem = (task) => {
  let listItem = document.createElement("li");
  listItem.innerText = task;

  listItem.addEventListener("click", (e) => {
    listItem.classList.toggle("done");
  });

  list.appendChild(listItem);
};

