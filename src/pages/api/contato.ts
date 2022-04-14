require("dotenv").config();
const nodemailer = require("nodemailer");

export default async function handleSubmitEmail(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAILER,
      pass: process.env.MAILER_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.MAILER,
      replyTo: email,
      to: process.env.CONTACTMAIL,
      subject: `Contato através de formulário de ${name}`,
      html: `<p>Você recebeu uma nova submissão de contato.</p>
        <p><strong>Nome: </strong> ${name} </p>
        <p><strong>Mensagem: </strong> ${message} </p>
      `,
    });

    return res.status(200).send();
  } catch {
    return res.status(400).send();
  }
}
