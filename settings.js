//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe hai ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoreadpmngc = true //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoRecord = true //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['hi 🤭'] //ur owner number
global.ownername = "🦄 VIHAGA SITHUM" //ur owner name
global.ytname = "💛 👉 YouTube - SUBSCRIBE click 👈 💛" //ur yt chanel name
global.socialm = "💛 👉 YouTube - SUBSCRIBE click 👈 💛" //ur yt chanel name
global.location = "India, Mizoram, Aizawl" //ur location

//bot bomdy 
global.owner = ['hi 🤭']
global.ownertag = 'hi 🤭' //ur tag number
global.botname = 'VIHAGA BOT MD' //ur bot name
global.linkz = "https://youtube.com/channel/UC3ZwkFVKgeCY9BEA-cdutwA" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtube.com/channel/UC3ZwkFVKgeCY9BEA-cdutwA" //ur website to be displayed
global.botscript = 'https://youtube.com/channel/UC3ZwkFVKgeCY9BEA-cdutwA' //script link
global.reactmoji = "😘" //ur menu react emoji
global.themeemoji = "🦄" //ur theme emoji
global.packname = "VIHAGA Bot 🦄 " //ur sticker watermark packname
global.author = "🦄VIHAGA SITHUM" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//damtabase
global.premium = ['hi 🤭'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'මෙම විශේෂාංගය පරිපාලක සඳහා පමණි!',
    botAdmin: 'Bot මුලින්ම Admin විය යුතුය!',
    owner: 'මෙම විශේෂාංගය හිමිකරු සඳහා පමණි!',
    group: 'විශේෂාංගය කණ්ඩායම් සඳහා පමණක් භාවිතා වේ!',
    private: 'පුද්ගලික කතාබස් සඳහා පමණක් භාවිතා කරන විශේෂාංග!',
    bot: 'මෙම විශේෂාංගය Bot සඳහා පමණි',
    wait: 'ක්රියාවලිය තුළ...',
    linkm: 'කෝ ලින්ක් එක?',
    error: 'දෝෂයකි!!',
    endLimit: 'ඔබගේ දෛනික සීමාව කල් ඉකුත් වී ඇත, සීමාව සෑම පැය 12 කට වරක් නැවත සකසනු ලැබේ',
    ban: 'ඔබ අයිතිකරු විසින් තහනම් කර ඇත, ඔබට තහනම් නොකිරීමට අවශ්‍ය නම්, කතාබස් හිමිකරු.',
    nsfw: 'nsfw විශේෂාංගය සක්‍රිය කර නැත, කරුණාකර සක්‍රිය කිරීමට පරිපාලක අමතන්න',
    banChat: 'බොට් එක baThe bot මෙම කණ්ඩායම තුළ තහනම් කර ඇත, කරුණාකර තහනම් ඉවත් කිරීමට හිමිකරු අමතන්න'
 
 
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
