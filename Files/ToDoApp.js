
const inputTxt = document.querySelector("#inputTxt");
const addBtn = document.querySelector(".inputField button");
const toDolist = document.querySelector(".todolist");
const allClear = document.querySelector(".footer button");


inputTxt.onkeyup = () => {
    let userInputValue = inputTxt.value;
    if (userInputValue != "") {
        addBtn.classList.add("active")
    } else {
        addBtn.classList.remove("active")
    }
}
showTasks();

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
        addTastToList();
    }
})

addBtn.addEventListener("click", addTastToList)

function addTastToList() {
    let userInputValue = inputTxt.value;
    let getLocalStorageData = localStorage.getItem("New ToDo");
    let listArray;
    if (getLocalStorageData == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData)
    }
    listArray.push(userInputValue);
    localStorage.setItem("New ToDo", JSON.stringify(listArray))
    addBtn.classList.remove("active")
    showTasks();
}

function showTasks() {
    let getLocalStorageData = localStorage.getItem("New ToDo");
    let listArray;
    if (getLocalStorageData == null) {
        listArray = [];
    } else {
        listArray = JSON.parse(getLocalStorageData)
    }
    const pendingtask = document.querySelector(".pendingTasks")
    pendingtask.innerHTML = listArray.length + " ";
    if (listArray.length > 0) {
        allClear.classList.add("active")
    } else {
        allClear.classList.remove("active")
    }

    let newLiTag = "";
    listArray.forEach((element, index) => {
        newLiTag += `<li> ${element} <span class="icon" onclick="taskDeleteBtn(${index})"><i class="fas fa-trash"></i></span></li>`
    });
    toDolist.innerHTML = newLiTag;
    inputTxt.value = "";
}

function taskDeleteBtn(index) {
    let getLocalStorageData = localStorage.getItem("New ToDo");
    listArray = JSON.parse(getLocalStorageData)
    listArray.splice(index, 1)
    localStorage.setItem("New ToDo", JSON.stringify(listArray))
    showTasks();
}

allClear.addEventListener("click", () => {
    listArray = [];
    localStorage.setItem("New ToDo", JSON.stringify(listArray))
    showTasks();

})



















// const inputBox = document.querySelector(".inputField input");
// const inputBtn = document.querySelector(".inputField button");
// const todoList = document.querySelector(".todolist");
// const allClear = document.querySelector(".footer button");
// // console.log(allClear)

// inputBox.onkeyup = () => {
//     let userEnteredValue = inputBox.value;
//     if (userEnteredValue.trim() != "") {
//         inputBtn.classList.add("active")
//     } else {
//         inputBtn.classList.remove("active")
//     }
// }

// // localStorage.setItem("name", "Kashif")
// showTasks();
// inputBtn.addEventListener("click", function () {
//     // console.log("Kashif")
//     let userEnteredValue = inputBox.value;
//     let getLocalStorageData = localStorage.getItem("New ToDo");
//     if (getLocalStorageData === null) {
//         listArr = [];
//     } else {
//         listArr = JSON.parse(getLocalStorageData)
//     }
//     listArr.push(userEnteredValue);
//     localStorage.setItem("New ToDo", JSON.stringify(listArr));
//     showTasks();
//     inputBtn.classList.remove("avtive")
// })

// function showTasks() {
//     // let userEnteredValue = inputBox.value;
//     let getLocalStorageData = localStorage.getItem("New ToDo");
//     if (getLocalStorageData === null) {
//         listArr = [];
//     } else {
//         listArr = JSON.parse(getLocalStorageData)
//     }
//     const pendingTasks = document.querySelector(".pendingTasks");
//     pendingTasks.textContent = listArr.length + " ";
//     if (listArr.length > 0) {
//         allClear.classList.add("active")
//     } else {
//         allClear.classList.remove("active")
//     }
//     let newLiTag = "";
//     listArr.forEach((element, index) => {
//         newLiTag += `<li>${element} <span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`
//     });
//     todoList.innerHTML = newLiTag;
//     inputBox.value = ""
// }

// function deleteTask(index) {
//     let getLocalStorageData = localStorage.getItem("New ToDo");
//     listArr = JSON.parse(getLocalStorageData)
//     listArr.splice(index, 1)
//     localStorage.setItem("New ToDo", JSON.stringify(listArr));
//     showTasks();
// }

// allClear.addEventListener("click", function () {
//     listArr = [];
//     localStorage.setItem("New ToDo", JSON.stringify(listArr));
//     showTasks();
// })