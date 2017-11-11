import { connect } from 'react-redux';
import * as actions from '../actions';
import Grid from '../components/Grid.js';

const mapStateToProps = store => ({
  cells: store.cells
});

const mapDispatchersToProps = dispatch => ({
    becomeVisible: cell => dispatch(actions.becomeVisible(cell)),
    becomeInvisible: cell => dispatch(actions.becomeInvisible(cell)),
});

const connectedGrid = connect(mapStateToProps, mapDispatchersToProps)(Grid);

export default connectedGrid;
