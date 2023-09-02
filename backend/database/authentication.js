const { user } = require("./Schema");
const jwt = require("jsonwebtoken");
const password = require("generate-password");
async function signUp(req, res) {
  pass = password.generate({
    length: 30,
    numbers: true,
  });
  req.body.privateKey = pass;
  req.body.exp_privateKey = new Date(Date.now() + 86400000);
  await user
    .create(req.body)
    .then(function (user) {
        user.set({secretKey:pass})
      const token = jwt.sign({ id: user._id }, pass, { expiresIn: "0.1h" });
      res.cookie("token", token, { httpOnly: true });
      res.send("User created");
    })
    .catch(function (error) {
      res.status(500).send("Error creating user: " + error.message);
    });
  user.save();
}

async function logIn(req, res) {
  try {
    pass = password.generate({
      length: 30,
      numbers: true,
    });
    await user
      .findOne({ email: req.body.email })
      .then(async function (user) {
        if (use.password === req.body.password) {
          const token = jwt.sign({ id: user._id }, pass, { expiresIn: "0.1h" });
          res.cookie("token", token, { httpOnly: true });
          res.send("User logged in");
        }
      })
      .catch(function (error) {
        res.status(500).send("Error logging in: " + error.message);
      });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function verify(req) {
  const token = req.cookies.token;
  if (!token) {
    return false;
  }
  try {
    const u=await user.findById(token.id) 
    const decoded = jwt.verify(token, u.secretKey);
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = { signUp, logIn, verify };
