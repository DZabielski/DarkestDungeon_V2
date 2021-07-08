class Card {
    constructor(avatar, refId) {
        this.avatar = avatar;
        this.refId = refId;
    }

    render() {
        return `<img class="card" src="${this.avatar}" ref-id="${this.refId}"></img>`;
    }
}
