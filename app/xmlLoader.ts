import { Card } from "./card";
import { RandomPool } from "./randomPool";
import $ from "jquery";

export class XmlLoader {


    public cardList: { [key: string]: Card | RandomPool } = {};


    constructor(url: string) {

        const xhr = new XMLHttpRequest();

        xhr.open("GET", url);
        //xhr.responseType = "document";
        xhr.responseType = "text";
        xhr.overrideMimeType('text/xml');

        xhr.onload = (): void => {
            if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                //console.log((xhr.responseXML as any) as string);

                const xml: string = xhr.responseText;

                const parser = new DOMParser();
                
                const xmlDoc = $(parser.parseFromString(xml, "text/xml"));

                const mappings = Object.fromEntries<string>(xmlDoc
                    .find("key[attr\\.name]")
                    .toArray()
                    .map((element) => [$(element).attr("attr.name")!, $(element).attr("id")!]));

                xmlDoc.find("node:not(:contains([type=ellipse]))").each((i, element) => {

                    const bild_id = $(element).find(`data[key=${mappings["bild_id"]}]`).text();
                    const card_name = $(element).find(`data[key=${mappings["card_name"]}]`).text();
                    const card_text = $(element).find(`data[key=${mappings["card_text"]}]`).text();
                    const middle = $(element).find(`data[key=${mappings["middle"]}]`).text() || "";
                    const node_id = $(element).attr("id")!;


                    this.cardList[node_id] = new Card(bild_id, 0, 0, 0, 0, 0, 0, card_text, card_name, "", "", middle);
                });


                xmlDoc.find("node:contains([type=ellipse])").each((i, element) => {

                    const count = $(element).find(`data[key=${mappings["count"]}]`).text();
                    const node_id = $(element).attr("id")!;


                    this.cardList[node_id] = new RandomPool(parseInt(count));
                });

                const edges = xmlDoc.find("edge").map((i, element) => {

                    const valueNatur = $(element).find(`data[key=${mappings["valueNatur"]}]`).text();
                    const valueDollar = $(element).find(`data[key=${mappings["valueDollar"]}]`).text();
                    const valueSocial = $(element).find(`data[key=${mappings["valueSocial"]}]`).text();
                    const content_text = $(element).find(`data[key=${mappings["content_text"]}]`).text();

                    const source = $(element).attr("source");
                    const target = $(element).attr("target");
                    const edge_id = $(element).attr("id");
                    const type = $(element).find("Arrows").attr("target");

                    return { valueNatur, valueDollar, valueSocial, content_text, source, target, edge_id, type };
                }).toArray();

                for (const [id, node] of Object.entries(this.cardList)) {
                    const node_edges = edges.filter((edge) => edge.source === id);

                    if (node instanceof Card) {
                        if (node_edges.length !== 2) {
                            console.warn(`Error ${node.card_text} has invalid number of Edges: expected 2 got ${node_edges.length}`);
                            continue;
                        }

                        const left = node_edges[0]!;
                        const right = node_edges[1]!;
                        node.next_links = this.cardList[left.target!];
                        node.next_rechts = this.cardList[right.target!];

                        node.text_rechts = right.content_text;
                        node.value_social_rechts = parseInt(right.valueSocial);
                        node.value_natur_rechts = parseInt(right.valueNatur);
                        node.value_dollar_rechts = parseInt(right.valueDollar);

                        node.text_links = left.content_text;
                        node.value_social_links = parseInt(left.valueSocial);
                        node.value_natur_links = parseInt(left.valueNatur);
                        node.value_dollar_links = parseInt(left.valueDollar);

                    }

                    if (node instanceof RandomPool) {
                        const target = node_edges.filter((element) => element.type === "white_delta_bar")[0];
                        if (target == null) {
                            console.warn("target is null");
                            continue;
                        }
                        const pool = node_edges.filter((element) => element.type !== "white_delta_bar");

                        if (node_edges.length < node.count) {
                            console.warn(`Error RandomPool has invalid number auf edges: expected >= ${node.count} got ${node_edges.length}`);
                            continue;
                        }
                        node.next = this.cardList[target.target!];
                        node.pool = pool.map((element) => this.cardList[element.target!]);
                    }

                    
                }
                console.log(this.cardList);
            }
        };

        xhr.send();

    }

}
