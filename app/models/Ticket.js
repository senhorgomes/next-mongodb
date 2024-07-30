import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGODB_URI);
// Was removed in Mongoose 4???
// mongoose.Promise = global.Promise;
// const readyForFlight = async () => {
//     await mongoose.connect(process.env.MONGODB_URI);
// }

// readyForFlight().catch((err)=>console.log(err));
const ticketSchema = Schema(
    {
        title: String,
        description: String,
        category: String,
        priority: Number,
        progress: Number,
        status: String,
        active: Boolean,
    },
    {
        timestamps: true,
    }
)
// Check if ticket exists in database. If it doesn't create it
const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;