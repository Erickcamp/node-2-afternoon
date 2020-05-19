const express = require('express')
const app = express()
const mc = require('./controllers/messages_controller')

const SERVER_PORT = 3001

const messagesBaseUrl = '/api/messages'

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));

app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)
})

