import routes from "../connection/routes.config";
import {post, Request, ResponseType} from "../connection/connect";

const OAUTH2_TOKEN = `${routes.hostname}${routes.endpoints.oauth2Token}`;

export enum GrantType {
  AUTHORIZATION_CODE = "authorization_code",
  REFRESH_TOKEN = "refresh_token"
}

export enum AccessType {
  OFFLINE = "offline"
}

export class OAuthData {
  grant_type: GrantType;
  refresh_token: string;
  access_type: AccessType = AccessType.OFFLINE;
  code: string;
  client_id: string;
  redirect_uri: string;
}

export async function oauth(oAuthData: OAuthData) {
  const response = await post({
    url: OAUTH2_TOKEN,
    data: oAuthData,
    responseType: ResponseType.URL_FORM_ENCODED
  } as Request);
  return response.data;
}
