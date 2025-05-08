let countriesContainer = document.querySelector(".countries-container");
const searchInput= document.querySelector(".search-container");
// console.log(searchInput);

let Allcountry 
fetch("https://restcountries.com/v3.1/all").
then((res)=>{
    return res.json();
    a;
})
.then ((data) => {
    Allcountry = data;
    rendercountries(data);
    
    });
    function rendercountries(data){
        countriesContainer.innerHTML="";
        
        data.forEach((ele,i)=>{
            //  console.log(ele,i) // Assuming 'name.common' holds the country name
        
            let countriesContainer=document.querySelector(".countries-container")
            let countryCard = document.createElement("a");
            countryCard.classList.add("country-card")
           
            const cardHTML = `
             <img src=${ele.flags.svg} alt="">
                           <div class="card-text">
                            <h3 class="card-title">${ele.name.common}</h3>
                            <p><strong>Population:</strong>${ele.population}</p>
                            <p><strong>Regi0n:</strong>${ele.region}</p>
                            <p><strong>Capital:</strong>${ele.capital?.[0]}</p>
                           </div>
            
             `;
            countryCard.innerHTML= cardHTML;
            countriesContainer.appendChild(countryCard);
             
        }) ;
    }
    searchInput.addEventListener("input",(evt)=>{
          console.log(evt.target.value)
        let searchValue = evt.target.value.toLowerCase(); // 
        // console.log(searchValue)
       let filtercountries=Allcountry.filter((country)=>{
    //    console.log(country);
     return country.name.common. toLowerCase().includes
     (searchValue);
        });
        rendercountries( filtercountries);
        console.log(filtercountries);
        });
    
