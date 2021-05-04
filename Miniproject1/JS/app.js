const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', ()=>{
    console.log('Clicked');
    nav.classList.toggle('nav-active');
    console.log('Completed');
  });
}

navSlide();


[document.getElementById('buyNow1'), document.getElementById('buyNow2'), document.getElementById('buyNow3')].forEach(item => {
  item.addEventListener('click', event => {
    document.querySelector('.popup').style.display= 'block';
    document.querySelector('.popup').style.opacity= '1';
  })
})

document.getElementById('close').addEventListener('click',function(){
  document.querySelector('.popup').style.display= 'none';
})


function validate(){
  console.log(document.getElementById('name').value);
  if(document.querySelector('input[name="payment"]:checked') == null) {
    alert("You need to choose a payment Method");
    return false;
}
if(!(/^[a-zA-Z]+ [a-zA-Z]+$/).test(document.getElementById('name').value.trim())) {
  alert("Please enter your first name and the last name with a white space!");
  return false;
}
true;
}

function checkEmail(){
  if(document.getElementById('signup1').value.trim()==""){
  alert("Email ID number cannot be blank!");
  return false;
}
  if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(document.getElementById('signup1').value.trim())) {
    alert("Invalid email!");
    return false;
  }
  document.getElementById('signup1').value="";
  alert("You have subscribed successfully");
  return true;
}
