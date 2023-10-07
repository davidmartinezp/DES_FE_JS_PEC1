const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const currencyEl = document.getElementById('currency');

var ticketPrice = +movieSelect.value;
var currentRate = 1;
var currentCurrency = "USD";

populateUI();


async function currencyChange() {
    localStorage.setItem('selectedCurrency', currencyEl.selectedIndex);
    currentCurrency = currencyEl.value;
  
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/4827911c0b6dcf6e7a08a393/latest/USD`);
      const data = await response.json();
      currentRate = data.conversion_rates[currentCurrency];
  
      // Recorre todas las opciones del select
      for (var i = 0; i < movieSelect.options.length; i++) {
        var dataMovie = movieSelect.options[i].getAttribute("data-movie");
        console.log(movieSelect.options[i].value);
        console.log(currentRate);
        movieSelect.options[i].text = dataMovie + " " + (movieSelect.options[i].value * currentRate).toFixed(1) + " " + currentCurrency;
      }
      updateSelectedCount();
    } catch (error) {
      console.error("Error en currencyChange:", error);
    }
  }

function saveMovieData(movieIndex,moviePrice){
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);
}

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));

    const selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    total.innerText = (selectedSeatCount * ticketPrice * currentRate).toFixed(1) + " " + currentCurrency;
}

function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats !== null && selectedSeats.length > 0)
    {
        seats.forEach((seat,index)=>{
            if (selectedSeats.indexOf(index)>-1)
            {
                seat.classList.add('selected');
            }
        });
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
    const selectedCurrencyIndex = localStorage.getItem('selectedCurrency');
    if (selectedCurrencyIndex !== null){
        currencyEl.selectedIndex = selectedCurrencyIndex;
    }
    currencyChange().then(() => {
    });
    
}

currencyEl.addEventListener('change',currencyChange);

container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

movieSelect.addEventListener('change',(e)=>{
    ticketPrice = +e.target.value;
    saveMovieData(e.target.selectedIndex,e.target.value);
    updateSelectedCount();
});