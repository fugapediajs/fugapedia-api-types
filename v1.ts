export const APIVersion = '1';

export interface BaseResponse {
  result: 'OK' | 'Error'
  message: string
}

export interface Article {
  article: string
  article_content: string
}

export const enum ArticleResponseType {
  Text = '1',
  WikiMarkup = '2',
}

export const Routes = {
  /**
   * GET: `/article`
   */
  article() {
    return '/article' as const;
  },
}
export const RouteBases = {
  api: 'https://fugapedia.xyz/api',
  images: 'https://fugapedia.xyz/images'
}

Object.freeze(RouteBases);
