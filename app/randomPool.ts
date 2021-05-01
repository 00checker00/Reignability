import { Card } from "./card";

export class RandomPool 
{

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
        for (let i = this.pool.length - 1; i > 0; i--) 
        {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.pool[i];
            this.pool[i] = this.pool[j];
            this.pool[j] = temp;
        }
      
    }
}

