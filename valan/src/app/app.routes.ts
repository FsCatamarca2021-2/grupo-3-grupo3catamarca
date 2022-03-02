
import{ Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SomosComponent } from './components/somos/somos.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { MenuPrincipalComponent } from './components/menuPrincipal/menuPrincipal.component';
import { ForoComponent } from './pages/foro/foro.component';



export const ROUTES: Routes= [

    { path:'home', component: HomeComponent },
    {path:'sesion', component: SesionComponent},
    {path:'registro',component: RegistroComponent },
    {path:'somos',component: SomosComponent },
    {path:'menu',component: MenuPrincipalComponent  },
    {path:'ayuda',component: AyudaComponent },
    {path:'foro',component: ForoComponent },
    {path:'', pathMatch: 'full', redirectTo:'home'},
    {path:'**', pathMatch: 'full', redirectTo:'home'},    
    
];

