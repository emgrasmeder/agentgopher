import { connect } from 'react-redux';
import * as actions from '../actions';
import Grid from '../components/Grid.js';

const mapStateToProps = store => ({
  cells: store.cells
});

const mapDispatchersToProps = dispatch => ({
    becomeVisible: cellId => dispatch(actions.becomeVisible(cellId)),
    becomeInvisible: cellId => dispatch(actions.becomeInvisible(cellId)),
});

const connectedGrid = connect(mapStateToProps, mapDispatchersToProps)(Grid);

export default connectedGrid;
