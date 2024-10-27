module.exports = {
    app: {
        token: process.env.DISCORD_TOKEN || 'MTE3MjM1MDMxNzM2MzQ3NDUzMw.GN5G_Y.yYuipmAA3QY6PFA5qhyZI1wntB74NB-fmoXjQI',
        playing: 'Kerl.gg',
        global: true,
        guild: process.env.GUILD_ID || '1215064121297338430',
        extraMessages: false,
        loopMessage: false,
        lang: 'en',
        enableEmojis: false,
    },

    emojis:{
        'back': '◀◀',
        'skip': '▶▶',
        'ResumePause': '▶',
        'savetrack': '🗁',
        'volumeUp': '✙',
        'volumeDown': '―',
        'loop': '⟳',
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        Translate_Timeout: 10000,
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
         
            }
        }
    }
};
