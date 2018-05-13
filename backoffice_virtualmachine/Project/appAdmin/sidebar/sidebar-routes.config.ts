import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT, icon: 'pe-7s-graph' },
    { path: 'eutilizadores', title: 'Estatísticas Utilizadores', menuType: MenuType.LEFT, icon:'pe-7s-graph2' },
    { path: 'linguas', title: 'Estatísticas Línguas', menuType: MenuType.LEFT, icon:'pe-7s-graph2' },
    { path: 'decorrer', title: 'Traduções a Decorrer', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },
    { path: 'finalizadas', title: 'Traduções Finalizadas', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },
    { path: 'utilizadores', title: 'Utilizadores', menuType: MenuType.LEFT, icon:'pe-7s-user' },
    { path: 'user', title: 'user', menuType: MenuType.LEFT, icon:'pe-7s-user' },
    { path: 'pendentes', title: 'Traduções Pendentes', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },
    { path: 'precoslinguagens', title: 'Preços Linguagens', menuType: MenuType.LEFT, icon:'pe-7s-config'},
    { path: 'criarpreco', title: 'Criar Preço', menuType: MenuType.LEFT, icon:'pe-7s-config'}

];
