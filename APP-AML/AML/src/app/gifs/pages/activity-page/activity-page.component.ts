import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BtnAddActivityComponent } from "../../components/btn/btn-add-activity/btn-add-activity.component";
import { ModalActivityComponent } from "../../components/modal/modal-activity/modal-activity.component";
import { ActivityService } from 'src/app/service/activity.service';
import { ActivityListComponent } from "../../components/crud-menu/crud-activity/crud-activity-list/activity-list/activity-list.component";

@Component({
  selector: 'app-activity-page',
  imports: [BtnAddActivityComponent, ActivityListComponent],
  templateUrl: './activity-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class activityPageComponent {

  public activityService = inject(ActivityService)
  
 }
