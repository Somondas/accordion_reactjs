import React, { useState } from 'react';
import questions from './data';
import data from './data';
import SingleQuestion from './Questions';
function App() {
  const [question, setQuestion] = useState(data)
  return <main>
    <div className="container">
      <h3>questions and answers about login</h3>
      <section className='info'>
        {
          question.map((question) =>{
            return <SingleQuestion key={question.id} {...question}/>
          })
        }
      </section>
    </div>
  </main>;
}

export default App;