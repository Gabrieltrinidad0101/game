import Player from "./scenes/player/player.js"
import Desert from "./scenes/desert/desert.js"
import Interface from "./scenes/interfaces/interfaces.js"
const config = {
    width: window.innerWidth,
    heiht: window.innerHeight,
    parent: "Game",
    backgroundColor: "#1DF1FF",
    physics: {
        default: "arcade",
        arcade: {
            gravity: 300
        }
    },
    scene:[Player,Interface,Desert]
}
new Phaser.Game(config)