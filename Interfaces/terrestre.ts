import MilieuNaturel from "./milieuNaturel";

export default interface Terrestre extends MilieuNaturel {
    
    respirerHorsDeLeau(): void;
    marcher(): void;
}