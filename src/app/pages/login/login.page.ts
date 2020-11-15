import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { log } from 'console';
import { first } from "rxjs/operators";
import { LoginService } from "src/app/services/login.service";
import { User } from "../../models/user.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  user: User = new User();
  loginForm: FormGroup;
  submmited: boolean = false;
  returnURL: string;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginUser: LoginService,
    public alertController: AlertController
  ) {
    if (this.loginUser.UserValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
    this.returnURL = this.route.snapshot.queryParamMap["returnURL"] || "/";
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    if (
      this.user.email == undefined ||
      this.user.email == null ||
      this.user.password == undefined ||
      this.user.password == null
    ) {
      this.presentAlert('ALERTA', 'No ingreso credenciales', 'No ingreso Usuario y contrasena');
      return;
    }
    this.loginUser
      .login(this.user)
      .pipe(first())
      .subscribe((result) => {
        this.router.navigate([this.returnURL]);
      },
      err =>{
        this.presentAlert('FALLO', 'Fallo en inicio de sesion', 'Usuario y contrasena invalidos');
      });
  }

  async presentAlert(Header, Subheader, Message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: Header,
      subHeader: Subheader,
      message: Message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
