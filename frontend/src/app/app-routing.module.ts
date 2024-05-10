import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

// compomentes
import { AddEditTaskComponent } from './components/add-edit-task/add-edit-task.component';
import { TaskListComponent } from './components/tasklist/tasklist.component';

const routes: Routes = [
    { path: '', component: TaskListComponent },
    { path: 'add', component: AddEditTaskComponent},
    { path: 'edit/:id', component: AddEditTaskComponent},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
