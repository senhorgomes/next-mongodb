import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGODB_URI);
const userSchema = Schema(
    {
        id: String,
        name: String,
        email: String,
    },
    {
        timestamps: true,
    }
)
// Check if User exists in database. If it doesn't create it
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;