import { LevelLoader } from "./levelLoader";
import { levels } from "./levelLoader";

export class Menu {

    public button_play: createjs.MovieClip;
    public button_what: createjs.MovieClip;
    public button_option: createjs.MovieClip;

    private lvlLoad: LevelLoader;

    constructor(loader: LevelLoader) {
        
        this.lvlLoad = loader;

        const stage_menu = loader.stage_menu;
        this.button_play = stage_menu.getChildByName("button_play") as createjs.MovieClip;
        this.button_what = stage_menu.getChildByName("button_what") as createjs.MovieClip;
        this.button_option = stage_menu.getChildByName("button_option") as createjs.MovieClip;
        
        this.handleButton(this.button_play);
        this.handleButton(this.button_what);
        this.handleButton(this.button_option);

        this.button_play.on("click",(): void =>{
            loader.load(levels.CHOOSE);
        })
        
    }

    private handleButton(button: createjs.MovieClip): void
    {

         button.on("mouseleave",(): void =>{
            button.gotoAndStop("default");
        })
        button.on("mouseover",(): void =>{
            button.gotoAndStop("hover");
        })
        button.on("rollout",(): void =>{
            button.gotoAndStop("default");
        })
    }


}