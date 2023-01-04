import { Component } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  titleOne = 'Acerca de';
  contentOne =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi dignissimos voluptatum vitae provident eaque repudiandae itaque a recusandae laboriosam perspiciatis repellendus, sed delectus porro dolor consequatur quidem dolores aperiam?';

  titleTwo = 'Experiencia';
  contentTwo =
    'Html, css, javascript, nodejs, express, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, expedita ut, eos maxime ipsa numquam fugiat, reprehenderit facere repudiandae quaerat tenetur voluptate inventore odio voluptatem assumenda illum neque ex eaque.';

  titleThree = 'Educación';
  contentThree = 'CENS 18 - Perito Mercantil en Adm. de Empresas';

  // Font Awesome Icons
  faPen = faPen;
  faPlus = faPlus;

  constructor() {}
  ngOnInit(): void {}
}
