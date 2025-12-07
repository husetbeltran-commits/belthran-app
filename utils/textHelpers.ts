export function stripMarkdown(input: string): string {
  if (!input) return '';

  return input
    // Remove headings like #, ##, ### at line start
    .replace(/^#{1,6}\s+/gm, '')
    // Remove bold/italic/underscore/backticks markers
    .replace(/[*_`]+/g, '')
    // Remove blockquotes and list markers
    .replace(/^>\s*/gm, '')
    .replace(/^[-+*]\s+/gm, '')
    // Remove markdown links/images but keep text
    .replace(/!?\[(.*?)\]\([^)]*\)/g, '$1')
    // Collapse multiple spaces/newlines
    .replace(/\s+/g, ' ')
    .trim();
}

export function buildTeaser(text: string, maxLength = 150): string {
  const clean = stripMarkdown(text);
  if (clean.length <= maxLength) return clean;
  return `${clean.slice(0, maxLength).trimEnd()}…`;
}

export function stripLeadingH1(markdown: string): string {
  const lines = markdown.split('\n');
  if (lines.length === 0) return markdown;

  const firstContentIndex = lines.findIndex(line => line.trim() !== '');
  if (firstContentIndex === -1) return markdown;

  if (/^\s*#(?!#)\s*/.test(lines[firstContentIndex])) {
    lines.splice(firstContentIndex, 1);
    while (lines.length > firstContentIndex && lines[firstContentIndex].trim() === '') {
      lines.splice(firstContentIndex, 1);
    }
    return lines.join('\n');
  }

  return markdown;
}
