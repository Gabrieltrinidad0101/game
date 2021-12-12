import Player from "./scenes/player/player.js"
import Desert from "./scenes/desert/desert.js"
const config = {
    width: window.innerWidth,
    heiht: window.innerHeight,
    parent: "Game",
    physics: {
        default: "arcade",
        arcade: {
            gravity: 300
        }
    },
    scene:[Desert,Player]
}
new Phaser.Game(config)