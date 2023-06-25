
import './App.scss'
import './css/integrator.scss'

import Brief from './components/Brief'
import { useState } from 'react'
import Text_highlighter from './components/Text_highlighter'
import classNames from 'classnames';
import es from "./lang/spanish.json"
import en from "./lang/english.json"

function App() {
  function timeout(delay: number) {
    return new Promise(res => setTimeout(res, delay));
  }
  const [isTranslating, setIsTranslating] = useState("");

  const [currentLanguage, setCurrentLanguage] = useState('en');
  const handleLanguageSwitch = async () => {
    setIsTranslating("translating")
    await timeout(150);
    setIsTranslating("")
    setCurrentLanguage(currentLanguage === 'en' ? 'es' : 'en');
  }

  const languageData = currentLanguage === 'en' ? en : es;
  const introduction = languageData.introduction;
  const brief_content = languageData.brief_content;



  return (
    <>
      <div id="app">

        <div id='language_toggler_container'>

          <button onClick={handleLanguageSwitch}>{currentLanguage === 'es' ? "EN" : "ES"}</button>
        </div>
        <div className={classNames("sec", { ["translating"]: isTranslating })} id="head">
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
        <div id="brief" className={classNames("sec brief", { ["translating"]: isTranslating })}>
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
