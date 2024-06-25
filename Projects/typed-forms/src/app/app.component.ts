import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  untypedFormService = Inject(UntypedFormBuilder);

  constructor() {}
}
