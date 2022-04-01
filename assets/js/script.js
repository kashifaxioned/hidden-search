/* Author: 

*/

let searchBtn = document.querySelector(".search-btn");
let searchInp = document.querySelector(".hide-inp");

searchBtn.addEventListener("click", handleCLick)

function handleCLick() {
  searchInp.className = "show-inp";
  searchBtn.classList.add("slide-btn")
}























