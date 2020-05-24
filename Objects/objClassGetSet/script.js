class Chachorro {
  constructor(raca,cor){
    this.raca = raca,
    this.cor = cor
  }
  latir (){
    console.log('au au')
  }
  get getCor(){         //método pra buscar
    return this.cor;
  }
  set setCor(cor){         //métodos pra setar
    this.cor = cor;
  }
}

let pastor = new Chachorro ('Pastor Alemão', 'Sem Cor');
console.log(pastor);

pastor.setCor ='Capa Preta';
console.log(pastor);
console.log(pastor.getCor); //mostrando a propriedade 'cor'


