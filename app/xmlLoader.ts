import { Card } from "./card";
import { RandomPool } from "./randomPool";
import $ from "jquery";

export async function loadXML(url: string): Promise<(Card | RandomPool)[]> 
{
    return await new Promise((resolve) => 
    {
        const xhr = new XMLHttpRequest(); 

        xhr.open("GET", url);
        //xhr.responseType = "document";
        xhr.responseType = "text";
        xhr.overrideMimeType('text/xml');

        xhr.onload = (): void => 
        {
            if (xhr.readyState === xhr.DONE && xhr.status === 200) 
            {
                
                const cards:{[key: string]:(Card | RandomPool)} = {};

                let root:(Card | RandomPool) = null;

                const xml: string = xhr.responseText;

                const parser = new DOMParser();

                const xmlDoc = $(parser.parseFromString(xml, "text/xml"));

                const mappings = Object.fromEntries<string>(xmlDoc
                    .find("key[attr\\.name]")
                    .toArray()
                    .map((element) => [$(element).attr("attr.name"), $(element).attr("id")]));

                xmlDoc.find(`data[key=${mappings["type"]}]:contains(card)`).parent("node").each((i, element) => 
                {

                    const bild_id = $(element).find(`data[key=${mappings["bild_id"]}]`).text();
                    const card_name = $(element).find(`data[key=${mappings["card_name"]}]`).text();
                    const card_text = $(element).find(`data[key=${mappings["card_text"]}]`).text();
                    const middle = $(element).find(`data[key=${mappings["content_middle"]}]`).text() || "";
                    const node_id = $(element).attr("id");

                    cards[node_id] = new Card(bild_id, 0, 0, 0, 0, 0, 0, card_text, card_name, "", "", middle);

                    if($(element).find(`data[key=${mappings["type"]}]`).text() === "card_root")
                    {
                        root = cards[node_id];
                    }
                });


                xmlDoc.find(`data[key=${mappings["type"]}]:contains(random)`).parent("node").each((i, element) => 
                {

                    const count = $(element).find(`data[key=${mappings["random_count"]}]`).text();
                    const node_id = $(element).attr("id");


                    cards[node_id] = new RandomPool(parseInt(count));
                });

                const edges = xmlDoc.find("edge").map((i, e) => $(e)).map((i, element) => 
                {

                    const valueNatur = element.find(`data[key=${mappings["valueNatur"]}]`).text();
                    const valueDollar = element.find(`data[key=${mappings["valueDollar"]}]`).text();
                    const valueSocial = element.find(`data[key=${mappings["valueSocial"]}]`).text();
                    const content_text = element.find(`data[key=${mappings["content_text"]}]`).text();

                    const source = element.attr("source");
                    const target = element.attr("target");
                    const edge_id = element.attr("id");
                    const type = element.find("y\\:Arrows").attr("target");

                    return { valueNatur, valueDollar, valueSocial, content_text, source, target, edge_id, type };
                }).toArray();

                for (const [id, node] of Object.entries(cards)) 
                {
                    const node_edges = edges.filter((edge) => edge.source === id);

                    if (node instanceof Card) 
                    {
                        if (node_edges.length !== 2) 
                        {
                            console.warn(`Error ${node.card_text} has invalid number of Edges: expected 2 got ${node_edges.length}`);
                            continue;
                        }

                        const left = node_edges[0];
                        const right = node_edges[1];
                        node.next_links = cards[left.target];
                        node.next_rechts = cards[right.target];

                        node.text_rechts = right.content_text;
                     
                        node.value_social_rechts = (parseInt(right.valueSocial)||0)/100;
                        node.value_natur_rechts = (parseInt(right.valueNatur)||0)/100;
                        node.value_dollar_rechts = (parseInt(right.valueDollar)||0)/100;

                        node.text_links = left.content_text;
                        node.value_social_links = (parseInt(left.valueSocial)||0)/100;
                        node.value_natur_links = (parseInt(left.valueNatur)||0)/100;
                        node.value_dollar_links = (parseInt(left.valueDollar)||0)/100;

                    }

                    if (node instanceof RandomPool) 
                    {
                        const target = node_edges.filter((element) => element.type === "white_delta_bar")[0];
                        if (target == null) 
                        {
                            console.warn("target is null");
                            continue;
                        }
                        const pool = node_edges.filter((element) => element.type !== "white_delta_bar");

                        if (node_edges.length < node.count) 
                        {
                            console.warn(`Error RandomPool has invalid number auf edges: expected >= ${node.count} got ${node_edges.length}`);
                            continue;
                        }
                        node.next = cards[target.target];
                        node.pool = pool.map((element) => cards[element.target]);
                        node.shufflePool();
                    }

                }
                const list = Object.values(cards).sort((card1,card2)=> card1===root?-1:card2===root?1:0);
                resolve(list);
                console.log(list);
            }
        };
       
        xhr.send();

    });
    
    
}