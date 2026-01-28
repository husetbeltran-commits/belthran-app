export const HIDDEN_TOOL_TITLES = new Set(['Tala välsignelser', 'Slumpa en vers']);

export const isToolHidden = (title: string) => HIDDEN_TOOL_TITLES.has(title);
