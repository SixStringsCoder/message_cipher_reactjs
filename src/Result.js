import React from 'react';

const Result = ({msg}) => {
    return (
      <textarea name="text_code"
                id="msgDecodedArea"
                cols="20"
                rows="10"
                className="result-container"
                value={msg}>
      </textarea>
    )
}

export default Result;
