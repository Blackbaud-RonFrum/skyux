import {
  Component,
  OnInit
} from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';

import {
  SkyThemeService,
  SkyThemeSettings
} from '@skyux/theme';

@Component({
  selector: 'lookup-visual',
  templateUrl: './lookup-visual.component.html'
})
export class LookupVisualComponent implements OnInit {
  public form: FormGroup;

  public people: any[] = [
    { id: 1, name: 'Andy' },
    { id: 2, name: 'Beth' },
    { id: 3, name: 'David' },
    { id: 4, name: 'Frank' },
    { id: 5, name: 'Grace' },
    { id: 6, name: 'Isaac' },
    { id: 7, name: 'John' },
    { id: 9, name: 'Joyce' },
    { id: 10, name: 'Lindsey' },
    { id: 11, name: 'Mitch' },
    { id: 12, name: 'Patty' },
    { id: 13, name: 'Paul' },
    { id: 14, name: 'Quincy' },
    { id: 15, name: 'Sally' },
    { id: 16, name: 'Susan' },
    { id: 17, name: 'Vanessa' },
    { id: 18, name: 'Winston' },
    { id: 19, name: 'Xavier' },
    { id: 20, name: 'Yolanda' },
    { id: 21, name: 'Zack' }
  ];

  public friends: any[] = [
    { id: 16, name: 'Susan' },
    { id: 21, name: 'Zack' }
  ];

  public friends2: any[] = [
    { id: 16, name: 'Susan' },
    { id: 21, name: 'Zack' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private themeSvc: SkyThemeService
  ) { }

  public ngOnInit(): void {
    this.createForm();
  }

  public enableLookup() {
    this.form.controls.friends.enable();
  }

  public disableLookup() {
    this.form.controls.friends.disable();
  }

  public themeSettingsChange(themeSettings: SkyThemeSettings): void {
    this.themeSvc.setTheme(themeSettings);
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      friends: new FormControl(this.friends),
      friends2: new FormControl(this.friends2)
    });
  }
}