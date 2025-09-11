import { Component } from "@angular/core";
import { RouterModule } from '@angular/router';

@Component({
  selector: "app-header",
  standalone: true,
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  imports: [RouterModule]
})
export class HeaderComponent { }
