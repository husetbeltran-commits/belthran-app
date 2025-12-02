export const isYouTubeUrl = (url?: string): boolean =>
  typeof url === 'string' && url.includes('youtube.com/embed');

export const buildYouTubeEmbedSrc = (
  url?: string,
  { autoplay = false }: { autoplay?: boolean } = {}
): string | undefined => {
  if (!url || !isYouTubeUrl(url)) return url;

  try {
    const parsed = new URL(url);
    parsed.searchParams.set('playsinline', '1');
    parsed.searchParams.set('autoplay', autoplay ? '1' : '0');
    return parsed.toString();
  } catch (_error) {
    return url;
  }
};
