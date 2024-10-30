import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {MenuComponent} from "../shared/menu/menu.component";

@Component({
  standalone: true,
  imports: [RouterModule, MenuComponent],
  templateUrl: './board.component.html',
  styles: ``
})
export class BoardComponent {

}
