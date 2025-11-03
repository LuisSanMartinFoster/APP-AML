import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Agreements } from 'src/app/gifs/interfaces/agreements.interface';
import { AgreementsService } from 'src/app/service/agreements.service';
import { ModalAgreementComponent } from '../../modal/modal-agreements/modal-agreements.component';
import { Dialog } from '@angular/cdk/dialog';
@Component({
  selector: 'app-agreements-list',
  imports: [CommonModule],
  templateUrl: './agreements-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgreementsListComponent { 

  private agreementService = inject(AgreementsService);
  private dialog = inject(Dialog);

  agreements = input.required<Agreements[]>();

  deleteAgreements(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este convenio?')) {
      this.agreementService.deleteAgreement(id);
    }
  }

  editAgreement(agreement: Agreements) {
  this.dialog.open(ModalAgreementComponent, {
    data: { agreement }
  });
}
}
