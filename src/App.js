
import './App.css';

function App() {

  return (
    <div className="App">
      <Welcome
        name="ravi"
        pic="https://static.generated.photos/vue-static/home/feed/latino-male.png"
      />
      <Welcome
        name="Karthik"
        pic="https://i.dailymail.co.uk/i/pix/2013/08/29/article-2405475-1B8389EE000005DC-718_634x550.jpg"
      />
      <Welcome
        name="Thanvi"
        pic="https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg"
      />
    </div>
  );
}
//Component Declaration -> View + Logic
function Welcome({ name, pic }) {
  //let name = 'Chandru';
  //console.log(props);
  //const pic =
  // "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg";
  return (<div>
    <img className='user-pic' src={pic}></img>
    <h1>
      Hi, {name} -😁😁200 followers
    </h1>
  </div>)
}
export default App;
