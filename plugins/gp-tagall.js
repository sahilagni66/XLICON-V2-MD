let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`🍀̵ׂׅ͜͡✨ 𝕲r᥆ᥙ⍴ : *${groupMetadata.subject}*\n\n🥬̸̶̊࣪͜⃝﹚ 𝕸ᥱmᑲᥱrs : *${participants.length}*${text ? `\n𒁷 𝕸ᥱssᥲgᥱ : ${text}\n` : ''}\n\n┌───⊷ 𝗠𝗘𝗡𝗧𝗜𝗢𝗡𝗦\n` + users.map(v => '𝆺𝅥𓌔⃝⃞̸̶🍊̸̶ @' + v.replace(/@.+/, '')).join`\n` + '\n𝕽ɑı𝘀ᥱׅ𐇵࣪𝖄𐐫υ𐔟࣪𐇵ׅＳρ𝗂𐔟𝗂𝗍', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = false
handler.group = true

export default handler
