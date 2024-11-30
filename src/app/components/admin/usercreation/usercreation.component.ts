import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-usercreation',
  standalone: true,
  imports: [InputTextModule,FloatLabelModule],
  templateUrl: './usercreation.component.html',
  styleUrl: './usercreation.component.css'
})
export class UsercreationComponent {

}
