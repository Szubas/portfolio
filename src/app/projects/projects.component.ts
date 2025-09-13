import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { svglAngular, svglCsharp, svglPython, svglGithubDark, svglFastapi } from '@ng-icons/svgl';
import { matfReactTsColored } from '@ng-icons/material-file-icons/colored';
import { simpleDotnet } from '@ng-icons/simple-icons';
import { Project } from './project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [NgIcon, CommonModule],
  providers: [
    provideIcons({
      svglCsharp,
      svglAngular,
      svglPython,
      matfReactTsColored,
      svglGithubDark,
      simpleDotnet,
      svglFastapi
    }),
  ],
})
export class ProjectsComponent {
  Projects = signal<Project[]>([
    {
      name: 'Angular shop',
      description:
        'Jeden z pierwszych moich projektów w technologii Angular. \
        Projekt, który miał na celu sprawdzić możliwości moje i tej technologii. \
        Posłużyłem Angular do stworzenia prostej aplikacji sklepu internetowego z funkcjonalnością koszyka i filtrowania produktów. \
        Wykorzystałem do projektu również zewnętrzne API do pobierania danych o produktach, obsługi kont użytkowników \
        (ze wględu na wykorzystanie lokalnego serwera API, aplikacja jest głównie dostępna jako codereview). \
        Aplikacja imituje typowy sklep internetowy z prostą nawigacją i funkcjonalnym koszykiem. \
        Projekt ten pozwolił mi na naukę podstaw Angular, w tym komponentów, routingu oraz obsługi formularzy. \
        Projekt również był dla mnie ważnym krokiem w nauce Angular i pozwolił mi na zrozumienie, jak tworzyć wydajne i skalowalne aplikacje webowe przy użyciu tej technologii.',
      link: 'https://github.com/Szubas/shop_angular',
      tech: 'TypeScript, Angular, SCSS',
      icon: 'svglAngular'
    },
    {
      name: 'FastAPI skills lab',
      description:
        'Jeden z pierwszych moich projektów w technologii FastAPI. \
        Projekt, który miał na celu sprawdzić możliwości moje i tej technologii. \
        Posłużyłem FastAPI do stworzenia REST API, które zarządza prostą bazą danych SQL. \
        Projekt ten pozwolił mi na naukę podstaw FastAPI, w tym routingu, obsługi zapytań HTTP oraz integracji z bazą danych przy użyciu SQLAlchemy. \
        Projekt również był dla mnie ważnym krokiem w nauce FastAPI i pozwolił mi na zrozumienie, jak tworzyć wydajne i skalowalne aplikacje webowe przy użyciu tej technologii.',
      link: 'https://github.com/Szubas/fastapi_skills_lab',
      tech: 'Python, FastAPI, SQLAlchemy, SQL',
      icon: 'svglFastapi'
    },
    {
      name: 'ASP.NET Core Restaurant API',
      description:
        'Jeden z pierwszych moich projektów w technologii FastAPI. \
        Projekt, który miał na celu sprawdzić możliwości moje i tej technologii. \
        Posłużyłem FastAPI do stworzenia REST API, które zarządza prostą bazą danych SQL. \
        Projekt ten pozwolił mi na naukę podstaw FastAPI, w tym routingu, obsługi zapytań HTTP oraz integracji z bazą danych przy użyciu SQLAlchemy. \
        Projekt również był dla mnie ważnym krokiem w nauce FastAPI i pozwolił mi na zrozumienie, jak tworzyć wydajne i skalowalne aplikacje webowe przy użyciu tej technologii.',
      link: 'https://github.com/Szubas/restaurantAPI',
      tech: 'C#, ASP.NET Core, Entity Framework, SQL',
      icon: 'simpleDotnet'
    },
    {
      name: 'React shop',
      description:
        'Jeden z pierwszych moich projektów w technologii React. \
        Projekt, który miał na celu pokazać moje umiejętności React. \
        Posłużyłem React do stworzenia prostej aplikacji sklepu internetowego z funkcjonalnością koszyka i filtrowania produktów. \
        Projekt bazuje na sklepie internetowym (Reserved). \
        Aplikacja jest responsywna i działa na różnych urządzeniach. \
        Projekt ten pozwolił mi na pokazaniu podstaw React, w tym komponentów, routingu oraz obsługi formularzy. \
        Projekt był dla mnie ważnym krokiem w nauce React i pozwolił mi na zrozumienie, jak tworzyć wydajne i skalowalne aplikacje webowe przy użyciu tej technologii.',
      link: 'https://github.com/Szubas/react-shop-app',
      tech: 'TypeScript, React, Redux, SCSS',
      icon: 'matfReactTsColored'
    },
    {
      name: 'React portfolio',
      description:
        'Projekt jest pierwszą wersją mojego porfolio, sprzed rozpoczęciem pracy. \
        Projekt, który miał być moją wizytówką i pokazać moje umiejętności w React, css. Aplikacja jest responsywna i działa na różnych urządzeniach. \
        Projekt ten doskonale pokazuje jak rozwinąłem się technologicznie w ostatnim czasie, co doskonale pokazuje, że potrafię w krótkim czasie rozwinąć się w nowym środowisku. \
        W porównaniu do mojego obecnego portfolio, projekt jest całkowicie tworzony według mojego pomysłu, bez korzystania z gotowych szablonów. \
        Gdzie w obecnym portfolio korzystam z gotowego szablonu, który dostosowuję do swoich potrzeb.',
      link: 'https://github.com/Szubas/react-portfolio-template',
      tech: 'TypeScript, React, CSS',
      icon: 'matfReactTsColored'
    },
    {
      name: 'Python BOT Discord',
      description:
        'Projekt jest moją pracą inżynierską. Celem pracy było opracować zautomatyzowany program, który będzie scrapował serwisy typu news (o różnych tematykach), za pomocą uniwersalnego skryptu.\
        Trudnością pracy, było utworzenie jednego skryptu dla wielu serwisów, zamiast osobno skryptów dla każdej nowej witryny. \
        Drugą częscią było połączenie skryptu scrapującego z BOTem Discord, który będzie wysyłał wiadomości na serwerze Discord, odpowiadał na komendy użytkowników. \
        Projekt był dla mnie ważnym krokiem pokazującym moje umiejętności języka Python w praktyce.',
      link: 'https://github.com/SSzuba/Bot_discord',
      tech: 'Python, Selenium, Docker',
      icon: 'svglPython'
    },
  ]);
}
