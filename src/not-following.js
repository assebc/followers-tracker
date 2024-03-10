const followers = [];
const following = [];
const notFollowing = followers.filter((user) => !following.includes(user));

console.log(notFollowing);