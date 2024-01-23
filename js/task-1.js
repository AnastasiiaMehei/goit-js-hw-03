function slugify(title) {
  const newMessage = title.join('-').toLowerCase();
  return newMessage;
}
