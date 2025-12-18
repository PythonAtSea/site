interface Props {
  commitTime: string;
}

function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffWeeks = Math.floor(diffDays / 7);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  if (diffSeconds < 60) return "just now";
  if (diffMinutes < 60)
    return `about ${diffMinutes} minute${diffMinutes === 1 ? "" : "s"} ago`;
  if (diffHours < 24)
    return `about ${diffHours} hour${diffHours === 1 ? "" : "s"} ago`;
  if (diffDays < 7)
    return `about ${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
  if (diffWeeks < 5)
    return `about ${diffWeeks} week${diffWeeks === 1 ? "" : "s"} ago`;
  if (diffMonths < 12)
    return `about ${diffMonths} month${diffMonths === 1 ? "" : "s"} ago`;
  return `about ${diffYears} year${diffYears === 1 ? "" : "s"} ago`;
}

export default function RelativeTime({ commitTime }: Props) {
  const date = new Date(commitTime);
  const formattedDate = date.toLocaleString(undefined, {
    dateStyle: "full",
    timeStyle: "short",
  });

  return <span title={formattedDate}>{getRelativeTime(commitTime)}</span>;
}
