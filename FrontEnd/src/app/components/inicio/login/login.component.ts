import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import{ Usuario} from '../../../models/usuario'
import{LoginService} from 'src/app/services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loading= false;
login: FormGroup;
  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private router: Router,
              private loginService: LoginService) {
    this.login=this.fb.group({
      usuario:['', Validators.required],
      password:['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  log(): void{
    const usuario: Usuario={
      nombreUsuario:this.login.value.usuario,
      password:this.login.value.password
    };
this.loading=true;
this.loginService.login(usuario).subscribe(data=>{
  console.log(data);
  this.loading=false;
  this.loginService.setLocalStorage(data.token);
  this.router.navigate(['/dashboard']);
}, error=>{
  console.log(error);
  this.loading=false;
  this.toastr.error(error.error.message,'Error');
  this.login.reset();
});


    // setTimeout(()=>{
    //   if(usuario.nombreUsuario==='anto' && usuario.password==='1234'){
    //     this.router.navigate(['/dashboard']);
    //     this.login.reset();
    //   }else{
    //     this.toastr.error('Usuario o contraseña incorrectos','Error');
    //     this.login.reset();
    //   }
    //   this.loading=false;
    // },3000)

    
    console.log(usuario);
  }

}
