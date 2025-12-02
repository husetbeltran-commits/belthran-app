export const isYouTubeEmbedUrl = (url?: string): boolean =>
  typeof url === 'string' && url.includes('youtube.com/embed');
