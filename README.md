# TD Ameritrade Client for Nodejs

## Overview

A client that knows how to call the td-ameritrade Restful API written for nodejs and browser.

## Features

1. Get access token and refresh token
2. Get user account information

## Install

```bash
$ yarn add tdaclient 
```

## Development Guide
### Setup if you want to do development on this package

#### This setup is only good for testing the package. If you want to use it for your own application you will need to figure out how to pass to this client the required code, access token or refresh token. I will eventually add the documentation for using this package in your own application but for now you'll need to follow the instructions below.

1. Run this command and open the output URL from the console.
    ```shell
    node generateAuthUrl.js
    ```
    For more info refer to this [page](https://developer.tdameritrade.com/content/getting-started)
2. Login and click allow.
3. Go to this [page](https://developer.tdameritrade.com/authentication/apis/post/token-0) to get the access token and
   refresh token
    1. Fill in the form with the follow values:
        1. grant_type: authorization_code
        2. access_type: offline
        3. code: [the value that you receive from following step 1. Make sure it is decoded]
        4. client_id: [Your app consumer key]
            1. Note: make sure that this value is not url encoded. You can decode the value that you got from step 1 by
               running this command in the javascript console ```decodeURIComponent("MY_SECRET_CODE")```
        5. redirect_uri: [Your app redirect uri]
4. Create a file in this directory (at the same level as this README.md) and name it ```credentials.json```
5. Paste the response from that page to the file create in step 3. Also add the client_id and redirect_uri attributes at the end.
    ```json
    {
        "access_token": "example-token",
        "refresh_token": "example-refresh-token",
        "scope": "PlaceTrades AccountAccess MoveMoney",
        "expires_in": 1800, // 30 minutes
        "refresh_token_expires_in": 7776000, // 90 days
        "token_type": "Bearer",
        "client_id": "example-client-id",
        "redirect_uri": "example-redirect-uri"
    }
    ```
6. Now you can run the command ```yarn test``` and it will run the integration tests
7. The test will keep updating the access_token so you can keep running the tests. If you happen to not run the tests
   within 90 days, then you will have to manually login and get a new refesh_token and repeat step 4.

## How to use

Refer to this [page](https://developer.tdameritrade.com/account-access/apis) for more info on apis

## License

tdaclient is [MIT licensed](./LICENSE).
