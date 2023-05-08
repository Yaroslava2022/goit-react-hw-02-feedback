

import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import css from './App.module.css';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = opt => {
    this.setState(prevState => ({
      [opt]: prevState[opt] + 1,
    }));
    // console.log(this.state);
  };

countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  const totalFeedBack = good + neutral + bad;
  return totalFeedBack;
};

countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
  const positivePers = Math.round((good / this.countTotalFeedback()) * 100);
  return positivePers;
};
render() {
  const { good, neutral, bad } = this.state;
  const stateOpt = Object.keys(this.state);
  // const stateVal = Object.values(this.state);
  const isFeedback = Object.values(this.state).some(opt => opt > 0);
  console.log(isFeedback);
  console.log(stateOpt);

  return (
    <div className={css.feedbacksDiv}>
 <div className={css.container}>
        <Section title="Please leave feedback">
          {stateOpt.map((option, index) => (
            <FeedbackOptions
              key={index + 1}
              options={option}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          ))}
        </Section>
        <Section title="Statistics">
          {isFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
      </div>
    );
  }
}
export default App;