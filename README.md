# @valbo/not-found-middleware

Express middleware that throws a not found error.

![npm (scoped)](https://img.shields.io/npm/v/@valbo/not-found-middleware)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![Build Status](https://img.shields.io/github/workflow/status/valverdealbo/not-found-middleware/CI)
[![Coverage Status](https://coveralls.io/repos/github/valverdealbo/not-found-middleware/badge.svg?branch=main)](https://coveralls.io/github/valverdealbo/not-found-middleware?branch=main)
[![Known Vulnerabilities](https://snyk.io/test/github/valverdealbo/not-found-middleware/badge.svg?targetFile=package.json)](https://snyk.io/test/github/valverdealbo/not-found-middleware?targetFile=package.json)

## Install

```bash
npm install @valbo/not-found-middleware
```
## Usage

This middleware sends a not found error via next() down the middleware chain. It is meant to be used as the last non-error middleware in the chain, to capture any url that has no router or middleware associated. It will include the request method and route in the message.

After this middleware there should be an error handler middleware that captures the error, like [@valbo/error-handler-middleware](https://www.npmjs.com/package/@valbo/error-handler-middleware).

```typescript
import { notFoundMiddleware } from '@valbo/not-found-middleware';
import { errorHandlerMiddleware }  from '@valbo/error-handler-middleware';

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
```

If a request is made to a route with no router or middleware associated, express would return:

```JSON
{ 
  "error": { 
    "status": 404,
    "name": "NotFoundError",
    "message": "POST /data not found"
  }
}
```