export const HIDDEN_TOOL_TITLES = new Set(['Tala välsignelser']);

export const isToolHidden = (title: string) => HIDDEN_TOOL_TITLES.has(title);
