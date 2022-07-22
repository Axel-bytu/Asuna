let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `Ejemplo de uso ${usedPrefix}${command} i'm alien?`
    m.reply(`"${[
        'Tal vez algún día',
        'Realmente no',
        'No ambos',
        'No lo creo',
        'Sí',
        'Prueba a preguntar de nuevo'
        'No hay ninguno'
    ].getRandom()}."`)
}
handler.help = ['kerang', 'kerangajaib'].map(v => v + ' <teks>')
handler.tags = ['kerang', 'fun']

handler.command = /^(kulit)?kerang(ajaib)?$/i

export default handler
