import User from "../models/user.model.js";

// Create User

const createUser = async (req, res) => {
  try {
    //1. if grp: self then validate or just validate other suff accept register
    //2. diff schema : register later loop validation , course,area , institute
    // console.log(req.body)
    // User Validation
    const value = await userValidation.validateAsync(req.body);
    const users = await User.create(value);
    // console.log(value.error)
    await users.save();
    // console.log('created')
    res.send("Success");
    // Already Exists
    // const exists = await User.find({'data.register.email'})
    // if(exists){

    // }
    // create user
  } catch (err) {
    res.json({ error: err });
  }
};

createUser;
getUser;
getAllUser;
updateUser;
removeUser;
