// تغيير خلفية الهيدر عند النزول

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.background = "rgba(6,6,15,0.95)";

    }else{

        header.style.background = "rgba(6,6,15,0.75)";

    }


});



