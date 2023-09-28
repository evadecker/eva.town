import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

import * as styles from "./publishDates.css";

interface PublishDatesProps {
  datePublished: string;
  dateModified: string;
}

export const PublishDates = ({
  datePublished,
  dateModified,
}: PublishDatesProps) => {
  dayjs.extend(utc);
  dayjs.extend(timezone); // Support 'z' to display time zone
  dayjs.extend(localizedFormat); // Support 'LLLL' to display full date
  dayjs.extend(advancedFormat); // Support 'z' to display time zone
  dayjs.extend(relativeTime); // Support .fromNow()

  return (
    <>
      {datePublished && (
        <div className={styles.publishDates}>
          <div>
            Published{" "}
            <time
              dateTime={datePublished}
              title={dayjs(datePublished)
                .tz("America/New_York")
                .format("LLLL z")}
              itemProp="datePublished"
            >
              {dayjs(datePublished).fromNow()}
            </time>
          </div>
          {dateModified && (
            <div>
              Last tended{" "}
              <time
                dateTime={dateModified}
                title={dayjs(dateModified)
                  .tz("America/New_York")
                  .format("LLLL z")}
                itemProp="dateModified"
              >
                {dayjs(dateModified).fromNow()}
              </time>
            </div>
          )}
        </div>
      )}
    </>
  );
};
