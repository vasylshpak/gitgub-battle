const { func } = require("prop-types");

export function fetchPopularRepos(language) {
  const endpoint = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  //make request
  return (
    fetch(endpoint)
      //turn response into the json
      .then((res) => res.json())
      //check for error
      .then((data) => {
        if (!data.items) {
          throw new Error(data.message);
        }
        //return items => array of the repositories
        return data.items;
      })
  );
}
