import models from '../models';
export default{
    add: async (req,res,next)=>{
        try {
            const resp = await models.Article.create(req.body);
            res.status(201).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Inserting a new Article with Body: ${req.body}`
            })
            next(error);            
        }
    },
    query:async (req,res,next)=>{
        try {
            const resp = await models.Article.findById({_id:req.query.id})
                                             .populate('category',{name:1}) 
            console.log(resp);
            if(!resp){
                res.status(404).send({message: `The Article not exist with the Query: ${req.query.id}`})
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
            const resp = await models.Article.find(
                                                {$or:[
                                                {'name': new RegExp(pattern,'i')},{'description': new RegExp(pattern,'i')}]},
                                                {createdAt:0})
                                              .populate('category',{name:1})  
                                              .sort({'createdAt':-1})
            res.status(200).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Not Exists Articles in the Database...`
            })
            next(error);            
        }  
    },
    update:async (req,res,next)=>{
        try {
            const resp = await models.Article.findByIdAndUpdate({_id:req.body.id},
                {
                   category: req.body.category,
                   name:req.body.name,
                   sale_price:req.body.sale_price,
                   code: req.body.code,
                   stock: req.body.stock, 
                   description:req.body.description,
                }
            )
            res.status(200).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Updating a Article with id:  ${req.body.id}`
            })
            next(error);            
        }
    },
    remove:async (req,res,next)=>{
        try {
            const resp = await models.Article.findOneAndRemove({_id:req.body.id})
            res.status(200).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Deleting a Article with id: ${req.body.id}`
            })
            next(error);            
        }              
    },
    activate:async (req,res,next)=>{
        try {
            const resp = await models.Article.findByIdAndUpdate({_id:req.body.id},{state:1});
            res.status(201).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Activating a Article with id: ${req.body.id}`
            })
            next(error);            
        }   
    },
    deactivate:async (req,res,next)=>{
        try {
            const resp = await models.Article.findByIdAndUpdate({_id:req.body.id},{state:0});
            res.status(201).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Deactivating a Article with id: ${req.body.id}`
            })
            next(error);            
        }   
    }
}