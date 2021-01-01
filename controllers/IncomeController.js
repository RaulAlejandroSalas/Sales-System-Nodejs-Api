import models from '../models';

async function incrementStock(idArticle,quantity){
    let {stock} = await models.Article.findOne({_id:idArticle});
    let newStock = parseInt(stock)+parseInt(quantity);
    return await models.Article.findByIdAndUpdate({_id:idArticle},{stock:newStock})
}

async function decrementStock(idArticle,quantity){
    let {stock} = await models.Article.findOne({_id:idArticle});
    let newStock = parseInt(stock)-parseInt(quantity);
    return await models.Article.findByIdAndUpdate({_id:idArticle},{stock:newStock})
}


export default{
    add: async (req,res,next)=>{
        try {
            const resp = await models.Income.create(req.body);
            //Updating Stock Articles
            let details = req.body.details
            details.map(x=>incrementStock(x._id,x.quantity))
            res.status(201).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Inserting a new Income with Body: ${req.body}`
            })
            next(error);            
        }
    },
    query:async (req,res,next)=>{
        try {
            const resp = await models.Income.findById({_id:req.query.id}).populate('users',{name:1}).populate('persons',{name:1}) 
            if(!resp){
                res.status(404).send({message: `The Income not exist with the Query: ${req.query.id}`})
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
            const resp = await models.Income.find({$or:[{'num_receipt': new RegExp(pattern,'i')},{'serie_receipt': new RegExp(pattern,'i')}]},{createdAt:0})
                                            .populate('users',{name:1})
                                            .populate('persons',{name:1})  
                                            .sort({'createdAt':-1})
            res.status(200).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Not Exists Incomes in the Database...`
            })
            next(error);            
        }  
    },
    activate:async (req,res,next)=>{
        try {
            const resp = await models.Income.findByIdAndUpdate({_id:req.body.id},{state:1});
            let details = resp.details
            details.map(x=>incrementStock(x._id,x.quantity))
            res.status(201).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Activating a Income with id: ${req.body.id}`
            })
            next(error);            
        }   
    },
    deactivate:async (req,res,next)=>{
        try {
            const resp = await models.Income.findByIdAndUpdate({_id:req.body.id},{state:0});
            let details = resp.details
            details.map(x=>decrementStock(x._id,x.quantity))
            res.status(201).send(resp);
        } catch (error) {
            res.status(500).send({
                message: `Error Deactivating a Income with id: ${req.body.id}`
            })
            next(error);            
        }   
    }
}