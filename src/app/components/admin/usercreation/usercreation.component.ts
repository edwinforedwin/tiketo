import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-usercreation',
  standalone: true,
  imports: [InputTextModule,FloatLabelModule,ButtonModule],
  templateUrl: './usercreation.component.html',
  styleUrl: './usercreation.component.css'
})
export class UsercreationComponent {

}
