import { useState } from 'react'
import { CORE_CONCEPTS } from "./data.js";
import Header from "./Components/Header/Header";
import CoreConcepts from "./Components/CoreConcepts";
import TabButton from "./Components/TabButton";
import {EXAMPLES} from "./data.js"



function App() {
 const [selectedTopic, setSelectedTopic] =  useState();
  
  function handleSelect (selectedButton) {
    //Handle Dynamic Content: Components, JSX, Props, State
   setSelectedTopic(selectedButton)
    //console.log(selectedTopic);
  }

  console.log('APP COMPONENT EXECUTINGD');

  let tabContent = <p>Please select a topic.</p>

  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
          {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
       </div>
    )
  }



  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {/* Orter way to create a dynamic set props */}
            <CoreConcepts
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            {/* short for create a dynamic set props */}
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
       <section id="examples">
        <h2>Examples</h2>
        <menu>
        <TabButton onSelect={() => handleSelect('components') }>Components</TabButton>
        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>
        {tabContent}
       </section>
      </main>
    </div>
  );
}
export default App;
