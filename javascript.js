window.onload = function runOnLoad() {
    const cards = [
        new Card('img/barbarian.jpg', 1),
        new Card('img/barbarian.jpg', 1),
        new Card('img/bard.jpg', 2),
        new Card('img/bard.jpg', 2),

        new Card('img/captain.jpg', 3),
        new Card('img/captain.jpg', 3),
        new Card('img/doctor.jpg', 4),
        new Card('img/doctor.jpg', 4),

        new Card('img/guru.jpg', 5),
        new Card('img/guru.jpg', 5),
        new Card('img/knight.jpg', 6),
        new Card('img/knight.jpg', 6),

        new Card('img/hunter.jpg', 7),
        new Card('img/hunter.jpg',7),
        new Card('img/templar.jpg', 8),
        new Card('img/templar.jpg',8),
    ];

    const board = new Board(cards);
    const game = new Game(board);
    game.start();
}
