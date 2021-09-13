import { LevelLoader } from "./levelLoader";
import { levels } from "./levelLoader";

export class Menu 
{

    public button_play: createjs.MovieClip;
    public button_what: createjs.MovieClip;
    public button_option: createjs.MovieClip;

    //PAUSE
    public logo_pause: createjs.MovieClip;
    public button_cont: createjs.MovieClip;
    public button_newgame: createjs.MovieClip;
    public button_menu: createjs.MovieClip;

    private lvlLoad: LevelLoader;

    constructor(loader: LevelLoader) 
    {
        
        this.lvlLoad = loader;

        const stage_menu = loader.stage_menu;
        this.button_play = stage_menu.getChildByName("button_play") as createjs.MovieClip;
        this.button_what = stage_menu.getChildByName("button_what") as createjs.MovieClip;
        this.button_option = stage_menu.getChildByName("button_option") as createjs.MovieClip;

        //PAUSE
        this.logo_pause = stage_menu.getChildByName("logo_pause") as createjs.MovieClip;
        this.button_cont = stage_menu.getChildByName("button_cont") as createjs.MovieClip;
        this.button_newgame = stage_menu.getChildByName("button_newgame") as createjs.MovieClip;
        this.button_menu = stage_menu.getChildByName("button_menu") as createjs.MovieClip;

        this.logo_pause.visible = false;
        this.button_cont.visible = false;
        this.button_newgame.visible = false;
        this.button_menu.visible = false;
        
        this.handleButton(this.button_cont);
        this.handleButton(this.button_newgame);
        this.handleButton(this.button_menu);

        this.handleButton(this.button_play);
        this.handleButton(this.button_what);
        this.handleButton(this.button_option);


        if(localStorage.length > 0)
        {
            this.button_cont.visible = true;
            this.button_play.visible = false;
            this.button_newgame.visible = false;
        }
        
    }

    public setPause(bool:boolean): void
    {
        this.button_play.visible = !bool;
        this.button_what.visible = !bool;
        this.button_option.visible = !bool;

        this.logo_pause.visible = bool;
        this.button_cont.visible = bool;
        this.button_newgame.visible = bool;
        this.button_menu.visible = bool;
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
        button.on("pressup",(): void =>
        {
            button.gotoAndStop("default");

            if(button == this.button_play)
            {
                this.lvlLoad.load(levels.CHOOSE);
                //createjs.Tween.get(this.lvlLoad.stage_menu).to({alpha:0}, 3000);
            }
                

            if(button == this.button_what)
            {
                this.lvlLoad.load(levels.WHAT);
                
            }
            
            if(button == this.button_option)
            {
                localStorage.clear();
                this.button_cont.visible = false;
                this.button_play.visible = true;
            }
 
            if(button == this.button_cont)
            {
                this.setPause(false);
                this.lvlLoad.load(levels.CONTINUE);
            }
                
            
            if(button == this.button_newgame)
            {
                this.setPause(false);
                this.lvlLoad.load(levels.CHOOSE);
            }
                

            if(button == this.button_menu)
            {
                this.setPause(false);
            }
                
        })

    }

}