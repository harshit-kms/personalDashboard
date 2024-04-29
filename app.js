
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

let searchBar = document.querySelector("#input-search");

searchBar.addEventListener("click", (e) => {
  searchBar.value = "";
});



