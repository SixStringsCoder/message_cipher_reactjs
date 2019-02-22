import React, { Component } from 'react';
import './App.css';
import Message from './Message'

class Cipher extends React.Component{
  state = {
    msg_to_encode: [],
    msg_to_decode: [],
    encoded_to_screen: "",
    decoded_to_screen: ""
  }

  set_msg_encode = (text) => {
    const codedLetters = [];
    for (let pos = 0; pos < text.length; pos++) {
      let unicode = text.charCodeAt(pos);
      codedLetters.push(unicode);
    }

    this.setState((state, props) => {
      return {
        msg_to_encode: codedLetters,
        encoded_to_screen: codedLetters.join(' '),
      }
    });
  }

  set_msg_decode = (text) => {
    const encodedLetters = text.split(" ");
    const decodedLetters = [];
    encodedLetters.forEach(char => {
      let text = String.fromCharCode(char);
      decodedLetters.push(text);
    })
    this.setState((state, props) => {
      return {
        msg_to_decode: decodedLetters,
        decoded_to_screen: decodedLetters.join(''),
      }
    });
  }


  render() {
    return (
      <main>
        <header>
          <h1>Message Cipher</h1>
        </header>
        <Message set_msg_encode={this.set_msg_encode}
                 set_msg_decode={this.set_msg_decode}
                 encoded_msg={this.state.encoded_to_screen}
                 decoded_msg={this.state.decoded_to_screen}
                  />
      </main>
    )
  }
}

export default Cipher;
