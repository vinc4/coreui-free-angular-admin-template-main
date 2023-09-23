import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'User Management',
    url: '/users',
    iconComponent: { name: 'cil-people' }
  },
  {
    name: 'Drivers',
    url: '/drivers',
    iconComponent: { name: 'cil-user-plus' }
  },
  {
    name: 'Vehicles',
    url: '/vehicle',
    iconComponent: { name: 'cil-truck' }
  },


];
