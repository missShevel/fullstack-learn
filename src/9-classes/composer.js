class Composer {
  status = "Famous";

  constructor(name) {
    this.name = name;
  }

  playMusic() {
    console.log("La-la-la");
  }

  async getCompositions() {
    return await "Nocturne";
  }

  static country = "Poland";

  static getInstrument() {
    return "Piano";
  }

}

class MovieComposer extends Composer {
    constructor(name, movie) {
        super(name);
        this.movie = movie;
    }

    showMovie() {
        console.log('Wooooow!');
    }

    playMusic() {
        super.playMusic();
        this.showMovie();
    }
}


const c1 = new Composer('Chopin');
console.log(c1.constructor.getInstrument());
const c2 = new MovieComposer('Einaudi');
c2.playMusic();

console.log(c1 instanceof Composer);

