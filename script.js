function getGitHubProfileInfos(){
    let user = document.getElementById("searchInput").value;
    let statusDiv = document.querySelector("div.status");
    console.log(user)
    const url = `https://api.github.com/users/${user}`

    fetch(url)
    .then(response => response.json() )
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userPhoto.src = data.avatar_url
    //   userGitHub.href = data.html_url
    //   userLogin.textContent = data.login
    })
    getGitHubRepos(user)
    statusDiv.replaceChildren()
    statusDiv.innerHTML += `
        <img class="img_status" src="https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&theme=prussian&include_all_commits=true&count_private=true"/>

        <div id="espaco"></div>

        <img class="img_status" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&langs_count=16&theme=prussian&include_all_commits=true&count_private=true"/>
        `
  }
  
  function getGitHubRepos(user){
    const url = `https://api.github.com/users/${user}/repos`

    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let repos = document.querySelector("ul.repos");
      repos.replaceChildren();
      data.forEach(element => {
        console.log(element.name)
        repos.innerHTML += `
        <li>
        <a target="_blank" href="https://github.com/${element.full_name}"><img src="https://github-readme-stats.vercel.app/api/pin/?username=${user}&repo=${element.name}&theme=prussian&border_radius=0&hide_border=true"</img></a>
        </li>
        `
        });
    })
  }
  getGitHubProfileInfos()
  