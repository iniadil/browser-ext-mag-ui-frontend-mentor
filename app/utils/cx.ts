/**
 * Utility function to conditionally join classnames together
 *
 * @param {...(string | boolean | undefined | null | Record<string, boolean | undefined | null>)[]} classes
 * @returns {string} A string of joined class names
 *
 * @example
 * cx('btn', true && 'primary', false && 'secondary') // => 'btn primary'
 * cx('btn', { primary: true, secondary: false }) // => 'btn primary'
 */
export function cx(
  ...classes: (
    | string
    | boolean
    | undefined
    | null
    | Record<string, boolean | undefined | null>
  )[]
): string {
  return classes
    .flatMap((cls) => {
      if (!cls) return [];

      if (typeof cls === "string") return cls;

      if (typeof cls === "object") {
        return Object.entries(cls)
          .filter(([_, value]) => Boolean(value))
          .map(([key]) => key);
      }

      return [];
    })
    .filter(Boolean)
    .join(" ");
}
