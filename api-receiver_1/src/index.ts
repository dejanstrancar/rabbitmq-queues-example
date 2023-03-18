import client,{Connection,Channel,ConsumeMessage} from "amqplib"

const consumer = (channel: Channel) => (msg: ConsumeMessage | null): void => {
    if (msg) {
        // Display the received message
        console.log(`(Beta) << `)
        console.log(JSON.parse(msg.content.toString()))
        // Acknowledge the message
        channel.ack(msg)
    }
}


async function main():Promise<any>{
    const connection:Connection = await client.connect("amqp://localhost:5672")

    const channel: Channel = await connection.createChannel()
    await channel.assertQueue("Beta")
    await channel.consume("Beta", consumer(channel))
}

console.log("Hello world!")

main()

