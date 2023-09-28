import { Icon } from "@components";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

import * as styles from "./footer.css";

dayjs.extend(utc);
dayjs.extend(timezone); // Support 'z' to display timezone
dayjs.extend(localizedFormat); // Support 'LLLL' to display full date
dayjs.extend(advancedFormat); // Support 'z' to display timezone
dayjs.extend(relativeTime); // Support .fromNow()

interface LastTendedProps {
  dateModified: Date | null;
}

export const LastTended = ({ dateModified }: LastTendedProps) => {
  let formattedTimestamp: string;
  let relativeTimeInWords: string;

  if (dateModified === null) {
    formattedTimestamp = "";
    relativeTimeInWords = "at some point in time";
  } else {
    formattedTimestamp = dayjs(dateModified)
      .tz("America/New_York", true)
      .format("LLLL z");
    relativeTimeInWords = dayjs(dateModified).fromNow();
  }

  return (
    <div className={styles.lastTended}>
      <Icon icon="seedling" size="small" className={styles.lastTendedIcon} />
      <small>
        Last tended{" "}
        <time
          dateTime={dayjs(dateModified).format()}
          title={formattedTimestamp}
        >
          {relativeTimeInWords}
        </time>
      </small>
    </div>
  );
};
