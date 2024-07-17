//Popup Inicio
Swal.fire({
    text: "Selecciona un personaje para esta partida.",
   padding: "30px 0px 30px 0px",
   willOpen: () => {
    const swalContainer = document.querySelector('body');
    swalContainer.classList.remove('swal2-height-auto');
}
  });
//Cambio de nombre y de imagen de jugador
let namePlayerSelected = document.querySelector('.namePlayerSelected')
let imageSelectedSrc = document.querySelector('#imageSelectedSrc')
//Seleccion primer personaje
let playerSelected = false
let tableContainer = document.querySelector('.tableContainer')

let players = document.querySelectorAll('.player')
console.log(playerSelected);


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
        namePlayerSelected.textContent = playerSelected
        imageSelectedSrc.src = imgSrc;
      }
    })
  });
