import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  title: string = 'Carlos Bonavita';
  city: string = 'Buenos Aires (Argentina)';

  faPen = faPen;

  onClick() {
    alert('vas a iniciar sesión');
  }

  editProfile() {
    alert('vas a editar el perfil!');
  }

  tryMakeIt() {
    alert("si funciona ahora")
  }

  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.getData();
  }
}
