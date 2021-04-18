/* eslint-disable @typescript-eslint/no-explicit-any */
import { NotFoundError } from '@valbo/http-errors';
import { notFoundMiddleware } from '../src';

const request = { method: 'POST', url: '/login' };
const response = {};
const next = jest.fn();

describe('notFoundMiddleware()', () => {
  test('should next() a not found error', () => {
    next.mockClear();
    notFoundMiddleware(request as any, response as any, next);
    const { status, name, message } = next.mock.calls[0][0];
    expect(status).toBe(404);
    expect(name).toBe(NotFoundError.name);
    expect(message).toEqual(expect.stringContaining(request.method));
    expect(message).toEqual(expect.stringContaining(request.url));
  });
});
