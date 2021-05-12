const sounds = [
    {
        key: 'Q',
        mp3: './gagapa.ogg'
    },
    {
       key: 'W',
       mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
   },
   {
       key: 'E',
       mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
   },
   {
       key: 'A',
       mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
   },
   {
       key: 'S',
       mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
   },
   {
       key: 'D',
       mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
   },
   {
       key: 'Z',
       mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
   },
   {
       key: 'X',
       mp3: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
   },
   {
       key: 'C',
       mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
   },
]

const App = () => (

   <div id="drum-machine" >
       
       <div id="display" className="display">
           <h1> Play </h1>
           {sounds.map((sound,idx)=> (
               <Drumpad text={sound.key} key={idx} audio = {sound.mp3} />
           ))}
       </div>
   </div>
)



class Drumpad extends React.Component {


   playSound = () => {
       const id = this.props.text;
       const audio = document.getElementById(id);
       audio.currentTime=0;
       audio.play();
       const display = audio.parentNode.id;
       document.querySelector('h1').innerText = display;

   }



   render () {
       const { text, audio } = this.props
       return (

           <div className="drum-pad" id={`drum-${text}`} value={`drum-${text}`} onClick={this.playSound}>
               {text}
               <audio ref={this.audio} src={audio} className="clip" id={text} />
           </div>
       )
   }
}


// code para tocar o som e trocar a class quando o botão é pressionado
document.addEventListener("keydown", (e) => {
   const id = e.key.toUpperCase();
   const audio = document.getElementById(id);

   if (audio) {
       audio.currentTime=0;
       audio.play()
       const parent = audio.parentNode;
       parent.classList.add('active')
       setTimeout(() => {
           parent.classList.remove('active'); 
       }, 100);
       const display = parent.id;
       document.querySelector('h1').innerText = display;
   }
});


ReactDOM.render(<App />, document.getElementById("app"));