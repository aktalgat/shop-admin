import { NgModule } from '@angular/core';

import {
  MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatCardModule, MatMenuModule,
  MatInputModule, MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatCardModule, MatMenuModule,
    MatInputModule, MatToolbarModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatCardModule, MatMenuModule,
    MatInputModule, MatToolbarModule
  ]
})
export class MaterialModule {}
