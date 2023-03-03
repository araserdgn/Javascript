const searcForm =document.querySelector(".search-form");
const cartItem =document.querySelector(".cart-items-container");
const navbar =document.querySelector(".navbar");

// * SINIFA ULASTIK

const searcBtn =document.querySelector("#search-btn");
const cartBtn =document.querySelector("#cart-btn");
const menuBtn =document.querySelector("#menu-btn");


searcBtn.addEventListener("click",function() {
    searcForm.classList.toggle("active");
    document.addEventListener("click",function(e) {
        if( !e.composedPath().includes(searcBtn) && !e.composedPath().includes(searcForm) ) {
            //! eger Btn ve Form bulamaz ise kapat kodunu yazdık.
             searcForm.classList.remove("active");
        }
    })
});
//! Arama logosuna basınca arama inputu getiren JS kodu
//* TOGGLE , tekrar basınca kapatır özelliği verir.
//* composedPath , tıkladıgımızı bulmamızı saglar


cartBtn.addEventListener("click",function() {
    cartItem.classList.toggle("active");
    document.addEventListener("click",function(e) {
        if( !e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem) ) {
            //! eger Btn ve Cart bulamaz ise kapat kodunu yazdık.
             cartItem.classList.remove("active");
        }
    })
});


menuBtn.addEventListener("click",function() {
    navbar.classList.toggle("active");
    document.addEventListener("click",function(e) {
        if( !e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar) ) {
            //! eger Btn ve Cart bulamaz ise kapat kodunu yazdık.
             navbar.classList.remove("active");
        }
    })
});