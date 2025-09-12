// app/sitemap.js
export default function sitemap() {
  return [
    {
      url: "https://www.fountofhope.org",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.fountofhope.org/devotionals",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 2,
    },
    {
      url: "https://www.fountofhope.org/bookmarks",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 3,
    },
    {
      url: "https://www.fountofhope.org/prayers",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 4,
    },
    {
      url: "https://www.fountofhope.org/settings",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 5,
    },
    {
      url: "https://www.fountofhope.org/reflection",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 6,
    },
  ];
}
