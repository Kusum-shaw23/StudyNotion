const Tag= require("../models/Tags");
//create tag ka handler function
exports.Tag=async(removeEventListener,res)=>{
    try{
        const {name,description}=req.body;
        if(!name ||!description){
            return res.json({
                success:false,
                message:"All fields are required",
            });
        }
        //create a entry in db
         const tagDetails =await Tag.create ({
            name:name,
            description:description,
         });
         console.log(tagDetails);
         //return response
         return res.status(200).json({
            succes:true,
            message:"Tag Created Successfully",
         });

    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        });

    }
};

//getalltags
exports.showAllTags=async(req,res)=>{
    try{
        const allTags= await Tag.find({} ,{name:true,description:true});
        res.status(200).json({
            success:true,
            message:"All tags returned successfully",
        });

    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}