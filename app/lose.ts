import { LevelLoader, levels } from "./levelLoader";

export enum death
// eslint-disable-next-line @typescript-eslint/indent
{
    HIGH_SOCIAL,
    LOW_SOCIAL,
    HIGH_NATUR,
    LOW_NATUR,
    HIGH_DOLLAR,
    LOW_DOLLAR,
}


export class Lose 
{
    public stage_lose: createjs.MovieClip;

    private lvlLoad: LevelLoader;

    public end_social: createjs.MovieClip;
    public end_natur: createjs.MovieClip;
    public end_dollar: createjs.MovieClip;

    public lose_text: createjs.Text;
    public lose_name: createjs.Text;

    public card_death: createjs.MovieClip;
    public button_back: createjs.MovieClip;

    constructor(loader: LevelLoader) 
    {
        this.lvlLoad = loader;
        
        this.stage_lose = this.lvlLoad.stage_lose;

        this.end_social = this.stage_lose.getChildByName("end_social") as createjs.MovieClip;
        this.end_natur = this.stage_lose.getChildByName("end_natur") as createjs.MovieClip;
        this.end_dollar = this.stage_lose.getChildByName("end_dollar") as createjs.MovieClip;

        this.lose_text = this.stage_lose.getChildByName("lose_text") as createjs.Text;
        this.lose_name = this.stage_lose.getChildByName("lose_name") as createjs.Text;

        this.card_death = this.stage_lose.getChildByName("card_death") as createjs.MovieClip;

        this.button_back = this.stage_lose.getChildByName("button_back") as createjs.MovieClip;

        this.handleButton(this.button_back);
    }

    public showDeath(tod: death):void
    {
        if(tod == death.HIGH_DOLLAR)
        {
            this.end_dollar.gotoAndStop("full");
            this.lose_text.text = "Die Finanzbehörde hat Ihre Papiere gefunden. Sie haben Millionen von Steuergeldern veruntreut. Sie fliehen ins Exil!";
            this.lose_name.text = "Der Ruhestand wartet auf Sie!";
        }
        if(tod == death.LOW_DOLLAR)
        {
            this.end_dollar.gotoAndStop("empty");
            this.lose_text.text = "Sie haben das Land in eine neue Wirtschaftskrise geführt. Ihr Amt ist in dieser Position für Sie nicht mehr tragbar.";
            this.lose_name.text = "Der Geldverschwender";
        }
        if(tod == death.HIGH_NATUR)
        {
            this.end_natur.gotoAndStop("full");
            this.lose_text.text = "Sie erhalten eine Auszeichnung für nachhaltige umweltfreundliche Politik. Sie versterben plötzlich...";
            this.lose_name.text = "Mit der Spitze ins Herz!";
        }
        if(tod == death.LOW_NATUR)
        {
            this.end_natur.gotoAndStop("empty");
            this.lose_text.text = "Ein Erdriss unter dem Parlament, durch eine Naturkatastrophe ausgelöst, reißt Sie und dessen Mitglieder mit!";
            this.lose_name.text = "Die Hölle wartet...";
        }
        if(tod == death.HIGH_SOCIAL)
        {
            this.end_social.gotoAndStop("full");
            this.lose_text.text = " Ihre Anhänger erstürmen das Kapitol. Viele Beamte lassen ihr Leben. Sie werden zur Rechenschaft gezogen.";
            this.lose_name.text = "Vereinte Provinzen! First!";
        }
        if(tod == death.LOW_SOCIAL)
        {
            this.end_social.gotoAndStop("empty");
            this.lose_text.text = "Sie verlieren eine Menge an Parteiunterstützer. Ein Impeachment wird gegen Sie eingeleitet.";
            this.lose_name.text = "Der Rauswurf aus dem grünen Haus";
        }
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
        button.on("pressup",(): void =>
        {
            this.lvlLoad.load(levels.PANORAMA);
        })

    }

}