export interface ApiEnvelope<T> {
  code: number;
  message: string;
  data: T;
}

/** 解析后端统一响应包裹结构，code !== 0 时抛错。 */
export function unwrap<T>(envelope: ApiEnvelope<T>): T {
  if (envelope.code !== 0) {
    throw new Error(envelope.message || `API error: code=${envelope.code}`);
  }
  return envelope.data;
}

/** Promise 版延时。 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
