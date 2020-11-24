const replaceText = (text) =>
  text
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&middledot;/gi, '·')
    .replace(/&middot;/gi, '·')
    .replace(/&quot;/gi, '"')

export { replaceText }
