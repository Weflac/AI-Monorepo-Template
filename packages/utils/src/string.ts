const EMAIL_RE = /^[\w.+-]+@[\w-]+(?:\.[\w-]+)+$/;

/** 简单的邮箱格式校验。 */
export function isEmail(value: string): boolean {
  return EMAIL_RE.test(value);
}

/** 转义 HTML 特殊字符，防止 XSS。 */
export function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

/** kebab-case -> camelCase。 */
export function camelize(value: string): string {
  return value.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
}
