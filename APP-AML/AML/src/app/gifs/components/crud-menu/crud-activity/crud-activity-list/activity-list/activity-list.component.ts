import { Dialog } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ModalActivityComponent } from 'src/app/gifs/components/modal/modal-activity/modal-activity.component';
import { Activity } from 'src/app/gifs/interfaces/activity.interface';
import { ActivityService } from 'src/app/service/activity.service';

@Component({
  selector: 'app-activity-list',
  imports: [CommonModule],
  templateUrl: './activity-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityListComponent { 

  private activityService = inject(ActivityService);
  
  private dialog = inject(Dialog);

  activitys = input.required<Activity[]>();

  deleteActivity(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar esta actividad?')) {
      this.activityService.deleteActivity(id);
    }
  }

  editActivity(activity: Activity) {
    this.dialog.open(ModalActivityComponent, {
      data: { activity }
    });
  }
}
