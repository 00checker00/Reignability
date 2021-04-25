import { Card } from "./card";

export class XmlLoader {


    public cardList: Card[] = []; 
    

    constructor(url: string) {
        
        const xhr = new XMLHttpRequest();
        
        xhr.open("GET",url);
        //xhr.responseType = "document";
        xhr.responseType = "text";
        xhr.overrideMimeType('text/xml');

        xhr.onload = (): void => {
            if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            //console.log((xhr.responseXML as any) as string);

            const xml: string = xhr.responseText;
                
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xml, "text/xml");
            
            const x = xmlDoc.getElementsByTagName("section");
            

            for (let i = 0; i < x.length; i++) {


                if(x[i].getAttribute("name") === "node")
                {
                    //console.log(x[i].children[0]);
                    
                    //console.log(x[i].children[1].innerHTML.split("\n"));
                    
                    const id: string = x[i].children[1].innerHTML.split("\n")[0];
                    const cardName: string = x[i].children[1].innerHTML.split("\n")[1];
                    const cardText: string = x[i].children[1].innerHTML.split("\n")[2];
                    const middle: string = x[i].children[1].innerHTML.split("\n")[3];
                    //const cardText: string = 

                    this.cardList.push(new Card(id,0,0,0,0,0,0,cardText,cardName,"R","L",middle));

                }
              }
            //document.getElementById("key").innerHTML = dom.getElementsByTagName("label")[0].childNodes[0].nodeValue;


            }
        };

        xhr.send();

        //const xmlStr = '<attribute key="label" type="String"></attribute>';
     

        //console.log(dom.documentElement.nodeName == "0" ? "error while parsing" : dom.documentElement.nodeType);

        //console.log(dom.documentElement.nodeName == "parsererror" ? "error while parsing" : dom.documentElement.nodeName);

    }


}
