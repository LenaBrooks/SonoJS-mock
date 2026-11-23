import { contentList } from "@/lib/generator/content";
import {
  createRng,
  float,
  fullName,
  id,
  imageUrl,
  int,
  isoDate,
  isoDateFuture,
  moneyAmount,
  pick,
  place,
  takeFields,
} from "@/lib/generator/helpers";
import type { GeneratorTopic } from "@/lib/generator/types";
import { Building2, Briefcase, GraduationCap, CalendarDays, FolderKanban, UsersRound } from "lucide-react";

const JOB_TYPES = {
  en: ["Full-time", "Part-time", "Contract", "Internship"] as const,
};
const LEVELS = {
  en: ["Beginner", "Intermediate", "Advanced"] as const,
};
const EVENT_CATEGORIES = {
  en: ["Conference", "Meetup", "Workshop", "Webinar"] as const,
};

export const businessTopics: GeneratorTopic[] = [
  {
    id: "companies",
    category: "business",
    icon: Building2,
    fields: [
      { id: "name", default: true },
      { id: "logo", default: true },
      { id: "industry", default: true },
      { id: "location", default: true },
      { id: "id", default: false },
      { id: "website", default: false },
      { id: "employees", default: false },
      { id: "country", default: false },
      { id: "founded", default: false },
    ],
    generateOne(ctx, fields) {
      const rng = createRng(ctx.seed, ctx.index);
      const name = pick(rng, ctx.pack.companies);
      const loc = place(ctx.pack, rng);
      const record: Record<string, unknown> = {
        id: id("co", ctx.index, rng),
        name,
        logo: imageUrl(`co-${ctx.seed}-${ctx.index}`, 200, 200),
        industry: pick(rng, ctx.pack.industries),
        location: `${loc.city}, ${ctx.pack.countryName}`,
        website:
          `https://example.com/c/${ctx.index + 1}`,
        employees: int(rng, 12, 25000),
        country: ctx.pack.countryName,
        founded: int(rng, 1985, 2022),
      };
      return takeFields(record, fields);
    },
  },
  {
    id: "jobs",
    category: "business",
    icon: Briefcase,
    fields: [
      { id: "title", default: true },
      { id: "company", default: true },
      { id: "location", default: true },
      { id: "type", default: true },
      { id: "id", default: false },
      { id: "salary", default: false },
      { id: "experience", default: false },
      { id: "remote", default: false },
      { id: "country", default: false },
      { id: "postedAt", default: false },
    ],
    generateOne(ctx, fields) {
      const rng = createRng(ctx.seed, ctx.index);
      const loc = place(ctx.pack, rng);
      const record: Record<string, unknown> = {
        id: id("job", ctx.index, rng),
        title: pick(rng, contentList("jobTitles")),
        company: pick(rng, ctx.pack.companies),
        location: `${loc.city}, ${loc.region}`,
        type: pick(rng, JOB_TYPES["en"]),
        salary: moneyAmount(rng, "en", {
          en: [40_000, 160_000],
        }),
        experience:
          `${int(rng, 1, 8)}+ years`,
        remote: rng() > 0.45,
        country: ctx.pack.countryName,
        postedAt: isoDate(rng, 40),
      };
      return takeFields(record, fields);
    },
  },
  {
    id: "courses",
    category: "business",
    icon: GraduationCap,
    fields: [
      { id: "title", default: true },
      { id: "instructor", default: true },
      { id: "image", default: true },
      { id: "level", default: true },
      { id: "id", default: false },
      { id: "duration", default: false },
      { id: "lessons", default: false },
      { id: "rating", default: false },
      { id: "students", default: false },
      { id: "price", default: false },
    ],
    generateOne(ctx, fields) {
      const rng = createRng(ctx.seed, ctx.index);
      const titles =
        [
              "React Fundamentals",
              "API Design Essentials",
              "Accessible UI Patterns",
              "Product Analytics",
              "TypeScript in Practice",
            ];
      const record: Record<string, unknown> = {
        id: id("crs", ctx.index, rng),
        title: pick(rng, titles),
        instructor: fullName(ctx.pack, rng),
        image: imageUrl(`crs-${ctx.seed}-${ctx.index}`),
        level: pick(rng, LEVELS["en"]),
        duration: `${int(rng, 3, 24)}h`,
        lessons: int(rng, 8, 48),
        rating: float(rng, 3.8, 5, 1),
        students: int(rng, 120, 18000),
        price: moneyAmount(rng, "en", {
          en: [19, 199],
        }),
      };
      return takeFields(record, fields);
    },
  },
  {
    id: "events",
    category: "business",
    icon: CalendarDays,
    fields: [
      { id: "title", default: true },
      { id: "date", default: true },
      { id: "location", default: true },
      { id: "image", default: true },
      { id: "id", default: false },
      { id: "description", default: false },
      { id: "category", default: false },
      { id: "capacity", default: false },
      { id: "price", default: false },
      { id: "country", default: false },
    ],
    generateOne(ctx, fields) {
      const rng = createRng(ctx.seed, ctx.index);
      const loc = place(ctx.pack, rng);
      const titles =
        [
              "Frontend Meetup",
              "Design Systems Day",
              "API Workshop",
              "Startup Showcase",
            ];
      const title = pick(rng, titles);
      const record: Record<string, unknown> = {
        id: id("evt", ctx.index, rng),
        title,
        date: isoDateFuture(rng, 120),
        location: `${loc.city}, ${ctx.pack.countryName}`,
        image: imageUrl(`evt-${ctx.seed}-${ctx.index}`),
        description:
          `${title} â€” join peers for talks and workshops.`,
        category: pick(rng, EVENT_CATEGORIES["en"]),
        capacity: int(rng, 40, 800),
        price: moneyAmount(rng, "en", {
          en: [0, 120],
        }),
        country: ctx.pack.countryName,
      };
      return takeFields(record, fields);
    },
  },
  {
    id: "projects",
    category: "business",
    icon: FolderKanban,
    fields: [
      { id: "name", default: true },
      { id: "status", default: true },
      { id: "owner", default: true },
      { id: "progress", default: true },
      { id: "id", default: false },
      { id: "description", default: false },
      { id: "teamSize", default: false },
      { id: "budget", default: false },
      { id: "startDate", default: false },
      { id: "dueDate", default: false },
      { id: "company", default: false },
    ],
    generateOne(ctx, fields) {
      const rng = createRng(ctx.seed, ctx.index);
      const names =
        [
              "Dashboard redesign",
              "API migration",
              "Mobile launch",
              "Notification system",
              "Customer portal",
            ];
      const statuses =
        ["planning", "in_progress", "review", "done", "on_hold"];
      const name = pick(rng, names);
      const record: Record<string, unknown> = {
        id: id("prj", ctx.index, rng),
        name,
        status: pick(rng, statuses),
        owner: fullName(ctx.pack, rng),
        progress: int(rng, 5, 100),
        description:
          `${name} â€” track delivery and team coordination.`,
        teamSize: int(rng, 2, 24),
        budget: moneyAmount(rng, "en", {
          en: [5_000, 250_000],
        }),
        startDate: isoDate(rng, 200),
        dueDate: isoDateFuture(rng, 120),
        company: pick(rng, ctx.pack.companies),
      };
      return takeFields(record, fields);
    },
  },
  {
    id: "teams",
    category: "business",
    icon: UsersRound,
    fields: [
      { id: "name", default: true },
      { id: "lead", default: true },
      { id: "membersCount", default: true },
      { id: "department", default: true },
      { id: "id", default: false },
      { id: "company", default: false },
      { id: "location", default: false },
      { id: "createdAt", default: false },
      { id: "focus", default: false },
    ],
    generateOne(ctx, fields) {
      const rng = createRng(ctx.seed, ctx.index);
      const names =
        ["Product squad", "Platform team", "Growth crew", "Design guild", "Data team"];
      const focuses =
        ["UX", "Infrastructure", "Revenue", "Brand", "Insights"];
      const loc = place(ctx.pack, rng);
      const record: Record<string, unknown> = {
        id: id("tea", ctx.index, rng),
        name: pick(rng, names),
        lead: fullName(ctx.pack, rng),
        membersCount: int(rng, 3, 28),
        department: pick(rng, contentList("departments")),
        company: pick(rng, ctx.pack.companies),
        location: `${loc.city}, ${ctx.pack.countryName}`,
        createdAt: isoDate(rng, 900),
        focus: pick(rng, focuses),
      };
      return takeFields(record, fields);
    },
  },
];
