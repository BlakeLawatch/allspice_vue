export class Weather {
    constructor(data) {
        this.id = data.id
        this.main = ((data.main.temp - 273.15) * 9 / 5 + 32).toFixed(0)
        this.mainCelsius = (data.main.temp - 273.15).toFixed(0)
        this.name = data.name
        this.clouds = data.clouds.all
    }
}

const data = {
    "coord": {
        "lon": -116.2035,
        "lat": 43.6135
    },
    "weather": {
        "0": {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        },
        "icon": "https://openweathermap.org/img/wn/undefined.png"
    },
    "base": "stations",
    "main": {
        "temp": 276.85,
        "feels_like": 276.85,
        "temp_min": 275.33,
        "temp_max": 278.58,
        "pressure": 1018,
        "humidity": 86
    },
    "visibility": 10000,
    "wind": {
        "speed": 0,
        "deg": 0
    },
    "clouds": {
        "all": 0
    },
    "dt": 1703959492,
    "sys": {
        "type": 2,
        "id": 2043419,
        "country": "US",
        "sunrise": 1703949476,
        "sunset": 1703981780
    },
    "timezone": -25200,
    "id": 5586437,
    "name": "Boise",
    "cod": 200,
    "origin": "https://openweathermap.org"
}