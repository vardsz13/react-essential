import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header/Header";
import CoreConcepts from "./Components/CoreConcepts";
import TabButton from "./Components/TabButton";



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
        <TabButton>Components</TabButton>
        <TabButton>JSX</TabButton>
        <TabButton>Props</TabButton>
        <TabButton>State</TabButton>
        </menu>
       </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}
export default App;
