import { ChangeDetectionStrategy, Component, inject, output, signal, OnInit } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Agreements } from 'src/app/gifs/interfaces/agreements.interface';
import { AgreementsService } from 'src/app/service/agreements.service';

@Component({
  selector: 'app-modal-agreement',
  templateUrl: './modal-agreements.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalAgreementComponent implements OnInit {
  name = signal('');
  description = signal('');
  startDate = signal('');
  finishDate = signal('');
  
  isEditMode = signal(false);
  agreementId = signal<number | null>(null);

  private dialogRef = inject(DialogRef);
  private agreementService = inject(AgreementsService);
  private data = inject(DIALOG_DATA, { optional: true });

  newAgreement = output<Agreements>();

  ngOnInit() {
    if (this.data?.agreement) {
      this.isEditMode.set(true);
      this.agreementId.set(this.data.agreement.idAgreements);
      this.name.set(this.data.agreement.name);
      this.description.set(this.data.agreement.description);
      this.startDate.set(this.formatDate(this.data.agreement.startDate));
      this.finishDate.set(this.formatDate(this.data.agreement.finishDate));
    }
  }

  formatDate(date: Date): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  saveAgreement() {
    if (this.isEditMode()) {
      this.updateAgreement();
    } else {
      this.addAgreement();
    }
  }

  addAgreement() {
    const newAgreement: Agreements = {
      idAgreements: Math.floor(Math.random() * 10000),
      name: this.name(),
      description: this.description(),
      startDate: new Date(this.startDate()),
      finishDate: new Date(this.finishDate()),
    };

    this.agreementService.addAgreement(newAgreement);
    this.newAgreement.emit(newAgreement);
    this.closeModal();
  }

  updateAgreement() {
    const updatedAgreement: Agreements = {
      idAgreements: this.agreementId()!,
      name: this.name(),
      description: this.description(),
      startDate: new Date(this.startDate()),
      finishDate: new Date(this.finishDate()),
    };

    this.agreementService.updateAgreement(updatedAgreement);
    this.newAgreement.emit(updatedAgreement);
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }
}