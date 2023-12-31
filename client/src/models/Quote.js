export class Quote {
    constructor(data) {
        this.id = data.id
        this.content = data.content
        this.author = data.author
    }
}

const data = {
    "_id": "hoOjezE6s2HX",
    "content": "He who knows others is wise. He who knows himself is enlightened.",
    "author": "Laozi",
    "tags": [
        "Wisdom"
    ],
    "authorSlug": "laozi",
    "length": 65,
    "dateAdded": "2021-05-07",
    "dateModified": "2023-04-14"
}