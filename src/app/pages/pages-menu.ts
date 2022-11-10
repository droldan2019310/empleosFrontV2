import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Escritorio',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title:'Empleos Disponibles',
    icon: 'briefcase-outline',
    link:'/pages/employments'
  },
  {
    title:'Agregar Empleo',
    icon: 'plus-circle-outline',
    link:'/pages/employments/add'
  },
  {
    title: 'Personal Dashboard',
    group: true,
  },
  {
    title: 'Mis Empleos',
    icon: 'briefcase-outline',
    link: '/pages/myEmployments'
  },
  {
    title: 'Mi Perfil',
    icon: 'person-outline',
    link: '/pages/myAccount'
  },
  
];
