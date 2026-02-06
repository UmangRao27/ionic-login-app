import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Platform,AlertController } from '@ionic/angular';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  backButtonSub : any;
  showPassword : boolean = false ; 

  loginForm! : FormGroup ;

  constructor(private fb: FormBuilder, private router : Router, private platform : Platform, private alertctrl : AlertController) {

  }

  ngOnInit() {
    const savedUsername = localStorage.getItem('savedUsername') || '';
    const savedPassword = localStorage.getItem('savedPassword') || '';
    this.loginForm = this.fb.group({
      username : [savedUsername , Validators.required],
      password : [savedPassword , Validators.required],
      rememberMe : [savedUsername !== '']
    })
  }

  login() {
      if(this.loginForm.valid){
        const { username, password, rememberMe } = this.loginForm.value;

        if(rememberMe){
          localStorage.setItem('savedUsername', username);
          localStorage.setItem('savedPassword', password);
        }
        else{
          localStorage.removeItem('savedUsername');
          localStorage.removeItem('savedPassword');
        }
        sessionStorage.setItem('fromLogin','true');


        this.router.navigate(['/home'],{
          queryParams : { username, password }
        })
      }
      else{
        this.loginForm.markAllAsTouched();
      }
    }

  isInvalid(field : string) {
    const control = this.loginForm.get(field);
    return control?.invalid && ( control?.touched || control?.dirty )
  }

  ionViewWillEnter() {
    this.backButtonSub = this.platform.backButton.subscribeWithPriority(10, async () => {
      const alert = await this.alertctrl.create({
        header : 'Exit App',
        message : 'Do You Want to exit App ?',
        buttons : [
          {
            text : 'Cancel',
            role : 'cancel',
          },
          {
            text : 'Exit',
            handler: () => {
              App.exitApp();
            }
          }
        ]
      });
      await alert.present();
    })
  }

  ionViewWillLeave(){
    this.backButtonSub.unsubscribe();
  }

}
