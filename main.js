const main = document.getElementById("main");
const tasks = document.querySelector(".tasks");
const form = document.querySelector("form");
const input = document.querySelector("input");
const btn = document.getElementById("save");
const done = document.getElementById("done");

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const newtask = `<div class="tasks">
  <div class="task-left">
    <div class="icon icon-star"></div>
  </div>
  <div class="task-name">
    <p lang="ar" class="lol">${input.value}</p>
  </div>
  <div class="task-right">
    <div class="icon icon-trash"></div>
    <div class="icon icon-angry2"></div>
  </div>
</div>`;
  main.innerHTML += newtask;
  input.value = "";
});

main.addEventListener("click", (eo) => {

  switch (eo.target.className) {

    case "icon icon-trash":
      const mytask = eo.target.parentElement.parentElement;
      mytask.classList.add("fall");
      mytask.addEventListener("transitionend", (eo) => {
        mytask.remove();
      });
      break;

    case "icon icon-angry2":
      eo.target.classList.add("dn");
      eo.target.parentElement.parentElement
        .querySelector(".lol")
        .classList.add("done");
      eo.target.parentElement.parentElement.classList.add("done2");
      main.append(eo.target.parentElement.parentElement);
      const addheart = `<div class="icon icon-heart"></div>`;
      eo.target.parentElement.parentElement
        .querySelector(".task-left")
        .querySelector(".icon-star")
        .classList.remove("star");
      eo.target.parentElement.parentElement
        .querySelector(".task-left")
        .querySelector(".icon-star")
        .classList.add("disable");
      eo.target.parentElement.innerHTML += addheart;
      break;

    case "icon icon-heart":
      eo.target.parentElement
        .querySelector(".icon-angry2")
        .classList.remove("dn");
      eo.target.classList.add("dn");
      eo.target.parentElement.parentElement
        .querySelector(".lol")
        .classList.remove("done");
      eo.target.parentElement.parentElement.classList.remove("done2");
      eo.target.parentElement.parentElement
        .querySelector(".task-left")
        .querySelector(".icon-star")
        .classList.remove("disable");
      break;

    case "icon icon-star":
      eo.target.classList.add("star");
      main.prepend(eo.target.parentElement.parentElement);
      break;

    case "icon icon-star star":
      eo.target.classList.remove("star");
      break;

    default:
      break;
  }
});

