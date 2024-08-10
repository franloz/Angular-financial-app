import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isUrlCorrectGuard: CanActivateFn = (route, state) => {

  const assetType = route.params['assetType'];

  const validAssetTypes = ['crypto','dowjones','filter'];
  const router = inject (Router);

  if (!validAssetTypes.includes(assetType)) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
