import React from 'react';
import QuestionForm from './QuestionForm';
import FlashCard from './FlashCard'

class FlashCards extends React.Component {
  // state = { show: 'question' }
  state = { cards: [] }

  // this.state = { card: [], id: 0 }

  addToQuestion = (question, answer) => {
    let card = { question, answer }
    this.setState({ cards: [...this.state.cards, card] })
  }

 render() {
    let { show } = this.state;
    // let cards = this.state.cards.map( (c, i) => {
    //   return (<FlashCard key={i} {...c} />)
    // })
    return (
      <div>
        <QuestionForm addToQuestion={this.addToQuestion} />
        <FlashCard />

        {/*cards*/}
      </div>
    )
  }
}

export default FlashCards;
