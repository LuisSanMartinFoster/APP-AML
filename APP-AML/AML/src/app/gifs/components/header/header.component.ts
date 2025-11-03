import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// Importamos solo lo necesario, ActivatedRoute y Router son suficientes
import { Router, ActivatedRoute, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router'; 
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface MenuOption { 
  label: string;
  route: string;
}

@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [ AsyncPipe], 
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class HeaderComponent implements OnInit { 
  activeTitle$!: Observable<string>; 
  
  menuOptions: MenuOption[] = [
    { label: 'Convenios', route: '/dashboard/agreements' }, 
    { label: 'Actividad', route: '/dashboard/activity' }
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeTitle$ = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;

        while (route.firstChild) {
          route = route.firstChild;
        }

        const title = route.snapshot.data['title'];
        

        return title || 'Bienvenido';
      })
    );
  }
}