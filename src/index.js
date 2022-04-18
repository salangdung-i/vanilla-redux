const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
number.innerText = count;

// html에게 뭔가 바뀌었다고 알려주기 위해 함수를 쓴다는 것 자체가 리덕스가 멋진 이유중 하나이다. 
// handleAdd, handleMinus를 쓸 때, updateText를 쓰는 이유는 html에 변화를 일으켜야하기 떄문이다. 
const updateText = ()=> {
  number.innerText = count;
}
const handleAdd = () => {
  count = count +1;
  updateText();
}

const handleMinus = () => {
  count = count -1;
  updateText();
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);