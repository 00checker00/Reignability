import { initAnimate } from "./initAnimate";
//import { Game } from "./Game";



//const game: Game = new Game();
let stage: createjs.Stage;
let level: createjs.MovieClip;




function start(lib: AnimateLib, stage: createjs.Stage): void{

    const stage_president: createjs.MovieClip = new lib.stage_president();
    
    
    stage.addChild(stage_president);

}



export function init(): void {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;



    stage = new createjs.Stage(canvas);
    initAnimate(stage).then((lib: AnimateLib)=>start(lib,stage));
    
    
}