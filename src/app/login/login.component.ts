import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../provider/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { BrowserStorageService } from '../provider/storage.service';
import { NavbarService } from '../provider/navbar.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showlogin: boolean = true;
  showsignup: boolean = false;
  showotp: boolean = false;
  loginForm: any;
  submitted: any;
  signupForm: any;
  submittedLogin: any;
  buyerRegisterOtp: any;
  buyerRegisterData: any;
  emptyError: any;
  enterOtp: any;
  buyerEmailError: any;
  invaliderror: any;
  buyerToken: any;
  buyerName: any;
  buyerType: any;
  buyerRegiterData: any;
  buyerLoginData: any;
  buyersignupError: any;
  remainingTime: number = 60;
  isSubmitDisabled: boolean = false;
  isResendDisabled: boolean = true;
  ngOnInit() {

  }

  startTimer() {
    const intervalId = setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        clearInterval(intervalId);
        this.isSubmitDisabled = true;
        this.isResendDisabled = false;
      }
    }, 1000);
  }

  formatTime(seconds: number): string {
    const minutes: string = Math.floor(seconds / 60).toString().padStart(2, '0');
    const remainingSeconds: string = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}.${remainingSeconds}`;
  }

  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    },
    inputClass: 'each_input',
    containerClass: 'all_inputs'
  };

  get l(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  get s(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  constructor(private formBuilder: FormBuilder, private navbarService: NavbarService,
    private browserStorageService: BrowserStorageService,
    private apiservice: ApiService, public _dialogRef: MatDialogRef<LoginComponent>) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    });

    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNo: ['', [Validators.required, Validators.pattern(/^[0-9]{10,}$/)]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    });


  }

  encryptfunction(): string {
    const secretKey = 'a4giobr8vhqx';
    const encryptedOtp = this.buyerRegisterOtp;
    console.log("Encrypted OTP:", encryptedOtp);
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedOtp, secretKey);
      console.log("Decrypted Bytes:", bytes);

      const decryptedOtp = bytes.toString(CryptoJS.enc.Utf8);
      console.log("Decrypted OTP:", decryptedOtp);

      return decryptedOtp;
    } catch (error) {
      console.error("Error during decryption:", error);
      return '';
    }
  }


  clearLoginError() {
    this.buyerEmailError = '';
  }
  clearRegisterError() {
    this.buyersignupError = '';
  }

  otpsignup(type: any) {
    this.submitted = true;
    if (this.signupForm?.valid) {
      let payload = {
        firstName: this.signupForm?.value?.name,
        email: this.signupForm?.value?.email,
        phoneNo: this.signupForm?.value?.phoneNo,
        role: "customer"
      }
      this.buyerRegiterData = payload
      this.apiservice.emailVerification(payload).subscribe((res) => {
        if (res.code == 200) {
          this.submitted = false;
          this.showlogin = false;
          this.showsignup = false;
          this.showotp = true;
          this.buyerType = type
          this.startTimer();
          this.buyerRegisterOtp = res?.data;
          this.decryptedOtp = this.encryptfunction();
          console.log("Decrypted OTP:", this.decryptedOtp);
        }
      },
        (err: any) => {
          this.buyersignupError = err?.error?.message
        }
      )
    }
  }
  decryptedOtp: any;
  otplogin(type: any) {
    this.submittedLogin = true;
    if (this.loginForm?.valid) {
      let payload = {
        email: this.loginForm?.value?.email,
        role: "customer"
      }
      this.buyerLoginData = payload;
      this.apiservice.buyerLogin(payload).subscribe((res) => {
        if (res.code == 200) {
          this.submitted = false;
          this.showlogin = false;
          this.showsignup = false;
          this.showotp = true;
          this.buyerType = type
          this.startTimer();
          this.browserStorageService.set("buyerId", res?.data?.id);
          this.buyerRegisterOtp = res?.data?.secretCode;
          this.buyerToken = res?.data?.accessToken;
          this.buyerName = res?.data?.firstName
          this.decryptedOtp = this.encryptfunction();
        }
      },
        (err: any) => {
          this.buyerEmailError = err?.error?.message
        }
      )
    }
  }

  buyersignup() {
    this.showlogin = false;
    this.showsignup = true;
    this.showotp = false;
  }

  buyerlogin() {
    this.showlogin = true;
    this.showsignup = false;
    this.showotp = false;
  }

  onOtpChange(otp: any) {
    this.enterOtp = otp;
    this.emptyError = '';
    this.invaliderror = '';
  }

  otpsubmit() {
    if (!this.enterOtp || this.enterOtp.trim() === '') {
      this.emptyError = "Please enter the OTP"
      return;
    }
    if (this.decryptedOtp == this.enterOtp) {
      if (this.buyerType == 'buyersignup') {
        this.apiservice.buyersignup(this.buyerRegiterData).subscribe((res) => {
          if (res.code == 200) {
            this.browserStorageService.set("buyerToken", res?.data?.accessToken);
            this.browserStorageService.set("buyerId", res?.data?.id);
            this.browserStorageService.set("buyerName", res?.data?.firstName);
            this.navbarService.refresh();
            this._dialogRef.close(true);
          }
        },
          (err: any) => {
            this.buyerEmailError = err?.error?.message
          }
        )
      } else {
        this.browserStorageService.set("buyerToken", this.buyerToken);
        this.browserStorageService.set("buyerName", this.buyerName);
        this.navbarService.refresh();
        this._dialogRef.close(true);
      }
    }
    else {
      this.invaliderror = "Invalid Otp"
    }
  }

  intervalId: any;
  resendotp() {
    this.ngOtpInput.setValue('');
    this.remainingTime = 60;
    clearInterval(this.intervalId);
    this.isSubmitDisabled = false;
    this.isResendDisabled = true;
    this.startTimer();
    let payload = {};
    if (this.buyerType == 'buyersignup') {
      payload = this.buyerRegiterData
      this.apiservice.emailVerification(payload).subscribe((res) => {
        if (res.code == 200) {
          this.buyerRegisterOtp = res?.data;
          this.decryptedOtp = this.encryptfunction();
        }
      },
        (err: any) => {
          this.buyerEmailError = err?.error?.message
        }
      )
    }
    else {
      payload = this.buyerLoginData;
      this.apiservice.buyerLogin(payload).subscribe((res) => {
        if (res.code == 200) {
          this.buyerRegisterOtp = res?.data?.secretCode;
          this.decryptedOtp = this.encryptfunction();
        }
      },
        (err: any) => {
          this.buyerEmailError = err?.error?.message
        }
      )
    }

  }



}
