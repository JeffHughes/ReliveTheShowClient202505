import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMobileSpacerComponent } from './components/top-mobile-spacer/top-mobile-spacer.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftComponent } from './components/left/left.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    LeftComponent,
    TopMobileSpacerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ReliveTheShowClient202505';
}
