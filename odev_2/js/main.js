let todoList = localStorage.getItem("todolist");
let list = document.querySelector("#list");
let toasts = document.querySelectorAll("#liveToast");

// toasts : -->
// NodeList(2)
// 0
// :
// div#liveToast.toast.success.hide
// 1
// :
// div#liveToast.toast.error.hide

if (todoList) {
  list.innerHTML = JSON.parse(todoList);
  // console.log("local storage", list);
}
function checkedItem(item) {
  if (item.classList.contains("checked")) item.classList.remove("checked");
  else item.classList.add("checked");
  localStorage.setItem("todolist", JSON.stringify(list.innerHTML));
}
document.querySelectorAll("#list li").forEach((item) => {
  item.addEventListener("click", () => {
    checkedItem(item);
  });
});

function delElement(li) {
  li.remove();
  localStorage.setItem("todolist", JSON.stringify(list.innerHTML));
}

document.querySelectorAll("#list span").forEach((item) => {
  let li = item.parentNode;
  item.addEventListener("click", () => {
    delElement(li);
  });
});

function newElement() {
  const newLi = document.createElement("li");
  let task = document.querySelector("#task").value.trim();
  if (task) {
    newLi.textContent = task;
    const deleteIcon = document.createElement("span");
    deleteIcon.innerHTML = "X";
    deleteIcon.classList.add("close");

    newLi.appendChild(deleteIcon);
    list.appendChild(newLi);
    // console.log(list);

    localStorage.setItem("todolist", JSON.stringify(list.innerHTML));
    todoList = localStorage.getItem("todolist");
    list = document.querySelector("#list");
    if (todoList) {
      list.innerHTML = JSON.parse(todoList);
      // console.log("local storage", list);
    }

    document.querySelectorAll("#list li").forEach((item) => {
      item.addEventListener("click", () => {
        checkedItem(item);
      });
    });

    document.querySelectorAll("#list span").forEach((item) => {
      let li = item.parentNode;
      item.addEventListener("click", () => {
        delElement(li);
      });
    });

    $(toasts[0]).toast("show");
  } else {
    $(toasts[1]).toast("show");
  }
  // input u temızleyecek
  document.querySelector("#task").value = "";
}
