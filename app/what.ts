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

    public saveY = 0;
    public i = 0;

    public defaultY = 0;
    public newContent:createjs.MovieClip;
    public moveFlag = false;

    constructor(loader: LevelLoader) 
    {
        this.lvlLoad = loader;

        this.stage_what = this.lvlLoad.stage_what;

        this.button_back = this.stage_what.getChildByName("button_back") as createjs.MovieClip;
        this.zeile = this.stage_what.getChildByName("zeile") as createjs.MovieClip;
        (this.zeile as any).content_back.visible = false;
        (this.zeile as any).content_pic.visible = false;
        (this.zeile as any).content_text.visible = false;

        this.content_pic = (this.zeile as any).content_pic as createjs.MovieClip;
        this.content_text = (this.zeile as any).content_text as createjs.Text;

        this.button_back.on("pressup",(): void =>
        {
            this.button_back.gotoAndStop("default");

            if(this.stage_what.currentLabel === "list")
                this.lvlLoad.load(levels.MENU);    
            if(this.stage_what.currentLabel === "content")
            {
                this.newContent.y = this.defaultY;
                this.stage_what.gotoAndStop("list");
            }
                
        });

        this.handleButton(this.button_back);

        let posY = this.content_pic.y - 100;
        const gap = 200 + 15;

       
        for (let index = 0; index < this.content_pic.timeline.duration; index++) 
        {
            const neue_zeile = new this.lvlLoad.lib.zeile();
            
            neue_zeile.on("pressup",(): void =>
            {
                if(!this.moveFlag)
                {
                    this.stage_what.gotoAndStop("content");
                    (this.stage_what as any).content_pic.gotoAndStop(index);  
                    this.newContent = (this.stage_what as any).new_content;
                    this.defaultY = this.newContent.y;
                    const textField: createjs.Text = (this.stage_what as any).new_content.content_text;
                    textField.text = this.texte(index);

                    this.newContent.on("mousedown",(evt: any): void => 
                    {
                        this.offset = {x: this.newContent.x - this.stage_what.globalToLocal(evt.stageX,evt.stageY).x, y: this.newContent.y - this.stage_what.globalToLocal(evt.stageX,evt.stageY).y};
                    });
            
                    this.newContent.on("pressmove",(evt: any): void =>
                    {
                        this.newContent.y =  this.stage_what.globalToLocal(evt.stageX,evt.stageY).y + this.offset.y;
                    });

                }
            })

            this.zeilenListe.push(neue_zeile);

            neue_zeile.content_text.text = this.texte(index).split("--------")[0];
            //this.texte(index,);
            neue_zeile.content_pic.gotoAndStop(index);
            neue_zeile.content_pic.x = this.content_pic.x;

            neue_zeile.content_pic.cache(0,0,460,890,2);
            //neue_zeile.content_pic.snapToPixel = true;
            //neue_zeile.content_pic.updateCache();

            neue_zeile.y = posY;

            posY += gap;
            
            this.zeile.addChild(neue_zeile);

            
        }
       

        this.zeile.cache(-100,-100,this.zeile.getBounds().width+200,this.zeile.getBounds().height+300);	
        this.zeile.updateCache();

        this.zeile.on("mousedown",(evt: any): void => 
        {
            this.offset = {x: this.zeile.x - this.stage_what.globalToLocal(evt.stageX,evt.stageY).x, y: this.zeile.y - this.stage_what.globalToLocal(evt.stageX,evt.stageY).y};
        });

        this.zeile.on("pressmove",(evt: any): void =>
        {
            this.moveFlag = true;
            this.zeile.y =  this.stage_what.globalToLocal(evt.stageX,evt.stageY).y + this.offset.y;
            //this.zeile.updateCache();
            //this.saveY = (this.zeile.globalToLocal(this.zeilenListe[0].x,this.zeilenListe[0].y,this.zeilenListe[0]).y);
            
          
            //this.zeile.uncache();
            
        });

        this.zeile.on("pressup",(evt: any): void =>
        {
            this.moveFlag = false;
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

    private texte(index: number):string
    {
        //BILDER-ID
        //ID_0001 Dr. Right - Nachhaltigkeitsexperte
        if(index == 0)
        {
            return "Dr. Right \n\nNachhaltigkeits-\nexperte\n--------------------------\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
        }
           
        if(index == 1)
        {
            return "Fr. Sommer \n\nSekretärin";
        }
        else
        {
            return "Lorem Ipsum dolor set amet"
        }
    }

}