import { LevelLoader } from "./levelLoader";

export class Panorama {


    private lvlLoad: LevelLoader;

    public stage_panorama:  createjs.MovieClip;
    public pollution_pic: createjs.MovieClip;

    constructor(loader: LevelLoader) {
        
        this.lvlLoad = loader;

        this.stage_panorama = loader.stage_panorama;
        this.pollution_pic = this.stage_panorama.getChildByName("pollution_pic") as createjs.MovieClip;

        let panoAni: createjs.Tween = this.stage_panorama.timeline.tweens[0];

        panoAni.bounce = true;

        panoAni.paused = true;

       
        console.log(this.stage_panorama.timeline.tweens);


    }



}