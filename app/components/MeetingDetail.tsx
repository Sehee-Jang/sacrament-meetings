import { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({
  meeting,
}: MeetingDetailProps) {
  return (
    <article className="card space-y-6">

      <section>
        <h2 className="section-title">
          Meeting Information
        </h2>

        <p><strong>Date:</strong> {meeting.date}</p>
        <p><strong>Type:</strong> {meeting.meetingType}</p>
        <p><strong>Presiding:</strong> {meeting.presiding}</p>
        <p><strong>Conducting:</strong> {meeting.conducting}</p>
      </section>

      <section>
        <h2 className="section-title">
          Announcements
        </h2>

        <ul>
          {meeting.announcements?.map((announcement) => (
            <li
              key={announcement}
              className="list-item"
            >
              {announcement}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="section-title">
          Opening
        </h2>

        <p>
          Opening Hymn:
          {` `}
          {meeting.openingHymn.number}
          {" - "}
          {meeting.openingHymn.title}
        </p>

        <p>
          Opening Prayer:
          {` `}
          {meeting.openingPrayer}
        </p>
      </section>

      <section>
        <h2 className="section-title">
          Ward Business
        </h2>

        <ul>
          {meeting.wardBusiness.map((item) => (
            <li
              key={item.description}
              className="list-item"
            >
              {item.description}
            </li>
          ))}
        </ul>

        <p>
          Stake Business:
          {" "}
          {meeting.stakeBusiness ? "Yes" : "No"}
        </p>
      </section>

      <section>
        <h2 className="section-title">
          Sacrament Hymn
        </h2>

        <p>
          {meeting.sacramentHymn.number}
          {" - "}
          {meeting.sacramentHymn.title}
        </p>
      </section>

      <section>
        <h2 className="section-title">
          Speakers & Musical Numbers
        </h2>

        <ul>
          {meeting.speakers.map((speaker) => (
            <li
              key={`${speaker.name}-${speaker.topic}`}
              className="list-item"
            >
              <strong>{speaker.name}</strong>
              {" — "}
              {speaker.topic}
              {" ("}
              {speaker.type}
              {")"}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="section-title">
          Closing
        </h2>

        <p>
          Closing Hymn:
          {" "}
          {meeting.closingHymn.number}
          {" - "}
          {meeting.closingHymn.title}
        </p>

        <p>
          Closing Prayer:
          {" "}
          {meeting.closingPrayer}
        </p>
      </section>

    </article>
  );
}