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

// General reorder with alphabetic or with a given array order
export const arrayReorder = <T extends { [key: string]: string }>(
  array: T[],
  key: keyof T,
  order: string | string[],
) => {
  // sorting function
  let sortFunction: (a: T, b: T) => number;
  if (Array.isArray(order)) {
    // if it is a given exact order
    const getIndex = (element: T) => {
      // check the key related value of the element exists in order array
      const index = order.indexOf(element[key]);
      // if the value related to the given key does not matter in ordering, pushing it to the end
      return index === -1 ? Infinity : index;
    };
    // sorting based on an array of texts
    sortFunction = (a: T, b: T) => getIndex(a) - getIndex(b);
  } else {
    // direction change
    const direction = order === 'desc' ? -1 : 1;
    // simple alphabetic order
    sortFunction = (a: T, b: T) =>
      direction *
      a[key].localeCompare(b[key], undefined, {
        sensitivity: 'accent',
      });
  }
  // return the sorted array
  return array.sort(sortFunction);
};
