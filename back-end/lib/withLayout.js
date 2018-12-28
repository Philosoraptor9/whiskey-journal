import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import getContext from './context';
import Header from '../components/Header';

function withLayout(BaseComponent) {
  class App extends React.Component {
    // constructor(props) {
    //   super(props);
    //   const { pageContext } = this.props;
    //   this.pageContext = pageContext || getContext();
    // }

    // componentDidMount() {
    //   const jssStyles = document.querySelector('#jss-server-side');
    //   if (jssStyles && jssStyles.parentNode) {
    //     jssStyles.parentNode.removeChild(jssStyles);
    //   }
    // }

    render() {
      return (
          <div>
            <CssBaseline />
            <Header {...this.props} />
            <BaseComponent {...this.props} />
          </div>
        );
      }
    }
  
    App.getInitialProps = async (ctx) => {
      if (BaseComponent.getInitialProps) {
        return BaseComponent.getInitialProps(ctx);
      }
  
      return {};
    };

  return App;
}

export default withLayout;