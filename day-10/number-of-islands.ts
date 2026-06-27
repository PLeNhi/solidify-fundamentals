// Duyệt qua phàn tử đầu tiên của mảng 2 chiều nếu nó là 1 thì kiểm tra phần rộng và cao của nó để nếu có 1 thì chuyển thành 0 hết để chắc nó là đất liền với nhau, sau đó duyệt tiếp nếu còn 1 có nghĩa là đảo thứ 2

const numIslands =  (grid:any) => {
	let count = 0;
	for(let row = 0; row < grid.length; row++){
	for(let col = 0; col < grid[row].length; col ++){
	if(grid[row][col] == '1'){
		count ++
		explore(row,col, grid)
            }
        }
    }
    return count
}



function explore(row:number, col:number, grid:any){
     if (row < 0 || col < 0 || row >= grid.length  
         || col >= grid[row].length || grid[row][col] === '0')  {
        return
    }
    
    grid[row][col]='0'
    
	
	//right
	explore(row, col+1, grid)   
    //Left
	explore(row, col-1, grid)  
    //Down
	explore(row+1, col, grid) 
    //Up
	explore(row-1, col, grid)   

}