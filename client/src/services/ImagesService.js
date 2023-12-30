import { api } from "./AxiosService.js";
import { logger } from '../utils/Logger';
import { AppState } from "../AppState.js";
class ImagesService {


    async getImages() {
        const res = await api.get('api/images')
        logger.log('got images FINISH IN THE SERVICE', res.data)
        AppState.activeImage = new Image(res.data)
        logger.log(AppState.activeImage)

    }
}

export const imagesService = new ImagesService()