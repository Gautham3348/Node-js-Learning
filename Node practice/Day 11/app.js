const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/notes")
.then(()=>console.log("mongodb is connected succesfully"))
.catch(err => console.log(err));

const NoteSchema = new mongoose.Schema({
    id:{type : Number, required:true},
    notes:{type:String, required:true}
})

const Note = mongoose.model("Note", NoteSchema);

app.post("/notes", async(req,res)=>{
    try{
        const notes = await Note.create({id:req.body.id ,notes : req.body.notes});
        res.status(201).json(notes);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})

app.get("/notes", async(req,res)=>{
    try{
        const notes = await Note.find();
        res.status(200).json(notes);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})

app.put("/notes/:id", async(req,res)=>{
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
})

app.delete("/notes/:id", async(req,res)=>{
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
})

app.listen(5000, ()=>{
    console.log("server running on port 5000")
})