import Animal from "../Interfaces/animal";

export default abstract class Mammifere implements Animal {

     _nom: string;
     _poids: number;
     _dateNaissance: Date;

     /**
      * Construire le mammifère avec ses attributs
      * @param nom 
      * @param poids 
      * @param dateNaissance 
      */
     constructor(nom: string, poids: number, dateNaissance: Date){
        this._nom = nom;
        this._poids = poids;
        this._dateNaissance = dateNaissance;
    
    }

    get dateNaissance(): Date {
        return this._dateNaissance;
    }

    set dateNaissance(value: Date) {
        this._dateNaissance = value;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get poids(): number {
        return this._poids;
    }

    set poids(value: number) {
        this._poids = value;

    }
    /**
     * Affiche les informations du mammifère
     */
    display(): void {
        console.log(`Coucou, je suis ${this._nom} je pèse ${this._poids}kg et je suis né le ${this._dateNaissance.toLocaleDateString()} `);
        
    }

}