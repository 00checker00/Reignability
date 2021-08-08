import { RandomPool } from "./randomPool";

export type CardList = (Card | RandomPool)[];

export class Card 
{ 

    public card_id: string;
    public card_flag: string;

    public value_social_rechts: number;
    public value_natur_rechts: number;
    public value_dollar_rechts: number;

    public value_social_links: number;
    public value_natur_links: number;
    public value_dollar_links: number;

    public card_text: string;
    public card_name: string;

    public text_rechts: string;
    public text_links: string;
    public text_mitte: string;

    public next_links: Card | RandomPool | null = null;
    public next_rechts: Card | RandomPool | null = null;

    public visited: Boolean = false;


    constructor(id: string,vSr: number,vNr: number,vDr: number,vSl: number,vNl: number,vDl: number,cText: string,cName: string,textR: string,textL: string,textM: string,flag: string) 
    {
        
        this.card_id = id;

        this.value_social_rechts = vSr;
        this.value_natur_rechts = vNr;
        this.value_dollar_rechts = vDr;
    
        this.value_social_links = vSl;
        this.value_natur_links = vNl;
        this.value_dollar_links = vDl;
    
        this.card_text = cText;
        this.card_name = cName;
    
        this.text_rechts = textR;
        this.text_links = textL;
        this.text_mitte = textM;

        this.card_flag = flag;
    }


}