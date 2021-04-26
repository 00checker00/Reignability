import { LevelLoader } from "./levelLoader";
import { levels } from "./levelLoader";

export class Choose {

    private lvlLoad: LevelLoader;

    public button_back: createjs.MovieClip;
    public player_president: createjs.MovieClip;
    public button_next?: createjs.MovieClip;

    public stage_choose: createjs.MovieClip;

    
    constructor(loader: LevelLoader) {
        
        this.lvlLoad = loader;

        this.stage_choose = this.lvlLoad.stage_choose;
        this.button_back = this.stage_choose.getChildByName("button_back") as createjs.MovieClip;
        this.player_president = this.stage_choose.getChildByName("player_president") as createjs.MovieClip;


        this.button_back.on("pressup",(): void =>{

            this.player_president.gotoAndStop("default");
            this.button_back.gotoAndStop("default");
            this.choose_presidentEvt();
            this.lvlLoad.load(levels.MENU);
            //this.lvlLoad.load("menu");
            
        })

        this.handleButton(this.button_back);

        this.choose_presidentEvt();
   
    

    }

    private choose_presidentEvt(): void
    {
        this.player_president.on("click",(evt: any): void =>{

            this.stage_choose.setChildIndex(this.player_president,this.stage_choose.numChildren-1);

            this.player_president.gotoAndPlay("zoom");

            this.button_next = this.player_president.getChildByName("button_next") as createjs.MovieClip;
            this.button_next.gotoAndStop("default");

            this.button_next.on("pressup",(): void =>{
                this.player_president.gotoAndStop("default");
                this.button_back.gotoAndStop("default");
                this.choose_presidentEvt();
                (this.lvlLoad.lib as any).player = "president";
                this.lvlLoad.load(levels.PANORAMA);
                
            })

            this.handleButton(this.button_next);
            
            evt.remove();
        })

    }

    private handleButton(button: createjs.MovieClip): void
    {
        button.mouseChildren = false;

         button.on("mouseleave",(): void =>{
            button.gotoAndStop("default");
        })
        button.on("mousedown",(): void =>{
            button.gotoAndStop("hover");
        })
        button.on("rollout",(): void =>{
            button.gotoAndStop("default");
        })
    }

}