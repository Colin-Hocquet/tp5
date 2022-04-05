import Mammifere from './Abstract/mammifere';
import Cat from './Class/cat'
import Dauphin from './Class/dauphin';

let chat1: Cat = new Cat("Miou", 5, new Date("2013-12-18"));

chat1.respirerHorsDeLeau();
chat1.marcher();
chat1.display()


let dauphin1: Dauphin = new Dauphin("Filiper", 50, new Date("2015-01-23"));

let mam: Mammifere[] = [chat1, dauphin1];

dauphin1.cliquetter()
dauphin1.nager()
dauphin1.respirerSousLeau()
dauphin1.retenirRespiration()
dauphin1.display()  

mam[0].display()