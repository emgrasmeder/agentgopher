const styles = {};

const gridSize = 486;

styles.grid = {
  height: gridSize,
  width: gridSize,
  border: '3px solid black',
background: 'darkslategrey',
};

const cellMargin = 1;
styles.cell = (hidden) =>{
  return {
    height: '25px',
    width: '25px',
    background: hidden ? 'white' : 'cadetblue',
    margin: cellMargin,
    float: 'left',
  };
};


export default styles;