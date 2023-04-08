function LoveForm() {

let FormQuestion : [string,number,boolean?][]  = [
        ["J'aime recevoir des mots d'encouragement",1],
        ["J'aime recevoir des hugs (calins, tapes dans le dos, etc )",5],

        ["J'aime prendre du temps seul à seul avec une personne qui a de l'importance pour moi",2],
        ["Je me sens aimé(e) lorsque quelqu'un me rend un service concret",4 ],

        ["J'aime lorsque les gens m'offrent des cadeaux.",3], 
        ["J'aime passer du temps tranquilement avec des amis et des personnes qui me sont Chères.",2],

        ["Je me sens aimé(e) lorsque quelqu'un fait quelque chose pour m'aider",4],
        ["Je me sens aimé(e) lorsque l'on me touche ",5],

        ["Je me sens aimé(e) lorsqu'une personne que j'aime ou que j'admire me prend dans ses bras",5],
        ["Je me sens aimé(e) lorsque je reçois un cadeau d'une personne que j'aime ou que j'admire",3],
        

        ["J'aime me promener avec des amis ou des personnes que j'apprécie ",2],
        ["J'aime faire 'tope là' ou tenir les mains de personnes qui sont spéciales pour moi ",5],

        ["Des signes concrets d'amour (cadeaux), sont très importants pour moi ",3],
        ["Je me sens aimé(e) lorsque les gens me le disent",1],
        

        ["J'aime m'asseoir à côté des personnes avec lesquelles je me sens bien ",5],
        ["J'aime que les gens me disent que je suis belle/charmante (beau / charmant) ",1],
            
        ["J'aime passer du temps avec des amis et des personnes que j'apprécie",2],
        ["J'aime recevoir des petits cadeaux d'amis ou de personnes que j'aime",3],
        
        ["Les paroles d'approbation sont importantes pour moi. ",1],
        ["Je sais que quelqu'un m'aime lorsqu'il ou elle m'aide ou me rend service. ",4],

        ["J'aime étre en compagnie d'amis et de personnes que j'apprécie et j'aime faire des choses avec eux.",2],
        ["J'aime lorsque l'on m'adresse des paroles valorisantes.",1],
        
        ["Ce que quelqu'un fait me touche plus que ce qu'il ou elle dit.",4],
        ["Les embrassades me font me sentir apprécié(e) et lié(e) aux autres.",5],

        ["Je valorise les encouragements et j'essaye d'éviter les critiques.",1], 
        ["Plusieurs petits cadeaux signifient beaucoup plus pour moi qu'un seul gros cadeau.",3],


        ["Je me sens proche d'une personne lorsque nous parlons ou faisons des choses ensemble.",2],
        ["Je me sens proche des amis ou des personnes que j'aime lorsqu'elles me touchent souvent.",5],
        
        ["J'aime que les gens félicitent mes réalisations ou accomplissements.",1],
        ["Je sais que les gens m'aiment lorsque pour moi, elles font des choses qu'elles n'aiment pas forcément faire",4],
        
        ["J'aime le contact physique alors que je me balade avec des amis et des personnes que j'aime.",5],
        ["J'aime lorsque les gens m'écoutent et montrent une attention toute particulière à ce que je dis.",2],
        
        ["Je me sens aimé(e) lorsque des amis ou des personnes que j'aime m'aident dans mon travail",4],
        ["J'aime vraiment recevoir des cadeaux d'amis et de proches que j'aime.",3],
        
        ["J'aime que les gens me fassent des compliments sur mon apparence.",1],
        ["Je me sens aimé(e) lorsque les gens prennent le temps de comprendre mes sentiments.",2],

        ["Je me sens rassuré(e) lorsqu'une personne qui m'est spéciale me touche.",5],
        ["Les services rendus me font me sentir aimé(e).",4],
        
        ["J'apprécie toutes les choses que les personnes, qui me sont spéciales, font pour moi.",4],
        ["J'aime recevoir des cadeaux que des personnes spéciales me font.",3],

        ["J'aime vraiment le sentiment que je ressens lorsque quelqu'un me donne toute son attention.",2],
        ["J'aime vraiment le sentiment que je ressens lorsque quelqu'un m'aide à prendre des décisions",4],
        
        ["Je me sens aimé(e) lorsque quelqu'un me souhaite mon anniversaire avec un cadeau.",3],
        ["Je me sens aimé(e) lorsque quelqu'un me souhaite mon anniversaire avec des paroles valorisantes.",1],

        ["Je sais qu'une personne pense à moi lorsqu'elle m'offre un cadeau.",3],
        ["Je me sens aimé(e) lorsque ton m'aide dans mes taches ménagères",4],
        
        ["J'apprécie lorsque quelqu'un m'écoute patiemment sans m'interrompre.",2],
        ["J'apprécie lorsque l'on se souvient des jours spéciaux en m'offrant un cadeau.",3],

        ["tâches quotidiennes.", 4],
        ["J'aime les voyages prolongés avec quelqu'un qui est spécial pour moi.",2],
        
        ["J'aime embrasser et être embrassé(e) par des personnes qui me sont proches.",5],
        ["J'aime recevoir un cadeau sans raison particulière.",3],
        
        ["J'aime que l'on me dise que l'on m'apprécie.",1],
        ["J'aime que l'on me regarde lorsque je suis en train de parler.",2],
    
        ["Les cadeaux d'amis ou de personnes que j'aime sont toujours spéciaux pour moi.",3],
        ["Je me sens bien lorsqu'un ami ou quelqu'un que j'aime me touche.",5],
        
        ["Je me sens aimé(e) lorsque quelqu'un fait avec beaucoup d'enthousiasme une tâche que j'ai demandée.",4],
        ["Je me sens aimé(e) lorsque l'on me dit combien on a besoin de moi.",1],

        ["J'aime étre touché(e) chaque jour.",5],
        ["J'ai besoin de mots d'encouragement tous les jours.",1],
    ]; 




    return (
        <div className="row" >
            <table className="table">
                <tr> <th></th> <th>Question Description</th><th>Classification</th> </tr>   
            {
                (() => {
                    const rows = [];

                    for (let i = 0; i < FormQuestion.length; i++) {
                        rows.push(
                            <tr key={i}>
                                    <td>Question #{i}</td>
                                    <td>{FormQuestion[i][0]}</td>
                                    <td>{FormQuestion[i][1]}</td>
                            </tr>);
                    }

                    return rows;
                })()
            }
            </table>
        </div>
    );
}

export default LoveForm;