import { NbMenuItem } from '@nebular/theme';
import { StoreComponent } from './store/store.component';

export const MENU_ITEMS2: NbMenuItem[] = [
    { title: 'Dashboard', icon: 'nb-paper-plane', link: '/dashboard', home: true },
    {
      title: 'Store',
  
      icon: '  fa fa-shopping-bag	  ',
      
      link: '/dashboard/store',
      children: [{
        
        title: 'All Products',
        icon: 'fa fa-list',
        link: '/dashboard/store/all',
      },
        {
          title: 'Electronics Store (C5)',
          icon: 'fa fa-plug',
          link: '/dashboard/store/electronics',
  
        },
  
  
    ]
    },
   

 {
      title: 'Login',
      icon: 'fa fa-sign-in',
      link: '/dashboard/authe/login',
    },{
      title: 'Sign up',
      icon: 'fa fa-user-plus',
      link: '/dashboard/authe/signup',
    
  }
];
