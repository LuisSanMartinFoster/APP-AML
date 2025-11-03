import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { GifsSideMenuComponent } from "../../components/gifs-side-menu/gifs-side-menu.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GifsSideMenuComponent, HeaderComponent],
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent { }
