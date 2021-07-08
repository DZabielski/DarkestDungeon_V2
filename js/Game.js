class Game {
    constructor(board) {
        this.turnCounter = 0;
        this.revealed = [];
        this.pairsLeft = 8;
        this.board = board;
        this.isFreezed = false;
    }

    start() {
        this.board.shuffle();
        document.getElementById("boardGame").innerHTML = this.board.render();
        this.setUpListener();
    }

    setUpListener() {
        const allCards = document.querySelectorAll('.card');
        for (const a1 of allCards) {
            a1.addEventListener('click', (choose) => {
                if (this.isFreezed === false) {
                    choose.target.classList.add('reveal');
                    this.revealed.push(choose.target);
                    if (this.revealed.length === 2) {
                        this.compareCards();
                    }
                }
            })
        }
    }

    compareCards() {
        this.turnCounter++;
        document.getElementById("score").innerHTML = "Turn counter: " + this.turnCounter;
        const cardAlpha = this.revealed[0];
        const cardBeta = this.revealed[1];
        if (cardAlpha.getAttribute('ref-id') === cardBeta.getAttribute('ref-id')) {
            this.correct(cardAlpha, cardBeta)
            this.revealed = [];
        } else {
            this.freeze();
            setTimeout(function() {
                this.hideCards(cardAlpha);
                this.hideCards(cardBeta);
                this.revealed = [];
                this.unfreeze();
            }.bind(this), 1000)
        }
    }

     correct(c1, c2) {
        c1.parentElement.parentElement.classList.add("matched");
        c2.parentElement.parentElement.classList.add("matched");
        c1.classList.add("matched");
        c2.classList.add("matched");
        this.pairsLeft--;
        if (this.pairsLeft === 0) {
            document.getElementById("boardGame").innerHTML = '<h1>You win!!!<br>You did it in: '+ this.turnCounter +' turns</h1>';
        }
    }

    hideCards(card) {
        card.classList.remove('reveal');
    }

    freeze() {
        this.isFreezed = true;
    }

    unfreeze() {
        this.isFreezed = false;
    }
}
