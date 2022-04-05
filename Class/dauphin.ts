import Mammifere from "../Abstract/mammifere";
import Aquatique from "../Interfaces/aquatique";

export default class Dauphin extends Mammifere implements Aquatique {

     /**
     * 
     * @param nom Appelle le constructeur parent (mammifere)
     * @param poids 
     * @param dateNaissance 
     */
    constructor(nom: string, poids: number, dateNaissance: Date){
        super(nom,poids,dateNaissance)
    }

    
    respirerSousLeau(): void {
        console.log("Je sais respirer sous l'eau mais pas tout à fait");

    }

    nager(): void {
        console.log("Je sais nager");

    }
     /**
     * Retenir sa respiration
     */
    retenirRespiration(): void {
        console.log("Je sais retenir ma respiration");

    }

    /**
     * *pour cliquetter
     */
    cliquetter(): void {
        console.log("Je suis capable de cliquetter");

    }

}





