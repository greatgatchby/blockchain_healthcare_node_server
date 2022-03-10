// Check access control standards
const {AccessRequest} = require("../controllers/AccessControl");
const AccessCheck = (req, res, next) => {
    console.log(AccessRequest.check(req.params.uid))
    next()
}
//set access control option
const Authentication = {
    AccessCheck: AccessCheck,
}
module.exports = {
    Authentication
}
