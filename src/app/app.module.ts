import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialsModule } from './app-materials';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { appReducers } from './store/reducers/app.reducers';
import { TaskEffects } from './store/effects/task.effects';
import { environment } from '../environments/environment';

import { EnumToArrayPipe } from './enum-to-array.pipe';
import { AutoFocusDirective } from './auto-focus.directive';
import { TaskService } from './services/task.service';

import { AppComponent } from './components/app-root/app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { OperationsComponent } from './components/operations/operations.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TasksListComponent,
    ToolbarComponent,
    TaskDetailComponent,
    EnumToArrayPipe,
    AutoFocusDirective,
    OperationsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([TaskEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent],
  entryComponents: [TaskDetailComponent]
})
export class AppModule { }
