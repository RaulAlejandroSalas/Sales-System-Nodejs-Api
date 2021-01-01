import models from '../models';
import bcrypt from 'bcryptjs'
import tokenService from '../services/token';

export default{
    add: async (req,res,next)=>{
        try {
            req.body.password = await bcrypt.hash(req.body.password,10)
            const resp = await models.User.create(req.body);
            res.status(201).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Inserting a new User with Body: ${req.body}`
            })
            next(error);            
        }
    },
    query:async (req,res,next)=>{
        try {
            const resp = await models.User.findById({_id:req.query.id});
            console.log(resp);
            if(!resp){
                res.status(404).send({message: `The User not exist with the Query: ${req.query.id}`})
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
            const resp = await models.User.find(
                                                {$or:[
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
    update:async (req,res,next)=>{
        try {
            let oldPassword = req.body.password
            const reg0 = await models.User.findOne({_id: req.body.id})
            if(oldPassword!=reg0.password){
                req.body.password = await bcrypt.hash(req.body.password,10)
            }
            const resp = await models.User.findByIdAndUpdate({_id:req.body.id},
                {
                    rol:req.body.rol,
                    name:req.body.name,
                    type_document: req.body.type_document,
                    num_document: req.body.num_document,
                    address: req.body.address,
                    phone: req.body.phone,
                    email: req.body.email,
                    password: req.body.password

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
            const resp = await models.User.findOneAndRemove({_id:req.body.id})
            res.status(200).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Deleting a User with id: ${req.body.id}`
            })
            next(error);            
        }              
    },
    activate:async (req,res,next)=>{
        try {
            const resp = await models.User.findByIdAndUpdate({_id:req.body.id},{state:1});
            res.status(201).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Activating a User with id: ${req.body.id}`
            })
            next(error);            
        }   
    },
    deactivate:async (req,res,next)=>{
        try {
            const resp = await models.User.findByIdAndUpdate({_id:req.body.id},{state:0});
            res.status(201).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Deactivating a User with id: ${req.body.id}`
            })
            next(error);            
        }   
    },

    login: async (req,res,next)=>{
        try {
            let user = await models.User.findOne({email:req.body.email,state:1})
            if(user){
                //Compare Password
                let match = bcrypt.compare(req.body.password, user.password)
                if(match){
                    let tokenReturn = await tokenService.encode(user._id)
                    res.status(200).json({user,tokenReturn})
                }else{
                    res.status(404).send({message: `Password Incorrect`})
                }
            }else{
                res.status(404).send({message: `The User with email: ${req.body.email} not exist `})
            }
        } catch (error) {
            res.status(500).send({
                message: `Error Login a User with email: ${req.body.email}`
            })
            next(error);   
        }
    }
}