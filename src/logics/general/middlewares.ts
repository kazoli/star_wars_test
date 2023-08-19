// Scroll to element
export const scrollToElement = (
  behavior: 'auto' | 'smooth' = 'auto',
  element: Element | (Window & typeof globalThis) = window,
) => {
  element.scrollTo({
    top: 0,
    left: 0,
    behavior: behavior,
  });
};

// General alphabetic reorder
export const alphabetReorder = <T extends { [key: string]: string }>(
  array: T[],
  key: keyof T,
  ascend = true,
) => {
  // creating a deep copied array to avoid mutating the original array
  const sortedArray = [...array];
  // sorting function
  const sorting = (a: T, b: T) =>
    a[key].localeCompare(b[key], undefined, { sensitivity: 'accent' });
  // reverse the array elements if descending order is required
  return ascend
    ? sortedArray.sort(sorting)
    : sortedArray.sort((a, b) => sorting(b, a));
};
