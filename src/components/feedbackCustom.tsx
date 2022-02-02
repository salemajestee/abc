import React, { useEffect } from "react"
import { useState } from "react"


function useText(initialValue:any) {
    const [text, setText] = useState(initialValue)
    return [text, setText]

}
export function FeedbackCustomComponent() {
    const [text, setText] = useText('')

    useEffect(() => {
      async function getStarWarsQuote() {
        // Get initial text
        const response = await fetch(
          'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote'
        )
        const data = await response.json()
        const quote = data.content
        setText(quote)
      }
      getStarWarsQuote()
    }, [])
  
    // Handle form submission
    function handleSubmit(e:any) {
      e.preventDefault()
      console.log(`Submitting response to API: "${text}"`)
      setText('')
    }
  
    // Update text in state onchange for textarea
    function handleTextChange(e:any) {
      const updatedText = e.target.value
  
      setText(updatedText)
    }
  
    return (
      <form onSubmit={e => handleSubmit(e)}>
        <title>custom Example</title>
        <label>
          Have feedback for our team? <br /> Let us know here 👇
            <textarea
            value={text}
            onChange={e => handleTextChange(e)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }