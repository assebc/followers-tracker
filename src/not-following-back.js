const followers = [];
const following = [];
const notFollowingBack = following.filter((user) => !followers.includes(user));

console.log(notFollowingBack);