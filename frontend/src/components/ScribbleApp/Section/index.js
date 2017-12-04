import React from 'react';
import './index.scss';

export default class Section extends React.Component {
  render() {
    return (
      <div className="section-container collapsed">
        <div className="section-header">
          <div className="section-collapse-button">+</div>
          <div className="section-title">{this.props.title}</div>
        </div>
        <div className="section-content" {...this.props}></div>
      </div>
    );
  }
}
