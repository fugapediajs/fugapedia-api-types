export interface APIArticle {
  article: string
  article_content: string
}

export enum APIArticleResponseType {
  Text = 1,
  WikiMarkup,
}
