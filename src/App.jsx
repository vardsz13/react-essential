import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header/Header";
import CoreConcepts from "./Components/CoreConcepts";
import TabButton from "./Components/TabButton";

function handleSelect (Select) {
  //Handle Dynamic Content: Components, JSX, Props, State
  console.log(Select);
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {/* Orter way to create a dynamic set props */}
            <CoreConcepts
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
            />
            {/* short for create a dynamic set props */}
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
          </ul>
        </section>
       <section id="examples">
        <h2>Examples</h2>
        <menu>
        <TabButton onSelect={() => handleSelect('Components') }>Components</TabButton>
        <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
        <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
        <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
        </menu>
        Dynamic Content
       </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}
export default App;
