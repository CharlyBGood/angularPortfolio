import { Component } from '@angular/core';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  faExternalLink = faExternalLink;
  myPortfolio: any;

  constructor(private datosPortfolio: PortfolioService) {}
  ngOnInit(): void {
    this.datosPortfolio.getData().subscribe((data) => {
      console.log(data);
      this.myPortfolio = data;
    });
  }
}
