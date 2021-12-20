class Player extends Phaser.Scene{
    constructor(){
        super({key: "Player",active: true})
        this.width = window.innerWidth
        this.height = window.innerHeight
    }

    preload(){
        this.load.image("heart","/js/src/scenes/interfaces/assets/UI/icon_heart.png")
    }

    create(){
        this.hearts = this.add.group();
        for(let i = 70;i < 280; i += 70)
            this.hearts.create(i,50,"heart")
    }
}

export default Player