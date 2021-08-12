/// <reference path="../_build/@types/Animate.d.ts" />
declare const AdobeAn: any;

function handleFileLoad(evt: any, comp: any): void {
    const images = comp.getImages();
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}

function handleComplete(stage: createjs.Stage, comp: any, evt: any): AnimateLib {
    const lib: AnimateLib = comp.getLibrary();
    const ss = comp.getSpriteSheet();
    const queue = evt.target;
    const ssMetadata = lib.ssMetadata;
    for (let i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
    }
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const animContainer = document.getElementById("animation_container");
    const domOverlayContainer = document.getElementById("dom_overlay_container");

    canvas.style.backgroundColor = lib.properties.color;

    var preloaderDiv = document.getElementById("_preload_div_");
	preloaderDiv.style.display = 'none';
	canvas.style.display = 'block';

    //Registers the "tick" event listener.
    const fnStartAnimation = function (): void {
        //stage.addChild(exportRoot);
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener("tick", stage);
    }

    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp: boolean, respDim: string, isScale: boolean, scaleType: number): void {
        let lastW: number, lastH: number, lastS: number = 1;
        function resizeCanvas(): void {
            const w = lib.properties.width, h = lib.properties.height;
            const iw = window.innerWidth, ih = window.innerHeight;
            const pRatio = window.devicePixelRatio || 1;
            const xRatio = iw / w;
            const yRatio = ih / h;
            let sRatio = 1;

            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w * pRatio * sRatio;
            canvas.height = h * pRatio * sRatio;
            canvas.style.width = domOverlayContainer!.style.width = animContainer!.style.width = w * sRatio + 'px';
            canvas.style.height = animContainer!.style.height = domOverlayContainer!.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
    }
    makeResponsive(true, 'both', true, 1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();

    for (const x of Object.keys(lib)) {
        if ((lib as any)[x].prototype)
            (lib as any)[x].prototype.type = x;
    }

    return lib;
}

function disableZoom(): void {
    document.onkeydown = event => {
        if (event.ctrlKey == true && (event.which == 61 || event.which == 107 || event.which == 173 || event.which == 109 || event.which == 187 || event.which == 189)) {
            event.preventDefault();
        }
    };
};

window.onwheel = (event: any) => {
    if (event.ctrlKey == true) {
        event.preventDefault();
    }
}

export function initAnimate(stage: createjs.Stage | createjs.StageGL): Promise<AnimateLib> {

    return new Promise((done) => {

        const comp = AdobeAn.compositions[Object.keys(AdobeAn.compositions)[0]];
        const loader = new (createjs as any).LoadQueue(false);

        loader.addEventListener("error", (evt: any) => console.log(evt));
        loader.addEventListener("fileload", (evt: any) => { handleFileLoad(evt, comp) });
        loader.addEventListener("complete", (evt: any) => { done(handleComplete(stage, comp, evt)) });
        if (!(Object.keys(comp.getLibrary().properties.manifest).length == 0)) {
            loader.loadManifest(comp.getLibrary().properties.manifest, false);
        }

        loader.load();

        (window as any).lib = comp.getLibrary();
        disableZoom();

    })


}
