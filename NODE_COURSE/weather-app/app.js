// const request = require('request');
// const { isLatLong } = require('validator');

// const url = 'https://api.weatherstack.com/current?access_key=55d4b1386b0967b038fb6b1472ae5691&query=37.8267,-122.4233&units=f'


// request({ url: url, json: true }, (error, response) => {
//     console.log(response.body.current.weather_descriptions[0] + '. It is currentlly ' + response.body.current.temperature + ' degress out. It feels like ' + response.body.current.feelslike + " degress out.");
// });

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%Angeles.json?access_token.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pzbmL20G92MGN2MTQ0cGd3bjVheTFuayJ9.hbZJE6qEZHEsL5QXVF4vtw'
// request({ url: geocodeURL, json: true}, (error, response) =>{
//    if(error) {
//     console.log('Unable to connect to location server')
//    } else if(response.body.features.length === 0) {
//     console.log('Unable to find location. Try another search. ')
//    } else {

//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     console.log(latitude, longitude)
//    }
// } )



const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}