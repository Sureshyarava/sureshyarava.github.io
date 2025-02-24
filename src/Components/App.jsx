import '../Css/App.css';
import AboutMe from './AboutMe.jsx';
import MacOSTerminalWindow from './MacOSTerminalWindow.jsx';
import MacOSTerminalHeader from './MacosTerminalHeader.jsx';
import Animation from './Animation'

function App() {
  return (
    <div className="App">
      <div className="App-header">
          <MacOSTerminalHeader />
          <h1 align="center">Hi <img alt="Hi Gif" src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="35"/>, I'm Venkata Suresh Yarava</h1>
          <div style={{textAlign:"center"}}>
          <img src="https://readme-typing-svg.herokuapp.com?font=Menlo&color=%236FDA44&size=32&center=true&vCenter=true&width=600&height=50&lines=Web+Developer;Computer+Science+Student;Python+Developer;Reactjs+Developer" alt="Headline" /></div>
        </div>
      <div className='App-body'>
        <div className='grid'>
          <div className='aboutMe'>
          <AboutMe />
          </div>
          <div className='terminal'>
          <MacOSTerminalWindow />
          </div>
          <div className='animation'>
          <Animation />
          </div>
        </div>
      </div>                  
    </div>
  );
}

export default App;
