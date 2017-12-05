import React from 'react';
import Section from '../Section';
import './index.scss';

/**
 * This component contains two main features of the app. On the top, the input
 * for the user to confess. Below that, a synopsis of the history and
 * functionality of the app, with contact info provided.
 */
export default class LeftPane extends React.Component {
  render() {
    return (
      <div>
        <Section title="Confess" collapsed={true}>
          <textarea></textarea>
        </Section>
        <Section title="About" collapsed={true}>
        </Section>
      </div>
    );
  }
}
