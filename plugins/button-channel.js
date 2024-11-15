import fetch from 'node-fetch';
import uploadImage from '../lib/uploadImage.js';

let handler = async m => {
  const imageBuffer = await (await fetch('https://telegra.ph/file/403a47e628ef49dee27a3.jpg')).buffer();
  let imgurl = await uploadImage(imageBuffer);

  const messageContent = `
  ╭⭑⭑⭑★✪ *𝐅𝖾ᥣ𝗂𝗑 𝐁ⱺ𝗍 𝚰𝗌 𝐀ᥣ𝗂𝗏𝖾* ✪★⭑⭑⭑
  │ 📂 *BOT Name:* _𝐅𝖾ᥣ𝗂𝗑 𝐁ⱺ𝗍_
  │ 📝 *Description:* _𝐀ρ𐓣α 𝐊αꭑ 𝐊α𝗋 𝐁𝗌ᑯ𝗄._
  │ 👤 *Owner:* _𝐅𝖾ᥣ𝗂𝗑_
  │ 🌐 *Channel:* https://chat.whatsapp.com/EOojWFPhi2204G7mEFFKXc
  ╰━━━━━━━━━━━━━━━━╯
  `.trim();

  await conn.sendButton(
    m.chat,
    'Here is your Result',
    author,
    imgurl,
    [['MENU', `${usedPrefix}menu`], ['WATCH ANIME', `https://ab-streamer.vercel.app`]],
    m
  );
};

handler.help = ['bchannel'];
handler.tags = ['main'];
handler.command = ['xlchannel', 'bchannel'];
export default handler;
