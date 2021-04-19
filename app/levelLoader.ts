export class LevelLoader {

    public stage: createjs.Stage;
    public stage_menu: createjs.MovieClip; //Verwalter von Menu
    public stage_choose: createjs.MovieClip;
    public stage_panorama: createjs.MovieClip;
    public stage_game: createjs.MovieClip;

    public current_stage: createjs.MovieClip;    
    // menu // choose // panorama // game

    constructor(lib: AnimateLib, stage: createjs.Stage) {
        this.stage = stage;
        this.stage_menu = new lib.stage_menu();
        this.stage_choose = new lib.stage_choose();
        this.stage_panorama = new lib.stage_panorama();

    }

    public load(stage_lvl: String)
    {
        if(this.current_stage != null)
        {
            this.stage.removeChild(this.current_stage);
            this.current_stage = null;
        }
        if(stage_lvl === "menu")
        {
            this.stage.addChild(this.stage_menu);
            this.current_stage = this.stage_menu;
        }
        if(stage_lvl === "choose")
        {
            this.stage.addChild(this.stage_choose);
            this.current_stage = this.stage_choose;
        }
        if(stage_lvl === "panorama")
        {
            this.stage.addChild(this.stage_panorama);
            this.current_stage = this.stage_panorama;
        }

    }

}