export function lerp (a: number, b: number, u: number) {
  if (a <= b) {
    return a + (b - a) * u
  } else {
    return b + (a - b) * (1 - u)
  }
}

export function choice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

/**
 * Gets the percentage position in [a;b] of number v
 */
export function unlerpUnclamped (a: number, b: number, v: number) {
  return (v - a) / (b - a)
}
