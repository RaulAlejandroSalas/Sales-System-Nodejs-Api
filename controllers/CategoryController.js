import models from '../models';
export default{
    add: async (req,res,next)=>{
        try {
            const resp = await models.Category.create(req.body);
            res.status(201).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Inserting a new Category with Body: ${req.body}`
            })
            next(error);            
        }
    },
    query:async (req,res,next)=>{
        try {
            const resp = await models.Category.findById({_id:req.query.id});
            console.log(resp);
            if(!resp){
                res.status(404).send({message: `The Category not exist with the Query: ${req.query.id}`})
            }else{
                res.status(200).send(resp);
            }
        } catch (error) {
            res.status(500).send({
                message: `Error Executing the Query ${req.query.id}`
            })
            next(error);            
        }
    },
    list:async (req,res,next)=>{
        try {
            const resp = await models.Category.find({});
            res.status(200).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Not Exists Categories in the Database...`
            })
            next(error);            
        }  
    },
    update:async (req,res,next)=>{
        try {
            const resp = await models.Category.findByIdAndUpdate({_id:req.body.id},{
                name:req.body.name,
                description:req.body.description,
            })
            res.status(200).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Updating a  Category with id:  ${req.body.id}`
            })
            next(error);            
        }
    },
    remove:async (req,res,next)=>{
        try {
            const resp = await models.Category.findOneAndRemove({_id:req.body.id})
            res.status(200).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Deleting a Category with id: ${req.body.id}`
            })
            next(error);            
        }              
    },
    activate:async (req,res,next)=>{
        try {
            const resp = await models.Category.findByIdAndUpdate({_id:req.body.id},{state:1});
            res.status(201).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Activating a Category with id: ${req.body.id}`
            })
            next(error);            
        }   
    },
    deactivate:async (req,res,next)=>{
        try {
            const resp = await models.Category.findByIdAndUpdate({_id:req.body.id},{state:0});
            res.status(201).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Deactivating a Category with id: ${req.body.id}`
            })
            next(error);            
        }   
    }
}