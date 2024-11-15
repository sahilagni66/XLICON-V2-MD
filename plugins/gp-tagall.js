let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`͏██ 𝐆𝗋ⱺ⃢υρ 𝐍α︪︣ꭑ𝖾 : *${groupMetadata.subject}*\n\n ͏██ 𝐌︪︣𝖾ꭑᑲ⃢𝖾𝗋𝗌 : *${participants.length}*${text ? `\n♟️⃟︪︣ 𝐌𝖾𝗌⃟𝗌α𝗀𝖾 : ${text}\n` : ''}\n\n──── T̸𝗔𝐆 L⃟I̸𝗦𝐓────\n` + users.map(v => '━ 🪻̸⃝ ✦ @' + v.replace(/@.+/, '')).join`\n` + '\n *⍝꯭፝֟⍝.  ‎ꆮ︪︪ ‎ּּּ ‎‌🦢𐨍റᩙ ꠩ 𝐒𝕚ᥣ𝖾ⴄ𝖼𝖾 𝗂𝗌 ⴄ𑄙𝗍 𝗍ɦ𝖾 αᑲა𝖾𝗻𝖼𝖾 ⱺ𝖿 ꯱𑄙υⴄᑯ ᑲυ𝗍 𝗍ɦ𝖾 ρ𐐲𝖾ა𝖾𝗻𝖼𝖾 ⱺ𝖿 α ᑯ𝖾𝖾ρ𝖾𐐲 ꭑ𝖾αⴄ𝗂ⴄ𝗀.𝚰ⴄ 𝗍ɦ𝖾 ꯱𝕚ᥣ𝖾𝗻𝖼𝖾, ω𝖾 𝖼αⴄ ɦ𝖾α𐐲 𝗍ɦ𝖾 ωɦ𝗂𝗌ρ𝖾𐐲ა ⱺ𝖿 ⱺυ𝗋 ꯱𑄙υᥣ. ㅤ⊹ ׄ   ִ  🌼᳢  ׄ   ִ   ʾ* ', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = false
handler.group = true

export default handler
