import models from '../models';

export default{
    add: async (req,res,next)=>{
        try {
            const resp = await models.Person.create(req.body);
            res.status(201).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Inserting a new Person with Body: ${req.body}`
            })
            next(error);            
        }
    },
    query:async (req,res,next)=>{
        try {
            const resp = await models.Person.findById({_id:req.query.id});
            console.log(resp);
            if(!resp){
                res.status(404).send({message: `The Person not exist with the Query: ${req.query.id}`})
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
            let pattern = req.query.filter;
            const resp = await models.Person.find({$or:[
                                                    {'name': new RegExp(pattern,'i')},
                                                    {'email': new RegExp(pattern,'i')}
                                                ]},{createdAt:0})
                                              .sort({'createdAt':-1})
            res.status(200).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Not Exists Categories in the Database...`
            })
            next(error);            
        }  
    },
    listClient: async (req,res,next)=>{
        try {
            let pattern = req.query.filter;
            const resp = await models.Person.find({$or:[
                                                    {'name': new RegExp(pattern,'i')},
                                                    {'email': new RegExp(pattern,'i')}
                                                ],'type_person':'CLIENT'},{createdAt:0})
                                              .sort({'createdAt':-1})
            res.status(200).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Not Exists Categories in the Database...`
            })
            next(error);            
        }  
    },
    listProvider: async (req,res,next)=>{
        try {
            let pattern = req.query.filter;
            const resp = await models.Person.find({$or:[
                                                    {'name': new RegExp(pattern,'i')},
                                                    {'email': new RegExp(pattern,'i')}
                                                ],'type_person':'PROVIDER'},{createdAt:0})
                                              .sort({'createdAt':-1})
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
            const resp = await models.Person.findByIdAndUpdate({_id:req.body.id},
                {
                    type_person:req.body.type_person,
                    name:req.body.name,
                    type_document: req.body.type_document,
                    num_document: req.body.num_document,
                    address: req.body.address,
                    phone: req.body.phone,
                    email: req.body.email
                })
            res.status(200).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Updating a User with id:  ${req.body.id}`
            })
            next(error);            
        }
    },
    remove:async (req,res,next)=>{
        try {
            const resp = await models.Person.findOneAndRemove({_id:req.body.id})
            res.status(200).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Deleting a Person with id: ${req.body.id}`
            })
            next(error);            
        }              
    },
    activate:async (req,res,next)=>{
        try {
            const resp = await models.Person.findByIdAndUpdate({_id:req.body.id},{state:1});
            res.status(201).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Activating a Remove with id: ${req.body.id}`
            })
            next(error);            
        }   
    },
    deactivate:async (req,res,next)=>{
        try {
            const resp = await models.Person.findByIdAndUpdate({_id:req.body.id},{state:0});
            res.status(201).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Deactivating a Person with id: ${req.body.id}`
            })
            next(error);            
        }   
    }
}