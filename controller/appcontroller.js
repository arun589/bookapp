const user=require('../model/user');
exports.postappointment=async(req,res,next)=>{
    try{
        const name=req.body.name;
        const number=req.body.number;
        const email=req.body.email;
        const data=await user.create({name:name,number:number,email:email});
        res.status(201).json({newuserdata:data});

    }
    catch(err){
        res.status(500).json({
            error:err
        })
    }
}
exports.getalluser=async(req,res,next)=>{
    try{
        const data=await user.findAll();
        res.status(201).json({alluser:data})
    }
    catch(err){
        console.log("failed",err);
        res.status(500).json({
            error:err
        })
        
    }
}
exports.deleteuser=async(req,res,next)=>{
    const id=req.params.id;
    try{
        const data= await user.findByPk(id)
        await data.destroy();
    }catch(err){
        console.log(err);
        res.status(500).json({error:err})
    }
}