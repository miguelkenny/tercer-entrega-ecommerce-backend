//Nodemailer
import { createTransport } from 'nodemailer'

const adminEmail = 'miguelcastrokenny@gmail.com'

const sendInfoEmail = async (user) => {
    
    const transport = createTransport({
        service: 'gmail',
        port: '587',
        auth: {
            user: 'miguelcastrokenny@gmail.com',
            pass: 'cslhvbpzxonzuegb'
        }
    })
    
    const mailOptions = {
        from: 'Women Shop',
        to: `${adminEmail}`,
        subject: 'Nuevo Registro',
        html: `Datos de Nuevo Usuario Registrado:
             ${JSON.stringify(user)}`
    }
    try {
        await transport.sendMail(mailOptions)
    } catch (error) {
        console.log(error);
    }
}

export default sendInfoEmail