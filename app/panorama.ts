import { LevelLoader } from "./levelLoader";

export class Panorama {


    private lvlLoad: LevelLoader;

    public stage_panorama:  createjs.MovieClip;
    public pollution_pic: createjs.MovieClip;

    private offset: {x:Number,y:Number};
    private right = false;
    private left = false;

    constructor(loader: LevelLoader) {
        
        this.lvlLoad = loader;

        this.stage_panorama = loader.stage_panorama;
        this.pollution_pic = this.stage_panorama.getChildByName("pollution_pic") as createjs.MovieClip;


    
        var tween :createjs.Tween = createjs.Tween.get(this.pollution_pic, {loop: 1, reversed:false, bounce:true}).to({x:-2033}, 300);
        this.stage_panorama.timeline.addTween(tween);


      

        this.pollution_pic.on("click",(): void =>{
            this.stage_panorama.stop();
            
        });

       
        this.pollution_pic.on("mousedown",(evt:any):void => {
            this.offset = {x: this.pollution_pic.x - evt.stageX, y: this.pollution_pic.y - evt.stageY};
        });



        this.pollution_pic.on("pressup",(evt:any): void =>{
           // this.mouseX = this.pollution_pic.x;
           
        });

        this.pollution_pic.on("pressmove",(evt:any): void =>{

            //console.log(this.pollution_pic.getBounds());

            if(this.pollution_pic.x < 2751 && this.pollution_pic.x > -2031)
            {
                this.pollution_pic.x = evt.stageX +  this.offset.x;


                //this.right = false;
                //this.left = true;
            }
           else
           this.pollution_pic.x = 2700;
          
            
            //if(this.pollution_pic.x > -2031)
            //this.pollution_pic.x = evt.stageX + this.offset.x;
            

            console.log(this.pollution_pic.x);
            
            
        });

        this.pollution_pic.on("dblclick",(): void =>{

            this.lvlLoad.load("menu");
            
        });

        console.log(this.stage_panorama.timeline.tweens);


    }



}