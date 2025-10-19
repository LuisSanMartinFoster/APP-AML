import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";


interface MenuOption {
  label: string;
  subLabel: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-users',

      label: 'Convenios',
      subLabel: 'Gestionar convenios',
      route: '/dashboard/agreements',

    },
    {
      icon: 'fa-solid fa-tasks',
      label: 'Actividad',
      subLabel: 'Gestionar actividad',
      route: '/dashboard/activity',

    }
  ]

}
