const amqp = require("amqplib");

const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect("amqp://localhost:5673");
    const channel = await connection.createChannel();
    return channel;
  } catch (error) {
    console.log("Error connecting to RabbitMQ:", error.message);
    throw error;
  }
};

module.exports = connectRabbitMQ;
