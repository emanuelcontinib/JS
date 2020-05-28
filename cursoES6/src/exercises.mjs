import axios from 'axios';
class API {
  static async getUserInfo(username) {
    const response = await axios.get(`https://api.github.com/users/${username}`)
    console.log('====================================');
    console.log(response);
    console.log('====================================');
  }
}
API.getUserInfo('emanuelcontinib');



const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() {
  await delay();
  console.log("1s");
  await delay();
  console.log("2s");
  await delay();
  console.log("3s");
}



import axios from "axios";
async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.log("Usuário não existe");
  }
}
getUserFromGithub("emanuelcontinib");
getUserFromGithub("34567");


class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);
    } catch (err) {
      console.log("Repositório não existe");
    }
  }
}
Github.getRepositories("https://github.com/emanuelcontinib/Semana-Omnistack-11");
Github.getRepositories("465");



const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response.data);
  } catch (err) {
    console.log("Usuário não existe");
  }
};
buscaUsuario("emanuelcontinib");