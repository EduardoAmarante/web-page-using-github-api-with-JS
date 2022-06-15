function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/eduardoamarante`
  
    fetch(url)
    .then(response => response.json() )
    .then(data => {
    //   userName.textContent = data.name
      userBio.textContent = data.bio
    //   userPhoto.src = data.avatar_url
    //   userGitHub.href = data.html_url
    //   userLogin.textContent = data.login
    })
  
  }
  
  getGitHubProfileInfos()