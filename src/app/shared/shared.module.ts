import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CommandBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CommandBarComponent]
})
export class SharedModule { }
