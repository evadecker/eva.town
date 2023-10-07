import "./relativeDate.css";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

import { Icon, type IconType } from "../Icon/Icon";

interface RelativeDateProps {
  /**
   * Language to put before the date, e.g. "Published", "Last tended"
   */
  prefix: string;
  date: Date | null;
  icon?: IconType;
}

export const RelativeDate = ({ prefix, date, icon }: RelativeDateProps) => {
  dayjs.extend(utc);
  dayjs.extend(timezone); // Support 'z' to display timezone
  dayjs.extend(localizedFormat); // Support 'LLLL' to display full date
  dayjs.extend(advancedFormat); // Support 'z' to display timezone
  dayjs.extend(relativeTime); // Support .fromNow()

  let formattedTimestamp: string;
  let relativeTimeInWords: string;

  if (date === null) {
    formattedTimestamp = "";
    relativeTimeInWords = "at some point in time";
  } else {
    formattedTimestamp = dayjs(date)
      .tz("America/New_York", true)
      .format("LLLL z");
    relativeTimeInWords = dayjs(date).fromNow();
  }

  return (
    <small className="date">
      {icon && <Icon icon={icon} size="small" />}
      <span>
        {prefix}{" "}
        <time dateTime={dayjs(date).format()} title={formattedTimestamp}>
          {relativeTimeInWords}
        </time>
      </span>
    </small>
  );
};
