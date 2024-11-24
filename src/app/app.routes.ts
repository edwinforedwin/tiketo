import { Routes } from '@angular/router';
import { LoginComponent } from './components/tiketo/login/login.component';
import { AdminloginComponent } from './components/admin/adminlogin/adminlogin.component';
import { UsercreationComponent } from './components/admin/usercreation/usercreation.component';
import { AdminhomeComponent } from './components/admin/adminhome/adminhome.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'adminlogin',component:AdminloginComponent},
    {path:'adminhome',component:AdminhomeComponent,
        children:[
            {path:'usercreation',component:UsercreationComponent}
        ]
    }
];
