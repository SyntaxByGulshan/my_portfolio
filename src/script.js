function show(){
    const nav = document.getElementById('options');
    const showButton=document.getElementById('show')
    const removeButton=document.getElementById('hide')
    showButton.classList.toggle('hidden')
    removeButton.classList.toggle('hidden')
    const s=nav.classList.toggle('hidden');
    console.log(s);
}
const handleNameInput = (event) => {
  const name=event.target.value.trim();
  console.log(name.length);
  if(name == '' || name.length<=3 ||name.length>20||!/^[a-zA-Z\s]*$/.test(name)){ 
   document.getElementById('errorname').innerHTML="Please enter your name correctly"
    console.log(name.length);
    return;
  }
  document.getElementById('errorname').innerHTML=""
}
const handleEmailInput = (event) => {
  const email=event.target.value.trim();
  if(email.trim() == ''||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    document.getElementById('erroremail').innerHTML="Please enter your email correctly"
    console.log('email');
    return;
  }
  document.getElementById('erroremail').innerHTML=""
}
const handleSubmit = (event) => {
  event.preventDefault();
   const name=event.target.elements[0].value.trim();
   const email=event.target.elements[1].value.trim();
    const message=event.target.elements[2].value.trim();
  if(name == '' || name.length<=3 ||!/^[a-zA-Z\s]*$/.test(name)){
   document.getElementById('errorname').innerHTML="Please enter your name correctly"
    console.log(name.length);
    return;
  }
  if(email.trim() == ''||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    document.getElementById('erroremail').innerHTML="Please enter your email correctly"
    console.log('email');
    return;
  }
  const data={
    name:name,
    email:email,
    message:message
  }
  console.log(data);
  localStorage.setItem('contact',JSON.stringify(data));
  document.getElementById('success').innerHTML="Message sent successfully"
  event.target.reset();
  setTimeout(() => {
    document.getElementById('success').innerHTML=""
  }, 3000);
}