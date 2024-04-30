import { AdminLayout } from '../components/Layouts';
import { Home, Detail, CategoryList, Dashboard } from '~/pages';

const publicRoutes = [
   { path: '/', component: Home },
   { path: '/customer/detail/{id}', component: Detail },
   // exmaple for a route when it use a diff layout,
];
const privateRoutes = [
   { path: '/admin', component: Dashboard, layout: AdminLayout },
   { path: '/admin/dashboard', component: Dashboard, layout: AdminLayout },
   { path: '/admin/category', component: CategoryList, layout: AdminLayout },
];

export { publicRoutes, privateRoutes };
