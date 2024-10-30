import { NgClass, NgForOf } from "@angular/common";
import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";

import { LogoComponent } from "../../../shared/components/logo/logo.component";
import { TaskCardComponent } from "../../components/task-card/task-card.component";
@Component({
  selector: 'auth-layout',
  imports: [RouterModule, LogoComponent, NgForOf, NgClass, TaskCardComponent],
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  styles: [
  ]
})
export class LayoutComponent{
}
