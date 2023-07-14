let app;
let player;

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
    app.stage.interactive = true;
    app.stage.on("pointermove", movePlayer);
};

function movePlayer(e) {
    let position = e.data.global;

    player.x = position.x
    player.y = position.y
}