import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { Activity } from 'src/app/gifs/interfaces/activity.interface';

@Component({
  selector: 'app-modal-activity',
  imports: [DatePipe],
  templateUrl: './modal-activity.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ModalActivityComponent {

  organizador = signal('');
  title = signal('');
  description = signal('');
  startDate = signal<Date | null>(null);
  finishDate = signal<Date | null>(null);
  place = signal('');
  imagen = signal('');

  newActivity = output<Activity>();

  onStartDateChange(dateString: string): void {
      if (dateString) {
        this.startDate.set(new Date(dateString));
      } else {
        this.startDate.set(null);
      }
    }

    
    onFinishDateChange(dateString: string): void {
      if (dateString) {
        
        this.finishDate.set(new Date(dateString));
      } else {
        this.finishDate.set(null);
      }
    }

  addActivity() {

    const newActivity: Activity = {
      idActivity: Math.floor(Math.random() * 10000),
      organizador: this.organizador(),
      title: this.title(),
      description: this.description(),
      startDate: this.startDate() as Date,
      finishDate: this.finishDate() as Date,
      place: this.place(),
    }
    this.newActivity.emit(newActivity);
  }



}
