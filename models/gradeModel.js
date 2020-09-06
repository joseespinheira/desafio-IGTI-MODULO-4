
export default (mongoose) => {

const schema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    subject:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,
    },
    value:{
        type: String,
        required: true,
    },
    lastModified:{
        type: String,
        required: true,
    },
});

 const gradeModel = mongoose.model('grade', schema);
 return gradeModel;
}