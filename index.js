const sortButton = document.getElementById('sort-button');
const countryContainer = document.getElementById('country-container');

let countries = [];

async function fetchCountries() {
  try {
    const response = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries');
    const data = await response.json();
    countries = data;
    displayCountries(countries);
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
}

function displayCountries(countries) {
  countryContainer.innerHTML = '';
  countries.forEach(country => {
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country');

    const name = document.createElement('h2');
    name.textContent = country.name;
    countryDiv.appendChild(name);

    const capital = document.createElement('p');
    capital.textContent = `Capital: ${country.capital}`;
    countryDiv.appendChild(capital);

    const population = document.createElement('p');
    population.textContent = `Population: ${country.population}`;
    countryDiv.appendChild(population);

    countryContainer.appendChild(countryDiv);
  });
}

function sortCountries() {
  countries.sort((a, b) => b.population - a.population);
  displayCountries(countries);
}

fetchCountries();

sortButton.addEventListener('click', sortCountries);
