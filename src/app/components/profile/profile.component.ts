import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  titleOne = 'Experiencia:';
  contentOne =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi dignissimos voluptatum vitae provident eaque repudiandae itaque a recusandae laboriosam perspiciatis repellendus, sed delectus porro dolor consequatur quidem dolores aperiam?';

  titleTwo = 'Manejo de tecnologías:';
  contentTwo =
    'Html, css, javascript, nodejs, express, Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, expedita ut, eos maxime ipsa numquam fugiat, reprehenderit facere repudiandae quaerat tenetur voluptate inventore odio voluptatem assumenda illum neque ex eaque.';
  constructor() {}
  ngOnInit(): void {}
}
