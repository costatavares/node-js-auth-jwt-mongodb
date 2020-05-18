const db = require("../models");
const user = db.user;

// exports.allAccess = (req, res) => {
   
//     user.find(function (err, users) {
//         if (err) return next(err);
//         res.json(users);
//     });
// };

module.exports = {
    allAccess:(req, res, next) => {
                
        user.find(function (err, users) {
            if (err) return next(err);
            res.json(users);
        });
    }    
}