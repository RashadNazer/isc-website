// src/data/insights/_template.js
// Template for a new insight post. Copy this file, rename it, fill in the fields.

export default {
  // ===== REQUIRED =====
  id: "unique-slug-id",
  slug: "unique-url-slug",                    // used in /insights/:slug URL
  title: "Post Title Goes Here",
  excerpt: "A 1-2 sentence summary that appears on the listing page and in search results.",

  category: "Technical",                      // one of: Technical | Compliance | Project Stories | Industry News
  tags: ["Tag1", "Tag2", "Tag3"],

  author: {
    name: "Author Name",
    role: "Job Title",
    avatar: "/images/team/author-photo.jpg",  // optional — falls back to initials if missing
  },

  // ===== METADATA =====
  date: "2025-01-01",                         // YYYY-MM-DD format
  readingTime: 5,                             // in minutes, rough estimate

  // ===== MEDIA =====
  coverImage: "/images/insights/my-post.jpg", // 16:9 recommended

  // ===== CONTENT =====
  // Simple markdown-like syntax supported:
  //   ## Heading 2
  //   ### Heading 3
  //   - Bullet list item
  //   1. Numbered list item
  //   **bold text**
  //   Blank line separates paragraphs
  content: `
## First Section Heading

Opening paragraph of your post. Keep it punchy — this is what readers will see after clicking.

## Second Section

More content here. You can use **bold** to highlight key phrases.

### Subsection

- Bullet one
- Bullet two
- Bullet three

## Closing Thoughts

Wrap up with a clear takeaway or call to action.
  `,
};