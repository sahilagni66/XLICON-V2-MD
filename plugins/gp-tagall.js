let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`𓌔⃝⃞̸̶🍊̸̶ Group : *${groupMetadata.subject}*\n▋⃟⃞⃮᪻ Members : *${participants.length}*${text ? `\n♟️ Message : ${text}\n` : ''}\n┌───⊷ *MENTIONS*\n` + users.map(v => '𒁴⎯⎯ @' + v.replace(/@.+/, '')).join`\n` + '\n𐔤ׅׄ᧐ׅׄυׅׄ𐔟ᥣׅׄıׅׄᑭׅׄ᥉ׅׄᨻׅׄ𐔤ᥣׅׄıׅׄᑭׅׄ᥉ᨡׅׄᑭׅׄᥣׅׄ᭵ׅׄ᧑ׅׄᨡׅׄᥣׅׄ𐔤ׅׄᑭׅׄ᥉ׅׄᧉ', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = false
handler.group = true

export default handler
