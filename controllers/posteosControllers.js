
const posteosModel = require ("../models/posteosModel.js")


const traerPosteos= async (req,res)=>{
    try {
        const posteos = await posteosModel.findAll()
        res.json (posteos)
    } catch (error) {
        res.json({message:error.message}) 
    }
}

const traerUnPosteo= async (req,res)=>{
try {                                             
    const posteo = await posteosModel.findByPk(req.params.id)
    res.json(posteo)
} catch (error) {
    res.json({message:error.message}) 
}
}


const crearPosteo = async (req,res)=>{
    try {
        await posteosModel.create(req.body)
res.json({"message": "Registro creado correctamente"})
    } catch (error) {
        res.json({message:error.message}) 
    }
}


const actualizarPosteo = async (req,res) =>{
    try {
        await posteosModel.update(req.body,{
            where :{id:req.params.id}
        })
        res.json({"message": "Registro actualizado correctamente"}) 
    } catch (error) {
        res.json({message:error.message}) 
    }
}

const borrarPosteo = async (req,res)=>{
    try {
        await posteosModel.destroy({where :{id:req.params.id}})
        res.json({"message": "Posteo Borrado correctamente"}) 
    } catch (error) {
        res.json({message:error.message}) 
    }
}


module.exports= {traerPosteos,traerUnPosteo,crearPosteo,actualizarPosteo,borrarPosteo }