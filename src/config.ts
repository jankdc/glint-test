export function getConfig(item: string): string | undefined {
  return process.env[item];
}
