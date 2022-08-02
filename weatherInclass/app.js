const form = document.querySelector("section.top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section .cities");

// localStorage.setItem('apikey','c101019b3917ef4c27af74063e4ec864');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    getWeatherDataFormApi();
});




const getWeatherDataFormApi = async ()=>{
    let apiKey = localStorage.getItem('apikey')
    // console.log(apiKey)
    let inputVal=input.value;
    let lang = 'tr'
    let unitType = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=${unitType}&lang=${lang}`;
    try {
        const response = await axios(url);
        const {name,main,sys,weather}=response.data;
        console.log(response.data)
        let iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`

        
        const cityListItems = list.querySelectorAll(".city");
        const cityListItemsArray = Array.from(cityListItems);
        if(cityListItemsArray.length > 0){
            const filteredArray = cityListItemsArray.filter(cityCard => cityCard.querySelector("span").innerText == name);
            // console.log(cityListItemsArray.length);
            if(filteredArray.length > 0){
                msg.innerText = `You already know the weather for ${name}, Please search for another city 😉`;
                setTimeout(()=>{
                    msg.innerText = "";
                }, 5000);
                form.reset();
                return;
            }
        }
         
        const createdli = document.createElement('li');
        createdli.classList.add('city');
        const createdLiInnerHtml = `
        <h2 class="city-name" data-name="${name}, ${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.floor(main.temp)}<sup>°C</sup></div>
        <figure>
            <img class="city-icon" src="${iconUrl}">
            <figcaption>${weather[0].description}</figcaption>
        </figure>`;
        createdli.innerHTML = createdLiInnerHtml;
        list.prepend(createdli);

    } catch (error) {
        msg.innerText = error;
        setTimeout(()=>{
            msg.innerText = "";
        }, 5000);
        
    }
    form.reset();
}