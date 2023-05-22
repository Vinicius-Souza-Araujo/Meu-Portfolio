import './App.css';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import CardTecnologia from './componentes/CardTecnologia/index';
import CardresposGitHub from './componentes/CardresposGitHub/index';
import Chart from "chart.js/auto";
import axios from 'axios';




function App() {

  const [reposGitHub,setReposGitHub] = useState([]);

  useEffect(()=>{

      function loadAPIgitHub(){

        axios.get('https://api.github.com/users/Vinicius-Souza-Araujo/repos')
          .then(function (response) {
            console.log(response);
            setReposGitHub(response.data);
          })
          .catch(function (error) {
            console.log(error);
          })

      }

      loadAPIgitHub();

  }, []);


  const labels = ["Liderança", "Comunicação", "Trabaho em Equipe", "Resolução de Problemas", "Persistência", "Proatividade"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Skills",
        backgroundColor: "rgb(200, 238, 67)",
        borderColor: "rgb(200, 238, 67)",
        data: [80, 95, 85, 95, 100, 90, 100],
      },
    ],
  };

  return (
    <div className='box'>
        
        <div className='banner'>
          
        
            <div className='info_inicial'>
                <img className='img-Vinicius' src='../assets/Vinicius.jpeg' alt='vinicius' title='vinicius'/>
                <h1 className="titulo-info_inicial">Vinicius Souza Araujo</h1>
                <h2 className='subtitulo-info_inicial'>Web Developer</h2>
                <a className='botao-cv' href='./ViniciusSouza.pdf' download>Dowload CV</a>

                
            </div>
        </div>

        <div data-aos="fade-right" className='sobreMim' >
         
        
        
        <div className='sobreMim-texto '>
            <h1 className='titulo-sobreMim'>Descobrir</h1>
            <h2 className='subtitulo-sobreMim'>Sobre mim</h2>
            <p className='sobreMim-paragrafo ' >Meu nome é Vinicius Souza Araujo, tenho 19 anos, moro em Embu das Artes, região Metropolitana de São Paulo. </p>
            <p className='sobreMim-paragrafo '>Sou formado no Técnico em Desenvolvimento de Sistemas na escola SENAI Suíço-Brasileira Paulo Ernesto Tolle e atuamente estou na faculdade da instituição Centro Universitário SENAC Santo Amaro estando atualmente no 3° semestre de Análise e Desenvolvimento de Sistemas.</p>
            <p className='sobreMim-paragrafo '>Neste momento, busco uma efetivação em um estágio/júnior nas áreas de Front-End e Back-End.</p>


            <div className='box-contato'>
                <div className='contato'>
                  <h2 className='titulo-contato'>Entre em contato</h2>
                  <div className='box-formasContato'>
                    <a  href='https://www.linkedin.com/in/vinicius-souza-064531210/'><img className='formasContato'  src='../assets/Linkedin.png' alt='icon-linkedin' title='icon-linkedin'/></a>
                    <a  href='mailto:vinicius0207souza@gmail.com'><img className='formasContato'  src='../assets/Gmail.png'/  alt='icon-gmail' title='icon-gmail'/></a>
                    <a  href='https://github.com/Vinicius-Souza-Araujo'><img className='formasContato'  src='../assets/GitHub.png'  alt='icon-github' title='icon-github'/></a>
                  </div>
                </div>
            </div>
        </div>

        <div className='box-imgDeveloper'>
          
        <img className='img-programador' src='../assets/developer.gif' alt='programador' title='programador'/>
        </div>
        </div>


        <div   className='minhasSkills'>
            <div data-aos="fade-right"  className='box-titulo-minhasSkills'>
            <h1  className='titulo-minhasSkills'>Minhas Skills</h1>
            </div>
            <div data-aos="fade-right" className='box-grafico'>
                <Bar data={data}/>
            </div>
        </div>


        <div data-aos="fade-right" className='tecnologias'>
            <div className='box-titulo-tecnologias'>
                <h1 className='titulo-tecnologias'>Tecnologias</h1>
            </div>
                <div className='cards'>
                    <CardTecnologia titulo='HTML5' caminhoImg='../assets/html5.png' alt='icon-html5' title='icon-html5'  />
                    <CardTecnologia titulo='CSS3' caminhoImg='../assets/css3.png' alt='icon-css3' title='icon-css3'/>
                    <CardTecnologia titulo='JavaScript' caminhoImg='../assets/javaScript.png' alt='icon-javaScript' title='icon-javaScript' />
                    <CardTecnologia titulo='Bootstrap' caminhoImg='../assets/bootstrap.png' alt='icon-bootstrap' title='icon-bootstrap' />
                    <CardTecnologia titulo='NodeJS' caminhoImg='../assets/node.png' alt='icon-node' title='icon-node' />
                    <CardTecnologia titulo='ReactJS' caminhoImg='../assets/reactJS.png' alt='icon-reactJS' title='icon-reactJS' />
                    <CardTecnologia titulo='React Native' caminhoImg='../assets/reactNative.png' alt='icon-reactNative' title='icon-reactNative'/>
                    <CardTecnologia titulo='Java' caminhoImg='../assets/java.png' alt='icon-java' title='icon-java'/>
                    <CardTecnologia titulo='MySQL' caminhoImg='../assets/mysql.png' alt='icon-mysql' title='icon-mysql'/>
                </div>
            
        </div>


        <div  className='meusProjetos'>

          <div data-aos="fade-right">

            <div className='box-titulo-meusProjetos'>
                <h1 className='titulo-meusProjetos'>Meus Projetos</h1>
            </div>

              {reposGitHub.map((item)=>{
                return(
                  <CardresposGitHub titulo={item.name} link={item.html_url} />
                )
              })}
              
          </div>
        </div>


        <footer>
              <p className='paragrafo-footer'>Copyright ©2022 Vinicius Souza Araujo</p>
              <div className='box-formasContato-footer'>
                    <a  href='https://www.linkedin.com/in/vinicius-souza-064531210/'><img className='formasContato'  src='../assets/Linkedin.png' alt='icon-linkedin' title='icon-linkedin'/></a>
                    <a  href='mailto:vinicius0207souza@gmail.com'><img className='formasContato'  src='../assets/Gmail.png' alt='icon-gmail' title='icon-gmail'/></a>
                    <a  href='https://github.com/Vinicius-Souza-Araujo'><img className='formasContato'  src='../assets/GitHub.png' alt='icon-github' title='icon-github'/></a>
              </div>
        </footer>

    </div>
  );
}

export default App;
