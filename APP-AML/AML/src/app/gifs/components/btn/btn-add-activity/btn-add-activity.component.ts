import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog'; 
import { ModalActivityComponent } from '../../modal/modal-activity/modal-activity.component';
import { ActivityService } from 'src/app/service/activity.service';


@Component({
  selector: 'app-btn-add-activity',
  imports: [],
  templateUrl: './btn-add-activity.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnAddActivityComponent {

  private dialog = inject(Dialog);

  public addIconClass: string = 'fa-solid fa-plus';

  protected openModalActivity(){
    this.dialog.open(ModalActivityComponent);
  }

  
}
