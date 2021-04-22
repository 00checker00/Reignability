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

    private offset: {x: number; y: number};
    private right = false;
    private left = false;

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
        const anzahl = 3;

        createjs.Ticker.on("tick",(): void =>{
            i = (i+1)%6;
            if(i==0 && count <= anzahl)
            {
                count++;
                const ani = new this.lvlLoad.lib.shuffle_ani();
                
                //(ani as any).card_back.gotoAndStop("activist");
                this.stage_game.addChild(ani);
                ani.x = this.deck.x-200;
                ani.y = this.deck.y-270;
            }

            if(count == anzahl)
            {
                count = anzahl+1;
                this.startGame();
            }
           
        });
    }
 
    public startGame(): void
    {

        this.deck.gotoAndPlay("draw");

        createjs.Ticker.on("tick",(evt: any): void =>{
            //this.pollution_pic.x = Math.max(Math.min(evt.stageX + this.offset.x,0),-this.pollution_pic.getBounds().width+this.lvlLoad.stage.getBounds().width);
            //console.log("Right: " + this.right + " Left: " + this.left);
            
            const mouseX = this.lvlLoad.stage.mouseX;
            

            if(this.deck.currentLabel == "ready")
            {
            if(mouseX > 700 && !this.right)
            {
                this.deck.gotoAndPlay("move_right");
                this.right = true;
                
            }
            if(mouseX < 300 && !this.left)
            {
                this.deck.gotoAndPlay("move_left");
                this.left = true;
            }
            
         
        }

        if(mouseX > 301 && mouseX < 699)
        {
            if(this.right)
            this.deck.gotoAndPlay("move_right_back");

            if(this.left)
            this.deck.gotoAndPlay("move_left_back");


            this.left = false;
            this.right = false;

            
        }

        });


        this.stage_game.on("click",(): void =>{
            
            if(this.right)
            {
                this.deck.gotoAndPlay("discard_right");
                this.right = false;
            }

            if(this.left)
            {
                this.deck.gotoAndPlay("discard_left");
                this.left = false;
            }
            
        });

    }


}