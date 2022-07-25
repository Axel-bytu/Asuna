const roles = {
    /*
    'Role Name': <Minimal Level To Obtain this Role>
    */
    'Hierro🖤 V': 0,
    'Hierro🖤 IV': 5,
    'Hierro🖤 III': 10,
    'Hierro🖤 II': 15,
    'Hierro🖤 I': 20,
    'Bronce🤎 V': 25,
    'Bronce🤎 IV': 30,
    'Bronce🤎 III': 35,
    'Bronce🤎 II': 40,
    'Bronce🤎 I': 45,
    'Plata🤍 V': 50,
    'Plata🤍 IV': 55,
    'Plata🤍 III': 60,
    'Plata🤍 II': 65,
    'Plata🤍 I': 70,
    'Oro💛 V': 75,
    'Oro💛 IV': 80,
    'Oro💛 III': 85,
    'Oro💛 II': 90,
    'Oro💛 I': 95,
    'Platino💙 V': 100,
    'Platino💙 IV': 105,
    'Platino💙 III': 110,
    'Platino💙 II': 115,
    'Platino💙 I': 120,
    'Diamante💜 V': 125,
    'Diamante💜 IV': 130,
    'Diamante💜 III': 135,
    'Diamante💜 II': 140,
    'Diamante💜 I': 145,
    'Heroico❤️ V': 150,
    'Heroico❤️ IV': 155,
    'Heroico❤️ III': 160,
    'Heroico❤️ II': 165,
    'Heroico❤️ I': 170,
    'Maestro♉': 175,
    'Depredador♈': 180
}

export default {
    before(m) {
        let user = db.data.users[m.sender]
        let level = user.level
        let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
        user.role = role
        return !0
    }
}
