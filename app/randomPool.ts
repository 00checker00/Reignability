import { Card } from "./card";

export class RandomPool {

    public count: number;

    public index = 0;

    public next: Card | RandomPool = null;

    public pool: (Card | RandomPool)[] = [];


    constructor(count: number)
   {
       this.count = count;
   }

   public shufflePool(): void
   {
        this.pool.sort(() => (Math.random() > .5) ? 1 : -1);
   }
}

