import Link from 'next/link'
import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img className="logo" src="../static/logo.png" />
        <style jsx>{`
          .header {
            display: flex;
            background-color: #8ed2c9;
            height: 120px;
            margin: 0;
            border: solid 4px lightgray;
            border-top-right-radius: 40px;
            border-top-left-radius: 5px;
          }
          .logo {
            margin-left: -40px;
          }
        `}</style>
      </div>
    )
  }
}
