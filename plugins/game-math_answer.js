// import db from '../lib/database.js'

let handler = m => m
handler.before = async function (m) {
    if (!/^-?[0-9]+(\.[0-9]+)?$/.test(m.text)) return !0
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.text || !/^Berapa hasil dari/i.test(m.quoted.text)) return !0
    this.math = this.math ? this.math : {}
    if (!(id in this.math)) return this.sendButton(m.chat, 'El asunto ha terminado', watermark, null, [['math', '/math']], m)
    if (m.quoted.id == this.math[id][0].id) {
        let math = JSON.parse(JSON.stringify(this.math[id][1]))
        if (m.text == math.result) {
            db.data.users[m.sender].exp += math.bonus
            clearTimeout(this.math[id][3])
            delete this.math[id]
            this.sendButton(m.chat, `*¡Respuesta correcta!*\n+${math.bonus} XP`, watermark, null, [['again', `/math ${math.mode}`]], m)
        } else {
            if (--this.math[id][2] == 0) {
                clearTimeout(this.math[id][3])
                delete this.math[id]
                this.sendButton(m.chat, `*¡Se acaba la oportunidad!*\nResponder: *${math.result}*`, watermark, null, [['again', `/math ${math.mode}`]], m)
            } else m.reply(`*¡Respuesta incorrecta!*\nTodavía hay ${this.math[id][2]} oportunidad`)
        }
    }
    return !0
}

export default handler
