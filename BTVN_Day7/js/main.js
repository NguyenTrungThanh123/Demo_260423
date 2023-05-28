document.getElementById('table-generator').onclick =    function()  { CreateTable()};

function CreateTable() {
     var  col = parseInt(document.getElementById('col').value);
     var  row = parseInt(document.getElementById('row').value);
     
     var creTable = document.createElement('table');
     var creThead = document.createElement('thead');
     var creTbody = document.createElement('tbody');
     

     for(i = 0 ; i < row ; i++) {
        var creRow = document.createElement('tr');
        for (j = 1 ; j <= col ; j++)
            {
                var creCol = document.createElement('td');
                if(i == 0){
                    var creContent  = document.createTextNode(" Col " + j);
                }
                else{
                    var creContent  = document.createTextNode("Row " + i + " Col " + j);
                }
                creCol.appendChild(creContent);
                creRow.appendChild(creCol);
            }
        if( i == 0){
            creThead.appendChild(creRow);
        }
        else{
            creTbody.appendChild(creRow);
        }
     }

     creTable.appendChild(creThead);
     creTable.appendChild(creTbody);
     document.getElementById('target').appendChild(creTable);

}

