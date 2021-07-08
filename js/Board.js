class Board {
    constructor(cards) {
        this.cards = cards;
    }

    shuffle () {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    render() {
        let html = '';
        this.cards.forEach((card) => {
            html += '<div class="space"><div class="coverCard">' + card.render() + '</div></div>';
        });
        return html;
    }
}
