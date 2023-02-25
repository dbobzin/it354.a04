import "./App.css";
import Blog from "./Blog";
import Web from "./Web";
import Nav from "./Nav";
import Main from "./Main";

function Profile(props) {
  return (
    <div>
      <h1>Trials with the characters and inclass example</h1>
      <img
        style={{ height: "50px", float: "left" }}
        src={props.character.img}
      />
      <p style={{ marginLeft: "65px", lineHeight: "50px" }}>
        {props.character.name}
      </p>
      <hr />
    </div>
  );
}

function Langs(props) {
  return (
    <div>
      <img
        style={{ height: "75px", width: "75px", float: "left" }}
        src={props.framework.img}
      />
      <p style={{ marginLeft: "65px", lineHeight: "50px" }}>
        {props.framework.name}
      </p>
      <p style={{ marginLeft: "65px", lineHeight: "50px" }}>
        {props.framework.desc}
      </p>
    </div>
  );
}

function App() {
  const characters = [
    {
      name: "Perry the Platypus",
      img: "https://vignette.wikia.nocookie.net/phineasandferb/images/6/68/Perry_smiling_avatar.png/revision/latest?cb=20100118055301",
    },
    {
      name: "Heinz Doofenshmirtz",
      img: "https://vignette.wikia.nocookie.net/phineasandferb/images/6/6a/Doofenshmirtz_official.jpg/revision/latest/scale-to-width-down/240?cb=20140503030926",
    },
    {
      name: "Major Monogram",
      img: "https://vignette.wikia.nocookie.net/phineasandferb/images/b/be/Monogram_-_Rollercoaster_avatar_1.png/revision/latest?cb=20100131231239",
    },
  ];
  const frameworks = [
    {
      name: "Java",
      desc: "List skills technologies here. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor.",
      img: "https://ctechhosting.com/images-354/java.png",
    },
    {
      name: "Python",
      desc: "List skills technologies here. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor.",
      img: "https://ctechhosting.com/images-354/python.png",
    },
    {
      name: "React",
      desc: "List skills technologies here. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor.",
      img: "https://ctechhosting.com/images-354/react.png",
    },
    {
      name: "Sql",
      desc: "List skills technologies here. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor.",
      img: "https://ctechhosting.com/images-354/sql.png",
    },
  ];
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Main />
          <Blog />
          <Web />
          {characters.map((character, index) => (
            <Profile key={index} character={character} />
          ))}

          {frameworks.map((framework, index) => (
            <Langs key={index} framework={framework} />
          ))}
        </header>
      </div>
    </>
  );
}

export default App;
