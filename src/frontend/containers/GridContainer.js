import { connect } from 'react-redux';
import * as actions from '../actions';
import Grid from '../components/Grid.js';

const mapStateToProps = store => ({
  cells: store.cells
});

const mapDispatchersToProps = dispatch => ({
    setCellColor: (cellId, color) => dispatch(actions.setCellColor(cellId, color)),
});

const connectedGrid = connect(mapStateToProps, mapDispatchersToProps)(Grid);

export default connectedGrid;
