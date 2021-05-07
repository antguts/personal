function chessBoardCellColor(cell1, cell2) {
    let matrix= []
  //   1 equals true
    let current=true
    
    for(let i=0;i<7;i++){
      for(let j=0;j<7;j++){
        matrix[i][j]=current
        (current == true)? current =false : current =true
      }
        (current == true)? current =true : current =false
    }
    
    return matrix
    
    
  }
  
  chessBoardCellColor(1, 2)