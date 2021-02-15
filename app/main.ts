import { initAnimate } from "./initAnimate";
//import { Game } from "./Game";



//const game: Game = new Game();
let stage: createjs.Stage;
let menu: createjs.MovieClip;




function start(lib: AnimateLib, stage: createjs.Stage): void{

    menu = new lib.stage_menu();
    
    
    stage.addChild(menu);

}



export function init(): void {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;



    stage = new createjs.Stage(canvas);
    initAnimate(stage).then((lib: AnimateLib)=>start(lib,stage));
    
    
}