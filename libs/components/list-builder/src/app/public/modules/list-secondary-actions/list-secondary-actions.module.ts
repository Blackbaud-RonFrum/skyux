import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  SkyMediaQueryModule
} from '@skyux/core';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyIconModule
} from '@skyux/indicators';

import {
  SkyDropdownModule
} from '@skyux/popovers';

import {
  SkyListBuilderResourcesModule
} from '../shared/list-builder-resources.module';

import {
  SkyListSecondaryActionsComponent
} from './list-secondary-actions.component';

import {
  SkyListSecondaryActionComponent
} from './list-secondary-action.component';

@NgModule({
  declarations: [
    SkyListSecondaryActionsComponent,
    SkyListSecondaryActionComponent
  ],
  imports: [
    CommonModule,
    SkyDropdownModule,
    SkyI18nModule,
    SkyIconModule,
    SkyListBuilderResourcesModule,
    SkyMediaQueryModule
  ],
  exports: [
    SkyListSecondaryActionsComponent,
    SkyListSecondaryActionComponent
  ]
})
export class SkyListSecondaryActionsModule { }
