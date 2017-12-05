import React from 'react';
import './index.scss';

export default class Section extends React.Component {
  state = {
    collapsed: false,
  }

  componentDidMount() {
    this.setState({
      collapsed: !!this.props.collapsed,
    });
  }

  toggleCollapse() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div className={`section-container ${this.state.collapsed ? 'collapsed' : 'expanded'}`}>
        <div className="section-header">
          <div
            className="section-collapse-button"
            onClick={this.toggleCollapse.bind(this)}
          >{this.state.collapsed ? '+' : '-'}</div>
          <div
            className="section-title"
            onClick={this.toggleCollapse.bind(this)}
          >{this.props.title}</div>
        </div>
        <div className="section-content" {...this.props}></div>
      </div>
    );
  }
}
