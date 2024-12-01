import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-usercreation',
  standalone: true,
  imports: [InputTextModule,FloatLabelModule,ButtonModule,FormsModule,ToastModule,RippleModule],
  templateUrl: './usercreation.component.html',
  styleUrl: './usercreation.component.css',
  providers:[MessageService]
})
export class UsercreationComponent {
  constructor(private messageService:MessageService){}
  
  fullname:string=''
  address:string=''
  email:string=''
  phone:string=''

  createUser(){
    if (this.fullname == '' || this.address == '' || this.email == '' || this.phone == '') {
      this.messageService.add({ severity: 'error', summary: 'Validation Failure', detail: 'Enter values in all available fields' });
    }
    else {
      let emailRegEx = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)
      let emailValidation = emailRegEx.test(this.email)
      if (emailValidation) {
        let phoneRegEx = new RegExp(/^[0-9]/)
        let phoneValidation = phoneRegEx.test(this.phone)
        if (phoneValidation && this.phone.length == 10) {
          let nameRegEx = new RegExp(/^[a-zA-Z]/)
          let nameValidation = nameRegEx.test(this.fullname)
          if (nameValidation && this.fullname.length <= 25) {
            let addressRegEx = new RegExp(/^[a-zA-Z]/)
            let addressValidation = addressRegEx.test(this.address)
            if (addressValidation && this.address.length <= 40) {
              this.messageService.add({ severity: 'success', summary: 'User Created Successfully' });
            }
            else {
              this.messageService.add({ severity: 'error', summary: 'Validation Failure', detail: 'Enter proper address' });
            }
          }
          else {
            this.messageService.add({ severity: 'error', summary: 'Validation Failure', detail: 'Enter proper name of the user' });    
          }
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Validation Failure', detail: 'Enter proper phone number' });  
        }
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Validation Failure', detail: 'Enter proper email address' });
      }
    }
  }
}
