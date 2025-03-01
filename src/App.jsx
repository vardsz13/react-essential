
import ReactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';
import {CORE_CONCEPTS} from './data';


const DescriptionArray = ['Paul', 'Varde', 'React Developer'];

function genRandomInt(max) { 
  return (
    Math.floor(Math.random() * (max + 1))
  );
}

function CoreConcepts({image, title, description}) {
  return ( 
    <li>
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function App() {

  const Description = DescriptionArray[genRandomInt(2)];

  return (
    <div>
      <header>
        <img src={ReactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {Description} Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <section id="core-concepts">
          <ul>
            {/* Orter way to create a dynamic set props */}
            <CoreConcepts image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description}/>
            {/* short for create a dynamic set props */}
            <CoreConcepts {... CORE_CONCEPTS[1]}/>
            <CoreConcepts {... CORE_CONCEPTS[2]}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
