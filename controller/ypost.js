const YPOST = require("../model/ypost");
exports.createYpostControlller = async(req,res,err)=>{
    try {
        const {thumbimage,title,subtitle,description,postdate,profile,cname} = req.body;
        const YPostModel = new YPOST(thumbimage,title,subtitle,description,postdate,profile,cname);
        const createRecord = await YPostModel.createYpost();
        return res.status(200).json({
            createRecord,
            msg : "youtube post db created successfully"
        });
    } catch (error) {
        console.log(error);
    }

}
 exports.getYPostController = async(req,res,err)=>{
    const YPostModel = await YPOST.getYpost();
    return res.status(200).json(YPostModel[0],"getting data"); 
 }
 