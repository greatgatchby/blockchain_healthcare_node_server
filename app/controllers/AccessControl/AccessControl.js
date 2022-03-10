const grant = (req,res) => {
    res.status(200).send('Testing endpoint')
}
const check = (req,res) => {
    res.status(200).send('Testing endpoint')
}
const revoke = (req,res) => {
    res.status(200).send('Testing endpoint')
}
module.exports = {
    grant,
    check,
    revoke,
}
