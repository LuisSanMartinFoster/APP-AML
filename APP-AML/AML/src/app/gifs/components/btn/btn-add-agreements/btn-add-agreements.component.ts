import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog'; 
import { ModalAgreementComponent } from '../../modal/modal-agreements/modal-agreements.component';

@Component({
  selector: 'app-btn-add-agreements',
  imports: [],
  templateUrl: './btn-add-agreements.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnAddAgreementsComponent {
  private dialog = inject(Dialog);
  
  public addIconClass: string = 'fa-solid fa-plus';

  protected openModalAgreements(){
    this.dialog.open(ModalAgreementComponent);
  }
}