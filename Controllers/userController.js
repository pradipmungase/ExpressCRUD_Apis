import user from "../Model/userModel.js";

class userController{

    static getAllUsers = async (req , res) => {
        try {
            const data = await user.find(); 
            res.send(data); 
        } catch (err) {
            console.error(err);
            res.status(500).send('something went wrong'); 
        }
    }

    static createUser = async (req, res) => {
        try {
            const { name, mobile } = req.body; 
            const u = new user({
                name,
                mobile,
            });
            await u.save();  
            res.send('Use Created!');
        } catch (err) {
            console.error(err);
            res.status(500).send(err); 
        }
    }
    

    static getUserByID = async (req, res) => {
        try {
            const id = req.params.id;
            const data = await user.findById(id); 
            res.send(data); 
        } catch (err) {
            console.error(err);
            res.status(500).send('something went wrong'); 
        }
    }
}
export default userController;