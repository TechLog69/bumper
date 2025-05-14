require('dotenv').config()
const { Client } = require('discord.js-selfbot-v13')
const client = new Client()

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`)

    const channel = await client.channels.fetch("1178465177893617716")
    
    async function bump() {
        await channel.sendSlash('302050872383242240', 'bump')
        console.count('Bumped!')
    }

    function loop() {
        // send bump message every 2-3 hours, to prevent detection.
        var randomNum = Math.round(Math.random() * (9000000 - 7200000 + 1)) + 7200000
        setTimeout(function () {
            bump()
            loop()
        }, randomNum)
    }
    
    bump()
    loop()
})

client.login("MTM3MTkzMjAzNDE0NjIzODU2NA.G1V3oN.LDo2zfaj9JaQq7vWdOMuCuPhyyE69N2hU6Zyy8")
