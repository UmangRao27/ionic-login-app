import { Component, OnInit, ɵɵgetReplaceMetadataURL } from '@angular/core';
import { ActivatedRoute, Router , NavigationStart } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit{
  username : string = '';
  password : string = '';

  constructor(private router : Router, private route : ActivatedRoute) {}

  ngOnInit() {

    const fromLogin = sessionStorage.getItem('fromLogin')

    if(!fromLogin){
     this.router.navigate(['/login'], {replaceUrl:true});
     return;
    }

    sessionStorage.removeItem('fromLogin');

    this.route.queryParamMap.subscribe(params => {


      const username = params.get('username');
      const password = params.get('password');

      if (!username || !password) {
        this.router.navigate(['/login']);
        return;
      }

      this.username = username;
      this.password = password;
    })
  }

  goBack() {
    this.router.navigate(['/login'])
  }

}
