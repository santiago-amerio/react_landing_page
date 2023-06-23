

import './App.scss'
import Brief from './components/Brief'

import Text_highlighter from './components/Text_highlighter'
function App() {
  const introduction = [
    {
      title: "<a href='#head'><h1 style='font-size: 3rem;' >¡--santiago_&#x5f_amerio--¡</h1></a>",
      content: "Desarollo full-stack, Administracion de sistemas, Redes, Electronica, Automatizacion.",
      id: "head"
    },
    {
      title: "<h2>Hola!</h2>", content: "<h4>En esta pagina se pueden ver algunos de los <a href='#proyectos' class='link-pointer'>¡--_p_royectos--¡</a> en los que trabaje en los ultimos años. </br>\
    Tambien un resumen de los <a href='#brief' class='link-pointer'>¡--_c_onocimientos--¡</a> en relacion a tecnologia que fui obteniendo.</h4>",
      id: "greeting"
    }
  ]
 


  const brief_content = [
    {
      category: "¡--_d_evelopment--¡",
      list: [
        {
          title: "--_F_ront--_end",
          list: ["--__HTML--", "¡--__JavaScript--¡", "--__CSS--", "--__React--JS", "--__Vue--JS"]
        },
        {
          title: "¡--_B_ack--_end¡",
          list: ["--__MySQL--", "--__Mongo--DB", "--__PHP--", "--__Python--", "--__Node--JS"]
        },
      ]
    },
    {
      category: "it",
      list: [
        {
          title: "¡--_N_etworking--¡",
          list: ["Conexion y configuracion de ¡--__router--¡, ¡--__switch--¡ y ¡--__AP--¡.",
            "¡--__Crimpeado--¡ cables ethernet (rj45)", "Configuracion de ¡--__servidores--¡.",
            "Configuracion de ¡--__V-lans--¡.", "Configuracion ¡--__nginx reverse proxy--.",
            "Utilizacion de ¡--_ _Docker--¡ para despliegue de servicios."
          ],
        },
        {
          title: "¡--_S_ys_admin--¡",
          list: [
            "windows",
            "linux(debian, manjaro,fedora)"
          ]
        },
        {
          title: "¡--_H_ardware--¡",
          list: [
            "diagnostico y reparacion de ¡--__PC--¡ y ¡--__servidores--¡",
            "Reparacion a nivel ¡--__pcb--¡ de placas simples"
          ]
        }
      ]
    }
  ]


  return (
    <>
      <div id="app">
        <div className='sec' id="head">
          <div>
            <div className="title-left">
              <Text_highlighter content={introduction[0].title}></Text_highlighter>
            </div>
            <div className='text-left text-small'>
              <Text_highlighter content={introduction[0].content} ></Text_highlighter>
            </div>
          </div>
          <div className="title-left">
            <Text_highlighter content={introduction[1].title}></Text_highlighter>
            <Text_highlighter content={introduction[1].content} ></Text_highlighter>
          </div>

        </div>
        <div id="brief" className="sec brief">
          {brief_content.map((item, index) => (
            <div key={index}>

              <Brief list={item.list} category={item.category}></Brief>

            </div>
          ))}
        </div>
      </div>




    </>
  )
}

export default App
