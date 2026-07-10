import type { SacramentMeeting } from "./types";

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: "2026-06-28",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Brother Jones",
    openingHymn: { number: 2, title: "The Spirit of God" },
    openingPrayer: "Sister Williams",
    wardBusiness: [{ description: "Sustaining of new Primary president" }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "As Now We Take the Sacrament" },
    speakers: [
      { name: "Sister Brown", topic: "Faith in Jesus Christ", type: "speaker" },
      { name: "Youth Choir", topic: "", type: "musical-number" },
    ],
    closingHymn: { number: 31, title: "O God, Our Help in Ages Past" },
    closingPrayer: "Brother Davis",
    announcements: ["Ward temple night: May 10"],
  },
  {
    id: 2,
    date: "2026-07-05",
    meetingType: "regular",
    presiding: "Bishop John Smith",
    conducting: "Brother David Lee",
    announcements: ["Mother's Day activity after church."],
    openingHymn: {
      number: 19,
      title: "We Thank Thee, O God, for a Prophet",
    },
    openingPrayer: "Brother Chris Taylor",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 174,
      title: "While of These Emblems We Partake",
    },
    speakers: [
      {
        name: "Sister Rachel Green",
        topic: "Charity",
        type: "speaker",
      },
      {
        name: "Brother Daniel Kim",
        topic: "Serving Others",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 223,
      title: "Have I Done Any Good?",
    },
    closingPrayer: "Brother Luke Anderson",
  },

  {
    id: 3,
    date: "2026-07-12",
    meetingType: "stake",
    presiding: "Stake President Thomas Clark",
    conducting: "Counselor Brian Hall",
    announcements: [],
    openingHymn: {
      number: 3,
      title: "Now Let Us Rejoice",
    },
    openingPrayer: "Brother Samuel White",
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 175,
      title: "O God, the Eternal Father",
    },
    speakers: [],
    closingHymn: {
      number: 84,
      title: "Faith of Our Fathers",
    },
    closingPrayer: "Brother Joseph Carter",
  },

  {
    id: 4,
    date: "2026-07-19",
    meetingType: "regular",
    presiding: "Bishop John Smith",
    conducting: "Brother David Lee",
    announcements: ["Ward picnic next Saturday."],
    openingHymn: {
      number: 100,
      title: "Nearer, My God, to Thee",
    },
    openingPrayer: "Sister Grace Miller",
    wardBusiness: [
      {
        description: "Sustain new Primary teachers.",
      },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 194,
      title: "There Is a Green Hill Far Away",
    },
    speakers: [
      {
        name: "Brother Peter Evans",
        topic: "Hope",
        type: "speaker",
      },
      {
        name: "Young Women Choir",
        topic: "I Am a Child of God",
        type: "musical-number",
      },
    ],
    closingHymn: {
      number: 241,
      title: "Count Your Blessings",
    },
    closingPrayer: "Brother Nathan Scott",
  },

  {
    id: 5,
    date: "2026-07-26",
    meetingType: "general",
    presiding: "General Conference Broadcast",
    conducting: "Conference Presidency",
    announcements: [],
    openingHymn: {
      number: 1,
      title: "The Morning Breaks",
    },
    openingPrayer: "Opening Prayer",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 170,
      title: "God, Our Father, Hear Us Pray",
    },
    speakers: [],
    closingHymn: {
      number: 304,
      title: "Teach Me to Walk in the Light",
    },
    closingPrayer: "Closing Prayer",
  },
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter((m) => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find((m) => m.id === id) ?? null;
}

export function getMeetingByDate(date: string): SacramentMeeting | undefined {
  return meetings.find((meeting) => meeting.date === date);
}
