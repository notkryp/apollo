import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
        unique: true
    },
    fathersName:{
        type: String,
        required: true,
        unique: true
    },
    mothersName:{
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{
        type: Number,
        required: true,
        unique: true
    },
    emailAddress:{
        type: String,
        required: true,
        unique: true
    },
},
{
    timestamps: true
}

)


const User = mongoose.model("User", formSchema);

export default User;