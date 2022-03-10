const create = (req,res) => {
    res.status(200).send('Testing endpoint')
}
const check = (response) => {
    if (req.body){
        return response ='Success'
    } else  {
        return response = 'Fail'
    }
}
const update = (req,res) => {
    res.status(200).send('Testing endpoint')
}
const revoke = (req,res) => {
    res.status(200).send('Testing endpoint')
}
module.exports = {
    create,
    check,
    update,
    revoke
}
