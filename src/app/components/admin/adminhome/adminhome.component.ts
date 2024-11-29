import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-adminhome',
  standalone: true,
  imports: [RouterOutlet,MenubarModule],
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent implements OnInit {
  menuItems:MenuItem[]=[]
  ngOnInit() {
    this.menuItems = [
      {label:'Home',icon:'pi pi-home'},
      {label:'User Management',icon:'pi pi-user',items:[
        {label:'User Creation',icon:'pi pi-user-edit',routerLink:'usercreation'},
        {label:'User Modification',icon:'pi pi-user-edit'}
      ]},
      {label:'Reports',icon:'pi pi-folder',items:[
        {label:'User Review Report',icon:'pi pi-file'}
      ]}
    ]
  }
}
