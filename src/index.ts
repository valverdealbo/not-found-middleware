// eslint-disable-next-line import/no-unresolved
import { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '@valbo/http-errors';

export function notFoundMiddleware(request: Request, response: Response, next: NextFunction): void {
  next(new NotFoundError(`${request.method} ${request.url} not found`));
}
