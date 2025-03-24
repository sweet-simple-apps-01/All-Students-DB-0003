// for index file

const searchRoll = document.querySelector("#searchRoll");
const form = document.querySelector(".form");
const SearchImg = document.querySelector(".SearchImg");
const BackImg = document.querySelector(".BackImg");
const CrossImg = document.querySelector(".CrossImg");





SearchImg.addEventListener("click" , ()=>{
    form.classList.add("extend");
    SearchImg.style.display = "none"
    BackImg.style.display = "inline"
})

BackImg.addEventListener("click" , ()=>{
    SearchImg.style.display = "inline-block"
    BackImg.style.display = "none"
    form.classList.remove("extend");
})

function isSearch(){
    if(searchRoll.value) CrossImg.style.display = "inline-block"
    else CrossImg.style.display = "none"
}

CrossImg.addEventListener("click" , ()=> {
    searchRoll.value = "";
    CrossImg.style.display = "none"
})