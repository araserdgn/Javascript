//! LOCALSTORAGE NEDİR , Örnekle açıklama

// const userList =["İsmail","Şule","Melisa","Fatih"];
// localStorage.setItem("name",JSON.stringify(userList));
// localStorage.setItem("users",JSON.stringify(userList));
// //* JSON.string yaptık bu sayede indexleri olan
// //* Ama düz bir yazı gibi aldı

// const getStorage=JSON.parse(localStorage.getItem("name"));
// //* Objeye döngü geri, b usfer içindekileri alabiliyoruz

// //* localden silme
// localStorage.removeItem("name");

// //* users içindeki İSMAİL elemanını sil
// userList.splice(1,1);
// //*1. indexten itibaren sonra kaç tane sileyim
// localStorage.setItem("users",JSON.stringify(userList));

// console.log(getStorage[2]);

// const nameList=document.querySelector("#nameList");
// nameList.innerHTML=getStorage;

// ************************* CRUD PART **********************************************

let userList = [];
let getUserList;
let nameListDom = document.querySelector("#nameList");
localStorage.setItem("userList", JSON.stringify(userList));

//*En son ne varsa ekrana basar
function Read() {
  nameListDom.innerHTML = "";
  getUserList = JSON.parse(localStorage.getItem("userList"));

  if (getUserList != null) {
    if (getUserList.length === 0) {
      nameListDom.innerHTML = "There are no any users";
    } else {
      for (let i = 0; i < getUserList.length; i++) {
        nameListDom.innerHTML += `
            <div class="user-item">
                <p>
                    <i class="fas fa-user"></i>
                    <span>User: </span>${getUserList[i]} 
                </p>
                <div class="buttons">
                    <button class="primary" onclick="Edit(${i})">
                        <i class="fas fa-edit"></i>
                        Edit
                    </button>
                    <button class="danger" onclick="Delete(${i})">
                        <i class="fas fa-trash"></i>
                        Delete
                    </button>
                </div>
            </div> `;
      }
    }
  }
}

//*eleman gönderir yazınca
function Create() {
  const storage = JSON.parse(localStorage.getItem("userList"));
  let inputText = document.querySelector("#name").value;

    if(inputText =="") {
        alert("Write must a name");
    }
    else {
        if (storage === null) {
            userList.push(inputText);
          } else {
            userList = JSON.parse(localStorage.getItem("userList"));
            userList.push(inputText);
            localStorage.setItem("userList", JSON.stringify(userList));
          }
    }
}

//* Siler
function Delete(item) {
  let deleteUser = JSON.parse(localStorage.getItem("userList"));
  deleteUser.splice(item, 1);
  localStorage.setItem("userList", JSON.stringify(deleteUser));
  Read();
}

//*Edit
function Edit(item) {
  let editUsers = JSON.parse(localStorage.getItem("userList"));
  nameListDom.innerHTML = "";
  for (let i = 0; i < editUsers.length; i++) {
    if (i == item) {
      nameListDom.innerHTML = `
            <div class="user-item">
                <div>
                    <p>
                        <i class="fas fa-user"></i>
                        <span>User: </span> ${getUserList[i]}
                    </p>
                    <input type="text" id="newName" placeholder="${editUsers[i]}" />
                </div>
            <div class="buttons">
                <button class="success" onclick="Update(${i})">
                    <i class="fas fa-edit"></i>
                    Update
                </button>
                <button class="warning" onclick="Read()">
                    <i class="fas fa-trash"></i>
                    Cancel
                </button>
            </div>
        </div>
            `;
    }
    else {
        nameListDom.innerHTML += `
        <div class="user-item">
            <p>
                <i class="fas fa-user"></i>
                <span>User: </span>${getUserList[i]} 
            </p>
            <div class="buttons">
                <button class="primary" onclick="Edit(${i})">
                    <i class="fas fa-edit"></i>
                    Edit
                </button>
                <button class="danger" onclick="Delete(${i})">
                    <i class="fas fa-trash"></i>
                    Delete
                </button>
            </div>
        </div> `;
    }
  }
}

//*Update
function Update(item) {
    const updateUsers =JSON.parse(localStorage.getItem("userList")); 
    updateUsers[item]=document.getElementById("newName").value;

    if(updateUsers[item]=="") {
        alert("Write a new name!!");
    }
    else {
        localStorage.setItem("userList",JSON.stringify(updateUsers));
        Read();
    }
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  //* Sayfa yenilenmeyecek artık

  Create();
  Read();

  document.getElementById("form").reset();
  //? Yukaridaki de input kısmının içini temizler
});

document.addEventListener("DOMContentLoaded", () => {
  //*Yüklendikten sonra sayfa içerikleri o zaman Read çalışsn dmk
  Read();
});
