import { NgModule } from '@angular/core';

import { StacheWindowRef } from './window-ref';
import { StacheConfigService } from './config.service';
import { StacheRouteService } from './route.service';
import { STACHE_JSON_DATA_PROVIDERS } from './json-data.service';
import { STACHE_ROUTE_METADATA_PROVIDERS } from './route-metadata.service';

@NgModule({
  providers: [
    StacheConfigService,
    StacheRouteService,
    StacheWindowRef,
    STACHE_JSON_DATA_PROVIDERS,
    STACHE_ROUTE_METADATA_PROVIDERS
  ]
})
export class StacheSharedModule { }
