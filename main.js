//localStorage Nombre
let yourName = null
if (localStorage.getItem('namePlayer') != null){
  yourName = localStorage.getItem('namePlayer')
  let tableName = document.querySelector('.tableName')
  tableName.textContent = 'Tablero de ' + primeraMayus(yourName)
}


let tableContainer = document.querySelector('.tableContainer')

//primeraMayus
function primeraMayus(text) {
  if (!text) return text; // handle empty strings
  return text.charAt(0).toUpperCase() + text.slice(1);
}

//funcion toastify selecciona personaje
function ToastifySelectPlayer(){
  Toastify({
    text: "Selecciona un personaje para esta partida",
    duration: 4000,
    gravity: "bottom", 
    position: "center", 
    stopOnFocus: true, 
    style: {
      background: "#fff",
      fontSize: "14px",
      borderRadius: "15px",
      boxShadow: "none",
      color: '#000',
      fontWeight:"500",
      border: "solid 2px #F3F1EE"

    },
    onClick: function(){} 
  }).showToast();
}
//funcion cambiar nombre
function changeName(){
  Swal.fire({
    title: 'Como queres que te diga?',
    input: 'text',
    padding: "30px 0px 30px 0px",
    inputAttributes: {
      maxlength: 18
  },
    inputPlaceholder: 'osea tu nombre',
    confirmButtonText: 'Confirmar',
    preConfirm: (inputValue) => {
        if (!inputValue) {
            Swal.showValidationMessage('Ah sos chistoso?')
        }else{
          let tableName = document.querySelector('.tableName')
          tableName.textContent = 'Tablero de ' + primeraMayus(inputValue)
          localStorage.setItem('namePlayer', inputValue)
          ToastifySelectPlayer()
        }


    }
  });
}


////////////////////////////////////////////////////////////////////////////////////////////////

if (yourName == null){
  changeName()  

}else{ //inicio popup
  ToastifySelectPlayer()
}

//editar Nombre.
let buttonEdit = document.querySelector('.buttonEdit')
buttonEdit.addEventListener("click", ()=>{
  changeName()
})

//Cambio de nombre y de imagen de jugador
let namePlayerSelected = document.querySelector('.namePlayerSelected')
let imageSelectedSrc = document.querySelector('#imageSelectedSrc')
//Seleccion primer personaje
let playerSelected = false

let showPlSe = document.querySelector('.playerSelected')
let players = document.querySelectorAll('.player')


  players.forEach(ply => {
    ply.addEventListener("click", ()=>{


      if (playerSelected != false){
        ply.classList.toggle("rotateCard")
      }else{
        let imgPlayer = ply.querySelector('img')
        let altText =  imgPlayer.getAttribute('alt')
        let imgSrc = imgPlayer.getAttribute('src')
        playerSelected = altText
        tableContainer.classList.add('smalledTableContainer')
        showPlSe.classList.add('playerSelectedShow')
        namePlayerSelected.textContent = playerSelected
        imageSelectedSrc.src = imgSrc;
      }
    })
  });
