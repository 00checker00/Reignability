import { Card } from "./card";

export class RandomPool {

    public count: number;

    public next: Card | RandomPool = null;

    public pool: (Card | RandomPool)[] = [];


    constructor(count: number)
   {
       this.count = count;
   }
}

