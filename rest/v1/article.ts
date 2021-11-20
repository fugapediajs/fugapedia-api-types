import { BaseQuery, BaseResponse } from '../../global/v1';
import { APIArticleResponseType } from '../../payloads/v1/article';

export interface RESTGetAPIArticleQuery extends BaseQuery {
  /**
   * ID of an article
   */
  article: string

  /**
   * Max symbols of article content to return
   */
  limit?: number

  /**
   * Type of article content to return
   */
  type: APIArticleResponseType
}

export interface RESTGetAPIArticleResponse extends BaseResponse {
  article: string
  article_content: string
}