/** Human remaining time until expiresAt ISO string. */
export function formatExpiresIn(
  expiresAt: string,
): { expired: boolean; label: string; sholtrabel: string } {
  const ms = new Date(expiresAt).getTime() - Date.now();
  if (ms <= 0) {
    return { expired: true, label: "Expired", sholtrabel: "Expired" };
  }

  const minutes = Math.floor(ms / 60_000);
  const hours = Math.floor(ms / 3_600_000);
  const days = Math.floor(ms / 86_400_000);

  if (days >= 1) {
    return {
      expired: false,
      label: days === 1 ? "Valid for 1 more day" : `Valid for ${days} more days`,
      sholtrabel: days === 1 ? "1d" : `${days}d`,
    };
  }
  if (hours >= 1) {
    return {
      expired: false,
      label:
        hours === 1 ? "Valid for 1 more hour" : `Valid for ${hours} more hours`,
      sholtrabel: hours === 1 ? "1h" : `${hours}h`,
    };
  }
  const m = Math.max(1, minutes);
  return {
    expired: false,
    label:
      m === 1 ? "Valid for 1 more minute" : `Valid for ${m} more minutes`,
    sholtrabel: m === 1 ? "1m" : `${m}m`,
  };
}