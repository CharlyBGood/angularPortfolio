import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  myPortfolio: any;
  firstLogoSrc = '../assets/argprog.png';
  navTitleOne = 'Argentina Programa';
  navTitleTwo = '// #YoProgramo';

  onClick() {
    if (
      confirm(
        'Haz una cuenta para crear tu propia versión de este portfolio/CV'
      )
    ) {
      alert('Ingresa un email y crea una contraseña para continuar');
    }
  }

  constructor(private modalService: NgbModal, private datosPortfolio: PortfolioService) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  ngOnInit(): void {
    this.datosPortfolio.getData().subscribe((data) => {
      console.log(data);
      this.myPortfolio = data;
    });
  }
}
