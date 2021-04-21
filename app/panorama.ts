import { LevelLoader } from "./levelLoader";
import { levels } from "./levelLoader";

export class Panorama {


    private lvlLoad: LevelLoader;

    public stage_panorama:  createjs.MovieClip;
    public pollution_pic: createjs.MovieClip;

    private offset: {x: number; y: number};

    constructor(loader: LevelLoader) {
        
        this.lvlLoad = loader;

        this.stage_panorama = loader.stage_panorama;
        this.pollution_pic = this.stage_panorama.getChildByName("pollution_pic") as createjs.MovieClip;


    
        const tween: createjs.Tween = createjs.Tween.get(this.pollution_pic, {loop: 1, reversed:false, bounce:true}).to({x:-this.pollution_pic.getBounds().width+this.lvlLoad.stage.getBounds().width}, 300);
        this.stage_panorama.timeline.addTween(tween);

        this.pollution_pic.x = 0;


        this.pollution_pic.on("click",(): void =>{
            this.stage_panorama.stop();
            
        });

       
        this.pollution_pic.on("mousedown",(evt: any): void => {
            this.offset = {x: this.pollution_pic.x - evt.stageX, y: this.pollution_pic.y - evt.stageY};
        });


        this.pollution_pic.on("pressmove",(evt: any): void =>{
            this.pollution_pic.x = Math.max(Math.min(evt.stageX + this.offset.x,0),-this.pollution_pic.getBounds().width+this.lvlLoad.stage.getBounds().width);
        });

        this.pollution_pic.on("dblclick",(): void =>{

            this.lvlLoad.load(levels.GAME);
            
        });
    }



}