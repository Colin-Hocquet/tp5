import MilieuNaturel from "./milieuNaturel";

export default interface Aquatique extends MilieuNaturel {
   
    /**
     * Respire sous l'eau
     */
    respirerSousLeau(): void;

    /**
     * Pour nager
     */
    nager(): void;
}