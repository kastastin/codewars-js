"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// <-- XMLHttpRequest -->
// XMLHttpRequestExample();

function XMLHttpRequestExample() {
	displayCountryData("Ukraine");
	displayCountryData("USA");

	function displayCountryData(countryName) {
		const request = new XMLHttpRequest();
		request.addEventListener("load", requestListener);
		request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
		request.send();
	}

	function requestListener() {
		const [data] = JSON.parse(this.responseText);

		const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.svg ?? "/img/error.jpg"}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common ?? "Unknown"}</h3>
        <h4 class="country__region">${data.region ?? "Unknown"}</h4>
        <p class="country__row"><span>👫</span>${formatPopulation(
					data.population
				)}</p>
        <p class="country__row"><span>🗣️</span>${
					Object.values(data.languages)[0] ?? "Unknown"
				}</p>
        <p class="country__row"><span>💰</span>${
					Object.values(data.currencies)[0]["symbol"]
				} ${Object.keys(data.currencies)[0]}</p>
      </div>
    </article>
  `;

		countriesContainer.insertAdjacentHTML("beforeend", html);
		countriesContainer.style.opacity = 1;
	}
}

function formatPopulation(population) {
	if (!population) return "Unknown";

	return (Number(population) / 1_000_000).toFixed(1) + "M";
}

// <-- Callback Hell -->
CallbackHell();

function CallbackHell() {
	getCountryAndNeighbour("usa");

	function getCountryAndNeighbour(country) {
		const request = new XMLHttpRequest();
		request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
		request.send();

		request.addEventListener("load", function () {
			const [data] = JSON.parse(this.responseText);
			console.log(data);

			// Render country 1
			renderCountry(data);

			// Get neighbour country (2)
			const [neighbour] = data.borders;

			if (!neighbour) return;

			// AJAX call country 2
			const request2 = new XMLHttpRequest();
			request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
			request2.send();

			request2.addEventListener("load", function () {
				const [data2] = JSON.parse(this.responseText);
				console.log(data2);

				renderCountry(data2, "neighbour");
			});
		});
	}

	function renderCountry(data, className = "") {
		const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg ?? "/img/error.jpg"}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common ?? "Unknown"}</h3>
        <h4 class="country__region">${data.region ?? "Unknown"}</h4>
        <p class="country__row"><span>👫</span>${formatPopulation(
					data.population
				)}</p>
        <p class="country__row"><span>🗣️</span>${
					Object.values(data.languages)[0] ?? "Unknown"
				}</p>
        <p class="country__row"><span>💰</span>${
					Object.values(data.currencies)[0]["symbol"]
				} ${Object.keys(data.currencies)[0]}</p>
      </div>
    </article>
  `;

		countriesContainer.insertAdjacentHTML("beforeend", html);
		countriesContainer.style.opacity = 1;
	}
}
