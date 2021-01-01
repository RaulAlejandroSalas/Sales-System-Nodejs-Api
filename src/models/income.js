import mongoose,{Schema} from 'mongoose'
const incomeSchema = new Schema({
    user: {type: Schema.ObjectId, ref: 'users', required:true},
    person: {type:Schema.ObjectId, ref:'persons',required:true},
    type_receipt: {type:String,maxlength:20, required:true},
    serie_receipt: {type:String,maxlength:7},
    num_receipt:{type:String,maxlength:10,required:true},
    tax:{type:Number,required:true}, //Percent income
    total:{ type: Number,required:true},    
    details:[{
        _id:{
            type:String,
            required:true
        },
        article:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        price:{
            type: Number,
            required: true
        }
    }],
    state: {type:Number,default:1},
    createdAt:{ type: Date, default: Date.now}
})

const income = mongoose.model('incomes',incomeSchema)

export default income;