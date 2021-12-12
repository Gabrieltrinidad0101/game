const config = {
    width: window.innerWidth,
    heiht: window.innerHeight,
    parent: "Game",
    physics: {
        default: "arcade",
        arcade: {
            gravity: 300
        }
    }
}

new Phaser.Game(config)