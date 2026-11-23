/** Shared sample for workbench demos. */
export const WORKBENCH_SAMPLE_JSON = `{
  "name": "SonoJS Mock",
  "active": true,
  "count": 3,
  "note": "",
  "extra": null,
  "tags": [],
  "meta": {},
  "skills": ["React", "Next.js"],
  "address": {
    "city": "London"
  }
}`;

/** Nested sample for JSONPath demos. */
export const WORKBENCH_JSONPATH_SAMPLE = `{
  "company": {
    "name": "SonoJS Mock",
    "founded": 2024
  },
  "users": [
    {
      "name": "Jordan Lee",
      "age": 32,
      "profile": {
        "city": "London",
        "roles": ["admin", "editor"]
      }
    },
    {
      "name": "Taylor Brooks",
      "age": 28,
      "profile": {
        "city": "Denver",
        "roles": ["member"]
      }
    }
  ],
  "teams": [
    {
      "id": "frontend",
      "members": [
        { "email": "jordan.lee@example.com" },
        { "email": "taylor.brooks@example.com" }
      ]
    }
  ]
}`;