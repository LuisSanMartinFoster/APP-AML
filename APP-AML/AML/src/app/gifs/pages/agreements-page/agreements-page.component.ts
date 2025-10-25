import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BtnAddAgreementsComponent } from "../../components/btn/btn-add-agreements/btn-add-agreements.component";

@Component({
  selector: 'app-agreements-page',
  imports: [BtnAddAgreementsComponent],
  templateUrl: './agreements-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class agreementsPageComponent { }
