import React from 'react';

class FlashCard extends React.Component {

 toggleShow = () => {
    let show = 'question'
  }

 question = () => {
    return (
      <div>
        Question Side
      </div>
    )
  }

 answer = () => {
    return (
      <div>
        Answer Side
      </div>
    )
  }

  render() {
    let show = true;
    return (
      <div>
        { show ?
          this.question() : this.answer()
        }
        <button className='btn'
          onClick={this.toggleShow}
        >
          Show { show ? 'Answer' : 'Question' }
        </button>
        <hr />
      </div>
    )
  }
}

export default FlashCard;
