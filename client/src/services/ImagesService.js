import { api, bcwSandbox } from "./AxiosService.js";
import { logger } from '../utils/Logger';
import { AppState } from "../AppState.js";
import { MediaImage } from "../models/MediaImage.js";
class ImagesService {


    async getImage() {
        const res = await bcwSandbox.get('api/images')
        // AppState.activeImage = res.data.map(pojo => new Image(pojo))
        AppState.activeImage = new MediaImage(res.data)
        // logger.log('Active image', AppState.activeImage)

    }
}

export const imagesService = new ImagesService()