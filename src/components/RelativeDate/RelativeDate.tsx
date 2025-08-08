import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

interface RelativeDateProps extends React.HTMLAttributes<HTMLTimeElement> {
  date: Date | null;
}

export const RelativeDate = ({ date, ...props }: RelativeDateProps) => {
  dayjs.extend(utc);
  dayjs.extend(timezone); // Support 'z' to display timezone
  dayjs.extend(localizedFormat); // Support 'LLLL' to display full date
  dayjs.extend(advancedFormat); // Support 'z' to display timezone
  dayjs.extend(relativeTime); // Support .fromNow()

  let dateTime: string;
  let formattedTimestamp: string;
  let displayTime: string;

  if (date === null) {
    dateTime = "";
    formattedTimestamp = "";
    displayTime = "at some point";
  } else {
    // Set timezone if undefined, keeping local time the same
    const dateObj = dayjs(date);

    // Display date as ISO string, e.g. "2021-01-15T20:00:00-05:00"
    dateTime = dateObj.toISOString();

    // Display date as title tooltip, e.g. "January 15, 2021 8:00 PM"
    formattedTimestamp = dateObj.format("LLL z");

    if (dayjs().diff(dateObj, "day") < 2) {
      // If less than 2 days, display relative date, e.g. "a day ago", "6 hours ago"
      displayTime = dateObj.fromNow();
    } else {
      if (dayjs().isSame(date, "year")) {
        // If current year, display month and day, e.g. "Jan 15"
        displayTime = dateObj.format("MMM D");
      } else {
        // Otherwise display full date, e.g. "Jan 15, 2021"
        displayTime = dateObj.format("ll");
      }
    }
  }

  return (
    <time dateTime={dateTime} title={formattedTimestamp} {...props}>
      {displayTime}
    </time>
  );
};
