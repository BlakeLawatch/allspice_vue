import { api } from "./AxiosService.js";
import { logger } from '../utils/Logger';
import { AppState } from "../AppState.js";
class ImagesService {


    async getImage() {
        const res = await api.get('api/images')
        // AppState.activeImage = res.data.map(pojo => new Image(pojo))
        AppState.activeImage = new Image(res.data)
        logger.log('Active image', AppState.activeImage)

    }
}

export const imagesService = new ImagesService()