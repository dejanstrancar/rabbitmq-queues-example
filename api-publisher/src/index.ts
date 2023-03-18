import client, {Connection, Channel} from "amqplib"

async function main():Promise<any>{
    const connection:Connection = await client.connect("amqp://localhost:5672")

    const channel: Channel = await connection.createChannel()
    await channel.assertQueue("Beta")
    await channel.assertQueue("Staging")
    await channel.assertQueue("QA")
    let counter = 0
    let counter2 = 1000
    let counter3 = 100000

    setInterval(()=>{
        counter++;
        const message = Buffer.from(JSON.stringify({title:`B message ${counter}`, message:'test', id:1, client_id:55}))
        channel.sendToQueue('Beta', message)
        console.log("(Beta) >> ",message.toString())
    },100)

    setInterval(()=>{
        counter2++;
        const message = Buffer.from(JSON.stringify({title:`S message ${counter2}`, message:'test', id:1, client_id:55}))
        channel.sendToQueue('Staging', message)
        console.log("(Staging)>> ",message.toString())
    },50)

    setInterval(()=>{
        counter3++;
        const message = Buffer.from(JSON.stringify({title:`Q message ${counter3}`, message:'test', id:1, client_id:55}))
        channel.sendToQueue('QA', message)
        console.log("(QA)>> ",message.toString())
    },50)

}



main()
