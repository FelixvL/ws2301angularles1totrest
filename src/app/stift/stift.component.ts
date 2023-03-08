import { Component } from '@angular/core';
import { Stift } from './stift';
import { StiftService } from './stift.service';

@Component({
    selector: 'tc-stift',
    templateUrl: 'stift.component.html',
    providers: [StiftService]
})
export class StiftComponent {

    stift1 : Stift;
    stift2? : Stift;
    stiften: Stift[] = [];

    constructor(private stiftService: StiftService){
        this.stift1 = new Stift();
        this.stift1.aantalUren = 25;
        this.stift1.merk = "Poco";
        this.stift1.kleur = "purple";
    }
    winkellogo : String = "blauw";
    aantalvm : number = 24;
    vulStiften(){
        let st : Stift = new Stift();
        st.kleur = "pink";
        this.stiften.push(st);
    }
    kleurVeranderen(){
        this.winkellogo = "red";
        this.stift1.kleur = "orange";
    }
    opmaken(){
        this.aantalvm--;
        this.stift2 = new Stift();
        this.stiftService.ditffproberen();
    }
    nieuweFunctieRest(){
        this.stiftService.naardeBackend().subscribe(
            antwoord => {  //lambda
               console.log(antwoord);
              // this.spellen = antwoord;
              this.winkellogo = antwoord.fact;
            }
        );;
    }



 }