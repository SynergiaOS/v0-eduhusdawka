/**
 * Checks if a form submission is likely spam based on submission time
 * Most bots submit forms instantly, while humans take time to fill them out
 */
export function isLikelySpam(formStartTime: number): boolean {
  const submissionTime = Date.now()
  const timeTakenToFill = submissionTime - formStartTime

  // If form was filled in less than 3 seconds, it's likely a bot
  return timeTakenToFill < 3000
}
