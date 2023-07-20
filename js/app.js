let app;
let player;
let keys = {};
let keysDiv;

// TODO: добавить скрытый инпут с версией приложения
window.onload = async function() {
    app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0xAAAAAA,
    }); 

    document.body.appendChild(app.view);

    /** Предварительная загрузка текстур */
    const textures = await PIXI.Assets.load([
        { alias: 'player', src: 'images/player4.png'},
        { alias: 'tree1', src: 'images/tree1.png'},
        { alias: 'tree2', src: 'images/tree2.png'},
        { alias: 'tree3', src: 'images/tree3.png'},
        { alias: 'tree4', src: 'images/tree4.png'},
        { alias: 'tree5', src: 'images/tree5.png'},
    ], showProgress);
    player = PIXI.Sprite.from(textures['player']);

    /** Объект игрока */
    // player = PIXI.Sprite.from('images/player4.png');
    /** Привязка оси к центру, по умолчанию (левый верхний угол) */
    player.anchor.set(0.5)
    player.x = app.view.width / 2;
    player.y = app.view.height / 2;

    /** Добавление спрайта в сцену */
    app.stage.addChild(player);

    /** Интерактивность мыши */
    app.stage.interactive = true;
    // app.stage.on("pointermove", movePlayer);

    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);

    
    app.ticker.add(gameLoop);

    // TODO: delete later
    keysDiv = document.querySelector("#keys");
};

function showProgress(progress) {
    console.log(`${Math.floor(progress * 100)}% loading`)
}

function keyDown(e) {
    console.log(e.key)
    keys[e.key] = true;
}

function keyUp(e) {
    console.log(e.key)
    keys[e.key] = false;
}

function gameLoop() {
    keysDiv.innerHTML = JSON.stringify(keys);

    if (keys['ArrowRight'] || keys['d']) {
        player.x += 5
    }
    if (keys['ArrowLeft'] || keys['a']) {
        player.x -= 5
    }
    if (keys['ArrowUp'] || keys['w']) {
        player.y -= 5
    }
    if (keys['ArrowDown'] || keys['s']) {
        player.y += 5
    }
}
// function movePlayer(e) {
//     let position = e.data.global;

//     player.x = position.x
//     player.y = position.y
// }