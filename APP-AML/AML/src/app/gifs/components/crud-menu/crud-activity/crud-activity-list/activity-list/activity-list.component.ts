import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Activity } from 'src/app/gifs/interfaces/activity.interface';

@Component({
  selector: 'app-activity-list',
  imports: [],
  templateUrl: './activity-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityListComponent { 

  activitys = input.required<Activity[]>();


}
