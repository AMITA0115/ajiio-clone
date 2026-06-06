const slides= document.querySelectorAll(".slide");
const dots=document.querySelectorAll(".dot");

const nextbtn=document.querySelector(".next");
const prevbtn=document.querySelector(".prev");


let index=0;

function showSlide(i){
    slides.forEach((slide) =>{
    slide.classList.remove("slide-active");
    });

    dots.forEach((dot)=>{
      dot.classList.remove("active-dot");
    });

    slides[i].classList.add("slide-active");
    dots[i].classList.add("active-dot");
}
nextbtn.addEventListener("click" , () => {
   index++;
   if(index >= slides.length){
    index=0;
   }
   showSlide(index);
});
prevbtn.addEventListener("click" , () => {
    index--;
    if(index < 0){
     index=slides.length-1;
    }
    showSlide(index);
 });
 dots.forEach((dot,i)=>{
  dot.addEventListener("click", ()=>{
    index=i;
    showSlide(index);
  });
 });

 setInterval(()=>{
    index++;
    if(index >= slides.length){
        index=0;
    }
    showSlide(index);
 },3000);

//***********  Carrds section js ***********************   /

 const cards= document.querySelectorAll(".card");
 
 const cardDots=document.querySelectorAll(".card-dot");

const nextCard=document.querySelector(".nex");
const prevCard=document.querySelector(".pre");

let cardIndex=0;

 function showCard(i){
  cards.forEach((card) =>{
  card.classList.remove("card-active");
  });

  cardDots.forEach((dot)=>{
    dot.classList.remove("dotss-active");
  });

  cards[i].classList.add("card-active");
  cardDots[i].classList.add("dotss-active");
}
nextCard.addEventListener("click" , () => {
  cardIndex++;
  if(cardIndex >= cards.length){
   cardIndex=0;
  }
  showCard(cardIndex);
});
prevCard.addEventListener("click" , () => {
   cardIndex--;
   if(cardIndex < 0){
    cardIndex=cards.length-1;
   }
   showCard(cardIndex);
});
cardDots.forEach((dot,i)=>{
 dot.addEventListener("click", ()=>{
   cardIndex=i;
   showCard(cardIndex);
 });
});

setInterval(()=>{
   cardIndex++;
   if(cardIndex >= cards.length){
       cardIndex=0;
   }
   showCard(cardIndex);
},3000);

// **************** Men Section ********************* // 

const menSlides = document.querySelectorAll(".men-slide");
const menDots = document.querySelectorAll(".men-dot");

const menNext = document.querySelector(".men-next");
const menPrev = document.querySelector(".men-prev");

let menIndex = 0;

function showMenSlide(i){

    menSlides.forEach((slide)=>{
        slide.classList.remove("men-active");
    });

    menDots.forEach((dot)=>{
        dot.classList.remove("active-men-dot");
    });

    menSlides[i].classList.add("men-active");
    menDots[i].classList.add("active-men-dot");

}
menNext.addEventListener("click", ()=>{

  menIndex++;

  if(menIndex >= menSlides.length){
      menIndex = 0;
  }

  showMenSlide(menIndex);

});
menPrev.addEventListener("click", ()=>{

  menIndex--;

  if(menIndex < 0){
      menIndex = menSlides.length - 1;
  }

  showMenSlide(menIndex);

});
menDots.forEach((dot, i)=>{

  dot.addEventListener("click", ()=>{

      menIndex = i;
      showMenSlide(menIndex);

  });

});
setInterval(()=>{

  menIndex++;

  if(menIndex >= menSlides.length){
      menIndex = 0;
  }

  showMenSlide(menIndex);

},3000);

// **************** Women Section ********************* // 

const womenSlides = document.querySelectorAll(".women-slide");
const womenDots = document.querySelectorAll(".women-dot");

const womenNext = document.querySelector(".women-next");
const womenPrev = document.querySelector(".women-prev");

let womenIndex = 0;

function showWomenSlide(i){

    womenSlides.forEach((slide)=>{
        slide.classList.remove("women-active");
    });

    womenDots.forEach((dot)=>{
        dot.classList.remove("active-women-dot");
    });

    womenSlides[i].classList.add("women-active");
    womenDots[i].classList.add("active-women-dot");

}



womenNext.addEventListener("click", ()=>{

    womenIndex++;

    if(womenIndex >= womenSlides.length){
        womenIndex = 0;
    }

    showWomenSlide(womenIndex);

});



womenPrev.addEventListener("click", ()=>{

    womenIndex--;

    if(womenIndex < 0){
        womenIndex = womenSlides.length - 1;
    }

    showWomenSlide(womenIndex);

});



womenDots.forEach((dot, i)=>{

    dot.addEventListener("click", ()=>{

        womenIndex = i;
        showWomenSlide(womenIndex);

    });

});



setInterval(()=>{

    womenIndex++;

    if(womenIndex >= womenSlides.length){
        womenIndex = 0;
    }

    showWomenSlide(womenIndex);

},3000);

// ********************** Sign up ******************//

const openSignup =
document.getElementById("openSignup");

const signupModal =
document.getElementById("signupModal");

const closeSignup =
document.getElementById("closeSignup");

openSignup.addEventListener("click",(e)=>{

    e.preventDefault();

    signupModal.style.display = "flex";

});

closeSignup.addEventListener("click",()=>{

    signupModal.style.display = "none";

});

window.addEventListener("click",(e)=>{

    if(e.target === signupModal){

        signupModal.style.display = "none";

    }

});

// ************ otp **************** //

const sendOtpBtn =document.getElementById("sendOtpBtn");

const otpSection =document.getElementById("otpSection");

const generatedOtpText =document.getElementById("generatedOtp");

const verifyOtpBtn =document.getElementById("verifyOtpBtn");

const otpInput =document.getElementById("otpInput");

let currentOtp = "";

sendOtpBtn.addEventListener("click",()=>{

    const mobile =
    document.getElementById("mobile").value;

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    if(
        mobile === "" ||
        name === "" ||
        email === ""
    ){
        alert("Please fill all fields");
        return;
    }

    currentOtp = Math.floor( 100000 + Math.random() * 900000).toString();

    generatedOtpText.textContent =currentOtp;

    otpSection.style.display = "block";

});
verifyOtpBtn.addEventListener("click",()=>{

  if(otpInput.value === currentOtp){

      const userData = {

          name:
          document.getElementById("name").value,

          email:
          document.getElementById("email").value,

          mobile:
          document.getElementById("mobile").value

      };

      localStorage.setItem(
          "ajioUser",
          JSON.stringify(userData)
      );

      alert("Account Created Successfully");

      signupModal.style.display = "none";

  }else{

      alert("Invalid OTP");

  }

});
const savedUser =JSON.parse( localStorage.getItem("ajioUser"));

if(savedUser){

  openSignup.innerText =
  `Hi, ${savedUser.name}`;

  openSignup.href = "#";

}

openSignup.addEventListener("click",(e)=>{

  if(savedUser){

      const logout =confirm("Do you want to logout?");

      if(logout){

          localStorage.removeItem("ajioUser");

          location.reload();

      }

      return;
  }

  e.preventDefault();

  signupModal.style.display = "flex";

});

// ***************** cart count show ******************//



let cart =JSON.parse(localStorage.getItem("cart")) || [];

let count = 0;

cart.forEach((item) => {
    count += item.quantity;
});

const cartCount =
document.getElementById("cart-count");

if(count > 0){
    cartCount.innerText = count;

} else{
  cartCount.style.display="none";
}

