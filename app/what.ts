import { LevelLoader } from "./levelLoader";
import { levels } from "./levelLoader";

export class What 
{ 
    private lvlLoad: LevelLoader;

    public button_back: createjs.MovieClip;
    public zeile: createjs.MovieClip;

    public content_pic: createjs.MovieClip;
    public content_text:  createjs.Text;

    private offset: {x: number; y: number};

    public stage_what: createjs.MovieClip;

    public zeilenListe = new Array<createjs.MovieClip>();

    public defaultY: number;

    constructor(loader: LevelLoader) 
    {
        this.lvlLoad = loader;

        this.stage_what = this.lvlLoad.stage_what;

        this.button_back = this.stage_what.getChildByName("button_back") as createjs.MovieClip;
        this.zeile = this.stage_what.getChildByName("zeile") as createjs.MovieClip;
        this.defaultY = this.zeile.y;

        this.content_pic = (this.zeile as any).content_pic as createjs.MovieClip;
        this.content_text = (this.zeile as any).content_text as createjs.Text;

        //this.zeile.mouseChildren = false;
       
        this.button_back.on("pressup",(): void =>
        {
            this.button_back.gotoAndStop("default");
            this.lvlLoad.load(levels.MENU);    

            this.zeile.y = this.defaultY;
        });

        this.handleButton(this.button_back);

        let posY = this.content_pic.y - 100;
        const gap = 200 + 15;

       
        for (let index = 0; index < this.content_pic.timeline.duration; index++) 
        {
            const neue_zeile = new this.lvlLoad.lib.zeile();

            this.zeilenListe.push(neue_zeile);


            neue_zeile.content_pic.gotoAndStop(index);
            neue_zeile.content_pic.x = this.content_pic.x;

            neue_zeile.content_pic.cache(0,0,460,850,2);
            //neue_zeile.content_pic.snapToPixel = true;
            //neue_zeile.content_pic.updateCache();

            neue_zeile.y = posY;

            posY += gap;
            
            this.zeile.addChild(neue_zeile);
        }
        this.zeile.cache(-100,-100,this.zeile.getBounds().width+200,this.zeile.getBounds().height+200);	
        this.zeile.updateCache();

        this.zeile.on("mousedown",(evt: any): void => 
        {
            this.offset = {x: this.zeile.x - this.stage_what.globalToLocal(evt.stageX,evt.stageY).x, y: this.zeile.y - this.stage_what.globalToLocal(evt.stageX,evt.stageY).y};
        });

        this.zeile.on("pressmove",(evt: any): void =>
        {
            this.zeile.y =  this.stage_what.globalToLocal(evt.stageX,evt.stageY).y + this.offset.y;
            this.zeile.updateCache();
            
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