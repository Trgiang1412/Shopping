const Users = require('../model/User');

exports.register = async(req, res, next) => {
    const { Email, Name, passWord } = req.body
    try {
        // const salt = await bcrypt.genSalt()
        // const hashedPassword = await bcrypt.hash(req.body.passWord, salt)
        const creatUser = await Users.create({ Email, Name, passWord })
        res.status(201).json({
            success: true,
            creatUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}
exports.login = async(req, res, next) => {
    const { Email, passWord } = req.body
    if (!Email || !passWord) {
        res.status(404).json({
            success: false,
            message: "vui long nhap thong tin"
        })
    }
    try {
        const user = await Users.findOne({ Email }).select("+passWord")
        console.log(user)
        if (!user) {
            res.status(404).json({
                success: false,
                message: "nguoi dung khong ton tai"
            })
        }
        const isMatchPassword = await user.matchPassword(passWord)
        if (!isMatchPassword) {
            res.status(404).json({
                success: false,
                message: "mat khau khong hop le"
            })
        }
        res.status(200).json({
            success: true,
            token: 'rt5erd656'
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }

}
exports.forgotPassword = function(req, res, next) {
    res.send('abc')
}