const styles = {};

const gridSize = 100;

styles.grid = {
  height: gridSize,
  width: gridSize,
  border: '3px solid black',
};

const cellMargin = 4;
styles.cell = (hidden) =>{
  return {
    height: (gridSize / 3) - (cellMargin * 2),
    width: (gridSize / 3) - (cellMargin * 2),
    background: hidden ? 'white' : 'cadetblue',
    margin: cellMargin,
    float: 'left',
  };
};


export default styles;