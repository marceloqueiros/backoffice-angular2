import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { TranslationsComponent } from './translations/translations.component';
import { TcompletedComponent } from './tcompleted/tcompleted.component';
import { UtilizadoresComponent } from './utilizadores/utilizadores.component';
import { UserComponent } from './user/user.component';
import { TpendentesComponent } from './tpendentes/tpendentes.component';
import { PlinguagensComponent } from './precosLinguagens/plinguagens.component';
import { CriarPrecoComponent } from './criarpreco/criarpreco.component';


export const MODULE_ROUTES: Route[] =[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: HomeComponent },
    { path: 'linguas', component: IconsComponent },
    { path: 'eutilizadores', component: TypographyComponent },
    { path: 'decorrer', component: TranslationsComponent },
    { path: 'finalizadas', component:TcompletedComponent },
    { path: 'utilizadores', component: UtilizadoresComponent },
    { path: 'user', component: UserComponent },
    { path: 'pendentes', component:TpendentesComponent },
    { path: 'precoslinguagens', component:PlinguagensComponent},
    { path: 'criarpreco', component:CriarPrecoComponent}
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    IconsComponent,
    TypographyComponent,
    TranslationsComponent,
    TcompletedComponent,
    UtilizadoresComponent,
    UserComponent,
    TpendentesComponent,
    PlinguagensComponent,
    CriarPrecoComponent
]
