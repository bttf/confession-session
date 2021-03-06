import React from 'react';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import './App.scss';

export default class ScribbleApp extends React.Component {
  render() {
    return (
      <div className="scribble-app-container">
        <div className="header">
          <div className="header-inner-container">
            Scribble.today
            <div className="subtitle">
              A place to confess, anonymously.
            </div>
          </div>
        </div>

        <div className="pane-container">
          <LeftPane />
          <RightPane />
        </div>

        <div className="copyright-info">
          Copyright 2017 Scribble.today
        </div>
      </div>
    );
  }
}
