import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { Link } from './contact.interface';
import { svglGithubDark, svglGmail, svglLinkedin } from '@ng-icons/svgl';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [NgIcon, FormsModule, HttpClientModule, CommonModule],
  providers: [
    provideIcons({
      svglGithubDark,
      svglLinkedin,
      svglGmail,
    }),
  ],
})
export class ContactComponent {
  links = signal<Link[]>([
    { name: 'svglGithubDark', url: 'https://github.com/Szubas' },
    { name: 'svglLinkedin', url: 'https://www.linkedin.com/in/sebastian-szuba-891816264' },
    { name: 'svglGmail', url: 'szubas99@gmail.com' },
  ]);

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (
      form.controls['message'].value === '' ||
      form.controls['email'].value === '' ||
      form.controls['name'].value === '' ||
      !form.controls['email'].valid
    ) {
      alert('Formularz zawiera błędy. Uzupełnij wszystkie pola wymagane i popraw email.');
      return;
    }

    const url = 'https://formspree.io/f/YOUR_FORM_ID';
    this.http.post(url, form.value).subscribe({
      next: () => {
        alert('Wiadomość wysłana!');
      },
      error: () => alert('Błąd wysyłki'),
    });
  }
}
