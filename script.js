let myArray = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah']

myArray.forEach(element => console.log(element));

let list = document.getElementById("myList")
myArray.forEach((item) => {
    let li = document.createElement( "li");
    li.innerText = item;
    list.appendChild(li)
})