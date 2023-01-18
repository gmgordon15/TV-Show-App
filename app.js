
const testbtn = document.querySelector(".test")
const resultsContainer = document.querySelector(".results-container")
const searchInput = document.querySelector(".search-input")
const submitButton = document.querySelector(".submit-button")
const showBTN = document.querySelector(".show-button")
const actorBTN = document.querySelector(".actor-button")
const readmore = document.querySelector(".read-more")


let showButtonValue = false
let actorButtonValue = false












showBTN.addEventListener('click', function(){
    showButtonValue = true
    actorButtonValue = false
    if(showButtonValue === true){
        showBTN.classList.toggle("option-btns-active")
    }else if(showButtonValue === false){
        showBTN.classList.toggle("option-btns-active")
    }
    console.log(showButtonValue)
    console.log(actorButtonValue)
    
    
    return showButtonValue
    

})

actorBTN.addEventListener('click', function(){
    actorButtonValue = true;
    showButtonValue = false;
    if(actorButtonValue === true){
        actorBTN.classList.toggle("option-btns-active")
    }else if(actorButtonValue === false){
        actorBTN.classList.toggle("option-btns-active")
    }
    console.log(actorButtonValue)
    console.log("This show button value " + showButtonValue)
    
    return actorButtonValue

})




submitButton.addEventListener('click', function(e){
    if(showButtonValue === true){
        pleaseWork()
    } else if (actorButtonValue === true){
        runPeopleSearch()
    }
    

    console.log(readmore)

function pleaseWork(){
    e.preventDefault();
    let showName = searchInput.value
    const url = `https://api.tvmaze.com/search/shows?q=${showName}`
    console.log(showName)

console.log(showButtonValue + "Second One")

const fetchApiData = async () => {
    const response = await fetch(url)
    const data = await response.json() 
    console.log(data)
    return data
}




const displayShowData = async () => {
   
  
   
    const showData = await fetchApiData()
    
     const mapShowData = showData.map((shows)=>{
        
        try{
            // block of code to test the error
            console.log(shows)
            console.log(shows.show.image.medium)
            } catch(err){
                 err = shows.show.image
                shows.show.image = "No picture found"
            }
      

            

        return `<div class="show-card">
        <div class="pic-div"><img src="${shows.show.image.medium}" alt=""></div>
        <div class="show-details">
            <h3 class="title">${shows.show.name}</h3>
            <div class="small-details">
                <h4 class="genre">Genre: ${shows.show.genres}</h4>
                <!--<h4 class="rating">Rating: ${shows.show.rating.average}</h4>-->
                <h4 class="runtime">Run Time: ${shows.show.runtime}</h4>
            </div>
            <div class="summary">
                <p class="summary-text">${shows.show.summary.substring(0,80)}</p>
                <button class="read-more" >  Read More</button>
            </div>

        </div>
    </div>


    

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <div class="show-card-extended">
    <div class="pic-div"><img src="${shows.show.image.medium}" alt=""></div>
    <div class="show-details">
        <h3 class="title">${shows.show.name}</h3>
        <div class="small-details">
            <h4 class="genre">Genre: ${shows.show.genres}</h4>
            <!--<h4 class="rating">Rating: ${shows.show.rating.average}</h4>-->
            <h4 class="runtime">Run Time: ${shows.show.runtime}</h4>
        </div>
        <div class="summary-extended">
            <p class="summary-text-extended">${shows.show.summary}</p>
            <button class="read-more" onclick="readMore()">  Read More</button>
        </div>

    </div>
</div>
  </div>

</div>





    


    `
  
    
  
 
            
    }).join("")

    resultsContainer.innerHTML = mapShowData
    const readmore = document.querySelector(".read-more")
    const summaryText = document.querySelector(".summary-text")
    const showCardExtended = document.querySelector(".show-card-extended")
    const showCard = document.querySelector(".show-card")
    const summaryTextExtended = document.querySelector(".summary-text-extended")
    const modal = document.querySelector(".modal")

    /*readmore.addEventListener('click', function(){
        showCard.style.display = "none"
        showCardExtended.style.display = "flex"
        console.log("test")
    })*/

    readmore.addEventListener('click', function(){
        modal.style.display = 'block'
        showCardExtended.style.display = "flex"
    })
    
   
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    
   
    
}



fetchApiData()
displayShowData()





    
}







function runPeopleSearch(){
   /* e.preventDefault();
    let showName = searchInput.value
    const url_people = `https://api.tvmaze.com/search/people?q=${showName}`
    console.log(showName)*/
    
    const fetchActorData = async () => {
        const response = await fetch(url_people)
        const actorData = await response.json() 
        console.log(actorData)
        return actorData
    }
    
    
    
    const displayShowData = async () => {
        const newActorData = await fetchActorData()
                let mapActorData = newActorData.map((actor)=>{
    
    
            try{
    
                
                // block of code to test the error
                console.log(actor)
                console.log(actor.person.image.medium)
                
                } catch(err){
                     err = actor.person.image
                    
                    actor.person.image = "No picture found"
                    
                }
          
    
    
    
            return `<div class="actor-card">
            <div class="pic-div-actor"><img src="${actor.person.image.medium}" alt=""></div>
            <div class="actor-details">
                <h3 class="title">${actor.person.name}</h3>
               
    
    
            </div>
        </div>`
        }).join("")
        resultsContainer.innerHTML = mapActorData

        
    }
    
    fetchActorData()
        displayShowData()
    
    
    
    }







})



function readMore(){



    const readmore = document.querySelector(".read-more")

}





   



    



