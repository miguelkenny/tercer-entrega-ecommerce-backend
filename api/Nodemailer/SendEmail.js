//Nodemailer
import { createTransport } from 'nodemailer'

const adminEmail = 'miguelcastrokenny@gmail.com'

const sendInfoEmail = async (user, option) => {

    const transport = createTransport({
        service: 'gmail',
        port: '587',
        auth: {
            user: 'miguelcastrokenny@gmail.com',
            pass: 'cslhvbpzxonzuegb'
        }
    })

    function sendInfoRegisterOrSale(key) {
        switch (key) {
            case 1:
                return `Datos de Nuevo Usuario Registrado:
                ${JSON.stringify(user)}`

            case 2:
                return `Datos de Nueva Venta:
                    ${JSON.stringify(user)}`
            default:
                break;
        }
    }

    const mailOptions = {
        from: 'Women Shop',
        to: `${adminEmail}`,
        subject: 'Nuevo Registro',
        html: sendInfoRegisterOrSale(option)
    }
    try {
        await transport.sendMail(mailOptions)
    } catch (error) {
        console.log(error);
    }
}

export default sendInfoEmail