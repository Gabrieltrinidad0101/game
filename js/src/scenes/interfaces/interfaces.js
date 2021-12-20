class Interface extends Phaser.Scene{
    constructor(){
        super({key: "Interface",active: true})
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.disabledButtonPause = false
    }

    preload(){
        this.load.image("pause","/js/src/scenes/interfaces/assets/UI/block_UI_pause.png")
        this.load.image("menu","/js/src/scenes/interfaces/assets/UI/block_UI_double@2x.png")
        this.load.image("reload","/js/src/scenes/interfaces/assets/UI/block_UI_undo.png")
        this.load.image("play","/js/src/scenes/interfaces/assets/UI/block_UI_play.png")
        this.load.image("home","/js/src/scenes/interfaces/assets/UI/block_UI_Home.png")
    }

    create(){
        this.scene.moveUp("Interface")
        const pause = this.add.image(this.width - 90 ,50,"pause")
        pause.setInteractive()
        pause.on("pointerdown",_=>this.addMenu())
    }

    addMenu(){
        if(this.disabledButtonPause) return
        this.disabledButtonPause = true
        //rect
        this.rect()
        //position
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        //menu cotainer
        this.menu = this.add.image(screenCenterX ,screenCenterY+300,"menu")
        this.menu.setScale(2)
        
        //game name
        const gameNamePostionY = screenCenterY - (this.menu.height /2)
        this.gameName = this.add.text(screenCenterX, gameNamePostionY+300, 'The Ninja').setOrigin(0.5);
        this.gameName.setFontSize(30)

        //reload
        this.reload = this.add.image(0 ,0,"reload")
        const reloadPositionX = screenCenterX - this.menu.width + this.reload.width
        const reloadPositionY = screenCenterY + this.menu.height - this.reload.height
        this.reload.x = reloadPositionX
        this.reload.y = reloadPositionY+300

        //play
        this.play = this.add.image(0 ,0,"play")
        const playPositionX = screenCenterX
        const playPositionY = screenCenterY + this.menu.height - this.play.height
        this.play.x = playPositionX
        this.play.y = playPositionY+300
        this.play.setInteractive()
        this.play.on("pointerdown",_=>this.removeMenu())
        
        this.home = this.add.image(0 ,0,"home")
        this.home.setScale(.5)
        const homePositionX = screenCenterX + this.menu.width - this.reload.width
        const homePositionY = screenCenterY + (this.menu.height) - this.home.height/2
        this.home.x = homePositionX
        this.home.y = homePositionY+300

        this.animationMenu()
    }

    rect(){
        var color = Phaser.Display.Color.GetColor32(0, 0, 0);
        this.r1 = this.add.rectangle(0, 0,  5000,  5000,color,.3);
    }


    animationMenu(){
        const elements = [this.menu,this.play,this.home,this.reload,this.gameName]
        for(const element of elements){
            this.tweens.add({
                targets: element,
                duration: 500,
                y: element.y - 300
            })    
        }
    }

    removeMenu(){
        this.disabledButtonPause = false
        this.gameName.destroy()
        this.menu.destroy();
        this.reload.destroy();
        this.play.destroy();
        this.home.destroy();
        this.r1.destroy();
    }
}   

export default Interface