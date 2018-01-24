import Link from 'next/link'
import * as React from 'react'
import Header from '../components/head'
import Handleliste from '../components/handleliste'
import Vare from '../components/vare'
import { CSSTransition, transit, CSSTransitionGroup } from 'react-css-transition'

//https://wikiwi.github.io/react-css-transition/

const FadeInOut = props => (
  <CSSTransition
    {...props}
    defaultStyle={{ opacity: 0 }}
    enterStyle={{ opacity: transit(1.0, 400, 'ease-out') }}
    leaveStyle={{ opacity: transit(0, 400, 'ease-out') }}
    activeStyle={{ opacity: 1.0 }}
  />
)

const SmoothHeight = props => (
  <CSSTransition {...props} defaultStyle={{ height: this.props.height }} />
)
const FadeInOutGroup = props => (
  <CSSTransitionGroup {...props}>
    {React.Children.map(props.children, child => <FadeInOut>{child}</FadeInOut>)}
  </CSSTransitionGroup>
)

export default class Homepage extends React.Component {
  constructor() {
    super()
    this.state = {
      varer: [
        <Vare
          textwrap="Legg til varer"
          index={0}
          onRemoveVare={this.onRemoveVare.bind(this)}
          key={0}
        />
      ],
      active: true
    }
  }

  onRemoveVare(index) {
    console.log('fjerner vare ' + index)
    var arr = this.state.varer.filter(item => item.props.index !== index)
    this.setState({ varer: arr })
  }

  onRenderVarer(text, index) {
    if (text) {
      this.setState(prevState => ({
        varer: [
          ...prevState.varer,
          <Vare
            textwrap={text}
            key={index}
            index={index}
            onRemoveVare={this.onRemoveVare.bind(this)}
          />
        ]
      }))
    } else {
      console.log('ingen vare')
    }
  }

  render() {
    return (
      <div className="bodi">
        <Header />

        <div className="handleliste-container">
          <div className="handlelisteform">
            <Handleliste onRenderVarer={this.onRenderVarer.bind(this)} />
          </div>

          <div className="handleliste" ref="render_varer">
            <br />
            <FadeInOutGroup>{this.state.varer}</FadeInOutGroup>
          </div>
        </div>
        <style jsx>{`

      

        .bodi{
          width: 1000px;
          margin: 0 auto;
        }

          input.varenavn{
            outline: none;
            font-size: 16px;
            height: 30px;
            width: 300px;

          }

          input.add-btn {
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
          ul {
            list-style: none;
          }
          .handleliste-container {
            display: flex;
            flex-wrap: wrap;
            margin: 0;
          }
          .handleliste {
            background-color: #00aaa0;
            border-top: 0;
            width: 34%;
            height: 600px;
            overflow:scroll;
            border-left: solid 2px lightgray;
            border-right: solid 4px lightgray;
            border-bottom: solid 4px lightgray;
          
          }
          .handlelisteform {
            flex-wrap: wrap;
            background-color: #ff7a5a;
            flex-grow:1;
            border-top: 0;
            border-right: solid 2px lightgray;
            border-left: solid 4px lightgray;
            border-bottom: solid 4px lightgray;
            border-bottom-left-radius: 40px;
          }

          h2 {
            margin-left: 40px;
          }
        `}</style>
      </div>
    )
  }
}
