import React from 'react';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import './ScribbleApp.scss';

export default class ScribbleApp extends React.Component {
  render() {
    return (
      <div className='scribble-app-container'>
        <LeftPane />
        <RightPane />
      </div>
    );
  }
}
