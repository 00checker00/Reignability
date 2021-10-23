/// <reference path="../_build/@types/Animate.d.ts" />
import { LevelLoader } from "./levelLoader";
import { levels } from "./levelLoader";

export class Panorama 
{
    //stage_panorama => pollution_pic => panorama_pic
    private lvlLoad: LevelLoader;

    public stage_panorama:  createjs.MovieClip;
    public pollution_pic: Animate.pollution_pic;
    public panorama_pic: createjs.Bitmap;

    private offset: {x: number; y: number};

    private oldX: number;

    private hold_circle: createjs.MovieClip;

    private flyFlag = false;


    //Biods
    private biod_energy: createjs.MovieClip;
    private biod_sea: createjs.MovieClip;
    private biod_social: createjs.MovieClip;

    constructor(loader: LevelLoader) 
    {
        this.lvlLoad = loader;

        this.stage_panorama = loader.stage_panorama;
        this.pollution_pic = this.stage_panorama.getChildByName("pollution_pic") as Animate.pollution_pic;
        
        this.biod_energy = this.pollution_pic.getChildByName("biod_energy") as Animate.biod_energy;
        this.biod_sea = this.pollution_pic.getChildByName("biod_sea") as Animate.biod_sea;
        this.biod_social = this.pollution_pic.getChildByName("biod_social") as Animate.biod_social;

        //this.pollution_pic.cache(0, 0,this.pollution_pic.instance.getBounds().width,this.pollution_pic.instance.getBounds().height);
        this.pollution_pic.children[0].snapToPixel = true;

        
        const tween: createjs.Tween = createjs.Tween.get(this.pollution_pic, {loop: 1, reversed:false, bounce:true}).to({x:-this.pollution_pic.getBounds().width+this.lvlLoad.stage.getBounds().width}, 300);
        this.stage_panorama.timeline.addTween(tween);
        
        this.pollution_pic.x = 0;

        this.hold_circle = new this.lvlLoad.lib.hold_circle();

        const fly = new this.lvlLoad.lib.fly_circle();

        fly.scaleX = 1.1;
        fly.scaleY = 1.1;
   
        
        this.stage_panorama.addChild(fly);
        fly.x = this.lvlLoad.lib.properties.width/2;
        fly.y = this.lvlLoad.lib.properties.height/2;        
 
        //this.lvlLoad.stage.get
 
        fly.on("mousedown",(evt: any) =>  
        {
            fly.stop();
            (fly as any).fly_ani.gotoAndStop("dead");
            (fly as any).bubble.visible = false;

            if(this.flyFlag)
                (fly as any).fly_ani.bubble.visible = false;
            else
                (fly as any).fly_ani.bubble.visible = true;
                
            this.flyFlag = !this.flyFlag;    
            
            
            this.stage_panorama.on("mousedown",(evt: any): void => 
            {
               
                this.offset = {x: this.pollution_pic.x - this.stage_panorama.globalToLocal(evt.stageX,evt.stageY).x, y: this.pollution_pic.y - this.stage_panorama.globalToLocal(evt.stageX,evt.stageY).y};
    
                this.stage_panorama.stop();
                this.stage_panorama.addChild(this.hold_circle);
                this.hold_circle.x = this.stage_panorama.globalToLocal(evt.stageX,evt.stageY).x;
                this.hold_circle.y = this.stage_panorama.globalToLocal(evt.stageX,evt.stageY).y;
                
                this.oldX = this.pollution_pic.x;
                this.stage_panorama.on("pressmove",(evt: any): void =>
                {
                    
           
                    this.pollution_pic.x = Math.max(Math.min(this.stage_panorama.globalToLocal(evt.stageX,evt.stageY).x + this.offset.x,0),-this.pollution_pic.getBounds().width+this.lvlLoad.stage.getBounds().width);
                    // bild.x = MAX(MIN(mouseX+offsetX,0) , - bild.breite + stage.breite)
                    // bild.y = MAX(MIN(mouseY+offsetY,0) , - bild.höhe + stage.höhe)
        
                    const delta = Math.abs(this.pollution_pic.x - this.oldX);
                    //console.log(delta);
        
                    if(delta > 50)
                        this.hold_circle.gotoAndPlay(0);
                    
                });
    
            },null, false, null,true);
          
    
            this.stage_panorama.on("pressup",(): void =>
            {
                this.hold_circle.gotoAndPlay(0);
                this.stage_panorama.removeChild(this.hold_circle);
            });
        });

        this.hold_circle.timeline.on("change",(): void=>
        {
          
            if(this.hold_circle.paused)
            {
                this.lvlLoad.load(levels.GAME);
                fly.visible = false;
            }
            
        })

    }
    
    public setBiods(biods: any[]):void
    {
        //BIODS anzeigen
        (this.lvlLoad.lib as any).biod_sea_status = biods[0].biod_sea;
        (this.lvlLoad.lib as any).biod_energy_status = biods[1].biod_energy;
        (this.lvlLoad.lib as any).biod_social_status = biods[2].biod_social;
        (this.lvlLoad.lib as any).biod_street_status = biods[3].biod_street;
        (this.lvlLoad.lib as any).biod_wald_status = biods[4].biod_wald;
        (this.lvlLoad.lib as any).biod_city_status = biods[5].biod_city;
        (this.lvlLoad.lib as any).biod_flaeche_status = biods[6].biod_flaeche;
        
    }
}