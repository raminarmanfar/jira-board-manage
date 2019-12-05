import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialsModule } from './app-materials';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app-root/app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { EnumToArrayPipe } from './enum-to-array.pipe';
import { AutoFocusDirective } from './auto-focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TasksListComponent,
    ToolbarComponent,
    TaskDetailComponent,
    EnumToArrayPipe,
    AutoFocusDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TaskDetailComponent]
})
export class AppModule { }
