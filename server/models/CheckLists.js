import mongoose, { mongo } from "mongoose";

const checkListSchema = new mongoose.Schema({
    state : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "State",
        index : true
    },
    branchname: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Branch"
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    },
    rule : {
        type : String,
        required : true,
        trim : true,
        index : true
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category",
        index : true
    },
    status : {
        type : Number,
        default : 0,
        trim : true,
        index : true
    },
    description : {
        type : String,
        required: true,
        trim : true,
        index : true
    },
    image : {
        type : Object,
        index : true
    },
    documents : {
        type : Object,
        index : true
    },
    imageype: {                     ////Indicate the form or format associated with the compliance entry if applicable
        type: Object,
    },
    documentstype: {
        type: Object,
    }, 
    executive: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    compliance:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Compliance"
    },
    frequency: {           /////one-time requirement, monthly, annually,custom combobox
        type: String,
        required: true,
        trim: true,
        index:true
    }, 
    risk :{
        type : String,
        required : true,
        trim : true,
        index : true
    },
    ruletype:                         /////Specify the specific rule or regulation associated with the compliance entry
    [{
        id: { type: Number },
        value: { type: String }
    }],
    questiontype: 
    [{
        id: { type: Number },
        value: { type: String }
    }],
    descriptiontype : 
    [{
        id: { type: Number },
        value: { type: String }
    }],
    question :{
        type : String,
        required : true,
        trim : true,
        index : true
    },
    approvedate:{
        type : String,
        // required : true,
        default: null,
        trim : true,
        index : true
    },
    reason: {           
        type: String,
       // required: true,
        trim: true,
        index:true
    },  
    rejected_at : { 
        type: Date, 
        index: true 
    },
    created_at : { 
        type: Date, 
        default: Date.now, 
        index: true 
    },
    updated_at : { 
        type: Date, 
        index: true 
    },
})

const CheckList =   mongoose.model('CheckList', checkListSchema)
export default CheckList;