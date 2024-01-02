import { AppState } from "../AppState"
import { Quote } from "../models/Quote"
import { logger } from "../utils/Logger"
import { api, bcwSandbox } from "./AxiosService"

class QuotesService {

    async getQuote() {
        const res = await bcwSandbox.get(`api/quotes`)
        AppState.quote = new Quote(res.data)
        // logger.log('Got quote', AppState.quote)
    }
}

export const quotesService = new QuotesService()