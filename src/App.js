import React, { Component } from 'react'

class App extends Component {
  state = {
    mask: 'dd/mm/yyyy',
    date: ''
  }

  inputHandler = (key, value) => {
    const { mask } = this.state

    let maskedValue = ''

    let r = 1
    value.replace(/\D/g, '').split('').forEach((c, i) => {
      /\W/.test(mask[i + r - 1]) && (maskedValue += mask[i + r - 1]) && r++

      maskedValue += c

      value[i + r] && value[i + r] === mask[i + r] && (maskedValue += value[i + r]) && r++
    })

    this.setState({ [key]: maskedValue })
  }

  render() {
    const { mask, date } = this.state

    return (
      <>
        <fieldset>
          <legend>Data ({mask})</legend>
          <input
            name="date"
            value={date}
            type="text"
            maxLength={mask.length}
            onChange={({ target: { name, value } }) => this.inputHandler(name, value)}
          />
        </fieldset>
      </>
    )
  }
}

export default App