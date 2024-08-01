import { NOW, column, defineDb, defineTable } from "astro:db";

const Guestbook = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    content: column.text(),
    author: column.text(),
    url: column.text({ optional: true }),
    timestamp: column.date({ default: NOW }),
    theme: column.number(),
  },
});

export default defineDb({
  tables: { Guestbook },
});
