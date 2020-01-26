import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { SecretFilesComponent } from '../../pages/secret-files/secret-files.component';
import { ConfidentialFilesComponent } from '../../pages/confidential-files/confidential-files.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'secret-files',          component: SecretFilesComponent },
    { path: 'confidential-files',           component: ConfidentialFilesComponent }
];
