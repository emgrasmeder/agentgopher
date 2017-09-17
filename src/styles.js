const styles = {};

styles.gridSize = 100;

styles.grid = {
  height: styles.gridSize,
  width: styles.gridSize,
  border: '3px solid black',
};

const cellMargin = 4;
styles.cell = (hidden) =>{
  return {
    height: (styles.gridSize / 3) - (cellMargin * 2),
    width: (styles.gridSize / 3) - (cellMargin * 2),
    background: hidden ? 'white' : 'cadetblue',
    margin: cellMargin,
    float: 'left',
  };
};


export default styles;