import { connect } from 'react-redux';
import * as actions from '../actions';
import Grid from '../components/Grid.js';

const mapStateToProps = store => ({
  cells: store.cells,
});

const mapDispatchersToProps = dispatch => ({
  setCellColor: (id, color) => {
    dispatch(actions.setCellColor(id, color));
    dispatch(actions.websocketSend(id, color));
  },
  socketConnect: (url) => dispatch(actions.websocketConnect(url)),
})
;

const connectedGrid = connect(mapStateToProps, mapDispatchersToProps)(Grid);

export default connectedGrid;
