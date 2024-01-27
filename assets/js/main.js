
window.addEventListener('load', () => {

    const game = new Game('main-canvas');
    

    document.addEventListener('keydown', (event) => game.onKeyEvent(event));
    document.addEventListener('keyup', (event) => game.onKeyEvent(event));


    const startGameBtn = document.getElementById('btn-start-game');
    startGameBtn.addEventListener('click', () => {
        const startPanel = document.getElementById('start-panel');
        startPanel.classList.add('hidden');

        const canvasPanel = document.getElementById('main-canvas');
        canvasPanel.classList.remove('hidden');


        game.start();
    });

    //const endGameBtn = document.getElementById('btn-end-game');
    //endGameBtn.addEventListener('click', () => {

        //const endPanel = document.getElementById('end-panel');
        //endPanel.classList.add('hidden');

        //const canvasPanel = document.getElementById('main-canvas');
        //canvasPanel.classList.remove('hidden');

        //game.gameOver();
        
    //});



    // se pone en el index : <div id="end-panel" class="panel d-flex flex-column justify-content-center align-items-center">
   // <button id="btn-end-game" class="btn btn-primary">Try again </button> 
   // </div>


});

