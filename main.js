import './style.css'

$(document).ready(function(){
  $('#userTable').DataTable({
      ajax: './assets/db.json',
      dom: 'Bfrtip',
      columns: [
          {'data' : 'id'},
          {'data' : 'name'},
          {'data' : 'lastname'},
          {'data' : 'profession'},
          {'data' : 'age'},
          {'data' : 'mail', className: "one"},
          {'data' : 'password'},
      ],
  });

  $('#userTable').on('draw.dt', function(){
      $('#userTable').Tabledit({
          ajax: './assets/db.json',
          dataType: 'json',
          columns: {
              identifier: [0 , 'id'],
              editable:[[5, 'mail'], [6, 'password']]
          },
          restoreButton: false,
          onSuccess: function(data, textStatus, jqXHR){
              if(data.action == 'delete'){
                  $('a' + data.id).remove();
                  $('#userTable').DataTable().ajax.reload();
              }
          }
      })
  })


});



