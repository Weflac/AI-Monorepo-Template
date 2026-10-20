import { describe, expect, it } from 'vitest';
import { camelize, escapeHtml, formatDate, isEmail, unwrap } from '../index';

describe('@repo/utils', () => {
  it('formatDate returns YYYY-MM-DD', () => {
    expect(formatDate(new Date(2026, 9, 20))).toBe('2026-10-20');
  });

  it('isEmail validates', () => {
    expect(isEmail('a.b+c@example.com')).toBe(true);
    expect(isEmail('bad@@example')).toBe(false);
  });

  it('escapeHtml escapes special chars', () => {
    expect(escapeHtml('<img src=x onerror="alert(1)">')).toBe(
      '&lt;img src=x onerror=&quot;alert(1)&quot;&gt;',
    );
  });

  it('camelize converts kebab-case', () => {
    expect(camelize('foo-bar-baz')).toBe('fooBarBaz');
  });

  it('unwrap throws on non-zero code', () => {
    expect(unwrap({ code: 0, message: 'ok', data: 42 })).toBe(42);
    expect(() => unwrap({ code: 1, message: 'boom', data: null })).toThrow('boom');
  });
});
