import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import { TestMaskComponent } from '../../projects/ngx-mask-lib/src/test/utils/test-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NgxMaskModule } from 'projects/ngx-mask-lib/src';
import { SuiModule } from '@giomamaladze/ng2-semantic-ui';

@NgModule({
  declarations: [AppComponent, TestMaskComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskModule.forRoot({
      validation: true,
    }),
    MatIconModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    SuiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
