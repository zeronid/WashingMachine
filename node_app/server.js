const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const app = express();
const cors = require('cors');
const port = 3001;
const TOKEN = `XXX`
const USER_ID = "XXX"

const bot = new TelegramBot(TOKEN, { polling: true });

app.use(express.json());
app.use(cors());

// Define a route for the endpoint
app.post('/api/hello', (req, res) => {
    console.log("Got request: ", req.body)
    try {
        setTimeout(() => {
            try {
                bot.sendMessage(USER_ID, 'Hello, your washing machine is fnished :)');
            } catch (sendMessageError) {
                console.log("sendMessageError: ", sendMessageError.stack)
            }
        }, 1000 * 60 * req.body.inHowManyMinutes)
        res.json({ message: 'Data received successfully' });
    } catch (timeOutError) {
        console.log("Error in setting timeout", timeOutError.stack)
        res.json({ error: 'There was an error setting time' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});