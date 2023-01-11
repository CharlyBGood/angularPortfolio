import { Component } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  myPortfolio: any;

  // Font Awesome Icons
  faPen = faPen;
  faPlus = faPlus;

  constructor(private datosPortfolio: PortfolioService) {}
  ngOnInit(): void {
    this.datosPortfolio.getData().subscribe((data) => {
      console.log(data);
      this.myPortfolio = data;
    });
  }
}
