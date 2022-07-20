// import db from '../lib/database.js'
import fetch from 'node-fetch'
let handler = m => m

export async function all(m) {

    let user = db.data.users[m.sender]
    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (!user.firstchat) return
    if (db.data.settings.groupOnly) return
    let name = conn.getName(m.sender)
    let teks = `
*Hola ${name}*
¡Presenta que soy el bot Asuna!

¡Puedes usar a Asuna para hacer pegatinas, descargar videos de youtube, facebook, tiktok, instagram o simplemente divertirte! Se pueden ver más características sobre Asuna en *.menu*

No enviaremos transmisiones de spam a los usuarios.

No se olvide de obedecer las reglas, y por favor no llame, vc, spam, envíe errores o virtex a los números de bot.
Si hay errores o cosas que desea preguntar, comuníquese con el propietario.
¡Gracias!
`.trim()
    const message = {
        image: { url: 'https://telegra.ph/file/b32e52b09508f1737a760.jpg'},
        jpegThumbnail: await(await fetch('https://telegra.ph/file/b32e52b09508f1737a760.jpg')).buffer(),
        caption: teks,
        footer: watermark,
        templateButtons: [
            {
                urlButton: {
                    displayText: 'Asuna\'s group',
                    url: 'https://chat.whatsapp.com/Dqdjz7aSWJj0IyORAsdYom'
                }
            }, {
                quickReplyButton: {
                    displayText: 'Owner',
                    id: '.owner'
                }
            }, {
                quickReplyButton: {
                    displayText: 'Menu',
                    id: '.menu'
                }
            }
        ]
    }
    await this.sendMessage(m.chat, message, { quoted: m })
    user.firstchat = false
}
