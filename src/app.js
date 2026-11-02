import { formatTask } from "./format.js";

const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");

if (form && input && list) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const item = document.createElement("li");
    item.textContent = formatTask(input.value, "user1");
    list.appendChild(item);
    input.value = "";
  });
}
