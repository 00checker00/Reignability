import { LevelLoader } from "./levelLoader";
import { levels } from "./levelLoader";



export class Game {

    private lvlLoad: LevelLoader;


    public pillar_social: createjs.MovieClip;
    public pillar_natur: createjs.MovieClip;
    public pillar_dollar: createjs.MovieClip;

    public social_balken: createjs.MovieClip;
    public natur_balken: createjs.MovieClip;
    public dollar_balken: createjs.MovieClip;

    public card_text: createjs.Text;
    public card_name: createjs.Text;

    public deck: createjs.MovieClip;

    public stage_game: createjs.MovieClip;


    constructor(loader: LevelLoader) {
        
        this.lvlLoad = loader;

        this.stage_game = this.lvlLoad.stage_game;

        this.pillar_social = this.stage_game.getChildByName("pillar_social") as createjs.MovieClip;
        this.pillar_natur = this.stage_game.getChildByName("pillar_natur") as createjs.MovieClip;
        this.pillar_dollar = this.stage_game.getChildByName("pillar_dollar") as createjs.MovieClip;
 
        this.social_balken = this.pillar_social.getChildByName("balken") as createjs.MovieClip;
        this.natur_balken = this.pillar_natur.getChildByName("balken") as createjs.MovieClip;
        this.dollar_balken = this.pillar_dollar.getChildByName("balken") as createjs.MovieClip;

        this.card_text = this.stage_game.getChildByName("card_text") as createjs.Text;
        this.card_name = this.stage_game.getChildByName("card_name") as createjs.Text;

        this.deck = this.stage_game.getChildByName("deck") as createjs.MovieClip;
      

        this.social_balken.scaleY = 0.01;
        this.natur_balken.scaleY = 0.05;
        this.dollar_balken.scaleY = 0.1;

        (this.social_balken as any).shape.graphics._fill.style = "#FF0000";
        (this.dollar_balken as any).shape.graphics._fill.style = "#FF0000";
        (this.natur_balken as any).shape.graphics._fill.style = "#FF0000";

        this.card_text.text = "     ";
        this.card_name.text = "     ";

        
    }

    public shuffleAnimation(): void
    {
      
        // these are equivalent, 1000ms / 40fps = 25ms

        //createjs.Ticker.interval = 1000;
        createjs.Ticker.framerate = 20;

        let i = 1;
        let count = 0;
        createjs.Ticker.on("tick",(): void =>{
            
            //if(i< 50)
            i = (i+1)%6
     
            console.log(i);
            if(i==0 && count < 4)
            {
                count++;
                const ani = new this.lvlLoad.lib.shuffle_ani();
                
                //(ani as any).card_back.gotoAndStop("activist");
                this.stage_game.addChild(ani);
                ani.x = this.deck.x-200;
                ani.y = this.deck.y-270;
            }
            

        });
    }
 

}