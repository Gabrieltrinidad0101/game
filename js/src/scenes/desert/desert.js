class Desert extends Phaser.Scene{
    constructor(){
        super({key: "Desert",active:true})
    }
    preload(){
        this.load.image("world","/js/src/scenes/desert/assets/global_sprite/global_sprite.png")
        this.load.tilemapTiledJSON("worldJSON","/js/src/scenes/desert/assets/world/world.json")
    } 
    create(){
        const map = this.make.tilemap({key: "worldJSON",tileHeight:128,tileWidth:128})
        const tileset = map.addTilesetImage("world","world")
        const world = map.createLayer("world",tileset,0,0)
    }
}

export default Desert