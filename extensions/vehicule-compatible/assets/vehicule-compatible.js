// timeout the request/response after 5s not to impact performance
const controller = new AbortController();

let form = document.getElementById("vehicule-compatible-form");
let select_marque = document.getElementById('vehicule-compatible-marque');
let select_modele = document.getElementById('vehicule-compatible-modele')
let marques = [];
let modeles = [];

const response = fetch("/apps/vehicule-compatible", {
   method: "GET",
   headers: {
     'Content-Type': "application/json",
     "ngrok-skip-browser-warning": true
   },
   redirect: "follow",
   signal: controller.signal
}).then((response) => response.json())
    .then((json) => recupererModeles(json))
    .catch((error) => {
      if (error.response) {
        console.log("Response status:", error.response.status);
        console.log("Response data:", error.response.data);
      } else {
        console.log("Error message:", error.message);
      }
    })

function recupererModeles(obj){
  let modeles_recup = obj.modeles;
  if(select_marque.children.length == 0){
    let option = document.createElement("option");
    option.innerText = "Marque";
    option.toggleAttribute("selected");
    select_marque.appendChild(option);
  }
  if(select_modele.children.length == 0){
    option = document.createElement("option");
    option.innerText = "Modèle";
    option.toggleAttribute("selected");
    select_modele.appendChild(option);
  }
  Array.from(modeles_recup).forEach(modele =>{
    if(!marques[modele.id])
      marques[modele.marqueId] = modele.marque.name;
    modeles[modele.id] = {name : modele.name, marqueId : modele.marqueId};
  })
  marques.forEach((marqueName, marqueId ) => {
    let option = document.createElement("option");
    option.innerText = marqueName;
    option.setAttribute("value", marqueId);
    select_marque.appendChild(option);
  })
}

select_marque.addEventListener('change', (e)=>{
  let marqueId = e.target.value;
  select_modele.innerHTML = "";
  option = document.createElement("option");
  option.innerText = "Modèle";
  option.toggleAttribute("selected");
  select_modele.appendChild(option);
  if(marqueId == "Marque"){
    select_modele.setAttribute("disabled", "");
  }
  else{
    select_modele.removeAttribute("disabled");
    modeles.forEach((modele, modeleId) => {
      if(modele.marqueId == marqueId){
        let option = document.createElement("option");
        option.innerText = modele.name;
        option.setAttribute("value", modeleId);
        select_modele.appendChild(option);
      }
    })
  }
})