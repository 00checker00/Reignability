import { LevelLoader } from "./levelLoader";
import { levels } from "./levelLoader";

export class Choose 
{ 

    private lvlLoad: LevelLoader;

    public button_back: createjs.MovieClip;
    public player_president: createjs.MovieClip;
    public player_activist: createjs.MovieClip;
    public player_joe: createjs.MovieClip;

    public button_next: createjs.MovieClip;

    public lock_activist: createjs.MovieClip;
    public lock_joe: createjs.MovieClip;

    public stage_choose: createjs.MovieClip;

    
    constructor(loader: LevelLoader) 
    {
        
        this.lvlLoad = loader;

        this.stage_choose = this.lvlLoad.stage_choose;
        this.button_back = this.stage_choose.getChildByName("button_back") as createjs.MovieClip;
        this.player_president = this.stage_choose.getChildByName("player_president") as createjs.MovieClip;
        this.player_activist = this.stage_choose.getChildByName("player_activist") as createjs.MovieClip;
        this.player_joe = this.stage_choose.getChildByName("player_joe") as createjs.MovieClip;


        this.lock_activist = this.stage_choose.getChildByName("lock_activist") as createjs.MovieClip;
        this.lock_joe = this.stage_choose.getChildByName("lock_joe") as createjs.MovieClip;

        //Später mit Achievement ablösen und nicht einfach wegklicken
        this.lock_activist.on("pressup",(): void =>
        {
            this.lock_activist.visible = false;
        });

        this.lock_joe.on("pressup",(): void =>
        {
            this.lock_joe.visible = false;
        });


        this.button_back.on("pressup",(): void =>
        {

            this.player_president.gotoAndStop("default");
            this.player_activist.gotoAndStop("default");
            this.player_joe.gotoAndStop("default");
            this.button_back.gotoAndStop("default");
            this.choose_player(this.player_president);
            this.choose_player(this.player_activist);
            this.choose_player(this.player_joe);
            this.lvlLoad.load(levels.MENU);
            //this.lvlLoad.load("menu");
            
        });

        this.handleButton(this.button_back);

        this.choose_player(this.player_president);
        this.choose_player(this.player_activist);
        this.choose_player(this.player_joe);
    }

    private choose_player(player: createjs.MovieClip): void
    {
        player.on("click",(evt: any): void =>
        {

            if(this.player_activist.currentLabel === "default" && this.player_joe.currentLabel === "default" && this.player_president.currentLabel === "default")
            {

            
                this.stage_choose.setChildIndex(player,this.stage_choose.numChildren-1);
                player.gotoAndPlay("zoom");

                this.button_next = player.getChildByName("button_next") as createjs.MovieClip;
                this.button_next.gotoAndStop("default");

                this.button_next.on("pressup",(): void =>
                {
                    this.player_president.gotoAndStop("default");
                    this.player_activist.gotoAndStop("default");
                    this.player_joe.gotoAndStop("default");
          
                    this.button_back.gotoAndStop("default");
                    if(player == this.player_president)
                    {
                        this.choose_player(this.player_president);
                        (this.lvlLoad.lib as any).player = "president";
                    }
                    if(player == this.player_activist)
                    {
                        this.choose_player(this.player_activist);
                        (this.lvlLoad.lib as any).player = "activist";
                    }
                    if(player == this.player_joe)
                    {
                        this.choose_player(this.player_joe);
                        (this.lvlLoad.lib as any).player = "joe";
                    }

                    this.lvlLoad.load(levels.PANORAMA);
                
                })

                this.handleButton(this.button_next);
            
                evt.remove();
            }
        });
    
    }

    private handleButton(button: createjs.MovieClip): void
    {
        button.mouseChildren = false;

        button.on("mouseleave",(): void =>
        {
            button.gotoAndStop("default");
        })
        button.on("mousedown",(): void =>
        {
            button.gotoAndStop("hover");
        })
        button.on("rollout",(): void =>
        {
            button.gotoAndStop("default");
        })
    }
 
}