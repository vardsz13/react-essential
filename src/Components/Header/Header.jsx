import ReactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const DescriptionArray = ["Paul", "Varde", "React Developer"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const Description = DescriptionArray[genRandomInt(2)];

  return (
    <header>
      <img src={ReactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {Description} Fundamental React concepts you will need for almost any
        app you are going to build!
      </p>
    </header>
  );
}
