
import './App.css';
import {useState} from "react";

// user pics display and like using hooks
// function App() {
//   const names=["raghu","satya","radhika"];
//   const users= [
//     {
//       name:"ravi",
//       pic:"https://static.generated.photos/vue-static/home/feed/latino-male.png",
//     },
//     {
//       name:"Karthik",
//       pic:"https://i.dailymail.co.uk/i/pix/2013/08/29/article-2405475-1B8389EE000005DC-718_634x550.jpg",
//     },
//     {
//       name:"Thanvi",
//       pic:"https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg",
//     }
//   ];

//   return (
//     <div className="App">
//       {/* <Welcome     name="Thanvi"
//         pic="https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg"
//         name="ravi"
//         pic="https://static.generated.photos/vue-static/home/feed/latino-male.png"
//       />
//       <Welcome
//         name="Karthik"
//         pic="https://i.dailymail.co.uk/i/pix/2013/08/29/article-2405475-1B8389EE000005DC-718_634x550.jpg"
//       />
//       <Welcome
   
//       /> */}
//      {users.map((usr)=>(
//     <Welcome name ={usr.name} pic ={usr.pic}/>
//     ))}
//     {names.map((nm)=>(
//     <User username ={nm}/>
//     ))}
    
//     </div>
//   );
// }

function App() {
  const names=["raghu","satya","radhika"];
  const users= [
    {
      name:"ravi",
      pic:"https://static.generated.photos/vue-static/home/feed/latino-male.png",
    },
    {
      name:"Karthik",
      pic:"https://i.dailymail.co.uk/i/pix/2013/08/29/article-2405475-1B8389EE000005DC-718_634x550.jpg",
    },
    {
      name:"Thanvi",
      pic:"https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg",
    }
  ];

  return (
    <div className="App">
     {users.map((usr)=>(
    <Welcome name ={usr.name} pic ={usr.pic}/>
    ))}
    {names.map((nm)=>(
    <User username ={nm}/>
    ))}
    
    </div>
  );
}


// function movie

function User({username}){
  return(
    <div>
    <h2>The user name is {username}</h2>
    </div>
  )
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
    <Counter/>
  </div>)
}

//hooks
function Counter(){
  //const[t1,t2]=dbl(10);
 
  let [like,setlike] =useState(0);
  let [dislike,setdislike] =useState(0);
  const likeStyle= {
    color :like >=10?"green":"black",
    //fontWeight:"bold",
  } ;
  const dislikeStyle= {
    color :dislike >=10?"red":"black",
    //fontWeight:"bold",
  } ;
  const messageStyle ={
    display :like-dislike>=10 ?"block":"none",
  };
  return(
<div>
  {/* onClick ->camelCase */}
  {/* {like -dislike >=10 ?<h2> you are awesome🎸</h2>:null} */}
  <h2 style={messageStyle}> you are awesome🎸</h2>
  <button style ={likeStyle} onClick={()=>setlike(like+1)}>like👍 {like}</button>
  <button style ={dislikeStyle} onClick={()=>setdislike(dislike+1)}>dislike😏 {dislike}</button>
</div>
  );
}
export default App;
