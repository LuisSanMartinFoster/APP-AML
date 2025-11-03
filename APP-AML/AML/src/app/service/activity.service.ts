import { effect, Injectable, signal } from "@angular/core";
import { Activity } from "../gifs/interfaces/activity.interface";

const loadFromLocalStorageActivity = (): Activity[] => {
    const activity = localStorage.getItem('activity');
    return activity ? JSON.parse(activity):[];
}

@Injectable({providedIn: 'root'})
export class ActivityService{
    activity = signal <Activity[]>(loadFromLocalStorageActivity());

    saveToLocalStorage = effect(()=>{
        localStorage.setItem('activity', JSON.stringify(this.activity()))
    })

    addActivity(activity: Activity){
        this.activity.update((list)=>[activity, ...list])
    }

    deleteActivity(id: number){
        this.activity.update((list) => list.filter(a => a.idActivity !== id))
    }

    updateActivity(updatedActivity: Activity){
        this.activity.update((list) => 
            list.map(a => a.idActivity === updatedActivity.idActivity ? updatedActivity : a)
        )
    }

}