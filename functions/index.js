const functions = require('firebase-functions');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const nodemailer = require('nodemailer');
const cors = require('cors')({
  origin: true
});
//google account credentials used to send email
const mailTransport = nodemailer.createTransport(
  `smtps://prasheel011@gmail.com:appliedcswithandroid@smtp.gmail.com`);

exports.contact = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
      sendEmail('prasheelsoni11@gmail.com', req.body).then(()=> {
        res.status(200).send({type: 'success', message: 'A mail has been sent to Prasheel ;)'});
        return 'Email sent successfully'
      })
        .catch(err => res.send(err))
  })
});

// Send email function
function sendEmail(email, body) {
  const mailOptions = {
    from: `prasheel011@gmail.com`,
    to: email
  };
  // hmtl message constructions
  mailOptions.subject = 'contact form message';
  mailOptions.html = `<p><b>Name: </b>${body.name}</p>
                      <p><b>Email: </b>${body.email}</p>
                      <p><b>Surname: </b>${body.surname}</p>
                      <p><b>Phone: </b>${body.phone}</p>
                      <p><b>Message: </b>${body.message}</p>`;
  return mailTransport.sendMail(mailOptions);
}