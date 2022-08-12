const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const tutorial = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  Tutorial.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

exports.DeleteUser = (req, res) => {
    const id = req.body.id;
    Tutorial.destroy({ where: { id: id } }).then(tutorial => {
        res.send({
            msg: "User Deleted Successfully"
        })
    }).catch(
        err => {
            res.send({
                msg: "Something went worng...!"
            })
        }
    );
};
exports.GetUser = (req, res) => {
    const id = req.body.id;
    Tutorial.findOne({ where: { id: id } }).then(tutorial => {
        res.send({
            msg: `details with matched id=${id}` 
        })
    }).catch(
        err => {
            res.send({
                msg: "Something went worng...!"
            })
        }
    );
};

exports.UpdateUser = (req, res) => {

    const id = req.body.id;

    const name = req.body.name;

    const email = req.body.email;

    const password = req.body.password;

    Tutorial.findOne({ where: { id: id } }).then(tutorial => {

        tutorial.update({

            name: name,

            // email: email,

            // password: password

        })

        res.send("user successfully updated");

        tutorial.save();

    }).catch(

        err => {

            res.send({

                msg: "Something went worng...!"

            })

        }

    );

};