const typeJs = document.querySelectorAll(".type-js");
let convert = Array.from(typeJs);
convert.map((item) => {
  let count = 0;
  let typeNow = item.dataset.type.split("");
  const typeJS = () => {
    if (count == item.dataset.type.length) {
      typeNow.pop();
      item.innerHTML = typeNow.join("");
      if (typeNow.length == 0) {
        item.innerHTML += item.dataset.type.charAt(count);
        count = 0;
      }
    } else {
      item.innerHTML += item.dataset.type.charAt(count);
      typeNow = item.dataset.type.split("");
      count++;
    }
  };
  setInterval(() => {
    typeJS();
  }, 200);
});
