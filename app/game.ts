import { LevelLoader, levels } from "./levelLoader";
import { Card, CardList } from "./card";
import { RandomPool } from "./randomPool";


export class Game 
{
    private lvlLoad: LevelLoader;

    public back: createjs.MovieClip;

    public buff_1:  createjs.MovieClip;
    public buff_2:  createjs.MovieClip;
    public buff_3:  createjs.MovieClip;
    public buff_4:  createjs.MovieClip;

    public pillar_social: createjs.MovieClip;
    public pillar_natur: createjs.MovieClip;
    public pillar_dollar: createjs.MovieClip;

    public social_balken: createjs.MovieClip;
    public natur_balken: createjs.MovieClip;
    public dollar_balken: createjs.MovieClip;

    public social_dot: createjs.MovieClip;
    public natur_dot: createjs.MovieClip;
    public dollar_dot: createjs.MovieClip;

    public card_text: createjs.Text;
    public card_name: createjs.Text;


    public deck: createjs.MovieClip;
    public deck_content: createjs.MovieClip;
    public deck_content_text: createjs.Text;

    public card_background: createjs.MovieClip;
    public card_middle: createjs.MovieClip;
    public card_front: createjs.MovieClip;
    // president // activist // joe
    public current_player;

    public stage_game: createjs.MovieClip;

    public value_social = 0.5;
    public value_natur = 0.5;
    public value_dollar = 0.5;

    private right = false;
    private left = false;
    private out = false;

    public cardList: CardList;
    public currentCard: Card;
    public pauseCard:Card;
    //public cardIndex = 0;

    public fontS = 50;

    //DEFINE BIODS
    public biods = [{biod_sea: "fishing_small"}, //fishing_small,oil_big
        {biod_energy: "atom"}, //atom,wind,solar
        {biod_social: "hill"}, //hill,hospital,school
        {biod_street: "small"}, //middle,small
        {biod_wald: "abholz"}, //wald,abholz
        {biod_city: "small"}, //middle,small
        {biod_flaeche: "industry"}] //farm,industry

    constructor(loader: LevelLoader) 
    { 

        this.lvlLoad = loader;

        this.stage_game = this.lvlLoad.stage_game;

        this.back = this.stage_game.getChildByName("back") as createjs.MovieClip;

        this.pillar_social = this.stage_game.getChildByName("pillar_social") as createjs.MovieClip;
        this.pillar_natur = this.stage_game.getChildByName("pillar_natur") as createjs.MovieClip;
        this.pillar_dollar = this.stage_game.getChildByName("pillar_dollar") as createjs.MovieClip;

        this.social_balken = this.pillar_social.getChildByName("balken") as createjs.MovieClip;
        this.natur_balken = this.pillar_natur.getChildByName("balken") as createjs.MovieClip;
        this.dollar_balken = this.pillar_dollar.getChildByName("balken") as createjs.MovieClip;

        this.social_dot = this.stage_game.getChildByName("social_dot") as createjs.MovieClip;
        this.natur_dot = this.stage_game.getChildByName("natur_dot") as createjs.MovieClip;
        this.dollar_dot = this.stage_game.getChildByName("dollar_dot") as createjs.MovieClip;


        this.card_text = this.stage_game.getChildByName("card_text") as createjs.Text;
        this.card_name = this.stage_game.getChildByName("card_name") as createjs.Text;

        this.deck = this.stage_game.getChildByName("deck") as createjs.MovieClip;
        this.deck_content = this.deck.getChildByName("content") as createjs.MovieClip;
        this.deck_content_text = this.deck.getChildByName("content_text") as createjs.Text;
        this.card_background = this.deck.getChildByName("card_background") as createjs.MovieClip;
        this.card_middle = this.deck.getChildByName("card_middle") as createjs.MovieClip;
        this.card_front = this.deck.getChildByName("card_front") as createjs.MovieClip;

        this.buff_1 = this.stage_game.getChildByName("deck") as createjs.MovieClip;
        this.buff_2 = this.stage_game.getChildByName("deck") as createjs.MovieClip;
        this.buff_3 = this.stage_game.getChildByName("deck") as createjs.MovieClip;
        this.buff_4 = this.stage_game.getChildByName("deck") as createjs.MovieClip;

        this.card_text.text = "";
        this.card_name.text = "";
        this.deck_content_text.text = "";

        this.stage_game.on("rollout", (): void => 
        {
            this.out = true;
        })

        this.stage_game.on("rollover", (): void => 
        {
            this.out = false;
        })

        this.handleButton(this.back);


        this.back.on("pressup",(): void =>
        {
            this.back.gotoAndStop("default");
            this.lvlLoad.load(levels.PAUSE);   
        })


    }

    public startGame(): void 
    {
        this.deck.gotoAndPlay("draw");


        this.card_text.text = this.currentCard.card_text;
        this.card_name.text = this.currentCard.card_name;

        (this.lvlLoad.lib as any).content = this.currentCard.card_id;
        this.deck_content.gotoAndStop(this.currentCard.card_id);
        this.deck_content_text.text = this.currentCard.text_mitte;

        createjs.Ticker.on("tick", (): void => 
        {
            
            const mouseX = this.stage_game.globalToLocal(this.lvlLoad.stage.mouseX, this.lvlLoad.stage.mouseY).x;
            (this.lvlLoad.lib as any).content = this.currentCard.card_id;

            if (this.deck.currentLabel == "ready" && !this.out) 
            {

                this.card_text.text = this.currentCard.card_text;
                this.card_name.text = this.currentCard.card_name;


                while (this.card_text.getBounds().height > 300)
                    this.card_text.font = --this.fontS + "px 'OCRAEXT'";


                //Swipen nach Rechts oder Links
                if (mouseX > 560 && !this.right) 
                {
                    this.deck.gotoAndPlay("move_right");
                    this.right = true;
                    this.setDisplayCard(this.currentCard);
                }
                if (mouseX < 190 && !this.left) 
                {
                    this.deck.gotoAndPlay("move_left");
                    this.left = true;
                    this.setDisplayCard(this.currentCard);
                }
            }


            // In die Mitte wieder
            if (mouseX > 191 && mouseX < 559 && this.deck.paused && !this.out) 
            {
                this.resetContent();
                this.deck_content_text.text = this.currentCard.text_mitte;
            }
            this.checkValues();


        });

        //Play Karte los lassen (evt): void =>
        
        this.stage_game.on("pressup", (evt) => 
        {
            {
                //Touch Reset
                this.lvlLoad.stage.mouseX = this.stage_game.localToGlobal(this.lvlLoad.stage.getBounds().width / 2,this.lvlLoad.stage.getBounds().height / 2).x;
           
                if(this.right)
                {
                    this.setValues(this.currentCard.value_social_rechts, this.currentCard.value_natur_rechts, this.currentCard.value_dollar_rechts);
                }

                if(this.left)
                {
                    this.setValues(this.currentCard.value_social_links, this.currentCard.value_natur_links, this.currentCard.value_dollar_links);
                }

                if (this.right || this.left) 
                {
                    this.card_text.font = "50px 'OCRAEXT'";
                    this.fontS = 50;

                    if (this.currentCard instanceof Card) 
                    {
                        if(this.right)
                            this.currentCard = this.currentCard.next_rechts as Card;

                        if(this.left)
                            this.currentCard = this.currentCard.next_links as Card;

                        (this.lvlLoad.lib as any).content = this.currentCard.card_id;
                        this.currentCard.visited = true;

                        this.cardGameChecker();
                        this.setSave();
                    }
                    if (this.currentCard instanceof RandomPool) 
                    {
                        //Geht die RandomPool-Karten durch
                        if (this.currentCard.index < this.currentCard.count) 
                        {
                            const randomCard = this.currentCard.pool[this.currentCard.index];
                            this.currentCard.index++;
                            this.currentCard = randomCard as Card;
                        }
                        //Ziel erreicht raus aus Random
                        else if(this.currentCard.index == this.currentCard.count)
                        {
                            this.currentCard.index = 0;
                            this.currentCard = this.currentCard.next as Card;
                        }
                        //DecisionPool bei -1
                        else if(this.currentCard.count < 0)
                        {
                            const length = this.currentCard.queryEdges.length;
                            
                            for (let index = 0; index < length-1; index++) 
                            {
                                const currentPool  = ((this.currentCard as unknown) as RandomPool);
                                console.log(currentPool);
                                if(currentPool.queryEdges[index].startsWith("biod_"))
                                {
                                    const status = currentPool.queryEdges[index].split(".")[1];
                                    //CHECK BIODS for decision
                                    if(this.biods[0].biod_sea == status || this.biods[1].biod_energy == status || this.biods[2].biod_social == status)
                                    {
                                        const decisionCard = currentPool.pool[index];
                                        this.currentCard = decisionCard as Card;
                                        break;
                                    }
                                }
                                else if(currentPool.queryEdges[index] === "")
                                {
                                    const noDecisionCard = currentPool.next;
                                    this.currentCard = noDecisionCard as Card;
                                }
                                
                            }
                            
                        }
                    
                    }

                    if(this.right)
                    {
                        this.deck.gotoAndPlay("discard_right");
                        this.right = false;
                    }

                    if(this.left)
                    {
                        this.deck.gotoAndPlay("discard_left");
                        this.left = false;
                    }

                    if(this.value_social <= 0 || this.value_dollar <= 0 || this.value_natur <= 0 || this.value_social >= 1 || this.value_natur >= 1 || this.value_dollar >= 1)
                        this.lvlLoad.load(levels.LOSE);

                    this.deck_content_text.text = " ";
                    this.card_text.text = " ";
                    this.card_name.text = " ";
                    this.card_text.font = "50px 'OCRAEXT'";
                    this.fontS = 50;
                }
            
           
            }
        });
    
    }

    public setDisplayCard(karte: Card): void 
    {

        this.card_text.text = karte.card_text;

        this.card_text.text = this.currentCard.card_text;

        while(this.card_text.getBounds().height > 300)
            this.card_text.font = --this.fontS + "px 'OCRAEXT'";


        this.card_name.text = karte.card_name;
        (this.lvlLoad.lib as any).content = karte.card_id;
        this.deck_content.gotoAndStop(karte.card_id);
        this.card_middle

        if (this.left) 
        {
            this.deck_content_text.text = karte.text_links;
            this.showDot(karte.value_social_links, this.social_dot);
            this.showDot(karte.value_natur_links, this.natur_dot);
            this.showDot(karte.value_dollar_links, this.dollar_dot);

        }
        if (this.right) 
        {
            this.deck_content_text.text = karte.text_rechts;
            this.showDot(karte.value_social_rechts, this.social_dot);
            this.showDot(karte.value_natur_rechts, this.natur_dot);
            this.showDot(karte.value_dollar_rechts, this.dollar_dot);
        }


    }

    public showDot(value: number, dot: createjs.MovieClip): void 
    {

        //Skala 0 -> 0.01 -> 0.03 -> 0.05 -> 0.1
        value = Math.abs(value);

        if (value <= 0.1)
            dot.gotoAndStop("big");
        if (value <= 0.05)
            dot.gotoAndStop("middle");
        if (value <= 0.03)
            dot.gotoAndStop("small");
        if (value <= 0.01)
            dot.gotoAndStop("mini");
        if (value <= 0)
            dot.gotoAndStop("default");
    }

    public resetDot(): void 
    {
        this.social_dot.gotoAndStop("default");
        this.natur_dot.gotoAndStop("default");
        this.dollar_dot.gotoAndStop("default");
    }

    public resetContent(): void 
    {
        if (this.right)
            this.deck.gotoAndPlay("move_right_back");

        if (this.left)
            this.deck.gotoAndPlay("move_left_back");

        this.deck_content_text.text = "";
        this.resetDot();

        this.left = false;
        this.right = false;
    }

    public setValues(vs: number, vn: number, vd: number): void 
    {
        const fakeFaktor = 1;
        this.value_social += vs*fakeFaktor;
        this.value_natur += vn*fakeFaktor;
        this.value_dollar += vd*fakeFaktor;
    }

    public resetValues(): void 
    {
        this.value_social = 0.5;
        this.value_natur = 0.5;
        this.value_dollar = 0.5;
    }

    public checkValues(): void 
    {

        const unter = 0.2;
        const ober = 0.8;

        this.social_balken.scaleY = this.value_social;
        this.natur_balken.scaleY = this.value_natur;
        this.dollar_balken.scaleY = this.value_dollar;

        this.colorBalken(this.social_balken, this.value_social, unter, ober);
        this.colorBalken(this.natur_balken, this.value_natur, unter, ober);
        this.colorBalken(this.dollar_balken, this.value_dollar, unter, ober);

      
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public colorBalken(balken: any, value: number, untere: number, obere: number): void 
    {

        balken.shape.graphics._fill.style = "#00CB32";

        if (value > obere)
            balken.shape.graphics._fill.style = "#FFFFFF";
        if (value < untere)
            balken.shape.graphics._fill.style = "#FF0000";
    }

    public shuffleAnimation(): void 
    {

        let i = 1;
        let count = 0;
        const anzahl = 3;

        createjs.Ticker.on("tick", (): void => 
        {

            i = (i + 1) % 6;
            if (i == 0 && count <= anzahl) 
            {
                count++;
                const ani = new this.lvlLoad.lib.shuffle_ani();

                (ani as any).card_back.gotoAndStop(this.current_player);
                this.stage_game.addChild(ani);
                ani.x = this.deck.x - 200;
                ani.y = this.deck.y - 270;

                this.lvlLoad.stage.mouseX = this.stage_game.localToGlobal(this.lvlLoad.stage.getBounds().width / 2,this.lvlLoad.stage.getBounds().height / 2).x;

            }

            if (count == anzahl) 
            {
                count = anzahl + 1;
                this.startGame();
            }

        }); 

   
    }

    private handleButton(button: createjs.MovieClip): void
    {
        button.mouseChildren = false;
      
        button.on("mouseleave",(): void =>
        {
            button.gotoAndStop("default");
        });

        button.on("mousedown",(evt: createjs.Event): void =>
        {
            
            evt.stopPropagation();

            button.gotoAndStop("hover");
            //this.pauseCard = this.currentCard;
        });

        button.on("pressup",(evt: createjs.Event): void =>
        {
            evt.stopPropagation();
        });

        button.on("rollout",(): void =>
        {
            button.gotoAndStop("default");
        });
    }

    private setSave():void
    {
        localStorage.setItem('pillar', JSON.stringify({dollar: this.value_dollar, natur: this.value_natur, social: this.value_social}));
        localStorage.setItem('player', JSON.stringify({player: (this.lvlLoad.lib as any).player}));
        localStorage.setItem('biod', JSON.stringify(this.biods));
        
       
        if(this.currentCard instanceof Card)
        {
            localStorage.setItem('card', JSON.stringify({currentCard_text: this.currentCard.card_text}));
        }
            
       
        if(this.currentCard instanceof RandomPool)
            localStorage.setItem('card', JSON.stringify({currentCard_text: (this.currentCard.pool[0] as Card).card_text}));
       
        this.setStatus();
    }

    public loadSave():void
    {

        if(localStorage.length > 0)
        {
            JSON.parse(localStorage.getItem('pillar')).dollar = this.value_dollar;
            JSON.parse(localStorage.getItem('pillar')).natur = this.value_natur;
            JSON.parse(localStorage.getItem('pillar')).social = this.value_social;
            
            (this.lvlLoad.lib as any).player = JSON.parse(localStorage.getItem('player')).player;
        
            //BIODS
            this.biods[0].biod_sea = JSON.parse(localStorage.getItem('biod'))[0].biod_sea;
            this.biods[1].biod_energy = JSON.parse(localStorage.getItem('biod'))[1].biod_energy;
            this.biods[2].biod_social = JSON.parse(localStorage.getItem('biod'))[2].biod_social;
            this.biods[3].biod_street = JSON.parse(localStorage.getItem('biod'))[3].biod_street;
            this.biods[4].biod_wald = JSON.parse(localStorage.getItem('biod'))[4].biod_wald;
            this.biods[5].biod_city = JSON.parse(localStorage.getItem('biod'))[5].biod_city;
            this.biods[6].biod_flaeche = JSON.parse(localStorage.getItem('biod'))[6].biod_flaeche;

            const currentText: string = JSON.parse(localStorage.getItem('card')).currentCard_text;

            for (let index = 0; index < this.cardList.length; index++) 
            {
                if(this.cardList[index] instanceof Card)
                {
                    if(currentText === (this.cardList[index] as Card).card_text)
                    {
                        this.currentCard = this.cardList[index] as Card;
                    }
                }
            }
        }
        else
        {
            this.setSave();
        }
        

    }

    private setStatus()
    {
        for (const [key, value] of Object.entries(localStorage)) 
        {
            const obj: Object = JSON.parse(localStorage.getItem(key));

            if(obj instanceof Array)
            {
                for (let index = 0; index < obj.length; index++) 
                {
                    if((Object.keys(obj)+"").startsWith("biod_"))
                    {
                        for (let index2 = 0; index2 < this.biods.length; index2++) 
                        {
                            if(Object.keys(this.biods[index2])+"" == Object.keys(obj)+"")
                            {
                                Object.assign(this.biods[index2],obj)
                            }
                        }
                    }
                    
                }
            }
        }
    }


    private setBuff(buff: string)
    {
        //TODO
        //default|oil|health|wissen|
        if(this.buff_1.currentLabel === "default")
        {

        }
    }

    public cheatGoTo(cardText: string):boolean
    {
        for (let index = 0; index < this.cardList.length; index++) 
        {
            if(this.cardList[index] instanceof Card)
            {
                if((this.cardList[index]as Card).card_text?.startsWith(cardText))
                {
                    this.currentCard = this.cardList[index] as Card;
                    return true;
                }
            }
        }
        return false;
    }
    
    private cardGameChecker():void
    {
        if(this.currentCard.card_flag?.length > 0)
        {
            const flag = this.currentCard.card_flag.split(".");
            //const flagObj = JSON.parse("{"+ '"'+flag[0]+ '"'+ ":" + '"'+flag[1]+ '"' +"}"); 
            //JSON.stringify(obj1) === JSON.stringify(obj2)   //Compare

            for (let index = 0; index < this.biods.length; index++) 
            {
                if(Object.keys(this.biods[index])+"" === flag[0])
                {
                    this.biods[index][flag[0]] = flag[1];
                }
           
            }

        }
        this.setStatus();
        
    }


}