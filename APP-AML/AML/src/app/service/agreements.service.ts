import { effect, Injectable, signal } from "@angular/core";
import { Agreements } from "../gifs/interfaces/agreements.interface";

const loadFromLocalStorageAgreements = (): Agreements[] => {
    const agreements = localStorage.getItem('agreements');
    return agreements ? JSON.parse(agreements):[];
}

@Injectable({providedIn: 'root'})
export class AgreementsService{
    agreements = signal <Agreements[]>(loadFromLocalStorageAgreements());

    saveToLocalStorage = effect(()=>{
        localStorage.setItem('agreements', JSON.stringify(this.agreements()))
    })

    addAgreement(agreements: Agreements){
        this.agreements.update((list)=>[agreements, ...list])
    }

    deleteAgreement(id: number){
        this.agreements.update((list) => list.filter(a => a.idAgreements !== id))
    }

    updateAgreement(updatedAgreement: Agreements){
        this.agreements.update((list) => 
            list.map(a => a.idAgreements === updatedAgreement.idAgreements ? updatedAgreement : a)
        )
    }

}