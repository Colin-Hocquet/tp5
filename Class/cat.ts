import Mammifere from "../Abstract/mammifere";
import Terrestre from "../Interfaces/terrestre";

export default class Cat extends Mammifere implements Terrestre {

    /**
     * 
     * @param nom Appelle le constructeur parent (mammifere)
     * @param poids 
     * @param dateNaissance 
     */
    constructor(nom: string, poids: number, dateNaissance: Date){
        super(nom,poids,dateNaissance)
    }

    /**
     * Methode pour respirer hors de l'eau
     */
    respirerHorsDeLeau(): void {
        console.log("Je respire hors de l'eau");
    }
    /**
     * Pour marcher
     */
    marcher(): void {
        console.log("Je sais marcher");
    }
    /**
     * Pour Miauler car un petit chat
     */
    miauler(): void {
        console.log("Je suis un chat je miaule");
        
    }


}



