import React, { useState, useRef } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const refOutput = useRef(null)

  const [markdown, setMarkdown] = useState('# markdown preview')

  const scrollOutput = () => {
    refOutput.current.scrollTop = refOutput.current.scrollHeight
    console.log(refOutput.current.scrollHeight)
  }

  return (
    <div className='container'>
      <section className='text-area'>
        <textarea
          value={markdown}
          onChange={(e) => {
            setMarkdown(e.target.value)
            e.target.scrollTop = e.target.scrollHeight
            scrollOutput()
          }}
        ></textarea>
      </section>
      <section ref={refOutput} className='output'>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </section>
    </div>
  )
}

export default App
