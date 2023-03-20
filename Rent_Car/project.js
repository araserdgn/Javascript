const form = document.getElementById("car-form");
const titleElement=document.querySelector("#title");
const priceElement=document.querySelector("#price");
const urlElement=document.querySelector("#url");
const kmElement=document.querySelector("#km");

// UI obhe baslat

const ui = new UI();
const storage = new Storage();

//Tüm elementler yükle

eventListenirs();

function eventListenirs() {
    form.addEventListener("submit",addCar);
};

function addCar(e) {
    e.preventDefault();
    const title=titleElement.value;
    const price=priceElement.value;
    const url=urlElement.value;
    const km=kmElement.value;

    if(title==="" || price==="" || url==="" || km==="") {
       ui.displayMessage("Tüm Alanları Doldurun..","danger");
    }
    else {
        // Yeni araç ekleme
        const newCar= new Car(title,price,url,km);

        ui.addCarToUI(newCar); // Arayüze araç ekleme

        storage.addCarStorage(newCar);

        ui.displayMessage("Araç Başarıyla Eklendi.","success")
    }

    ui.clearListe(titleElement,priceElement,urlElement,kmElement)
}