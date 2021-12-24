const {Router} = require("express")
const TelegramBot = require('node-telegram-bot-api');

const token = '5086454189:AAGEiiW44UuAvHhqk3R8gFgsRu2k4UgZlCQ';
const bot = new TelegramBot(token, {polling: true});
const chatId = '-739155854'

// bot.on('message', function (msg) {
//     console.log(msg.text);
// });

const router = Router()

router.post('/message', (req, res) => {
    const {type, name, phone} = req.body
    bot.sendMessage(chatId, `${type}\n Имя: ${name} \n Телефон: ${phone}`);
    res.status(200).send(req.body)

})
router.post('/order', (req, res) => {
    const {product, totalCount, totalPrice, name, phone, date} = req.body

    const prod = product.map(item => {
        return `\n ${item.name}  ${item.count} шт.  ${item.price} грн. `
    })

    const str = `Було прийняте замовленя:\n Імя: ${name} \n Телефон: ${phone}\n\nЗамовлення:${prod}\n\nКількість товару:  ${totalCount} шт.   Ціна: ${totalPrice} грн. \n\n Дата: ${date}`

    bot.sendMessage(chatId, str);
    res.status(200).send(req.body)

})

module.exports = router