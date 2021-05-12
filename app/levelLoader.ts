import { Game } from "./game";
import { CardList } from "./card";
import { Card } from "./card";
import { Menu } from "./menu";
import { death, Lose } from "./lose";

export enum levels 
// eslint-disable-next-line @typescript-eslint/indent
{
    MENU = "menu",
    CHOOSE = "choose",
    PANORAMA = "panorama",
    GAME = "game",
    PAUSE = "pause",
    CONTINUE = "continue",
    LOSE = "lose"
}

export class LevelLoader 
{ 

    public lib: AnimateLib;
    public stage: createjs.Stage;
    public stage_menu: createjs.MovieClip; //Verwalter von Menu
    public stage_choose: createjs.MovieClip;
    public stage_panorama: createjs.MovieClip;
    public stage_game: createjs.MovieClip;
    public stage_lose: createjs.MovieClip;

    public current_stage: createjs.MovieClip;    


    public game: Game;
    public menu: Menu;
    public lose: Lose;

    private decks:{[key:string]:CardList};


    // menu // choose // panorama // game

    constructor(lib: AnimateLib, stage: createjs.Stage, decks:{[key:string]:CardList}) 
    {

        this.lib = lib;
        this.stage = stage;
        this.stage_menu = new lib.stage_menu();
        this.stage_choose = new lib.stage_choose();
        this.stage_panorama = new lib.stage_panorama();
        this.stage_game = new lib.stage_game();
        this.stage_lose = new lib.stage_lose();

        this.decks = decks;

    }

    public async load(value: levels): Promise<void>
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
            this.stage_panorama.play();
        
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

                this.game.cardList = this.decks[this.game.current_player];
                this.game.currentCard = this.game.cardList[0] as Card;
                this.game.currentCard.visited = true;
            }

        }
        if(value == levels.PAUSE)
        {
            this.stage.removeChild(this.current_stage);
            this.stage.addChild(this.stage_menu);
            this.current_stage = this.stage_menu;

            this.menu.setPause(true);
        }
        if(value == levels.CONTINUE)
        {
            this.stage.removeChild(this.current_stage);
            this.stage.addChild(this.stage_game);
            this.current_stage = this.stage_game;
            this.game.currentCard.visited = false;
            this.game.currentCard = this.game.pauseCard;
            this.game.setDisplayCard(this.game.pauseCard);
        }
        if(value == levels.LOSE)
        {
            this.stage.removeChild(this.current_stage);
            this.stage.addChild(this.stage_lose);
            this.current_stage = this.stage_lose;

            (this.lib as any).content = "ID_003";
            this.stage_lose.play();
       
            if(this.game.value_social <= 0)
                this.lose.showDeath(death.LOW_SOCIAL);
            else if(this.game.value_dollar <= 0)
                this.lose.showDeath(death.LOW_DOLLAR);
            else if(this.game.value_natur <= 0)
                this.lose.showDeath(death.LOW_NATUR);
            else if(this.game.value_social >= 1)
                this.lose.showDeath(death.HIGH_SOCIAL);
            else if(this.game.value_natur >= 1)
                this.lose.showDeath(death.HIGH_NATUR);
            else if(this.game.value_dollar >= 1)
                this.lose.showDeath(death.HIGH_DOLLAR);

        }

    }

}