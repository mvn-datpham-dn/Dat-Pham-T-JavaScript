const USER_KEY = 'users'
let user_id = 0;

let btn = document.getElementById("btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
btn.onclick = function() {
    sidebar.classList.toggle("active");
}
searchBtn.onclick = function() {
    sidebar.classList.toggle("active");
}