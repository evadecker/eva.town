import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

interface RelativeDateProps {
  date: Date | null;
}

export const RelativeDate = ({ date }: RelativeDateProps) => {
  dayjs.extend(utc);
  dayjs.extend(timezone); // Support 'z' to display timezone
  dayjs.extend(localizedFormat); // Support 'LLLL' to display full date
  dayjs.extend(advancedFormat); // Support 'z' to display timezone
  dayjs.extend(relativeTime); // Support .fromNow()

  let formattedTimestamp: string;
  let displayTime: string;

  if (date === null) {
    formattedTimestamp = "";
    displayTime = "at some point";
  } else {
    formattedTimestamp = dayjs(date).format("LLLL z");

    if (dayjs().diff(dayjs(date), "day") < 2) {
      // If less than 2 days, display relative date, e.g. "a day ago", "6 hours ago"
      displayTime = dayjs(date).fromNow();
    } else {
      if (dayjs().isSame(date, "year")) {
        // If current year, display month and day, e.g. "Jan 15"
        displayTime = dayjs(date).format("MMM D");
      } else {
        // Otherwise display full date, e.g. "Jan 15, 2021"
        displayTime = dayjs(date).format("ll");
      }
    }
  }

  return (
    <time dateTime={dayjs(date).format()} title={formattedTimestamp}>
      {displayTime}
    </time>
  );
};
