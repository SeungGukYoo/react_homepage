export function Scroll(ref) {
  const sectionArr = ref?.current.querySelectorAll('.scrollContent');

  const result = [...sectionArr].map((section) => section.offsetTop);
  return result;
}

export function getSizeArray() {}
