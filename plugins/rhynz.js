let handler  = async (m, { conn }) => {
  
let name = conn.getName(m.sender)
let pesan = `Saya Disini Master..\n\nSilahkan Beri Saya Perintah`
conn.reply(m.chat, pesan, m)
}
handler.customPrefix = /rhynz/
handler.command = new RegExp
handler.owner = true

module.exports = handler