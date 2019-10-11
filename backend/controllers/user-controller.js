const userCtrl = {};
const User = require('../models/user');

userCtrl.getUsers= async(req, res) => {
    const users = await User.find();
    res.json(users);
};

userCtrl.getUser= async(req, res)=>{
   const userId= await User.findById(req.params.id);
   res.json(userId);
};


userCtrl.createUser = async (req, res)=>{
    const user= new User(req.body);
    await user.save();
    res.json({
            'status' : 'user Saved'
        });
},

userCtrl.updateUser = async (req, res)=>{
    
    const {id} = req.params;
    const user= {
        username: req.body.username,
        password : req.body.password,
        type: req.body.type,
        desc: req.body.desc
    };

    await User.findByIdAndUpdate(id, {$set: user}, {new:true});

    res.json({status : 'User Updated'});
};

userCtrl.deleteUser =async (req, res)=>{
    await User.findByIdAndRemove(req.params.id);
    res.json({status : 'User Deleted'});
}

module.exports= userCtrl;