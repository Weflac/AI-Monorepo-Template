/** 将 Date 格式化为 `YYYY-MM-DD HH:mm:ss`（本地时区）。 */
export function formatDateTime(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ` +
    `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
  );
}

/** 将 Date 格式化为 `YYYY-MM-DD`（本地时区）。 */
export function formatDate(date: Date): string {
  return formatDateTime(date).slice(0, 10);
}
