import {
  matfReactTsColored,
  simpleDotnet
} from "./chunk-GUYBH77N.js";
import {
  NgIcon,
  provideIcons,
  svglAngular,
  svglCsharp,
  svglFastapi,
  svglGithubDark,
  svglPython
} from "./chunk-YCHD3KCC.js";
import {
  CommonModule,
  NgForOf
} from "./chunk-E7WOJZHT.js";
import {
  Component,
  __name,
  __publicField,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OYQTXLMQ.js";

// src/app/projects/projects.component.ts
function ProjectsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "h3", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "ng-icon", 6);
    \u0275\u0275elementStart(4, "p", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 9);
    \u0275\u0275element(9, "ng-icon", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r1.name);
    \u0275\u0275advance();
    \u0275\u0275property("name", project_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Technologie: ", project_r1.tech);
    \u0275\u0275advance();
    \u0275\u0275property("href", project_r1.link, \u0275\u0275sanitizeUrl);
  }
}
__name(ProjectsComponent_div_4_Template, "ProjectsComponent_div_4_Template");
var _ProjectsComponent = class _ProjectsComponent {
  Projects = signal([
    {
      name: "Angular shop",
      description: "Jeden z pierwszych moich projekt\xF3w w technologii Angular.         Projekt, kt\xF3ry mia\u0142 na celu sprawdzi\u0107 mo\u017Cliwo\u015Bci moje i tej technologii.         Pos\u0142u\u017Cy\u0142em Angular do stworzenia prostej aplikacji sklepu internetowego z funkcjonalno\u015Bci\u0105 koszyka i filtrowania produkt\xF3w.         Wykorzysta\u0142em do projektu r\xF3wnie\u017C zewn\u0119trzne API do pobierania danych o produktach, obs\u0142ugi kont u\u017Cytkownik\xF3w         (ze wgl\u0119du na wykorzystanie lokalnego serwera API, aplikacja jest g\u0142\xF3wnie dost\u0119pna jako codereview).         Aplikacja imituje typowy sklep internetowy z prost\u0105 nawigacj\u0105 i funkcjonalnym koszykiem.         Projekt ten pozwoli\u0142 mi na nauk\u0119 podstaw Angular, w tym komponent\xF3w, routingu oraz obs\u0142ugi formularzy.         Projekt r\xF3wnie\u017C by\u0142 dla mnie wa\u017Cnym krokiem w nauce Angular i pozwoli\u0142 mi na zrozumienie, jak tworzy\u0107 wydajne i skalowalne aplikacje webowe przy u\u017Cyciu tej technologii.",
      link: "https://github.com/Szubas/shop_angular",
      tech: "TypeScript, Angular, SCSS",
      icon: "svglAngular"
    },
    {
      name: "FastAPI skills lab",
      description: "Jeden z pierwszych moich projekt\xF3w w technologii FastAPI.         Projekt, kt\xF3ry mia\u0142 na celu sprawdzi\u0107 mo\u017Cliwo\u015Bci moje i tej technologii.         Pos\u0142u\u017Cy\u0142em FastAPI do stworzenia REST API, kt\xF3re zarz\u0105dza prost\u0105 baz\u0105 danych SQL.         Projekt ten pozwoli\u0142 mi na nauk\u0119 podstaw FastAPI, w tym routingu, obs\u0142ugi zapyta\u0144 HTTP oraz integracji z baz\u0105 danych przy u\u017Cyciu SQLAlchemy.         Projekt r\xF3wnie\u017C by\u0142 dla mnie wa\u017Cnym krokiem w nauce FastAPI i pozwoli\u0142 mi na zrozumienie, jak tworzy\u0107 wydajne i skalowalne aplikacje webowe przy u\u017Cyciu tej technologii.",
      link: "https://github.com/Szubas/fastapi_skills_lab",
      tech: "Python, FastAPI, SQLAlchemy, SQL",
      icon: "svglFastapi"
    },
    {
      name: "ASP.NET Core Restaurant API",
      description: "Jeden z pierwszych moich projekt\xF3w w technologii FastAPI.         Projekt, kt\xF3ry mia\u0142 na celu sprawdzi\u0107 mo\u017Cliwo\u015Bci moje i tej technologii.         Pos\u0142u\u017Cy\u0142em FastAPI do stworzenia REST API, kt\xF3re zarz\u0105dza prost\u0105 baz\u0105 danych SQL.         Projekt ten pozwoli\u0142 mi na nauk\u0119 podstaw FastAPI, w tym routingu, obs\u0142ugi zapyta\u0144 HTTP oraz integracji z baz\u0105 danych przy u\u017Cyciu SQLAlchemy.         Projekt r\xF3wnie\u017C by\u0142 dla mnie wa\u017Cnym krokiem w nauce FastAPI i pozwoli\u0142 mi na zrozumienie, jak tworzy\u0107 wydajne i skalowalne aplikacje webowe przy u\u017Cyciu tej technologii.",
      link: "https://github.com/Szubas/restaurantAPI",
      tech: "C#, ASP.NET Core, Entity Framework, SQL",
      icon: "simpleDotnet"
    },
    {
      name: "React shop",
      description: "Jeden z pierwszych moich projekt\xF3w w technologii React.         Projekt, kt\xF3ry mia\u0142 na celu pokaza\u0107 moje umiej\u0119tno\u015Bci React.         Pos\u0142u\u017Cy\u0142em React do stworzenia prostej aplikacji sklepu internetowego z funkcjonalno\u015Bci\u0105 koszyka i filtrowania produkt\xF3w.         Projekt bazuje na sklepie internetowym (Reserved).         Aplikacja jest responsywna i dzia\u0142a na r\xF3\u017Cnych urz\u0105dzeniach.         Projekt ten pozwoli\u0142 mi na pokazaniu podstaw React, w tym komponent\xF3w, routingu oraz obs\u0142ugi formularzy.         Projekt by\u0142 dla mnie wa\u017Cnym krokiem w nauce React i pozwoli\u0142 mi na zrozumienie, jak tworzy\u0107 wydajne i skalowalne aplikacje webowe przy u\u017Cyciu tej technologii.",
      link: "https://github.com/Szubas/react-shop-app",
      tech: "TypeScript, React, Redux, SCSS",
      icon: "matfReactTsColored"
    },
    {
      name: "React portfolio",
      description: "Projekt jest pierwsz\u0105 wersj\u0105 mojego porfolio, sprzed rozpocz\u0119ciem pracy.         Projekt, kt\xF3ry mia\u0142 by\u0107 moj\u0105 wizyt\xF3wk\u0105 i pokaza\u0107 moje umiej\u0119tno\u015Bci w React, css. Aplikacja jest responsywna i dzia\u0142a na r\xF3\u017Cnych urz\u0105dzeniach.         Projekt ten doskonale pokazuje jak rozwin\u0105\u0142em si\u0119 technologicznie w ostatnim czasie, co doskonale pokazuje, \u017Ce potrafi\u0119 w kr\xF3tkim czasie rozwin\u0105\u0107 si\u0119 w nowym \u015Brodowisku.         W por\xF3wnaniu do mojego obecnego portfolio, projekt jest ca\u0142kowicie tworzony wed\u0142ug mojego pomys\u0142u, bez korzystania z gotowych szablon\xF3w.         Gdzie w obecnym portfolio korzystam z gotowego szablonu, kt\xF3ry dostosowuj\u0119 do swoich potrzeb.",
      link: "https://github.com/Szubas/react-portfolio-template",
      tech: "TypeScript, React, CSS",
      icon: "matfReactTsColored"
    },
    {
      name: "Python BOT Discord",
      description: "Projekt jest moj\u0105 prac\u0105 in\u017Cyniersk\u0105. Celem pracy by\u0142o opracowa\u0107 zautomatyzowany program, kt\xF3ry b\u0119dzie scrapowa\u0142 serwisy typu news (o r\xF3\u017Cnych tematykach), za pomoc\u0105 uniwersalnego skryptu.        Trudno\u015Bci\u0105 pracy, by\u0142o utworzenie jednego skryptu dla wielu serwis\xF3w, zamiast osobno skrypt\xF3w dla ka\u017Cdej nowej witryny.         Drug\u0105 cz\u0119sci\u0105 by\u0142o po\u0142\u0105czenie skryptu scrapuj\u0105cego z BOTem Discord, kt\xF3ry b\u0119dzie wysy\u0142a\u0142 wiadomo\u015Bci na serwerze Discord, odpowiada\u0142 na komendy u\u017Cytkownik\xF3w.         Projekt by\u0142 dla mnie wa\u017Cnym krokiem pokazuj\u0105cym moje umiej\u0119tno\u015Bci j\u0119zyka Python w praktyce.",
      link: "https://github.com/SSzuba/Bot_discord",
      tech: "Python, Selenium, Docker",
      icon: "svglPython"
    }
  ], ...ngDevMode ? [{ debugName: "Projects" }] : []);
};
__name(_ProjectsComponent, "ProjectsComponent");
__publicField(_ProjectsComponent, "\u0275fac", /* @__PURE__ */ __name(function ProjectsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProjectsComponent)();
}, "ProjectsComponent_Factory"));
__publicField(_ProjectsComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["app-projects"]], features: [\u0275\u0275ProvidersFeature([
  provideIcons({
    svglCsharp,
    svglAngular,
    svglPython,
    matfReactTsColored,
    svglGithubDark,
    simpleDotnet,
    svglFastapi
  })
])], decls: 5, vars: 1, consts: [[1, "projects"], [1, "projects__title"], [1, "projects__grid"], ["class", "projects__card", 4, "ngFor", "ngForOf"], [1, "projects__card"], [1, "projects__card__title"], [1, "projects__card__icon", 3, "name"], [1, "projects__card__description"], [1, "projects__card__tech"], [1, "projects__card__link", 3, "href"], ["name", "svglGithubDark", 1, "projects__card__icon"]], template: /* @__PURE__ */ __name(function ProjectsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
    \u0275\u0275text(2, "Moje projekty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275template(4, ProjectsComponent_div_4_Template, 10, 5, "div", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.Projects());
  }
}, "ProjectsComponent_Template"), dependencies: [NgIcon, CommonModule, NgForOf], styles: ['\n\nhtml[_ngcontent-%COMP%] {\n  --mat-sys-background: light-dark(, );\n  --mat-sys-error: light-dark(, );\n  --mat-sys-error-container: light-dark(, );\n  --mat-sys-inverse-on-surface: light-dark(, );\n  --mat-sys-inverse-primary: light-dark(, );\n  --mat-sys-inverse-surface: light-dark(, );\n  --mat-sys-on-background: light-dark(, );\n  --mat-sys-on-error: light-dark(, );\n  --mat-sys-on-error-container: light-dark(, );\n  --mat-sys-on-primary: light-dark(, );\n  --mat-sys-on-primary-container: light-dark(, );\n  --mat-sys-on-primary-fixed: light-dark(, );\n  --mat-sys-on-primary-fixed-variant: light-dark(, );\n  --mat-sys-on-secondary: light-dark(, );\n  --mat-sys-on-secondary-container: light-dark(, );\n  --mat-sys-on-secondary-fixed: light-dark(, );\n  --mat-sys-on-secondary-fixed-variant: light-dark(, );\n  --mat-sys-on-surface: light-dark(, );\n  --mat-sys-on-surface-variant: light-dark(, );\n  --mat-sys-on-tertiary: light-dark(, );\n  --mat-sys-on-tertiary-container: light-dark(, );\n  --mat-sys-on-tertiary-fixed: light-dark(, );\n  --mat-sys-on-tertiary-fixed-variant: light-dark(, );\n  --mat-sys-outline: light-dark(, );\n  --mat-sys-outline-variant: light-dark(, );\n  --mat-sys-primary: light-dark(, );\n  --mat-sys-primary-container: light-dark(, );\n  --mat-sys-primary-fixed: light-dark(, );\n  --mat-sys-primary-fixed-dim: light-dark(, );\n  --mat-sys-scrim: light-dark(, );\n  --mat-sys-secondary: light-dark(, );\n  --mat-sys-secondary-container: light-dark(, );\n  --mat-sys-secondary-fixed: light-dark(, );\n  --mat-sys-secondary-fixed-dim: light-dark(, );\n  --mat-sys-shadow: light-dark(, );\n  --mat-sys-surface: light-dark(, );\n  --mat-sys-surface-bright: light-dark(, );\n  --mat-sys-surface-container: light-dark(, );\n  --mat-sys-surface-container-high: light-dark(, );\n  --mat-sys-surface-container-highest: light-dark(, );\n  --mat-sys-surface-container-low: light-dark(, );\n  --mat-sys-surface-container-lowest: light-dark(, );\n  --mat-sys-surface-dim: light-dark(, );\n  --mat-sys-surface-tint: light-dark(, );\n  --mat-sys-surface-variant: light-dark(, );\n  --mat-sys-tertiary: light-dark(, );\n  --mat-sys-tertiary-container: light-dark(, );\n  --mat-sys-tertiary-fixed: light-dark(, );\n  --mat-sys-tertiary-fixed-dim: light-dark(, );\n  --mat-sys-neutral-variant20: ;\n  --mat-sys-neutral10: ;\n  --mat-sys-level0:\n    0px 0px 0px 0px ,\n    0px 0px 0px 0px ,\n    0px 0px 0px 0px ;\n  --mat-sys-level1:\n    0px 2px 1px -1px ,\n    0px 1px 1px 0px ,\n    0px 1px 3px 0px ;\n  --mat-sys-level2:\n    0px 3px 3px -2px ,\n    0px 3px 4px 0px ,\n    0px 1px 8px 0px ;\n  --mat-sys-level3:\n    0px 3px 5px -1px ,\n    0px 6px 10px 0px ,\n    0px 1px 18px 0px ;\n  --mat-sys-level4:\n    0px 5px 5px -3px ,\n    0px 8px 10px 1px ,\n    0px 3px 14px 2px ;\n  --mat-sys-level5:\n    0px 7px 8px -4px ,\n    0px 12px 17px 2px ,\n    0px 5px 22px 4px ;\n  --mat-sys-body-large: 400 1rem / 1.5rem Roboto;\n  --mat-sys-body-large-font: Roboto;\n  --mat-sys-body-large-line-height: 1.5rem;\n  --mat-sys-body-large-size: 1rem;\n  --mat-sys-body-large-tracking: 0.031rem;\n  --mat-sys-body-large-weight: 400;\n  --mat-sys-body-medium: 400 0.875rem / 1.25rem Roboto;\n  --mat-sys-body-medium-font: Roboto;\n  --mat-sys-body-medium-line-height: 1.25rem;\n  --mat-sys-body-medium-size: 0.875rem;\n  --mat-sys-body-medium-tracking: 0.016rem;\n  --mat-sys-body-medium-weight: 400;\n  --mat-sys-body-small: 400 0.75rem / 1rem Roboto;\n  --mat-sys-body-small-font: Roboto;\n  --mat-sys-body-small-line-height: 1rem;\n  --mat-sys-body-small-size: 0.75rem;\n  --mat-sys-body-small-tracking: 0.025rem;\n  --mat-sys-body-small-weight: 400;\n  --mat-sys-display-large: 400 3.562rem / 4rem Roboto;\n  --mat-sys-display-large-font: Roboto;\n  --mat-sys-display-large-line-height: 4rem;\n  --mat-sys-display-large-size: 3.562rem;\n  --mat-sys-display-large-tracking: -0.016rem;\n  --mat-sys-display-large-weight: 400;\n  --mat-sys-display-medium: 400 2.812rem / 3.25rem Roboto;\n  --mat-sys-display-medium-font: Roboto;\n  --mat-sys-display-medium-line-height: 3.25rem;\n  --mat-sys-display-medium-size: 2.812rem;\n  --mat-sys-display-medium-tracking: 0;\n  --mat-sys-display-medium-weight: 400;\n  --mat-sys-display-small: 400 2.25rem / 2.75rem Roboto;\n  --mat-sys-display-small-font: Roboto;\n  --mat-sys-display-small-line-height: 2.75rem;\n  --mat-sys-display-small-size: 2.25rem;\n  --mat-sys-display-small-tracking: 0;\n  --mat-sys-display-small-weight: 400;\n  --mat-sys-headline-large: 400 2rem / 2.5rem Roboto;\n  --mat-sys-headline-large-font: Roboto;\n  --mat-sys-headline-large-line-height: 2.5rem;\n  --mat-sys-headline-large-size: 2rem;\n  --mat-sys-headline-large-tracking: 0;\n  --mat-sys-headline-large-weight: 400;\n  --mat-sys-headline-medium: 400 1.75rem / 2.25rem Roboto;\n  --mat-sys-headline-medium-font: Roboto;\n  --mat-sys-headline-medium-line-height: 2.25rem;\n  --mat-sys-headline-medium-size: 1.75rem;\n  --mat-sys-headline-medium-tracking: 0;\n  --mat-sys-headline-medium-weight: 400;\n  --mat-sys-headline-small: 400 1.5rem / 2rem Roboto;\n  --mat-sys-headline-small-font: Roboto;\n  --mat-sys-headline-small-line-height: 2rem;\n  --mat-sys-headline-small-size: 1.5rem;\n  --mat-sys-headline-small-tracking: 0;\n  --mat-sys-headline-small-weight: 400;\n  --mat-sys-label-large: 500 0.875rem / 1.25rem Roboto;\n  --mat-sys-label-large-font: Roboto;\n  --mat-sys-label-large-line-height: 1.25rem;\n  --mat-sys-label-large-size: 0.875rem;\n  --mat-sys-label-large-tracking: 0.006rem;\n  --mat-sys-label-large-weight: 500;\n  --mat-sys-label-large-weight-prominent: 700;\n  --mat-sys-label-medium: 500 0.75rem / 1rem Roboto;\n  --mat-sys-label-medium-font: Roboto;\n  --mat-sys-label-medium-line-height: 1rem;\n  --mat-sys-label-medium-size: 0.75rem;\n  --mat-sys-label-medium-tracking: 0.031rem;\n  --mat-sys-label-medium-weight: 500;\n  --mat-sys-label-medium-weight-prominent: 700;\n  --mat-sys-label-small: 500 0.688rem / 1rem Roboto;\n  --mat-sys-label-small-font: Roboto;\n  --mat-sys-label-small-line-height: 1rem;\n  --mat-sys-label-small-size: 0.688rem;\n  --mat-sys-label-small-tracking: 0.031rem;\n  --mat-sys-label-small-weight: 500;\n  --mat-sys-title-large: 400 1.375rem / 1.75rem Roboto;\n  --mat-sys-title-large-font: Roboto;\n  --mat-sys-title-large-line-height: 1.75rem;\n  --mat-sys-title-large-size: 1.375rem;\n  --mat-sys-title-large-tracking: 0;\n  --mat-sys-title-large-weight: 400;\n  --mat-sys-title-medium: 500 1rem / 1.5rem Roboto;\n  --mat-sys-title-medium-font: Roboto;\n  --mat-sys-title-medium-line-height: 1.5rem;\n  --mat-sys-title-medium-size: 1rem;\n  --mat-sys-title-medium-tracking: 0.009rem;\n  --mat-sys-title-medium-weight: 500;\n  --mat-sys-title-small: 500 0.875rem / 1.25rem Roboto;\n  --mat-sys-title-small-font: Roboto;\n  --mat-sys-title-small-line-height: 1.25rem;\n  --mat-sys-title-small-size: 0.875rem;\n  --mat-sys-title-small-tracking: 0.006rem;\n  --mat-sys-title-small-weight: 500;\n  --mat-sys-corner-extra-large: 28px;\n  --mat-sys-corner-extra-large-top: 28px 28px 0 0;\n  --mat-sys-corner-extra-small: 4px;\n  --mat-sys-corner-extra-small-top: 4px 4px 0 0;\n  --mat-sys-corner-full: 9999px;\n  --mat-sys-corner-large: 16px;\n  --mat-sys-corner-large-end: 0 16px 16px 0;\n  --mat-sys-corner-large-start: 16px 0 0 16px;\n  --mat-sys-corner-large-top: 16px 16px 0 0;\n  --mat-sys-corner-medium: 12px;\n  --mat-sys-corner-none: 0;\n  --mat-sys-corner-small: 8px;\n  --mat-sys-dragged-state-layer-opacity: 0.16;\n  --mat-sys-focus-state-layer-opacity: 0.12;\n  --mat-sys-hover-state-layer-opacity: 0.08;\n  --mat-sys-pressed-state-layer-opacity: 0.12;\n}\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], \nbody[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  font-family:\n    Roboto,\n    "Helvetica Neue",\n    sans-serif;\n  color: #ffffff;\n  font: var(--mat-sys-body-medium);\n  color-scheme: dark;\n}\nbody[_ngcontent-%COMP%] {\n  background-image: url("./media/bg.png");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  min-height: 100vh;\n}\n.projects[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 2rem 1rem;\n  color: #00bcd4;\n}\n.projects__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 50px;\n}\n.projects__card[_ngcontent-%COMP%] {\n  width: 700px;\n  height: 500px;\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.2);\n  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  transition: 0.5s;\n}\n.projects__card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3);\n  transition: 0.5s;\n  background-color: rgba(39, 0, 83, 0.7);\n}\n.projects__card__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #00bcd4;\n  margin-bottom: 1rem;\n}\n.projects__card__description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #0288d1;\n  text-align: center;\n  padding: 0 1rem;\n}\n.projects__card__tech[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #0288d1;\n  margin-top: 1rem;\n}\n.projects__card__icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: 10px;\n}\n.projects__card__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  padding: 10px 20px;\n  border-radius: 5px;\n  background-color: rgba(0, 188, 212, 0.1);\n  transition: background-color 0.3s, color 0.3s;\n}\n.projects__card__link[_ngcontent-%COMP%]:hover {\n  background-color: #0288d1;\n}\n/*# sourceMappingURL=projects.component.css.map */'] }));
var ProjectsComponent = _ProjectsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectsComponent, [{
    type: Component,
    args: [{ selector: "app-projects", imports: [NgIcon, CommonModule], providers: [
      provideIcons({
        svglCsharp,
        svglAngular,
        svglPython,
        matfReactTsColored,
        svglGithubDark,
        simpleDotnet,
        svglFastapi
      })
    ], template: '<div class="projects">\r\n  <h1 class="projects__title">Moje projekty</h1>\r\n  <div class="projects__grid">\r\n    <div class="projects__card" *ngFor="let project of Projects()">\r\n      <h3 class="projects__card__title">{{ project.name }}</h3>\r\n      <ng-icon [name]="project.icon" class="projects__card__icon"></ng-icon>\r\n      <p class="projects__card__description">{{ project.description }}</p>\r\n      <p class="projects__card__tech">Technologie: {{ project.tech }}</p>\r\n      <a [href]="project.link" class="projects__card__link"\r\n        ><ng-icon name="svglGithubDark" class="projects__card__icon"></ng-icon\r\n      ></a>\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ['/* src/app/projects/projects.component.scss */\nhtml {\n  --mat-sys-background: light-dark(, );\n  --mat-sys-error: light-dark(, );\n  --mat-sys-error-container: light-dark(, );\n  --mat-sys-inverse-on-surface: light-dark(, );\n  --mat-sys-inverse-primary: light-dark(, );\n  --mat-sys-inverse-surface: light-dark(, );\n  --mat-sys-on-background: light-dark(, );\n  --mat-sys-on-error: light-dark(, );\n  --mat-sys-on-error-container: light-dark(, );\n  --mat-sys-on-primary: light-dark(, );\n  --mat-sys-on-primary-container: light-dark(, );\n  --mat-sys-on-primary-fixed: light-dark(, );\n  --mat-sys-on-primary-fixed-variant: light-dark(, );\n  --mat-sys-on-secondary: light-dark(, );\n  --mat-sys-on-secondary-container: light-dark(, );\n  --mat-sys-on-secondary-fixed: light-dark(, );\n  --mat-sys-on-secondary-fixed-variant: light-dark(, );\n  --mat-sys-on-surface: light-dark(, );\n  --mat-sys-on-surface-variant: light-dark(, );\n  --mat-sys-on-tertiary: light-dark(, );\n  --mat-sys-on-tertiary-container: light-dark(, );\n  --mat-sys-on-tertiary-fixed: light-dark(, );\n  --mat-sys-on-tertiary-fixed-variant: light-dark(, );\n  --mat-sys-outline: light-dark(, );\n  --mat-sys-outline-variant: light-dark(, );\n  --mat-sys-primary: light-dark(, );\n  --mat-sys-primary-container: light-dark(, );\n  --mat-sys-primary-fixed: light-dark(, );\n  --mat-sys-primary-fixed-dim: light-dark(, );\n  --mat-sys-scrim: light-dark(, );\n  --mat-sys-secondary: light-dark(, );\n  --mat-sys-secondary-container: light-dark(, );\n  --mat-sys-secondary-fixed: light-dark(, );\n  --mat-sys-secondary-fixed-dim: light-dark(, );\n  --mat-sys-shadow: light-dark(, );\n  --mat-sys-surface: light-dark(, );\n  --mat-sys-surface-bright: light-dark(, );\n  --mat-sys-surface-container: light-dark(, );\n  --mat-sys-surface-container-high: light-dark(, );\n  --mat-sys-surface-container-highest: light-dark(, );\n  --mat-sys-surface-container-low: light-dark(, );\n  --mat-sys-surface-container-lowest: light-dark(, );\n  --mat-sys-surface-dim: light-dark(, );\n  --mat-sys-surface-tint: light-dark(, );\n  --mat-sys-surface-variant: light-dark(, );\n  --mat-sys-tertiary: light-dark(, );\n  --mat-sys-tertiary-container: light-dark(, );\n  --mat-sys-tertiary-fixed: light-dark(, );\n  --mat-sys-tertiary-fixed-dim: light-dark(, );\n  --mat-sys-neutral-variant20: ;\n  --mat-sys-neutral10: ;\n  --mat-sys-level0:\n    0px 0px 0px 0px ,\n    0px 0px 0px 0px ,\n    0px 0px 0px 0px ;\n  --mat-sys-level1:\n    0px 2px 1px -1px ,\n    0px 1px 1px 0px ,\n    0px 1px 3px 0px ;\n  --mat-sys-level2:\n    0px 3px 3px -2px ,\n    0px 3px 4px 0px ,\n    0px 1px 8px 0px ;\n  --mat-sys-level3:\n    0px 3px 5px -1px ,\n    0px 6px 10px 0px ,\n    0px 1px 18px 0px ;\n  --mat-sys-level4:\n    0px 5px 5px -3px ,\n    0px 8px 10px 1px ,\n    0px 3px 14px 2px ;\n  --mat-sys-level5:\n    0px 7px 8px -4px ,\n    0px 12px 17px 2px ,\n    0px 5px 22px 4px ;\n  --mat-sys-body-large: 400 1rem / 1.5rem Roboto;\n  --mat-sys-body-large-font: Roboto;\n  --mat-sys-body-large-line-height: 1.5rem;\n  --mat-sys-body-large-size: 1rem;\n  --mat-sys-body-large-tracking: 0.031rem;\n  --mat-sys-body-large-weight: 400;\n  --mat-sys-body-medium: 400 0.875rem / 1.25rem Roboto;\n  --mat-sys-body-medium-font: Roboto;\n  --mat-sys-body-medium-line-height: 1.25rem;\n  --mat-sys-body-medium-size: 0.875rem;\n  --mat-sys-body-medium-tracking: 0.016rem;\n  --mat-sys-body-medium-weight: 400;\n  --mat-sys-body-small: 400 0.75rem / 1rem Roboto;\n  --mat-sys-body-small-font: Roboto;\n  --mat-sys-body-small-line-height: 1rem;\n  --mat-sys-body-small-size: 0.75rem;\n  --mat-sys-body-small-tracking: 0.025rem;\n  --mat-sys-body-small-weight: 400;\n  --mat-sys-display-large: 400 3.562rem / 4rem Roboto;\n  --mat-sys-display-large-font: Roboto;\n  --mat-sys-display-large-line-height: 4rem;\n  --mat-sys-display-large-size: 3.562rem;\n  --mat-sys-display-large-tracking: -0.016rem;\n  --mat-sys-display-large-weight: 400;\n  --mat-sys-display-medium: 400 2.812rem / 3.25rem Roboto;\n  --mat-sys-display-medium-font: Roboto;\n  --mat-sys-display-medium-line-height: 3.25rem;\n  --mat-sys-display-medium-size: 2.812rem;\n  --mat-sys-display-medium-tracking: 0;\n  --mat-sys-display-medium-weight: 400;\n  --mat-sys-display-small: 400 2.25rem / 2.75rem Roboto;\n  --mat-sys-display-small-font: Roboto;\n  --mat-sys-display-small-line-height: 2.75rem;\n  --mat-sys-display-small-size: 2.25rem;\n  --mat-sys-display-small-tracking: 0;\n  --mat-sys-display-small-weight: 400;\n  --mat-sys-headline-large: 400 2rem / 2.5rem Roboto;\n  --mat-sys-headline-large-font: Roboto;\n  --mat-sys-headline-large-line-height: 2.5rem;\n  --mat-sys-headline-large-size: 2rem;\n  --mat-sys-headline-large-tracking: 0;\n  --mat-sys-headline-large-weight: 400;\n  --mat-sys-headline-medium: 400 1.75rem / 2.25rem Roboto;\n  --mat-sys-headline-medium-font: Roboto;\n  --mat-sys-headline-medium-line-height: 2.25rem;\n  --mat-sys-headline-medium-size: 1.75rem;\n  --mat-sys-headline-medium-tracking: 0;\n  --mat-sys-headline-medium-weight: 400;\n  --mat-sys-headline-small: 400 1.5rem / 2rem Roboto;\n  --mat-sys-headline-small-font: Roboto;\n  --mat-sys-headline-small-line-height: 2rem;\n  --mat-sys-headline-small-size: 1.5rem;\n  --mat-sys-headline-small-tracking: 0;\n  --mat-sys-headline-small-weight: 400;\n  --mat-sys-label-large: 500 0.875rem / 1.25rem Roboto;\n  --mat-sys-label-large-font: Roboto;\n  --mat-sys-label-large-line-height: 1.25rem;\n  --mat-sys-label-large-size: 0.875rem;\n  --mat-sys-label-large-tracking: 0.006rem;\n  --mat-sys-label-large-weight: 500;\n  --mat-sys-label-large-weight-prominent: 700;\n  --mat-sys-label-medium: 500 0.75rem / 1rem Roboto;\n  --mat-sys-label-medium-font: Roboto;\n  --mat-sys-label-medium-line-height: 1rem;\n  --mat-sys-label-medium-size: 0.75rem;\n  --mat-sys-label-medium-tracking: 0.031rem;\n  --mat-sys-label-medium-weight: 500;\n  --mat-sys-label-medium-weight-prominent: 700;\n  --mat-sys-label-small: 500 0.688rem / 1rem Roboto;\n  --mat-sys-label-small-font: Roboto;\n  --mat-sys-label-small-line-height: 1rem;\n  --mat-sys-label-small-size: 0.688rem;\n  --mat-sys-label-small-tracking: 0.031rem;\n  --mat-sys-label-small-weight: 500;\n  --mat-sys-title-large: 400 1.375rem / 1.75rem Roboto;\n  --mat-sys-title-large-font: Roboto;\n  --mat-sys-title-large-line-height: 1.75rem;\n  --mat-sys-title-large-size: 1.375rem;\n  --mat-sys-title-large-tracking: 0;\n  --mat-sys-title-large-weight: 400;\n  --mat-sys-title-medium: 500 1rem / 1.5rem Roboto;\n  --mat-sys-title-medium-font: Roboto;\n  --mat-sys-title-medium-line-height: 1.5rem;\n  --mat-sys-title-medium-size: 1rem;\n  --mat-sys-title-medium-tracking: 0.009rem;\n  --mat-sys-title-medium-weight: 500;\n  --mat-sys-title-small: 500 0.875rem / 1.25rem Roboto;\n  --mat-sys-title-small-font: Roboto;\n  --mat-sys-title-small-line-height: 1.25rem;\n  --mat-sys-title-small-size: 0.875rem;\n  --mat-sys-title-small-tracking: 0.006rem;\n  --mat-sys-title-small-weight: 500;\n  --mat-sys-corner-extra-large: 28px;\n  --mat-sys-corner-extra-large-top: 28px 28px 0 0;\n  --mat-sys-corner-extra-small: 4px;\n  --mat-sys-corner-extra-small-top: 4px 4px 0 0;\n  --mat-sys-corner-full: 9999px;\n  --mat-sys-corner-large: 16px;\n  --mat-sys-corner-large-end: 0 16px 16px 0;\n  --mat-sys-corner-large-start: 16px 0 0 16px;\n  --mat-sys-corner-large-top: 16px 16px 0 0;\n  --mat-sys-corner-medium: 12px;\n  --mat-sys-corner-none: 0;\n  --mat-sys-corner-small: 8px;\n  --mat-sys-dragged-state-layer-opacity: 0.16;\n  --mat-sys-focus-state-layer-opacity: 0.12;\n  --mat-sys-hover-state-layer-opacity: 0.08;\n  --mat-sys-pressed-state-layer-opacity: 0.12;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  font-family:\n    Roboto,\n    "Helvetica Neue",\n    sans-serif;\n  color: #ffffff;\n  font: var(--mat-sys-body-medium);\n  color-scheme: dark;\n}\nbody {\n  background-image: url("./media/bg.png");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  min-height: 100vh;\n}\n.projects {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 2rem 1rem;\n  color: #00bcd4;\n}\n.projects__grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 50px;\n}\n.projects__card {\n  width: 700px;\n  height: 500px;\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.2);\n  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  transition: 0.5s;\n}\n.projects__card:hover {\n  transform: scale(1.3);\n  transition: 0.5s;\n  background-color: rgba(39, 0, 83, 0.7);\n}\n.projects__card__title {\n  font-size: 1.5rem;\n  color: #00bcd4;\n  margin-bottom: 1rem;\n}\n.projects__card__description {\n  font-size: 1rem;\n  color: #0288d1;\n  text-align: center;\n  padding: 0 1rem;\n}\n.projects__card__tech {\n  font-size: 0.9rem;\n  color: #0288d1;\n  margin-top: 1rem;\n}\n.projects__card__icon {\n  width: 40px;\n  height: 40px;\n  margin: 10px;\n}\n.projects__card__link {\n  text-decoration: none;\n  padding: 10px 20px;\n  border-radius: 5px;\n  background-color: rgba(0, 188, 212, 0.1);\n  transition: background-color 0.3s, color 0.3s;\n}\n.projects__card__link:hover {\n  background-color: #0288d1;\n}\n/*# sourceMappingURL=projects.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src/app/projects/projects.component.ts", lineNumber: 26 });
})();
export {
  ProjectsComponent
};
//# sourceMappingURL=chunk-ADYRZR5R.js.map
