/// <reference path="../_build/@types/Animate.d.ts" />
import { LevelLoader } from "./levelLoader";
import { levels } from "./levelLoader";

export class Panorama 
{
    private lvlLoad: LevelLoader;

    public stage_panorama:  createjs.MovieClip;
    public pollution_pic: Animate.pollution_pic;
    public panorama_pic: createjs.Bitmap;

    private offset: {x: number; y: number};

    private oldX: number;

    private hold_circle: createjs.MovieClip;

    constructor(loader: LevelLoader) 
    {
        this.lvlLoad = loader;

        this.stage_panorama = loader.stage_panorama;
        this.pollution_pic = this.stage_panorama.getChildByName("pollution_pic") as Animate.pollution_pic;

        //this.pollution_pic.cache(0, 0,this.pollution_pic.instance.getBounds().width,this.pollution_pic.instance.getBounds().height);
        this.pollution_pic.children[0].snapToPixel = true;

        
        const tween: createjs.Tween = createjs.Tween.get(this.pollution_pic, {loop: 1, reversed:false, bounce:true}).to({x:-this.pollution_pic.getBounds().width+this.lvlLoad.stage.getBounds().width}, 300);
        this.stage_panorama.timeline.addTween(tween);
        
        this.pollution_pic.x = 0;
       

        this.hold_circle = new this.lvlLoad.lib.hold_circle();

        this.hold_circle.timeline.on("change",(): void=>
        {
          
            if(this.hold_circle.paused)
            {
                this.lvlLoad.load(levels.GAME);
            }
        })

       
        this.pollution_pic.on("mousedown",(evt: any): void => 
        {
            this.offset = {x: this.pollution_pic.x - this.stage_panorama.globalToLocal(evt.stageX,evt.stageY).x, y: this.pollution_pic.y - this.stage_panorama.globalToLocal(evt.stageX,evt.stageY).y};

            this.stage_panorama.stop();
            this.stage_panorama.addChild(this.hold_circle);
            this.hold_circle.x = this.stage_panorama.globalToLocal(evt.stageX,evt.stageY).x;
            this.hold_circle.y = this.stage_panorama.globalToLocal(evt.stageX,evt.stageY).y;
            
            this.oldX = this.pollution_pic.x;

        });


        this.pollution_pic.on("pressmove",(evt: any): void =>
        {
            
   
            this.pollution_pic.x = Math.max(Math.min(this.stage_panorama.globalToLocal(evt.stageX,evt.stageY).x + this.offset.x,0),-this.pollution_pic.getBounds().width+this.lvlLoad.stage.getBounds().width);
            // bild.x = MAX(MIN(mouseX+offsetX,0) , - bild.breite + stage.breite)
            // bild.y = MAX(MIN(mouseY+offsetY,0) , - bild.höhe + stage.höhe)

            const delta = Math.abs(this.pollution_pic.x - this.oldX);
            //console.log(delta);

            if(delta > 50)
                this.hold_circle.gotoAndPlay(0);
            
        });


        this.pollution_pic.on("pressup",(): void =>
        {
            
            //this.hold_ani.stop();
            this.hold_circle.gotoAndPlay(0);
            this.stage_panorama.removeChild(this.hold_circle);
            
        })

    }

}