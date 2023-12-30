import { AppState } from "../AppState"
import { Weather } from "../models/Weather"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class WeatherService {

    async getWeather() {
        const res = await api.get(`api/weather`)
        logger.log('got weather FINISH IN THE SERVICE', res.data)
        AppState.weather = new Weather(res.data)
        logger.log('finished weather', AppState.weather)
    }
}

export const weatherService = new WeatherService()