$(document).ready(function() {
  var table = $('#example').DataTable();

  $('a.toggle-vis').on( 'click', function (e) {
      e.preventDefault();

      // Get the column API object
      var column = table.column( $(this).attr('data-column') );

      // Toggle the visibility
      column.visible( ! column.visible() );
  } );
} );

$(document).ready(function() {
    $('#references').DataTable();
} );

$(document).ready(function() {
    $('#SourceParams').DataTable();
} );
