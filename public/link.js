
// let button = document.getElementById('btn');
// console.log(button);

// let data = {
//   name : "Food_Page",
//   url : 'http://127.0.0.1:5502/FoodPage/food.html'

// }
// button.onclick = function(){
//   navigator.share(data)
// }

let btn = document.getElementById('kiran');

btn.style.cursor = 'pointer';

btn.addEventListener("click",()=>{

  let fname = document.getElementById('fname').value;

  let lname = document.getElementById('lname').value;

  let email = document.getElementById('email').value;

  let password = document.getElementById('password').value;

  let gender = document.getElementById('gender').value;


  window.localStorage.setItem("fname", fname);
  window.localStorage.setItem("lname", lname);
  window.localStorage.setItem("email", email);
  window.localStorage.setItem("password", password);
  window.localStorage.setItem("gender",gender);



  if (fname ==="" ){
    window.alert("Please enter first name ");
  }
  else if (lname ==="" ){
    window.alert("Please enter last name ");
  }
  else if(password === "" ){
    window.alert("Please enter password");
  }

  else if(email === "" ){
    window.alert("Please enter email");
  }
  else if(gender === ""){
    window.alert("Please select gender");
  }
  else{
    open(url = "./log.html")
  }
} );

