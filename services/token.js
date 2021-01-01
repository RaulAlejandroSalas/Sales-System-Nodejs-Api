import jwt from 'jsonwebtoken'
import models from '../models'

async function checkToken(token){
    let __id = null
    try {
        const {_id}= await jwt.decode(token)
        __id = _id;
    } catch (error) {
        return false
    }
    const user = await models.User.findOne({_id:__id,state:1})
    if(user){
        const _token = jwt.sign({_id:__id},'secret',{expiresIn:'1d'})
        return {token:_token,rol:user.rol}
    }
}


export default{
    encode: async(id)=>{
        return jwt.sign({_id:id},'secret',{expiresIn: '1d'})
    },
    decode: async(token)=>{
        try {
            const {_id} = await jwt.verify(token,'secret')
            const user = await models.User.findOne({_id,state:1})
            if(user){
                return user;
            }else{
                return false;
            }
        } catch (error) {
            return await checkToken(token)
        }
    }
}