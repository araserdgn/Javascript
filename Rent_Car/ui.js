function UI() {

}

UI.prototype.addCarToUI = function (newCar) {
  const carList = document.getElementById("cars");

  carList.innerHTML += `
     <tr>
        <td><img src="${newCar.url}" class="img-fluid img-thumbnail"></td>
        <td>${newCar.title}</td>
        <td>${newCar.price}</td>
        <td>${newCar.km}</td>
        <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
    </tr> 
    `;
};

UI.prototype.clearListe=function(el1,el2,el3,el4) {
    el1.value="";
    el2.value="";
    el3.value="";
    el4.value="";
}

UI.prototype.displayMessage = function(message,type) {
    const cardBody=document.querySelector(".card-body");

    // Alert Divleri

    const div=document.createElement("div");
    div.className=`alert alert-${type}`;
    div.textContent=message;

    cardBody.appendChild(div);

    setTimeout(function() {
        div.remove();
    },2000);
}
