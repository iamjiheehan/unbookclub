export const inrange = (v, min, max) => {
    if (v < min) return min
    if (v > max) return max
    return v
}
