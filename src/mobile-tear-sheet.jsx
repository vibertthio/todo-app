let React = require('react');

let MobileTearSheet = React.createClass({

  propTypes: {
    height: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      height: 500
    };
  },

  render() {

    let styles = {
      root: {
        float: 'left',
        marginBottom: 50,
        marginRight: 24,
        width: 36,
      },

      container: {
        border: 'solid 1px #d9d9d9',
        overflow: 'hidden',
      },
    };

    return (
      <div style={styles.root}>
        <div style={styles.container}>
          {this.props.children}
        </div>
      </div>
    );
  }

});

module.exports = MobileTearSheet;
