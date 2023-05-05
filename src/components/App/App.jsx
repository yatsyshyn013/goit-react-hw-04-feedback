// import React, { Component } from 'react'
import {useState} from 'react'

import {FeedbackOptions} from '../FeedbackOptions/FeedbackOptions'
import { FeedbackContainer } from './App.styled'
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';



export default function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total
      ? Math.floor((good * 100) / countTotalFeedback())
      : 0;
  }

  const onLeaveFeedback = option => {
    if (option === "good") {
      setGood(prevState => prevState + 1)
    }

    if (option === "neutral") {
      setNeutral(prevState => prevState + 1)
    }

    if (option === "bad") {
      setBad(prevState => prevState + 1)
    }

  }

  return (
    (
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
       
        <FeedbackContainer>

          <Section title={'Please leave feedback'}>
            <FeedbackOptions
              options={["good", "neutral", "bad"]}
              onLeaveFeedback={onLeaveFeedback}
            />
          </Section>

           
          {countTotalFeedback() > 0
            ? <Section title={'Statistics'}>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
            </Section>
            : <Notification message={'There is no feedback'}></Notification>
          } 
        </FeedbackContainer>
    </div>)
  )
}

