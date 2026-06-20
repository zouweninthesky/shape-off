export function formatCounterTime({
  time,
  unitNumber = 3,
}: {
  time: number;
  unitNumber?: number;
}) {
  if (unitNumber === 3) {
    return [
      Math.floor((time / (1000 * 60 * 60)) % 24),
      Math.floor((time / (1000 * 60)) % 60),
      Math.floor((time / 1000) % 60),
    ];
  }

  if (unitNumber === 2) {
    return [Math.floor(time / (1000 * 60)), Math.floor((time / 1000) % 60)];
  }
  return [Math.floor(time / 1000)];
}
