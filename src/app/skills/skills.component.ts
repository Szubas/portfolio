import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
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
} from '@ng-icons/svgl';
import {
  matfKubernetesColored,
  matfDatabaseColored,
  matfDjangoColored,
  matfGitColored,
  matfPhpColored,
  matfReactTsColored,
} from '@ng-icons/material-file-icons/colored';
import { Skill } from './skills.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [NgIcon, CommonModule],
  providers: [
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
    }),
  ],
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'svglC', progress: 20 },
    { name: 'svglCPlusplus', progress: 20 },
    { name: 'svglCsharp', progress: 60 },
    { name: 'matfKubernetesColored', progress: 20 },
    { name: 'svglAngular', progress: 60 },
    { name: 'matfDatabaseColored', progress: 70 },
    { name: 'matfDjangoColored', progress: 10 },
    { name: 'matfGitColored', progress: 20 },
    { name: 'svglHtml5', progress: 70 },
    { name: 'svglCss', progress: 60 },
    { name: 'svglJava', progress: 50 },
    { name: 'svglJavascript', progress: 40 },
    { name: 'matfPhpColored', progress: 10 },
    { name: 'svglPython', progress: 70 },
    { name: 'matfReactTsColored', progress: 40 },
    { name: 'svglTypescript', progress: 40 },
    { name: 'svglDocker', progress: 30 },
    { name: 'svglFastapi', progress: 80 },
    { name: 'svglLinux', progress: 40 },
  ];
}
