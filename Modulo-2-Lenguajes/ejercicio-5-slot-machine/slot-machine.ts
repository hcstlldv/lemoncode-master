export class SlotMachine {
    #coins: number = 0;

    play() {
        this.#incrementCoins();
        const win = this.#checkIfPlayerWin();
        if (!win) {
            console.log('Good Luck next time!!');
        } else {
            console.log(`Congratulations!!! You won ${this.#coins} coins!!`);
            this.#resetCoins();
        }
    }

    #incrementCoins() {
        this.#coins++;
    }

    #resetCoins() {
        this.#coins = 0;
    }

    #checkIfPlayerWin() {
        const game = [
            this.#generateRandomBoolean(),
            this.#generateRandomBoolean(),
            this.#generateRandomBoolean(),
        ];
        const win = game.every((value) => value === true);
        return win;
    }

    #generateRandomBoolean(): boolean {
        /**
         * Difficulty of game.
         * Always between 0 and 1.
         * Lower is easier.
         */
        const DIFFICULTY = 0.6;
        return Math.random() < DIFFICULTY;
    }
}

const machine1 = new SlotMachine();
machine1.play();
