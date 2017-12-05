import React from 'react';
import Section from '../Section';
import './index.scss';

export default class RightPane extends React.Component {
  state = {
    confessions: [{
      id: 123,
      body: 'I am pretentious. I know this and I hate this, but I am. I can\'t help but look down on people, even if its for silly reasons. I don\'t know why I feel so superior, because I know I am not. I choose not to follow the "mainstream", and so I think that everyone who does is not as good or as smart as me. I\'m not a good person.',
    }, {
      id: 456,
      body: 'i was sitting in the movie theatre last Saturday and popped 16 pills of Dramamine. I was watching "The Village"- and i had seen it the day before- but i got this idea that drugs would make it 10 times scarier, so i saw it again.',
    }, {
      id: 555,
      body: 'Last night I had a dream that I was a girl (I\'m a man, obviously) and I was having sex with a guy. The guy stuck an egg in my vagina and had anal sex with me. Then I started walking around with the egg (still unbroken) in my vagina. I remember it feeling really good (the egg, not the anal).',
    }, {
      id: 919,
      body: 'I\'m still obsessed with my high school crush.',
    }]
  }
  render() {
    return (
      <div className="right-pane">
        <Section title="Confessions" collapsed={false}>
          {this.state.confessions.map(confession => (
            <div className="confession" key={confession.id}>
              <div className="id">
                {confession.id}
              </div>
              <div className="body">
                {confession.body}
              </div>
            </div>
          ))}
        </Section>
      </div>
    );
  }
}
