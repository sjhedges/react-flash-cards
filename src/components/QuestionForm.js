import React from 'react';

class QuestionForm extends React.Component {

  addQuestion = (e) => {
    e.preventDefault();
    let question = this.question.value
    let answer = this.answer.value
    this.props.addToQuestion(question, answer)
    this.form.reset();
  }

  render() {
    return(
      <div>
        <form ref={ n => this.form = n } onSubmit={this.addQuestion}>
          <input required ref={ n => this.question = n } placeholder= 'Add A Question' />
          <input required ref={ n => this.answer = n } placeholder= 'Add An Answer' />
          <button className="btn">Add Card</button>
        </form>
      </div>
    )
  }
}

export default QuestionForm;
