const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const CLIENT_ID = '686659781703-9vp0jkmrnms8hhio4gs4hfl8a8s2508b.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04n0FpOcjGXXPCgYIARAAGAQSNwF-L9Ir9dLzOF1nPnqUru99mm0As4rXfZN3ZVkFZdk3RQQYgNOjolGkSAumuvRWHwx-lgUaN6c'
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })
 export async function sendEmail(authorEmail,comment,commentAuthor) {
    try {
        const accesstoken = await oAuth2Client.getAccessToken()
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'mreddypm@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accesstoken
            }
        })
    
        const mailOptions = {
            from: `${commentAuthor}`,
            to: authorEmail,
            subject: `New comment added from ${commentAuthor}`,
            text: 'Hellow from API',
            html: `<h1>${comment}</h1>`
        }
        const result = await transport.sendMail(mailOptions)
        return result
    } catch (error) {
        return error
    }
}
