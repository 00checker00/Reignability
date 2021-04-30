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
        button.on("pressup",(): void =>{
            button.gotoAndStop("default");

            if(button == this.button_play)
            this.lvlLoad.load(levels.CHOOSE);
            
            //var arr1 = ["a", "b", "c", "d","f","g"];
            //arr1.sort(() => (Math.random() > .5) ? 1 : -1);
            //console.log(arr1);
        })


    }


}