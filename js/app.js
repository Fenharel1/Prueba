function openMenu(){
  let navresponsive = document.getElementById('nav');
  if(navresponsive.className === ""){
    navresponsive.className = "responsive";
  }else{
    navresponsive.className = "";
  }
}