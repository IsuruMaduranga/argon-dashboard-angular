import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { SecretFilesComponent } from '../../pages/secret-files/secret-files.component';
import { ConfidentialFilesComponent } from '../../pages/confidential-files/confidential-files.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PublicFilesComponent } from 'src/app/pages/public-files/public-files.component';
import { FileUploadComponent } from 'src/app/pages/file-upload/file-upload.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    SecretFilesComponent,
    ConfidentialFilesComponent,
    PublicFilesComponent,
    FileUploadComponent
  ]
})

export class AdminLayoutModule {}
