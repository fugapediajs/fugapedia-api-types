export * from './article';

export const APIVersion = '1';

export const Routes = {
  /**
   * GET: `/article`
   */
  article() {
    return '/article' as const;
  },
};

export const RouteBases = {
  api: 'https://fugapedia.xyz/api',
  images: 'https://fugapedia.xyz/images'
};
Object.freeze(RouteBases);
