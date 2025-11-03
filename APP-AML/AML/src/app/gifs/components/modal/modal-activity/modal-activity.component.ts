import { ChangeDetectionStrategy, Component, inject, output, signal, OnInit } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Activity } from 'src/app/gifs/interfaces/activity.interface';
import { ActivityService } from 'src/app/service/activity.service';

@Component({
  selector: 'app-modal-activity',
  templateUrl: './modal-activity.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalActivityComponent implements OnInit {
  organizador = signal('');
  title = signal('');
  description = signal('');
  startDate = signal('');
  startHour = signal('');
  place = signal('');
  imagen = signal('');

  isEditMode = signal(false);
  activityId = signal<number | null>(null);

  private dialogRef = inject(DialogRef);
  private activityService = inject(ActivityService);
  private data = inject(DIALOG_DATA, { optional: true });

  newActivity = output<Activity>();

  ngOnInit() {
    if (this.data?.activity) {
      this.isEditMode.set(true);
      this.activityId.set(this.data.activity.idActivity);
      this.organizador.set(this.data.activity.organizador);
      this.title.set(this.data.activity.title);
      this.description.set(this.data.activity.description);
      this.place.set(this.data.activity.place);
      
      const date = new Date(this.data.activity.startDateTime);
      this.startDate.set(this.formatDate(date));
      this.startHour.set(this.formatTime(date));
    }
  }

  formatDate(date: Date): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  formatTime(date: Date): string {
    const d = new Date(date);
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  saveActivity() {
    if (this.isEditMode()) {
      this.updateActivity();
    } else {
      this.addActivity();
    }
  }

  addActivity() {
    const combinedDateTime = new Date(`${this.startDate()}T${this.startHour()}`);

    const newActivity: Activity = {
      idActivity: Math.floor(Math.random() * 10000),
      organizador: this.organizador(),
      title: this.title(),
      description: this.description(),
      startDateTime: combinedDateTime,
      place: this.place(),
    };

    this.activityService.addActivity(newActivity);
    this.newActivity.emit(newActivity);
    this.closeModal();
  }

  updateActivity() {
    const combinedDateTime = new Date(`${this.startDate()}T${this.startHour()}`);

    const updatedActivity: Activity = {
      idActivity: this.activityId()!,
      organizador: this.organizador(),
      title: this.title(),
      description: this.description(),
      startDateTime: combinedDateTime,
      place: this.place(),
    };

    this.activityService.updateActivity(updatedActivity);
    this.newActivity.emit(updatedActivity);
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }
}