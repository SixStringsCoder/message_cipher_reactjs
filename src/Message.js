import React, { Component } from 'react';
import Result from './Result'

class Message extends React.Component {
  state = {
    textMsg: "",
    codedMsg: "",
  }

  setText = (e) => {
    this.setState({textMsg: e.target.value});
  }

  setCode = (e) => {
    this.setState({ codedMsg: e.target.value});
  }

  render() {

    const { textMsg, codedMsg } = this.state;
    const { set_msg_encode,
            set_msg_decode,
            encoded_msg,
            decoded_msg } = this.props;
    return (
      <div id="text-btn-container">

        <section id="textArea">
          <textarea name="message"
            id="msgTextArea"
            cols="20"
            rows="10"
            value={this.state.textMsg}
            onChange={this.setText}
            placeholder="enter message"></textarea>

          <textarea name="message"
            id="msgEncodedArea"
            cols="20"
            rows="10"
            value={this.state.codedMsg}
            onChange={this.setCode}
            placeholder="enter coded text"></textarea>
        </section>

        <section id="resultsArea">
          <Result msg={encoded_msg} />
          <Result msg={decoded_msg} />
        </section>

        <section id="btnArea">
          <button id="encodeBtn"
                  className="btn"
                  onClick={() => set_msg_encode(textMsg)}>Encode</button>
          <button id="decodeBtn"
                  className="btn"
                  onClick={() => set_msg_decode(codedMsg)}>Decode</button>
        </section>

      </div>
    )
  }
}

export default Message;
