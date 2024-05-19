import { db, Guestbook } from "astro:db";

export default async function seed() {
  await db.insert(Guestbook).values([
    {
      author: "dril",
      content: "sorry boys.. im goin A.W.O.L.. !!!  Another Weekend On-Line",
      url: "https://twitter.com/dril/status/531211135606091777",
      timestamp: new Date("2014-11-08T12:00:00Z"),
      theme: 1,
    },
    {
      author: "gerald ford (she/her)",
      content: "what! what. hello, this site is so cute.",
      timestamp: new Date("2021-01-01T12:01:00Z"),
      theme: 2,
    },
    {
      author: "boomy",
      content: "I love you 🩷",
      timestamp: new Date("2023-03-15T12:01:00Z"),
      theme: 3,
    },
    {
      author: "140 characters",
      content:
        "12345678901234567890123456781234567890123456789012345678123456789012345678901234567812345678901234567890123456781234567890123456789012345678",
      timestamp: new Date("2024-04-12T12:01:00Z"),
      theme: 4,
    },
    {
      author: "text emotes with space",
      content: `
           ʕ•́ᴥ•̀ʔっ♡`,
      theme: 5,
    },
    {
      author: "With URL",
      content: "somethingnewtotellyou friend ok let's try this to go",
      url: "https://example.com",
      theme: 6,
    },
  ]);
}
