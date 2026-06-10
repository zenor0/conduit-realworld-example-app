const slugify = (string) => {
  return string.trim().toLowerCase().replace(/\W|_/g, "-");
};

const appendTagList = (articleTags, article) => {
  const tagList = articleTags.map((tag) => tag.name);

  if (!article) return tagList;
  article.dataValues.tagList = tagList;
};

const appendFavorites = async (loggedUser, article) => {
  const favorited = await article.hasUser(loggedUser ? loggedUser : null);
  article.dataValues.favorited = loggedUser ? favorited : false;

  const favoritesCount = await article.countUsers();
  article.dataValues.favoritesCount = favoritesCount;
};

const appendFollowerFields = async (loggedUser, user) => {
  const following = loggedUser ? await user.hasFollower(loggedUser) : false;
  user.dataValues.following = following;

  const followersCount = await user.countFollowers();
  user.dataValues.followersCount = followersCount;
};

const appendFollowers = async (loggedUser, toAppend) => {
  if (!toAppend) return;

  if (typeof toAppend.getAuthor === "function") {
    const author =
      toAppend.author || toAppend.get("author") || (await toAppend.getAuthor());

    if (!author) {
      toAppend.dataValues.author = null;
      return;
    }

    await appendFollowerFields(loggedUser, author);
    toAppend.dataValues.author = author;
    return;
  }

  if (
    typeof toAppend.hasFollower !== "function" ||
    typeof toAppend.countFollowers !== "function"
  ) {
    return;
  }

  await appendFollowerFields(loggedUser, toAppend);
};

module.exports = { slugify, appendTagList, appendFavorites, appendFollowers };
