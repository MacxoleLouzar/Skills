const amqp = require("amqplib");

const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect("amqp://localhost:5673");
    const channel = await connection.createChannel();

    const exchange = "Employee_exchange";
    await channel.assertExchange(exchange, "fanout", { durable: false });

    return { connection, channel, exchange };
  } catch (error) {
    console.log("Error connecting to RabbitMQ:", error.message);
    throw error;
  }
};

module.exports = connectRabbitMQ;
