import Link from 'next/link'
import React from 'react'

export default class Vare extends React.Component {
  removeHandler() {
    this.props.onRemoveVare(this.props.index)
  }
  render() {
    return (
      <div className="container">
        <div className="vare" ref="varetext">
          {this.props.textwrap}
        </div>
        <div className="action">
          <button id="remove" onClick={this.removeHandler.bind(this)}>
            X
          </button>
        </div>
        <style jsx>{`
          .container {
            padding-left: 60px;
            margin-bottom: 10px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
          }
          .action {
            height: 18px;
            width: 18px;
          }
          button#remove {
            color: white;
            background-color: #462066;
            width: 17px;
            height: 17px;
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            font-size: 1em;
            outline: none;
            border: none;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
          }
          .vare {
            display: inline-block;
            padding: 5px;
            border: solid 2px #462066;
            border-radius: 5px;
            position: relative;
            width: 200px;
            height: auto;
            background-color: lightyellow;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
        `}</style>
      </div>
    )
  }
}
