import { Icon } from "@components";
import { format, formatDistanceToNow } from "date-fns";

import * as styles from "./footer.css";

interface LastTendedProps {
  timestamp: number | null;
}

export const LastTended = ({ timestamp }: LastTendedProps) => {
  let formattedTimestamp: string;
  let relativeTimeInWords: string;

  if (timestamp !== null) {
    formattedTimestamp = format(timestamp, "yyyy-MM-dd HH:mm");
    relativeTimeInWords = formatDistanceToNow(timestamp, { addSuffix: true });
  } else {
    formattedTimestamp = "";
    relativeTimeInWords = "at some point in time";
  }

  return (
    <div className={styles.lastTended}>
      <Icon icon="seedling" size="small" className={styles.lastTendedIcon} />
      <small>
        Last tended{" "}
        <time dateTime={formattedTimestamp}>{relativeTimeInWords}</time>
      </small>
    </div>
  );
};
