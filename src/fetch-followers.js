const list = [];
const userId = 0; // insert your user id here
const username = ""; // insert your username here

const fetchFollowers = async(maxId) => {
  let url = `https://www.instagram.com/api/v1/friendships/${userId}/followers/?count=200`;
  if(maxId){ url += "&max_id=" + maxId; }
  let res = await fetch(url, {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "dpr": "2",
      "sec-ch-prefers-color-scheme": "light",
      "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
      "sec-ch-ua-full-version-list": "\"Chromium\";v=\"122.0.6261.112\", \"Not(A:Brand\";v=\"24.0.0.0\", \"Google Chrome\";v=\"122.0.6261.112\"",
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-model": "\"Nexus 5\"",
      "sec-ch-ua-platform": "\"Android\"",
      "sec-ch-ua-platform-version": "\"6.0\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "viewport-width": "846",
      "x-asbd-id": "129477",
      "x-csrftoken": "vS8VtzrRpNcjYQiyIe09NS75NM9PYn6w",
      "x-ig-app-id": "936619743392459",
      "x-ig-www-claim": "hmac.AR3XxRkei6mh9n7-1yvGf1EF2s0or3MFMD12QynOZqCAUxWB",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": `https://www.instagram.com/${username}/followers/`,
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  })
  res = await res.json();
  
  res.users.forEach((user) => {
    list.push(user.username)
  });
  
  if(res.next_max_id){
    await fetchFollowers(res.next_max_id);
  }
}

await fetchFollowers(0);
console.log(list)
