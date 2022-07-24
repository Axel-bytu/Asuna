let handler = async(m, { conn }) => {
    let caption = `
*Asuna Bot Política de Privacidad, Términos y Condiciones y Reglamento*

Política de privacidad
1. Asunabot no registrará los datos del historial de chat del usuario.
2. Asunabot no compartirá números de usuario.
3. Asunabot no guardará los medios enviados por los usuarios.
4. Asunabot no hará mal uso de los datos del usuario.
5. El propietario Asunabot tiene derecho a ver los datos del historial de chat de los usuarios.
6. El propietario Asunabot tiene derecho a ver el estado de los usuarios.
7. El propietario Asunabot puede ver el historial de chat y los medios enviados por los usuarios.

Reglas del robot Haruno
1. Los usuarios tienen prohibido llamar o hacer videollamadas a los números de bot.
2. Los usuarios tienen prohibido enviar varios errores, virtexes, etc. al número de bot.
3. Se espera que los usuarios no hagan spam en el uso de bots.
4. Los usuarios tienen prohibido agregar números de bot ilegalmente, para agregar, comuníquese con el propietario.

Términos y condiciones del robot Haruno
1. Harunobot puede prohibir a los usuarios unilateralmente, independientemente de si se trata de usuarios incorrectos o no.
2. Harunobot *no será responsable de nada que los usuarios hagan con la función de bot.*
3. Harunobot impondrá sanciones: bloqueo o prohibición a los usuarios que violen las reglas.
Solicitudes de funciones, sugerencias o informes de errores, chatee con el propietario.

Política regulatoria a partir del: 20 de abril de 2022
${watermark}`.trim()
    await conn.reply(m.chat, caption, m, { contextInfo: {
        externalAdReply: {
            sourceUrl: 'https://Instagram.com/asunabot',
            title: 'Rules',
            body: 'Asuna',
            thumbnailUrl: global.image
        }
    }})
}
handler.command = /^(rules|snk|peraturan)$/i
handler.tags = ['main']
handler.help = ['rules']
export default handler
