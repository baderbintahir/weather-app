const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const weatherstackURL = `http://api.weatherstack.com/current?access_key=1622ff09545de1b5e603175f140f2013&query=${latitude},${longitude}-122.4233&units=f`

    request({ url: weatherstackURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to the Weather Stack API.', undefined)
        } else if (response.body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degress out. It feels like ${response.body.current.feelslike} degrees out`)
        }
    })
}

module.exports = forecast