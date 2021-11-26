export interface APIArticle {
  article: string
  article_content: string
}

export const enum APIArticleResponseType {
  Text = 1,
  WikiMarkup,
}
