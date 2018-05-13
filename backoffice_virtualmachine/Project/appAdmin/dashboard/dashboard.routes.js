"use strict";
var home_component_1 = require('./home/home.component');
var icons_component_1 = require('./icons/icons.component');
var typography_component_1 = require('./typography/typography.component');
var translations_component_1 = require('./translations/translations.component');
var tcompleted_component_1 = require('./tcompleted/tcompleted.component');
var utilizadores_component_1 = require('./utilizadores/utilizadores.component');
var user_component_1 = require('./user/user.component');
var tpendentes_component_1 = require('./tpendentes/tpendentes.component');
var plinguagens_component_1 = require('./precosLinguagens/plinguagens.component');
var criarpreco_component_1 = require('./criarpreco/criarpreco.component');
exports.MODULE_ROUTES = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'linguas', component: icons_component_1.IconsComponent },
    { path: 'eutilizadores', component: typography_component_1.TypographyComponent },
    { path: 'decorrer', component: translations_component_1.TranslationsComponent },
    { path: 'finalizadas', component: tcompleted_component_1.TcompletedComponent },
    { path: 'utilizadores', component: utilizadores_component_1.UtilizadoresComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'pendentes', component: tpendentes_component_1.TpendentesComponent },
    { path: 'precoslinguagens', component: plinguagens_component_1.PlinguagensComponent },
    { path: 'criarpreco', component: criarpreco_component_1.CriarPrecoComponent }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    icons_component_1.IconsComponent,
    typography_component_1.TypographyComponent,
    translations_component_1.TranslationsComponent,
    tcompleted_component_1.TcompletedComponent,
    utilizadores_component_1.UtilizadoresComponent,
    user_component_1.UserComponent,
    tpendentes_component_1.TpendentesComponent,
    plinguagens_component_1.PlinguagensComponent,
    criarpreco_component_1.CriarPrecoComponent
];
//# sourceMappingURL=dashboard.routes.js.map