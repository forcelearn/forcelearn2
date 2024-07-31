export const generateTocItems = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headings = doc.querySelectorAll('h2, h3, h4');
  
    return Array.from(headings).map(heading => ({
      id: heading.id,
      label: heading.innerText,
      tagName: heading.tagName,
    }));
  };
  