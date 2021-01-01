import tokenService from '../services/token'

export default{
    verifyUser: async (req,res,next)=>{
        if(!req.headers.token){
            return res.status(404).send({message: 'Not Token'})
        }
        const resp = await tokenService.decode(req.headers.token)
        if(resp.rol == 'ADMIN' || resp.rol == 'SELLER' || resp.rol == 'GROCER'){
            next()
        }else{
            return res.status(403).send({
                message: 'Not Authorized'
            })
        }
    },
    verifyAdmin: async (req,res,next)=>{
            if(!req.headers.token){
                return res.status(404).send({message: 'Not Token'})
            }
            const resp = await tokenService.decode(req.headers.token)
            if(resp.rol == 'ADMIN'){
                next()
            }else{
                return res.status(403).send({
                    message: 'Not Authorized'
                })
            }
      
    },
    verifyGrocer: async (req,res,next)=>{
            if(!req.headers.token){
                return res.status(404).send({message: 'Not Token'})
            }
            const resp = await tokenService.decode(req.headers.token)
            if(resp.rol == 'ADMIN' || resp.rol == 'GROCER'){
                next()
            }else{
                return res.status(403).send({
                    message: 'Not Authorized'
                })
            }
    },
    verifySeller: async (req,res,next)=>{
       
            if(!req.headers.token){
                return res.status(404).send({message: 'Not Token'})
            }
            const resp = await tokenService.decode(req.headers.token)
            if(resp.rol == 'ADMIN' || resp.rol == 'SELLER'){
                next()
            }else{
                return res.status(403).send({
                    message: 'Not Authorized'
                })
            }
    }
}