import CardComponent from "../card/card";


function Filter() {

    document.addEventListener("keyup", e => {
        

        document.querySelectorAll(".card").forEach( card => {
            card.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? card.classList.remove("filtro")
            : card.classList.add("filtro")
        })
    });



  return (
    <>
     <CardComponent/>
    
    <div>filter</div>
    </>
   
  )
}

export default Filter