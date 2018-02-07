import { connect } from 'react-redux';
import * as actions from '../actions';
import App from '../components/App.js';

const mapStateToProps = store => ({
  cells: store.cells,
});

const mapDispatchersToProps = dispatch => ({
  setCellColor: (id, color) => {
    dispatch(actions.setCellColor(id, color));
    dispatch(actions.sendCellUpdate(id, color));
  },
  socketConnect: (url) => dispatch(actions.websocketConnect(url)),
  clearAll: () => dispatch(actions.sendClearAll())
})
;

const connectedApp = connect(mapStateToProps, mapDispatchersToProps)(App);

export default connectedApp;
