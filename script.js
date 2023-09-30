
  const ratingbtn = document.querySelectorAll(".btn");
  let selectedbtn = null;

  function select(event) {
    const clickedbtn = event.target;
    if (selectedbtn!=null){
        selectedbtn.style.backgroundColor='';
    }
    clickedbtn.style.backgroundColor = 'hsl(216, 12%, 54%)';
    clickedbtn.style.color='white';
    selectedbtn=clickedbtn;
    
    };
  

  ratingbtn.forEach(button => {
    button.addEventListener('click', select);
  });

  const submitbtn= document.querySelector('#submitButton');
  function submit(){
    window.location.href= 'thankyou.html';
    const rating= selectedbtn.textContent;
    localStorage.setItem('ratingGiven', rating); 
    console.log("its working")
  }
  submitbtn.addEventListener('click',submit);

