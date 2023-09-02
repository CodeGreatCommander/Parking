const {user,parkingspaces}=require('./Schema');
async function addUser(req,res){
    await user.create(req.body).then(function(user){
        res.send(user);
    }).catch(function(error) {
        res.status(500).send("Error creating user: " + error.message);
    });
    user.save();
}
async function addParkingSpace(req,res){
    // console.log(req.body)
    await parkingspaces.create(req.body).then(function(parkingspaces){
        res.send(parkingspaces);
    }).catch(function(error) {
        res.status(500).send("Error creating parking space: " + error.message);
    });
}
async function getslots(req,res){
    await parkingspaces.find({}).then(function(parkingspaces){
        res.send(parkingspaces);
    }).catch(function(error) {
        res.status(500).send("Error fetching parking spaces: " + error.message);
    });
}
async function getslots_name_image(req,res){
    await parkingspaces.find({}).select("name img spaces").then(function(parkingspaces){
        res.send(parkingspaces);
    }).catch(function(error) {
        res.status(500).send("Error fetching parking spaces: " + error.message);
    });
}

module.exports ={addUser,getslots,addParkingSpace,getslots_name_image};