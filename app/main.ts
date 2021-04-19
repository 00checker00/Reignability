import { Choose } from "./choose";
import { initAnimate } from "./initAnimate";
import { LevelLoader } from "./levelLoader";
import {Menu} from "./menu";
import { Panorama } from "./panorama";

//const game: Game = new Game();
let stage: createjs.Stage;

let levelLoad: LevelLoader;

let menu: Menu; //Verwalter von Menu
let choose: Choose;
let panorama: Panorama;
let game;


function start(lib: AnimateLib, stage: createjs.Stage): void{

    stage.enableMouseOver(10);
    levelLoad  = new LevelLoader(lib, stage); 
    
    //Main-Menu
    levelLoad.load("menu");

    menu = new Menu(levelLoad);
    choose = new Choose(levelLoad);
    panorama = new Panorama(levelLoad);
    
}



export function init(): void {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    stage = new createjs.Stage(canvas);
    initAnimate(stage).then((lib: AnimateLib)=>start(lib,stage));
    
    
    
}