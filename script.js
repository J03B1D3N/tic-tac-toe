(function() {

    const GAMEBOARD = {
        
        cacheDom: function () {
            this.cell = document.querySelectorAll(".cell");
            this.board = document.getElementById('board');
            this.winningMessage = document.getElementById('winningMessage');
            this.winningMessageText = document.querySelectorAll('data-winning-message-text')
            this.restartButton = document.getElementById('restartButton');
        },
        
        
        playerCircleTurn: function () {
            this.board.setAttribute('class', 'board circle');

            for(i = 0; i < this.cell.length; i++) {
                this.cell[i].addEventListener('click', function(e) {
                    e.target.setAttribute('class', 'cell circle')
                })
            }
        },
        playerXTurn: function () {
            this.board.setAttribute('class', 'board x');

            for(i = 0; i < this.cell.length; i++) {
                this.cell[i].addEventListener('click', function(e) {
                    e.target.setAttribute('class', 'cell x'),
                    playerCircleTurn();
                    
                })
            }
        },
        game: function() {
            
        }
       
        
    }   
    GAMEBOARD.cacheDom();
    GAMEBOARD.playerXTurn();
    
    
})()