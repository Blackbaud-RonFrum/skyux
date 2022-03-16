/**
 * NOTICE: DO NOT MODIFY THIS FILE!
 * The contents of this file were automatically generated by
 * the 'ng generate @skyux/i18n:lib-resources-module modules/shared/sky-media' schematic.
 * To update this file, simply rerun the command.
 */

import { NgModule } from '@angular/core';
import {
  getLibStringForLocale,
  SkyAppLocaleInfo,
  SkyI18nModule,
  SkyLibResources,
  SkyLibResourcesProvider,
  SKY_LIB_RESOURCES_PROVIDERS
} from '@skyux/i18n';

const RESOURCES: { [locale: string]: SkyLibResources } = {
  'EN-US': {"skyux_image_do_text":{"message":"Do"},"skyux_image_dont_text":{"message":"Don't"}},
};

export class SkyMediaResourcesProvider implements SkyLibResourcesProvider {
  public getString(localeInfo: SkyAppLocaleInfo, name: string): string {
    return getLibStringForLocale(RESOURCES, localeInfo.locale, name);
  }
}

/**
 * Import into any component library module that needs to use resource strings.
 */
@NgModule({
  exports: [SkyI18nModule],
  providers: [{
    provide: SKY_LIB_RESOURCES_PROVIDERS,
    useClass: SkyMediaResourcesProvider,
    multi: true
  }]
})
export class SkyMediaResourcesModule { }