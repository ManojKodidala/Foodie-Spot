const log = document.getElementById("rules");

log.style.cursor = 'pointer';

log.addEventListener("click",()=>{
  let loname = document.getElementById("loname").value;

  let lpwd = document.getElementById("lpassword").value;

  // window.localStorage.setItem("loname", loname);
  // window.localStorage.setItem("lpwd", lpwd);

  // if (loname ==="" ){
  //   window.alert("Please enter login name ");
  // }
  // else if (lpwd ==="" ){
  //   window.alert("Please enter password ");
  // }

  if(loname == window.localStorage.getItem('email') && lpwd == window.localStorage.getItem('password')){

    open(url= "./index.html");
  }
  else{
    alert("Please Enter Valid Data");
  }
  // open(url= "./index.html");

});
