const empty = "undefined";

/**
 * Finds the current global object.
 */
export function get(): any {
  /* istanbul ignore next */
  return typeof window !== empty
    ? window
    : typeof global !== empty
      ? global
      : typeof self !== empty ? self : (0, eval)("this");
}
