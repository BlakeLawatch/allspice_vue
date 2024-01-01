import { Schema } from "mongoose";

export const ToDoSchema = new Schema(
    {
        creatorId: { type: Schema.Types.ObjectId, required: true },
        description: { type: String, required: true, maxLength: 30 },
        completed: { type: Boolean, required: true, default: false }
    },
    {
        timestamps: true, toJSON: { virtuals: true }
    }
)

ToDoSchema.virtual('creatorId', {
    localField: "creatorId",
    foreignField: "_id",
    ref: "Account",
    justOne: true
})