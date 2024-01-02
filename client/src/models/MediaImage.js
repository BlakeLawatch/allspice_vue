export class MediaImage {
    constructor(data) {
        this.url = data.url
        this.imgUrl = data.imgUrl
        this.largeImgUrl = data.largeImgUrl
        this.author = data.author
    }
}

const data = {
    "url": "https://pixabay.com/get/gf5400fcd7d48ba821ecd47f52d111e53cd305bf1e1c6e3d24974945f39baf62396f9fd672cc7bab2b6b916ffe748070467b313d200efc9e0baee7ba5cf7be189_640.jpg",
    "imgUrl": "https://pixabay.com/get/gf5400fcd7d48ba821ecd47f52d111e53cd305bf1e1c6e3d24974945f39baf62396f9fd672cc7bab2b6b916ffe748070467b313d200efc9e0baee7ba5cf7be189_640.jpg",
    "largeImgUrl": "https://pixabay.com/get/g7331654f4b15d9f1031c7d0e990ed0bb9f520bcfa68954164c5d1bbdd52fab8c8afded8be735472e26f72113ca683402753dbe0e0b55c8beece1faeb76c73028_1280.jpg",
    "tags": "forest, trees, sun rays",
    "author": "Valiphotos",
    "query": "fog"
}