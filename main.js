const linksSocialMedia = {
  github: 'Wenderson-Moraes',
  youtube: 'WendersonFerreira',
  facebook: 'WendersonFerreira',
  instagram: 'Wendersonferreirareal',
  twitter: 'Wenderson.ferreira'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
    //alert(li.children[0].href);
  }
}

changeSocialMediaLinks()

// Configurar a API do github

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
