const Note = require("../models/noteModel")

module.exports.postNote = async (req,res)=>{
    try{
        const notes = await Note.create({id:req.body.id ,notes : req.body.notes});
        res.status(201).json(notes);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

module.exports.getNote = async(req,res)=>{
    try{
        const notes = await Note.find();
        res.status(200).json(notes);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

module.exports.putNote = async(req,res)=>{
    try{
        const notes = await Note.findOneAndUpdate({id : Number(req.params.id)},
            {notes:req.body.notes},
            {new:true}
    )
    if(!notes){
        return res.status(404).json({message:"user not found"})
    }

        res.status(200).json(notes);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

module.exports.deleteNote =  async(req,res)=>{
    try{
        const notes = await Note.findOneAndDelete({id:Number(req.params.id)});
        if(!notes){
        return res.status(404).json({message:"user not found"})
    }
        res.status(200).json(notes)
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}