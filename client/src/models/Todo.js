export class ToDos {
    constructor(data) {
        this.id = data.id
        this.description = data.description
        this.completed = data.completed
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
    }
}

const data = {
    "_id": "659356a84870de6f5b92ebc6",
    "creatorId": "6541827fc58db642d7c02476",
    "description": "another to do",
    "completed": false,
    "createdAt": "2024-01-02T00:19:52.524Z",
    "updatedAt": "2024-01-02T00:19:52.524Z",
    "__v": 0,
    "id": "659356a84870de6f5b92ebc6"
}