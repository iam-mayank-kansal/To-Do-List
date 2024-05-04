// const user_work = document.querySelector(".search_icon_1");
// const add_btn = document.querySelector(".search_icon_2");
// let left_items = document.querySelectorAll(".items_left")
// const left_item_div = document.querySelector(".second_level_left");
// const right = document.querySelectorAll(".rights");
// const wrong = document.querySelectorAll(".wrongs");
// const deletes = document.querySelectorAll(".deletes");
// const completed_div = document.querySelector(".completed_items");
// const completed_div_items = document.querySelector(".completed_items h3");
// const rejected_div = document.querySelector(".rejected_items");
// const rejected_div_items = document.querySelector(".rejected_items h3");
// let clone_of_div;
// let clone_completed;
// let clone_rejected;
// let counting = 1;
// let user_input;

// add_btn.addEventListener("click", () => {
//     user_input = user_work.value.trim();
//     if (user_input != "") {
//         clone_of_div = left_items[0].cloneNode(true);
//         clone_of_div.childNodes[1].innerHTML = counting + ". ";
//         clone_of_div.childNodes[3].innerHTML = user_input;
//         user_work.value = "";
//         clone_of_div.setAttribute("style", "display:flex");
//         left_item_div.appendChild(clone_of_div);
//         counting++;
//         // console.log(left_item_div.childNodes);
//         // console.log(left_item_div.childNodes.length);
//         left_items = document.querySelectorAll(".items_left");
//         left_items.forEach((box, x) => {
//             box.childNodes[5].childNodes[5].addEventListener("click", () => {
//                 box.setAttribute("style", "display:none");
//             });
//             box.childNodes[5].childNodes[1].addEventListener("click", () => {
//                 box.setAttribute("style", "display:none");
//                 clone_completed = completed_div_items[0].cloneNode(true);
//                 clone_completed.innerHTML = box.childNodes[3].innerHTML;
//                 console.log(clone_completed);
//                 completed_div.appendChild(clone_completed);
//             });
//             box.childNodes[5].childNodes[3].addEventListener("click", () => {
//                 box.setAttribute("style", "display:none");
//                 clone_rejected = rejected_div_items[0].cloneNode(true);
//                 clone_rejected.innerHTML = box.childNodes[3].innerHTML;
//                 rejected_div.appendChild(clone_rejected);
//             });
//         });
//     };
// });


// window.addEventListener("keydown", (event) => {
//     if (event.code == "Enter") {
//         user_input = user_work.value.trim();
//         if (user_input != "") {
//             clone_of_div = left_items[0].cloneNode(true);
//             clone_of_div.childNodes[1].innerHTML = counting + ". ";
//             clone_of_div.childNodes[3].innerHTML = user_input;
//             user_work.value = "";
//             clone_of_div.setAttribute("style", "display:flex");
//             left_item_div.appendChild(clone_of_div);
//             counting++;
//             left_items = document.querySelectorAll(".items_left");
//             left_items.forEach((box, x) => {
//                 box.childNodes[5].childNodes[5].addEventListener("click", () => {
//                     box.setAttribute("style", "display:none");
//                 });
//                 box.childNodes[5].childNodes[1].addEventListener("click", () => {
//                     box.setAttribute("style", "display:none");
//                     clone_completed = completed_div_items.cloneNode(true);
//                     clone_completed.innerHTML = box.childNodes[3].innerHTML;
//                     console.log(clone_completed);

//                 });
//                 box.childNodes[5].childNodes[3].addEventListener("click", () => {
//                     box.setAttribute("style", "display:none");
//                     clone_rejected = rejected_div_items.cloneNode(true);
//                     console.log(clone_rejected)
//                     clone_rejected.innerHTML = box.childNodes[3].innerHTML;
//                     rejected_div.appendChild(clone_rejected);
//                 });

//             });
//         };
//     }
// })












// new
const user_work = document.querySelector(".search_icon_1");
const add_btn = document.querySelector(".search_icon_2");
let left_items = document.querySelectorAll(".items_left")
const left_item_div = document.querySelector(".second_level_left");
const right = document.querySelectorAll(".rights");
const wrong = document.querySelectorAll(".wrongs");
const deletes = document.querySelectorAll(".deletes");
const completed_div = document.querySelector(".completed_items");
const completed_div_items = document.querySelector(".completed_items h3");
const rejected_div = document.querySelector(".rejected_items");
const rejected_div_items = document.querySelector(".rejected_items h3");
let clone_of_div;
let clone_completed;
let clone_rejected;
let counting = 1;
let user_input;
// left_item_div.innerHTML=localStorage.getItem("key");




// Function to remove event listeners
function removeEventListeners(box) {
    box.childNodes[5].childNodes[5].removeEventListener("click", deleteItem);
    box.childNodes[5].childNodes[1].removeEventListener("click", completeItem);
    box.childNodes[5].childNodes[3].removeEventListener("click", rejectItem);
}

// Function to add event listeners
function addEventListeners(box) {
    box.childNodes[5].childNodes[5].addEventListener("click", deleteItem);
    box.childNodes[5].childNodes[1].addEventListener("click", completeItem);
    box.childNodes[5].childNodes[3].addEventListener("click", rejectItem);
}

// Event listener functions
function deleteItem() {
    this.parentElement.parentElement.style.display = "none";
}

function completeItem() {
    let clone_completed = completed_div_items.cloneNode(true);
    clone_completed.innerHTML = this.parentElement.previousElementSibling.innerHTML;
    completed_div.appendChild(clone_completed);
    this.parentElement.parentElement.style.display = "none";
}

function rejectItem() {
    let clone_rejected = rejected_div_items.cloneNode(true);
    clone_rejected.innerHTML = this.parentElement.previousElementSibling.innerHTML;
    rejected_div.appendChild(clone_rejected);
    this.parentElement.parentElement.style.display = "none";
}

// Add event listener for add button
add_btn.addEventListener("click", () => {
    user_input = user_work.value.trim();
    if (user_input != "") {
        clone_of_div = left_items[0].cloneNode(true);
        clone_of_div.childNodes[1].innerHTML = counting + ". ";
        clone_of_div.childNodes[3].innerHTML = user_input;
        user_work.value = "";
        clone_of_div.setAttribute("style", "display:flex");
        left_item_div.appendChild(clone_of_div);
        counting++;
        left_items = document.querySelectorAll(".items_left");
        left_items.forEach((box) => {
            removeEventListeners(box); // Remove existing event listeners
            addEventListeners(box); // Add new event listeners
        });
        // localStorage.setItem("key",left_item_div.innerHTML);
    }
});

// Add event listener for Enter key
window.addEventListener("keydown", (event) => {
    if (event.code == "Enter") {
        user_input = user_work.value.trim();
        if (user_input != "") {
            clone_of_div = left_items[0].cloneNode(true);
            clone_of_div.childNodes[1].innerHTML = counting + ". ";
            clone_of_div.childNodes[3].innerHTML = user_input;
            user_work.value = "";
            clone_of_div.setAttribute("style", "display:flex");
            left_item_div.appendChild(clone_of_div);
            counting++;
            left_items = document.querySelectorAll(".items_left");
            left_items.forEach((box) => {
                removeEventListeners(box); // Remove existing event listeners
                addEventListeners(box); // Add new event listeners
            });
        // localStorage.setItem("key",left_item_div.innerHTML);

        }
    }
});
