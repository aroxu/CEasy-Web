const replaceText = (text: string) =>
  text
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&middledot;/gi, '·')
    .replace(/&middot;/gi, '·')
    .replace(/&quot;/gi, '"')

export { replaceText }
