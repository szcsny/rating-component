const firstPage = document.getElementById("first-page");
const secondPage = document.getElementById("second-page");
const submitButton = document.getElementById("submit-button");
const userRating = document.getElementById("user-rating");

let buttons = [];
let showFirstPage = true;
let clickedId = 0;

function togglePages(){
    if(showFirstPage){
        firstPage.style.display = "block";
        secondPage.style.display = "none";
    }
    else {
        firstPage.style.display = "none";
        secondPage.style.display = "flex";
    }
}

togglePages();

for(let i=1; i<=5; i++){
    const button = document.getElementById(`button${i}`);
    buttons.push(button);
}

for(const btn of buttons){
    btn.addEventListener("click", () => {
        btn.classList.add("clicked");
        const id = parseInt(btn.textContent);
        clickedId = id;
        for(const other of buttons){
            if(other !== btn){
                other.classList.remove("clicked");
            }
        }

    })
}

submitButton.addEventListener("click", () => {
    showFirstPage = false;
    togglePages();
    userRating.textContent = clickedId;
})