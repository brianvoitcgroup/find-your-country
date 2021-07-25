# FindMyCountry

A simple app for searching country and display its data, fetching:

- countries data from https://restcountries.eu/,
- current weather of country's capital from https://www.weatherapi.com/,
- comments from https://evening-island-76065.herokuapp.com/ ([repo](https://github.com/brianvoitcgroup/find-your-country-api))

# How does it work?

- Fetch all countries from https://restcountries.eu/rest/v2/all and assign to array `wholeCountries`
- Enter a partial country name into the search bar, the app will perform filtering on `wholeCountries` and return the result on screen (user will be prompted to specify their search term if the result is more than 10 countries)
- Click on the desired country to see its details, the app will call https://restcountries.eu/rest/v2/alpha/:alpha2Code, weatherAPI to get country and weather data
- The app will also call https://evening-island-76065.herokuapp.com/api/countries/:alpha2Code to fetch all the country's comments
- The app will perform a POST call to https://evening-island-76065.herokuapp.com/api/countries/:alpha2Code to post a comment
- The app will perform a DELETE call to https://evening-island-76065.herokuapp.com/api/comments/:commentId to delete a comment
