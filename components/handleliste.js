import Link from 'next/link'
import React from 'react'

export default class Handleliste extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0,
    }
  }

  handleOnSubmit(e) {
    e.preventDefault()
  }

  nyVare() {
    this.props.onRenderVarer(this.refs.varetext.value, this.state.index, this.state.index)
    this.setState({ index: this.state.index + 1 })
    this.refs.varetext.value = ''
  }

  render() {
    return (
      <div className="container-main">
        <h2>Legg til varer</h2>
        <form className="container-form" onSubmit={this.handleOnSubmit.bind(this)}>
          <br />
          Hvilken vare skal du handle? <br />
          <input
            type="text"
            className="textfield-vare"
            name="vare"
            placeholder="Kjøttbolle, kake, brus..."
            ref="varetext"
          />
          <br />
          <br />
          <button className="add-btn" onClick={this.nyVare.bind(this)}>
            Legg til vare
          </button>
          <br />
        </form>
        <style jsx>{`
        .container-main{
          display: flex;
          flex-direction: column;
          padding-left: 30px;
          padding-bottom: 30px;
          
        }

        .textfield-vare{
          height: 30px;
          width: 250px;
          font-size: 1em;
          outline: none;
        }

        button.add-btn {
          background-color: #462066;
          border: none;
          border-radius: 5px;
          outline none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
        }
        
       `}</style>
      </div>
    )
  }
}
