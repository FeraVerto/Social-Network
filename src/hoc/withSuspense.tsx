import Preloader from '../components/common/Preloader/Preloader';
import React, { Suspense } from 'react';

export const withSuspense = (Component: any) => {
  return (props: any) => {
    return (
      <Suspense fallback={<Preloader />}>
        <Component {...props} />
      </Suspense>
    );
  };
};
