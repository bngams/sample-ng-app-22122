import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/utils/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // use for DI
  // <visibility> <name>: <type>
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
