export function getGreetings(hour: number): string {
  if (hour < 0 || hour >= 24) throw new Error('Invalid hour. Must be between 0 and 23');

  if (hour >= 5 && hour < 12) {
    return 'Good morning';
  }

  if (hour >= 12 && hour < 18) {
    return 'Good afternoon';
  }

  if (hour >= 18 && hour < 24) {
    return 'Good evening';
  }

  return 'Good night';
}
