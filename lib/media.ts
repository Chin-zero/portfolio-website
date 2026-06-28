export function videoUrl(path: string) {
  if (!path || path === "#" || /^https?:\/\//.test(path)) return path;
  return path.startsWith("/") ? path : `/${path}`;
}
