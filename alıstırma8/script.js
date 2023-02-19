//! TOgle SideMEnu 

let navBar = document.querySelector("nav");
let myNav = document.getElementById("nav-bar");
let navLinks = myNav.querySelectorAll("li");
let hamMenu = document.getElementById("ham-menu");

hamMenu.addEventListener("click",() => {
    //? addEventListener , Hangi olayın gerçekleşeceğini ve sonrasında ne oalcagını belirler.
    //* Burda ekran kuculunce nav kısmını 3 çizgiye basarak getircez 
    myNav.classList.toggle("active");
    hamMenu.classList.toggle("fa-times");
    // 3 çizgiye basınca X işareti getirri
});

navLinks.forEach((navLink) => {
    //* About , price felan menusu gelince basınca
    //* O kısma gider syfada ve  o menu kaybolan kod kısmı
        navLink.addEventListener("click", () => {
            myNav.classList.remove("active");
            hamMenu.classList.toggle("fa-times");
        });
});

window.onscroll = function() {
    // Scrol İndicator

    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scroll = (pos * 100)/calcHeight;

    document.getElementById("progress").style.width = `${scroll}%`;

    // Scrol To button

    let scrollTopButton = document.getElementById("scroll-top-btn");
    if(pos > 300) {
        scrollTopButton.style.display="grid";
    }
    else {
        scrollTopButton.style.display="none";
    }

    //* EGER YÜKSEK. 300 Ü AŞARSA BUTON GELİYOR


    scrollTopButton.addEventListener("click", () => {
        document.documentElement.scrollTop =0;
    });

    // Sticky NAvbar
    if(pos >0) {
        navBar.classList.add("sticky");
    }
    else{
        navBar.classList.remove("sticky");
    }
}