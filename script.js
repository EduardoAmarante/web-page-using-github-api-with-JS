function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/eduardoamarante`
  
    fetch(url)
    .then(response => response.json() )
    .then(data => {
    //   userName.textContent = data.name
      userBio.textContent = data.bio
      userPhoto.src = data.avatar_url
    //   userGitHub.href = data.html_url
    //   userLogin.textContent = data.login
    })
  
  }
  
  function getGitHubRepos(){
    const url = `https://api.github.com/users/eduardoamarante/repos`

    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      data.forEach(element => {
        console.log(element.name)
        let repos = document.querySelector("ul.repos");
        
        repos.innerHTML += `
        <li>
        <img src="https://github-readme-stats.vercel.app/api/pin/?username=eduardoamarante&repo=${element.name}&theme=prussian&border_radius=0&hide_border=true"</img>
        </li>
        `
        });
    })
  }
  getGitHubProfileInfos()
  getGitHubRepos()