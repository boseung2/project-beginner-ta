const button = document.querySelector("#toggle");
const list = document.querySelector("ul");

button.addEventListener("click", () => {
  list.hidden = !list.hidden;
  button.textContent = list.hidden ? "공지 펼치기" : "공지 접기";
});
