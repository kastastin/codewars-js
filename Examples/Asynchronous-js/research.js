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
// CallbackHell();

function CallbackHell() {
	getCountryAndNeighbour("usa");

	function getCountryAndNeighbour(country) {
		const request = new XMLHttpRequest();
		request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
		request.send();

		request.addEventListener("load", function () {
			const [data] = JSON.parse(this.responseText);

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

				renderCountry(data2, "neighbour");
			});
		});
	}
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

// <-- Promises -->
// Promises();

function Promises() {
	btn.addEventListener("click", getCountryData.bind(null, "Ukraine"));

	function getCountryData(countryName) {
		getJSON(
			`https://restcountries.com/v3.1/name/${countryName}`,
			"Country not found"
		)
			.then(([data]) => {
				renderCountry(data);

				const neighbour = data.borders?.[0];

				if (!neighbour) throw new Error("No neighbour found");

				// Fetch neighbour country
				return getJSON(
					`https://restcountries.com/v3.1/alpha/${neighbour}`,
					"Country not found"
				);
			})
			.then(([data]) => renderCountry(data, "neighbour"))
			.catch((err) => {
				console.error(`🥳🥳🥳 ${err}`);
				renderError(`Something went wrong: ${err.message}. Try again!`);
			})
			.finally(() => {
				countriesContainer.style.opacity = 1;
			});
	}

	function renderError(msg) {
		countriesContainer.insertAdjacentText("beforeend", msg);
		countriesContainer.style.textAlign = "center";
	}
}

function getJSON(url, errorMessage = "Something went wrong") {
	return fetch(url).then((response) => {
		if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);

		return response.json();
	});
}

// <-- Building Simple Promise -->
// BuildingSimplePromise();

function BuildingSimplePromise() {
	const lotteryPromise = new Promise(function (resolve, reject) {
		console.log("Start lottery draw...");

		setTimeout(function () {
			if (Math.random() < 0.5) {
				resolve("You win!");
			} else {
				reject(new Error("You lost!"));
			}
		}, 2000);
	});

	lotteryPromise
		.then((res) => console.log(res))
		.catch((err) => console.error(err))
		.finally(() => console.log("End lottery draw..."));

	// Promisifying setTimeout
	function wait(seconds) {
		return new Promise(function (resolve) {
			setTimeout(resolve, seconds * 1000);
		});
	}

	wait(3)
		.then(() => {
			console.log("I waited for 3 seconds");
			return wait(1);
		})
		.then(() => console.log("I waited for 1 second"));
}

// <-- Promisifying Geolocation API -->
// PromisifyingGeolocationAPI();

function PromisifyingGeolocationAPI() {
	getPosition()
		.then((pos) => console.log(pos))
		.catch((err) => console.error(err));

	function getPosition() {
		return new Promise(function (resolve, reject) {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		});
	}
}

// <-- AsyncAwait -->
// AsyncAwait();

function AsyncAwait() {
	whereAmI("Ukraine");

	async function whereAmI(country) {
		try {
			const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);

			if (!res.ok) throw new Error("Country not found");

			const [data] = await res.json();
			console.log(data);
			renderCountry(data);
		} catch (err) {
			console.error(err);
			renderError(err.message);
		}
	}
}

// <-- Promises in Parallel -->
PromisesInParallel();

function PromisesInParallel() {
	get3Countries("Ukraine", "USA", "Germany");

	async function get3Countries(c1, c2, c3) {
		try {
			const data = await Promise.all([
				getJSON(`https://restcountries.com/v3.1/name/${c1}`),
				getJSON(`https://restcountries.com/v3.1/name/${c2}`),
				getJSON(`https://restcountries.com/v3.1/name/${c3}`),
			]);

			console.log(data.map((d) => d[0].capital[0]));
		} catch (err) {
			console.error(err);
		}
	}
}

// <-- Static Promise Methods -->
async function raceExample() {
	const res = await Promise.race([
		getJSON(`https://restcountries.com/v3.1/name/usa`),
		getJSON(`https://restcountries.com/v3.1/name/germany`),
		getJSON(`https://restcountries.com/v3.1/name/ukraine`),
	]);

	console.log(res[0]); // any first promise (resolve or reject)
}

function allSettledExample() {
	Promise.allSettled([
		Promise.resolve("Success"),
		Promise.reject("Error"),
		Promise.resolve("Success"),
	]).then((res) => console.log(res));
}
