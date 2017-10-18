import { connect } from 'react-redux';
import * as actions from '../actions';
import Grid from '../components/Grid.js';

const mapStateToProps = store => ({
    cells: store.cells.content,
});

const mapDispatchersToProps = dispatch => ({
    becomeVisible: cellId => dispatch(actions.becomeVisible(cellId)),
    becomeInvisible: cellId => dispatch(actions.becomeInvisible(cellId)),
});

console.log("connecting grid to store")
export default connect(mapStateToProps, mapDispatchersToProps)(Grid);
