let linkRegex=/http/i;export async function before(a,{isAdmin:b,isBotAdmin:e}){if(a.isBaileys&&a.fromMe)return!0;if(!a.isGroup)return!1;let c=global.db.data.chats[a.chat];global.db.data.settings[this.user.jid];let d=linkRegex.exec(a.text);return c.antiLink2&&d&&!b&&await conn.groupParticipantsUpdate(a.chat,[a.sender],"remove"),!0}