const levelKey = {
    "0,0,0": "empty",
    "0,0,255": "platformC",
    "100,0,255": "platformL",
    "0,100,255": "platformR",
    "100,100,100": Rock,
    "255,255,0": "grass",
    "255,255,100": "ground", 
    "255,0,255": "ground",
    "0,255,0": Player,
    "255,0,100": Item
};

const groundTypes = ["grass", "ground", "platformC", "platformR", "platformL"];

let sources = {
    // map1: 'img/maps/map1.png',
    // map4: 'img/maps/map4.png',
    // grass: 'img/grass.png',
    // lava: 'img/lava.png',
    // ground: 'img/ground.png',
    // player: 'img/sprites/player.png',
    // item: 'img/item.png',
    player: {
        src: 'img/sprites/cavedude_side.png',
        srcWidth: 864,
        srcHeight: 96,
        width: 96,
        height: 96,
        offsetX: 0,
        offsetY: 512
    },
    item: {
        src: 'img/sprites/cavedude_side.png',
        srcWidth: 32,
        srcHeight: 32,
        width: 96,
        height: 96,
        offsetX: 192,
        offsetY: 480
    },
    grass: {
        src: 'img/sprites/cavedude_side.png',
        srcWidth: 32,
        srcHeight: 32,
        width: 32,
        height: 32,
        offsetX: 64,
        offsetY: 0
    },
    ground: {
        src: 'img/sprites/cavedude_side.png',
        srcWidth: 32,
        srcHeight: 32,
        width: 32,
        height: 32,
        offsetX: 32,
        offsetY: 0
    },
    platformC: {
        src: 'img/sprites/cavedude_side.png',
        srcWidth: 32,
        srcHeight: 32,
        width: 32,
        height: 32,
        offsetX: 32,
        offsetY: 480
    },
    platformL: {
        src: 'img/sprites/cavedude_side.png',
        srcWidth: 32,
        srcHeight: 32,
        width: 32,
        height: 32,
        offsetX: 0,
        offsetY: 480
    },
    platformR: {
        src: 'img/sprites/cavedude_side.png',
        srcWidth: 32,
        srcHeight: 32,
        width: 32,
        height: 32,
        offsetX: 128,
        offsetY: 480
    },
    rock: {
        src: 'img/sprites/cavedude_side.png',
        srcWidth: 32,
        srcHeight: 32,
        width: 32,
        height: 32,
        offsetX: 320,
        offsetY: 480
    },
    map: {src: 'img/maps/cavedude_map.png'},
    mountains: {
        src: 'img/sprites/cavedude_side.png',
        srcWidth: 352,
        srcHeight: 288,
        width: 352,
        height: 288,
        offsetX: 0,
        offsetY: 32,
        repeat: "repeat-x"
    },
    mountain: {
        src: 'img/sprites/cavedude_side.png',
        srcWidth: 160,
        srcHeight: 320,
        width: 160,
        height: 320,
        offsetX: 384,
        offsetY: 0
    },
    cloud1: {
        src: 'img/sprites/cavedude_side.png',
        srcWidth: 224,
        srcHeight: 96,
        width: 224,
        height: 96,
        offsetX: 0,
        offsetY: 320
    },
    cloud2: {
        src: 'img/sprites/cavedude_side.png',
        srcWidth: 128,
        srcHeight: 64,
        width: 128,
        height: 64,
        offsetX: 224,
        offsetY: 320
    },
    cloud3: {
        src: 'img/sprites/cavedude_side.png',
        srcWidth: 384,
        srcHeight: 128,
        width: 384,
        height: 128,
        offsetX: 352,
        offsetY: 320
    }
};
