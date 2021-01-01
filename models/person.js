import mongoose,{Schema} from 'mongoose'

const personSchema = new Schema({
    type_person:{type:String,maxlength:20, required:true},
    name:{ type:String, maxlength:50, unique:true, required:true},
    type_document: {type:String, maxlength:20},
    num_document: {type:String, maxlength:20},
    address:{ type: String, maxlength: 70},
    phone:{type:String,maxlength:20},
    email: {type:String, maxlength:50,unique:true},
    state: {type:Number,default:1},
    createdAt:{ type:Date, default:Date.now}
})

const person = mongoose.model('persons',personSchema)


export default person;