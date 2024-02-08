function insert_Row() {
    //Write your code here
  const table=document.getElementById('sampleTable');
	const newRow=table.insertRow(0);
	newRow.insertAdjacentHTML('beforeend', '<td>New Cell1</td><td>New Cell2</td>')
}
