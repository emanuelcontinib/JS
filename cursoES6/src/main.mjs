class App {
  constructor(){
    this.repositories = []
  
    this.formEl = document.getElementById('repo-form');

    this.registerEvents();
  }

  registerEvents(){
    this.formEl.onsubmit = (event) => this.addRepository(event)
  }
  addRepository(){
    event.preventDefault();

    this.repositories.push({
      name:'Catch Repo',
      description:'Find a ideal reposirory',
      avatar_url: '../img/img.jpg',
      html_url: 'https://github.com/emanuelcontinib',
    })
    console.log(this.repositories);
     
  }
}

new App();