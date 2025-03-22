// utils/slugify.js
export function slugify(title) {
    return title
      .toLowerCase()
      .replaceAll(' ', '-')
  }