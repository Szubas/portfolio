import {
  matfDatabaseColored,
  matfDjangoColored,
  matfGitColored,
  matfKubernetesColored,
  matfPhpColored,
  matfReactTsColored,
  simpleDotnet
} from "./chunk-GUYBH77N.js";
import {
  NgIcon,
  provideIcons,
  svglAngular,
  svglC,
  svglCPlusplus,
  svglCsharp,
  svglCss,
  svglDocker,
  svglFastapi,
  svglHtml5,
  svglJava,
  svglJavascript,
  svglLinux,
  svglPython,
  svglTypescript
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-OYQTXLMQ.js";

// src/app/skills/skills.component.ts
function SkillsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "ng-icon", 4);
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275element(3, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("name", skill_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", skill_r1.progress, "%");
  }
}
__name(SkillsComponent_div_4_Template, "SkillsComponent_div_4_Template");
var _SkillsComponent = class _SkillsComponent {
  skills = signal([
    { name: "svglC", progress: 20 },
    { name: "svglCPlusplus", progress: 20 },
    { name: "svglCsharp", progress: 60 },
    { name: "simpleDotnet", progress: 60 },
    { name: "matfKubernetesColored", progress: 20 },
    { name: "svglAngular", progress: 60 },
    { name: "matfDatabaseColored", progress: 70 },
    { name: "matfDjangoColored", progress: 10 },
    { name: "matfGitColored", progress: 20 },
    { name: "svglHtml5", progress: 70 },
    { name: "svglCss", progress: 60 },
    { name: "svglJava", progress: 50 },
    { name: "svglJavascript", progress: 40 },
    { name: "matfPhpColored", progress: 10 },
    { name: "svglPython", progress: 70 },
    { name: "matfReactTsColored", progress: 40 },
    { name: "svglTypescript", progress: 40 },
    { name: "svglDocker", progress: 30 },
    { name: "svglFastapi", progress: 80 },
    { name: "svglLinux", progress: 40 }
  ], ...ngDevMode ? [{ debugName: "skills" }] : []);
};
__name(_SkillsComponent, "SkillsComponent");
__publicField(_SkillsComponent, "\u0275fac", /* @__PURE__ */ __name(function SkillsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SkillsComponent)();
}, "SkillsComponent_Factory"));
__publicField(_SkillsComponent, "\u0275cmp", /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkillsComponent, selectors: [["app-skills"]], features: [\u0275\u0275ProvidersFeature([
  provideIcons({
    svglC,
    svglCPlusplus,
    svglCsharp,
    svglAngular,
    svglHtml5,
    svglCss,
    svglJava,
    svglJavascript,
    svglPython,
    svglTypescript,
    svglDocker,
    svglFastapi,
    svglLinux,
    matfKubernetesColored,
    matfDatabaseColored,
    matfDjangoColored,
    matfGitColored,
    matfPhpColored,
    matfReactTsColored,
    simpleDotnet
  })
])], decls: 5, vars: 1, consts: [[1, "skills"], [1, "skills__grid"], ["class", "skills__grid__card", 4, "ngFor", "ngForOf"], [1, "skills__grid__card"], [1, "skills__grid__card__icon", 3, "name"], [1, "skills__grid__card__progress"], [1, "skills__grid__card__progress__fill"]], template: /* @__PURE__ */ __name(function SkillsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h1");
    \u0275\u0275text(2, "Moje umiej\u0119tno\u015Bci");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1);
    \u0275\u0275template(4, SkillsComponent_div_4_Template, 4, 3, "div", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.skills());
  }
}, "SkillsComponent_Template"), dependencies: [NgIcon, CommonModule, NgForOf], styles: ['\n\nhtml[_ngcontent-%COMP%] {\n  --mat-sys-background: light-dark(, );\n  --mat-sys-error: light-dark(, );\n  --mat-sys-error-container: light-dark(, );\n  --mat-sys-inverse-on-surface: light-dark(, );\n  --mat-sys-inverse-primary: light-dark(, );\n  --mat-sys-inverse-surface: light-dark(, );\n  --mat-sys-on-background: light-dark(, );\n  --mat-sys-on-error: light-dark(, );\n  --mat-sys-on-error-container: light-dark(, );\n  --mat-sys-on-primary: light-dark(, );\n  --mat-sys-on-primary-container: light-dark(, );\n  --mat-sys-on-primary-fixed: light-dark(, );\n  --mat-sys-on-primary-fixed-variant: light-dark(, );\n  --mat-sys-on-secondary: light-dark(, );\n  --mat-sys-on-secondary-container: light-dark(, );\n  --mat-sys-on-secondary-fixed: light-dark(, );\n  --mat-sys-on-secondary-fixed-variant: light-dark(, );\n  --mat-sys-on-surface: light-dark(, );\n  --mat-sys-on-surface-variant: light-dark(, );\n  --mat-sys-on-tertiary: light-dark(, );\n  --mat-sys-on-tertiary-container: light-dark(, );\n  --mat-sys-on-tertiary-fixed: light-dark(, );\n  --mat-sys-on-tertiary-fixed-variant: light-dark(, );\n  --mat-sys-outline: light-dark(, );\n  --mat-sys-outline-variant: light-dark(, );\n  --mat-sys-primary: light-dark(, );\n  --mat-sys-primary-container: light-dark(, );\n  --mat-sys-primary-fixed: light-dark(, );\n  --mat-sys-primary-fixed-dim: light-dark(, );\n  --mat-sys-scrim: light-dark(, );\n  --mat-sys-secondary: light-dark(, );\n  --mat-sys-secondary-container: light-dark(, );\n  --mat-sys-secondary-fixed: light-dark(, );\n  --mat-sys-secondary-fixed-dim: light-dark(, );\n  --mat-sys-shadow: light-dark(, );\n  --mat-sys-surface: light-dark(, );\n  --mat-sys-surface-bright: light-dark(, );\n  --mat-sys-surface-container: light-dark(, );\n  --mat-sys-surface-container-high: light-dark(, );\n  --mat-sys-surface-container-highest: light-dark(, );\n  --mat-sys-surface-container-low: light-dark(, );\n  --mat-sys-surface-container-lowest: light-dark(, );\n  --mat-sys-surface-dim: light-dark(, );\n  --mat-sys-surface-tint: light-dark(, );\n  --mat-sys-surface-variant: light-dark(, );\n  --mat-sys-tertiary: light-dark(, );\n  --mat-sys-tertiary-container: light-dark(, );\n  --mat-sys-tertiary-fixed: light-dark(, );\n  --mat-sys-tertiary-fixed-dim: light-dark(, );\n  --mat-sys-neutral-variant20: ;\n  --mat-sys-neutral10: ;\n  --mat-sys-level0:\n    0px 0px 0px 0px ,\n    0px 0px 0px 0px ,\n    0px 0px 0px 0px ;\n  --mat-sys-level1:\n    0px 2px 1px -1px ,\n    0px 1px 1px 0px ,\n    0px 1px 3px 0px ;\n  --mat-sys-level2:\n    0px 3px 3px -2px ,\n    0px 3px 4px 0px ,\n    0px 1px 8px 0px ;\n  --mat-sys-level3:\n    0px 3px 5px -1px ,\n    0px 6px 10px 0px ,\n    0px 1px 18px 0px ;\n  --mat-sys-level4:\n    0px 5px 5px -3px ,\n    0px 8px 10px 1px ,\n    0px 3px 14px 2px ;\n  --mat-sys-level5:\n    0px 7px 8px -4px ,\n    0px 12px 17px 2px ,\n    0px 5px 22px 4px ;\n  --mat-sys-body-large: 400 1rem / 1.5rem Roboto;\n  --mat-sys-body-large-font: Roboto;\n  --mat-sys-body-large-line-height: 1.5rem;\n  --mat-sys-body-large-size: 1rem;\n  --mat-sys-body-large-tracking: 0.031rem;\n  --mat-sys-body-large-weight: 400;\n  --mat-sys-body-medium: 400 0.875rem / 1.25rem Roboto;\n  --mat-sys-body-medium-font: Roboto;\n  --mat-sys-body-medium-line-height: 1.25rem;\n  --mat-sys-body-medium-size: 0.875rem;\n  --mat-sys-body-medium-tracking: 0.016rem;\n  --mat-sys-body-medium-weight: 400;\n  --mat-sys-body-small: 400 0.75rem / 1rem Roboto;\n  --mat-sys-body-small-font: Roboto;\n  --mat-sys-body-small-line-height: 1rem;\n  --mat-sys-body-small-size: 0.75rem;\n  --mat-sys-body-small-tracking: 0.025rem;\n  --mat-sys-body-small-weight: 400;\n  --mat-sys-display-large: 400 3.562rem / 4rem Roboto;\n  --mat-sys-display-large-font: Roboto;\n  --mat-sys-display-large-line-height: 4rem;\n  --mat-sys-display-large-size: 3.562rem;\n  --mat-sys-display-large-tracking: -0.016rem;\n  --mat-sys-display-large-weight: 400;\n  --mat-sys-display-medium: 400 2.812rem / 3.25rem Roboto;\n  --mat-sys-display-medium-font: Roboto;\n  --mat-sys-display-medium-line-height: 3.25rem;\n  --mat-sys-display-medium-size: 2.812rem;\n  --mat-sys-display-medium-tracking: 0;\n  --mat-sys-display-medium-weight: 400;\n  --mat-sys-display-small: 400 2.25rem / 2.75rem Roboto;\n  --mat-sys-display-small-font: Roboto;\n  --mat-sys-display-small-line-height: 2.75rem;\n  --mat-sys-display-small-size: 2.25rem;\n  --mat-sys-display-small-tracking: 0;\n  --mat-sys-display-small-weight: 400;\n  --mat-sys-headline-large: 400 2rem / 2.5rem Roboto;\n  --mat-sys-headline-large-font: Roboto;\n  --mat-sys-headline-large-line-height: 2.5rem;\n  --mat-sys-headline-large-size: 2rem;\n  --mat-sys-headline-large-tracking: 0;\n  --mat-sys-headline-large-weight: 400;\n  --mat-sys-headline-medium: 400 1.75rem / 2.25rem Roboto;\n  --mat-sys-headline-medium-font: Roboto;\n  --mat-sys-headline-medium-line-height: 2.25rem;\n  --mat-sys-headline-medium-size: 1.75rem;\n  --mat-sys-headline-medium-tracking: 0;\n  --mat-sys-headline-medium-weight: 400;\n  --mat-sys-headline-small: 400 1.5rem / 2rem Roboto;\n  --mat-sys-headline-small-font: Roboto;\n  --mat-sys-headline-small-line-height: 2rem;\n  --mat-sys-headline-small-size: 1.5rem;\n  --mat-sys-headline-small-tracking: 0;\n  --mat-sys-headline-small-weight: 400;\n  --mat-sys-label-large: 500 0.875rem / 1.25rem Roboto;\n  --mat-sys-label-large-font: Roboto;\n  --mat-sys-label-large-line-height: 1.25rem;\n  --mat-sys-label-large-size: 0.875rem;\n  --mat-sys-label-large-tracking: 0.006rem;\n  --mat-sys-label-large-weight: 500;\n  --mat-sys-label-large-weight-prominent: 700;\n  --mat-sys-label-medium: 500 0.75rem / 1rem Roboto;\n  --mat-sys-label-medium-font: Roboto;\n  --mat-sys-label-medium-line-height: 1rem;\n  --mat-sys-label-medium-size: 0.75rem;\n  --mat-sys-label-medium-tracking: 0.031rem;\n  --mat-sys-label-medium-weight: 500;\n  --mat-sys-label-medium-weight-prominent: 700;\n  --mat-sys-label-small: 500 0.688rem / 1rem Roboto;\n  --mat-sys-label-small-font: Roboto;\n  --mat-sys-label-small-line-height: 1rem;\n  --mat-sys-label-small-size: 0.688rem;\n  --mat-sys-label-small-tracking: 0.031rem;\n  --mat-sys-label-small-weight: 500;\n  --mat-sys-title-large: 400 1.375rem / 1.75rem Roboto;\n  --mat-sys-title-large-font: Roboto;\n  --mat-sys-title-large-line-height: 1.75rem;\n  --mat-sys-title-large-size: 1.375rem;\n  --mat-sys-title-large-tracking: 0;\n  --mat-sys-title-large-weight: 400;\n  --mat-sys-title-medium: 500 1rem / 1.5rem Roboto;\n  --mat-sys-title-medium-font: Roboto;\n  --mat-sys-title-medium-line-height: 1.5rem;\n  --mat-sys-title-medium-size: 1rem;\n  --mat-sys-title-medium-tracking: 0.009rem;\n  --mat-sys-title-medium-weight: 500;\n  --mat-sys-title-small: 500 0.875rem / 1.25rem Roboto;\n  --mat-sys-title-small-font: Roboto;\n  --mat-sys-title-small-line-height: 1.25rem;\n  --mat-sys-title-small-size: 0.875rem;\n  --mat-sys-title-small-tracking: 0.006rem;\n  --mat-sys-title-small-weight: 500;\n  --mat-sys-corner-extra-large: 28px;\n  --mat-sys-corner-extra-large-top: 28px 28px 0 0;\n  --mat-sys-corner-extra-small: 4px;\n  --mat-sys-corner-extra-small-top: 4px 4px 0 0;\n  --mat-sys-corner-full: 9999px;\n  --mat-sys-corner-large: 16px;\n  --mat-sys-corner-large-end: 0 16px 16px 0;\n  --mat-sys-corner-large-start: 16px 0 0 16px;\n  --mat-sys-corner-large-top: 16px 16px 0 0;\n  --mat-sys-corner-medium: 12px;\n  --mat-sys-corner-none: 0;\n  --mat-sys-corner-small: 8px;\n  --mat-sys-dragged-state-layer-opacity: 0.16;\n  --mat-sys-focus-state-layer-opacity: 0.12;\n  --mat-sys-hover-state-layer-opacity: 0.08;\n  --mat-sys-pressed-state-layer-opacity: 0.12;\n}\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], \nbody[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  font-family:\n    Roboto,\n    "Helvetica Neue",\n    sans-serif;\n  color: #ffffff;\n  font: var(--mat-sys-body-medium);\n  color-scheme: dark;\n}\nbody[_ngcontent-%COMP%] {\n  background-image: url("./media/bg.png");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  min-height: 100vh;\n}\n.skills[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 2rem 1rem;\n  color: #00bcd4;\n}\n.skills__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 50px;\n}\n.skills__grid__card[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.2);\n  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  transition: 0.5s;\n}\n.skills__grid__card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5);\n  transition: 0.5s;\n}\n.skills__grid__card__icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  margin: 10px;\n  color: white;\n}\n.skills__grid__card__progress[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 20px;\n  background-color: rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.skills__grid__card__progress__fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: green;\n  width: 0%;\n  transition: width 0.3s ease;\n}\n/*# sourceMappingURL=skills.component.css.map */'] }));
var SkillsComponent = _SkillsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkillsComponent, [{
    type: Component,
    args: [{ selector: "app-skills", standalone: true, imports: [NgIcon, CommonModule], providers: [
      provideIcons({
        svglC,
        svglCPlusplus,
        svglCsharp,
        svglAngular,
        svglHtml5,
        svglCss,
        svglJava,
        svglJavascript,
        svglPython,
        svglTypescript,
        svglDocker,
        svglFastapi,
        svglLinux,
        matfKubernetesColored,
        matfDatabaseColored,
        matfDjangoColored,
        matfGitColored,
        matfPhpColored,
        matfReactTsColored,
        simpleDotnet
      })
    ], template: '<div class="skills">\r\n  <h1>Moje umiej\u0119tno\u015Bci</h1>\r\n  <div class="skills__grid">\r\n    <div class="skills__grid__card" *ngFor="let skill of skills()">\r\n      <ng-icon [name]="skill.name" class="skills__grid__card__icon"></ng-icon>\r\n      <div class="skills__grid__card__progress">\r\n        <div class="skills__grid__card__progress__fill" [style.width.%]="skill.progress"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n', styles: ['/* src/app/skills/skills.component.scss */\nhtml {\n  --mat-sys-background: light-dark(, );\n  --mat-sys-error: light-dark(, );\n  --mat-sys-error-container: light-dark(, );\n  --mat-sys-inverse-on-surface: light-dark(, );\n  --mat-sys-inverse-primary: light-dark(, );\n  --mat-sys-inverse-surface: light-dark(, );\n  --mat-sys-on-background: light-dark(, );\n  --mat-sys-on-error: light-dark(, );\n  --mat-sys-on-error-container: light-dark(, );\n  --mat-sys-on-primary: light-dark(, );\n  --mat-sys-on-primary-container: light-dark(, );\n  --mat-sys-on-primary-fixed: light-dark(, );\n  --mat-sys-on-primary-fixed-variant: light-dark(, );\n  --mat-sys-on-secondary: light-dark(, );\n  --mat-sys-on-secondary-container: light-dark(, );\n  --mat-sys-on-secondary-fixed: light-dark(, );\n  --mat-sys-on-secondary-fixed-variant: light-dark(, );\n  --mat-sys-on-surface: light-dark(, );\n  --mat-sys-on-surface-variant: light-dark(, );\n  --mat-sys-on-tertiary: light-dark(, );\n  --mat-sys-on-tertiary-container: light-dark(, );\n  --mat-sys-on-tertiary-fixed: light-dark(, );\n  --mat-sys-on-tertiary-fixed-variant: light-dark(, );\n  --mat-sys-outline: light-dark(, );\n  --mat-sys-outline-variant: light-dark(, );\n  --mat-sys-primary: light-dark(, );\n  --mat-sys-primary-container: light-dark(, );\n  --mat-sys-primary-fixed: light-dark(, );\n  --mat-sys-primary-fixed-dim: light-dark(, );\n  --mat-sys-scrim: light-dark(, );\n  --mat-sys-secondary: light-dark(, );\n  --mat-sys-secondary-container: light-dark(, );\n  --mat-sys-secondary-fixed: light-dark(, );\n  --mat-sys-secondary-fixed-dim: light-dark(, );\n  --mat-sys-shadow: light-dark(, );\n  --mat-sys-surface: light-dark(, );\n  --mat-sys-surface-bright: light-dark(, );\n  --mat-sys-surface-container: light-dark(, );\n  --mat-sys-surface-container-high: light-dark(, );\n  --mat-sys-surface-container-highest: light-dark(, );\n  --mat-sys-surface-container-low: light-dark(, );\n  --mat-sys-surface-container-lowest: light-dark(, );\n  --mat-sys-surface-dim: light-dark(, );\n  --mat-sys-surface-tint: light-dark(, );\n  --mat-sys-surface-variant: light-dark(, );\n  --mat-sys-tertiary: light-dark(, );\n  --mat-sys-tertiary-container: light-dark(, );\n  --mat-sys-tertiary-fixed: light-dark(, );\n  --mat-sys-tertiary-fixed-dim: light-dark(, );\n  --mat-sys-neutral-variant20: ;\n  --mat-sys-neutral10: ;\n  --mat-sys-level0:\n    0px 0px 0px 0px ,\n    0px 0px 0px 0px ,\n    0px 0px 0px 0px ;\n  --mat-sys-level1:\n    0px 2px 1px -1px ,\n    0px 1px 1px 0px ,\n    0px 1px 3px 0px ;\n  --mat-sys-level2:\n    0px 3px 3px -2px ,\n    0px 3px 4px 0px ,\n    0px 1px 8px 0px ;\n  --mat-sys-level3:\n    0px 3px 5px -1px ,\n    0px 6px 10px 0px ,\n    0px 1px 18px 0px ;\n  --mat-sys-level4:\n    0px 5px 5px -3px ,\n    0px 8px 10px 1px ,\n    0px 3px 14px 2px ;\n  --mat-sys-level5:\n    0px 7px 8px -4px ,\n    0px 12px 17px 2px ,\n    0px 5px 22px 4px ;\n  --mat-sys-body-large: 400 1rem / 1.5rem Roboto;\n  --mat-sys-body-large-font: Roboto;\n  --mat-sys-body-large-line-height: 1.5rem;\n  --mat-sys-body-large-size: 1rem;\n  --mat-sys-body-large-tracking: 0.031rem;\n  --mat-sys-body-large-weight: 400;\n  --mat-sys-body-medium: 400 0.875rem / 1.25rem Roboto;\n  --mat-sys-body-medium-font: Roboto;\n  --mat-sys-body-medium-line-height: 1.25rem;\n  --mat-sys-body-medium-size: 0.875rem;\n  --mat-sys-body-medium-tracking: 0.016rem;\n  --mat-sys-body-medium-weight: 400;\n  --mat-sys-body-small: 400 0.75rem / 1rem Roboto;\n  --mat-sys-body-small-font: Roboto;\n  --mat-sys-body-small-line-height: 1rem;\n  --mat-sys-body-small-size: 0.75rem;\n  --mat-sys-body-small-tracking: 0.025rem;\n  --mat-sys-body-small-weight: 400;\n  --mat-sys-display-large: 400 3.562rem / 4rem Roboto;\n  --mat-sys-display-large-font: Roboto;\n  --mat-sys-display-large-line-height: 4rem;\n  --mat-sys-display-large-size: 3.562rem;\n  --mat-sys-display-large-tracking: -0.016rem;\n  --mat-sys-display-large-weight: 400;\n  --mat-sys-display-medium: 400 2.812rem / 3.25rem Roboto;\n  --mat-sys-display-medium-font: Roboto;\n  --mat-sys-display-medium-line-height: 3.25rem;\n  --mat-sys-display-medium-size: 2.812rem;\n  --mat-sys-display-medium-tracking: 0;\n  --mat-sys-display-medium-weight: 400;\n  --mat-sys-display-small: 400 2.25rem / 2.75rem Roboto;\n  --mat-sys-display-small-font: Roboto;\n  --mat-sys-display-small-line-height: 2.75rem;\n  --mat-sys-display-small-size: 2.25rem;\n  --mat-sys-display-small-tracking: 0;\n  --mat-sys-display-small-weight: 400;\n  --mat-sys-headline-large: 400 2rem / 2.5rem Roboto;\n  --mat-sys-headline-large-font: Roboto;\n  --mat-sys-headline-large-line-height: 2.5rem;\n  --mat-sys-headline-large-size: 2rem;\n  --mat-sys-headline-large-tracking: 0;\n  --mat-sys-headline-large-weight: 400;\n  --mat-sys-headline-medium: 400 1.75rem / 2.25rem Roboto;\n  --mat-sys-headline-medium-font: Roboto;\n  --mat-sys-headline-medium-line-height: 2.25rem;\n  --mat-sys-headline-medium-size: 1.75rem;\n  --mat-sys-headline-medium-tracking: 0;\n  --mat-sys-headline-medium-weight: 400;\n  --mat-sys-headline-small: 400 1.5rem / 2rem Roboto;\n  --mat-sys-headline-small-font: Roboto;\n  --mat-sys-headline-small-line-height: 2rem;\n  --mat-sys-headline-small-size: 1.5rem;\n  --mat-sys-headline-small-tracking: 0;\n  --mat-sys-headline-small-weight: 400;\n  --mat-sys-label-large: 500 0.875rem / 1.25rem Roboto;\n  --mat-sys-label-large-font: Roboto;\n  --mat-sys-label-large-line-height: 1.25rem;\n  --mat-sys-label-large-size: 0.875rem;\n  --mat-sys-label-large-tracking: 0.006rem;\n  --mat-sys-label-large-weight: 500;\n  --mat-sys-label-large-weight-prominent: 700;\n  --mat-sys-label-medium: 500 0.75rem / 1rem Roboto;\n  --mat-sys-label-medium-font: Roboto;\n  --mat-sys-label-medium-line-height: 1rem;\n  --mat-sys-label-medium-size: 0.75rem;\n  --mat-sys-label-medium-tracking: 0.031rem;\n  --mat-sys-label-medium-weight: 500;\n  --mat-sys-label-medium-weight-prominent: 700;\n  --mat-sys-label-small: 500 0.688rem / 1rem Roboto;\n  --mat-sys-label-small-font: Roboto;\n  --mat-sys-label-small-line-height: 1rem;\n  --mat-sys-label-small-size: 0.688rem;\n  --mat-sys-label-small-tracking: 0.031rem;\n  --mat-sys-label-small-weight: 500;\n  --mat-sys-title-large: 400 1.375rem / 1.75rem Roboto;\n  --mat-sys-title-large-font: Roboto;\n  --mat-sys-title-large-line-height: 1.75rem;\n  --mat-sys-title-large-size: 1.375rem;\n  --mat-sys-title-large-tracking: 0;\n  --mat-sys-title-large-weight: 400;\n  --mat-sys-title-medium: 500 1rem / 1.5rem Roboto;\n  --mat-sys-title-medium-font: Roboto;\n  --mat-sys-title-medium-line-height: 1.5rem;\n  --mat-sys-title-medium-size: 1rem;\n  --mat-sys-title-medium-tracking: 0.009rem;\n  --mat-sys-title-medium-weight: 500;\n  --mat-sys-title-small: 500 0.875rem / 1.25rem Roboto;\n  --mat-sys-title-small-font: Roboto;\n  --mat-sys-title-small-line-height: 1.25rem;\n  --mat-sys-title-small-size: 0.875rem;\n  --mat-sys-title-small-tracking: 0.006rem;\n  --mat-sys-title-small-weight: 500;\n  --mat-sys-corner-extra-large: 28px;\n  --mat-sys-corner-extra-large-top: 28px 28px 0 0;\n  --mat-sys-corner-extra-small: 4px;\n  --mat-sys-corner-extra-small-top: 4px 4px 0 0;\n  --mat-sys-corner-full: 9999px;\n  --mat-sys-corner-large: 16px;\n  --mat-sys-corner-large-end: 0 16px 16px 0;\n  --mat-sys-corner-large-start: 16px 0 0 16px;\n  --mat-sys-corner-large-top: 16px 16px 0 0;\n  --mat-sys-corner-medium: 12px;\n  --mat-sys-corner-none: 0;\n  --mat-sys-corner-small: 8px;\n  --mat-sys-dragged-state-layer-opacity: 0.16;\n  --mat-sys-focus-state-layer-opacity: 0.12;\n  --mat-sys-hover-state-layer-opacity: 0.08;\n  --mat-sys-pressed-state-layer-opacity: 0.12;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  font-family:\n    Roboto,\n    "Helvetica Neue",\n    sans-serif;\n  color: #ffffff;\n  font: var(--mat-sys-body-medium);\n  color-scheme: dark;\n}\nbody {\n  background-image: url("./media/bg.png");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  min-height: 100vh;\n}\n.skills {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 2rem 1rem;\n  color: #00bcd4;\n}\n.skills__grid {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 50px;\n}\n.skills__grid__card {\n  width: 100px;\n  height: 100px;\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.2);\n  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  transition: 0.5s;\n}\n.skills__grid__card:hover {\n  transform: scale(1.5);\n  transition: 0.5s;\n}\n.skills__grid__card__icon {\n  width: 30px;\n  height: 30px;\n  margin: 10px;\n  color: white;\n}\n.skills__grid__card__progress {\n  width: 50%;\n  height: 20px;\n  background-color: rgba(0, 0, 0, 0.4);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.skills__grid__card__progress__fill {\n  height: 100%;\n  background-color: green;\n  width: 0%;\n  transition: width 0.3s ease;\n}\n/*# sourceMappingURL=skills.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkillsComponent, { className: "SkillsComponent", filePath: "src/app/skills/skills.component.ts", lineNumber: 61 });
})();
export {
  SkillsComponent
};
//# sourceMappingURL=chunk-P4RK4C3X.js.map
