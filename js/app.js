let app;
let player;
let keys = {};
let keysDiv;

window.onload = function() {
    app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0xAAAAAA,
    });

    document.body.appendChild(app.view);

    /** Объект игрока */
    player = PIXI.Sprite.from('images/player4.png');
    /** Привязка оси к центру, по умолчанию (левый верхний угол) */
    player.anchor.set(0.5)
    player.x = app.view.width / 2;
    player.y = app.view.height / 2;

    /** Добавление спрайта в сцену */
    app.stage.addChild(player);

    /** Интерактивность мыши */
    // app.stage.interactive = true;
    // app.stage.on("pointermove", movePlayer);

    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);

    
    app.ticker.add(gameLoop);

    // TODO: delete later
    keysDiv = document.querySelector("#keys");
};

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