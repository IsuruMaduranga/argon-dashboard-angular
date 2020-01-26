import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { SecretFilesComponent } from '../../pages/secret-files/secret-files.component';
import { ConfidentialFilesComponent } from '../../pages/confidential-files/confidential-files.component';
import { PublicFilesComponent } from '../../pages/public-files/public-files.component';
import { FileUploadComponent } from 'src/app/pages/file-upload/file-upload.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'secret-files',          component: SecretFilesComponent },
    { path: 'confidential-files',           component: ConfidentialFilesComponent },
    { path: 'public-files',           component: PublicFilesComponent },
    { path: 'file-upload',           component: FileUploadComponent }
];
