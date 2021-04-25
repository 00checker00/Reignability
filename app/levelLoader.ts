import { Game } from "./game";
import { XmlLoader } from "./xmlLoader";

export enum levels {
        MENU = "menu",
        CHOOSE = "choose",
        PANORAMA = "panorama",
        GAME = "game"
      }

export class LevelLoader {

    public lib: AnimateLib;
    public stage: createjs.Stage;
    public stage_menu: createjs.MovieClip; //Verwalter von Menu
    public stage_choose: createjs.MovieClip;
    public stage_panorama: createjs.MovieClip;
    public stage_game: createjs.MovieClip;

    public current_stage: createjs.MovieClip;    

    public xmlP: XmlLoader; //President XML Fragen
    public xmlA: XmlLoader; //Activist XML Fragen
    public xmlJ: XmlLoader; //Joe XML Fragen

    public game: Game;



    // menu // choose // panorama // game

    constructor(lib: AnimateLib, stage: createjs.Stage, xmlP: XmlLoader) {

        this.lib = lib;
        this.stage = stage;
        this.stage_menu = new lib.stage_menu();
        this.stage_choose = new lib.stage_choose();
        this.stage_panorama = new lib.stage_panorama();
        this.stage_game = new lib.stage_game();

        this.xmlP = xmlP;

    }

    public load(value: levels): void
    {
        if(this.current_stage != null)
        {
            this.stage.removeChild(this.current_stage);
            this.current_stage = null;
        }
        if(value==levels.MENU)
        {
            this.stage.removeChild(this.current_stage);
            this.stage.addChild(this.stage_menu);
            this.current_stage = this.stage_menu;
        }
        if(value == levels.CHOOSE)
        {
            this.stage.removeChild(this.current_stage);
            this.stage.addChild(this.stage_choose);
            this.current_stage = this.stage_choose;
        }
        if(value == levels.PANORAMA)
        {
            this.stage.removeChild(this.current_stage);
            this.stage.addChild(this.stage_panorama);
            this.current_stage = this.stage_panorama;
        }
        if(value == levels.GAME)
        {
            this.stage.removeChild(this.current_stage);
            this.stage.addChild(this.stage_game);
            this.current_stage = this.stage_game;
            this.game.shuffleAnimation();

            if((this.lib as any).player === "president")
            {
                this.game.current_player = "president";
                this.game.cardList = this.xmlP.cardList;
                this.game.currentCard = this.xmlP.cardList[this.game.cardIndex];
            }

        }

    }

}