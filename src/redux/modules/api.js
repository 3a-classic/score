export function createGETApi (url) {
  return () => ({
    api: {
      url: url
    }
  })
}
