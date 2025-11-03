import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BtnAddAgreementsComponent } from "../../components/btn/btn-add-agreements/btn-add-agreements.component";
import { AgreementsService } from 'src/app/service/agreements.service';
import { AgreementsListComponent } from "../../components/crud-menu/crud-agreements/agreements-list.component";

@Component({
  selector: 'app-agreements-page',
  imports: [BtnAddAgreementsComponent, AgreementsListComponent],
  templateUrl: './agreements-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class agreementsPageComponent {

  public agreementService = inject(AgreementsService)
}
