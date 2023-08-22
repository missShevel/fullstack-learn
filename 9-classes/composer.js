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
}


const c1 = new Composer('Chopin');
console.log(Composer.getInstrument());

console.log(c1 instanceof Composer);

