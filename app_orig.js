$(document).ready(function() {

    var dataSet = [
        ['One', 'Chrome', 'Windows 7', '4', 'X'],
        ['Two', 'Internet Explorer', 'Windows 7', '5', 'X'],
        ['Three', 'Firefox', 'Windows 7', '5.5', 'X'],
        ['Four', 'Safari', 'Macbook', '6', 'X'],
        ['Five', 'Chrome', 'Macbook', '7', 'X']
    ];

    var table = $('#wo_data_table').DataTable({
        "data": dataSet,
        "ordering": false,
        "columns": [{
            "title": "Engine"
        }, {
            "title": "Browser"
        }, {
            "title": "Platform"
        }, {
            "title": "Modern Browser",
            "class": "center"
        }, {
            "title": "Add/Delete",
            "class": "center"
        }],

        "columnDefs": [{
            "targets": 3,

            "render": function(data, type, full, meta) {
                console.log("data = " + data);

                if (data >= 6) {
                    return '<input type="checkbox" name="" value="" checked>';
                } else {
                    return '<input type="checkbox" name="" value="" >';
                }

            }
        }, {
            "targets": 2,

            "render": function(data, type, full, meta) {
                console.log("data = " + data);

                if (data == '1.3') {
                    return '<input type="text" name=""  >';
                } else {
                    return data;
                }

            }
        }, {
            "targets": 4,

            "render": function(data, type, full, meta) {
                console.log("data = " + data);

                var del = '<button  class="btn btn-danger" onclick="deleteRow(this)"><span class="glyphicon glyphicon-minus-sign"></button>';
                var add = '<button class="btn btn-primary" onclick="commit(this)"> <span class="glyphicon glyphicon-plus-sign"></span></button>';
                if (data == '1.5') {
                    return add + del;
                } else {
                    return del;
                }
                return del;
            }
        }]
    });



    $('#addRow').on('click', add_row);

    //row selection 
    // $('#wo_data_table tbody').on('click', 'tr', function() {
    //     if ($(this).hasClass('selected')) {
    //         $(this).removeClass('selected');
    //     } else {
    //         table.$('tr.selected').removeClass('selected');
    //         $(this).addClass('selected');
    //     }
    // });

    //delete selected row..
    // $('.deleteRow').click(function() {
    //     console.log(this);
    //     var tr = $(this).closest("tr");
    //     var rowindex = tr.index();

    //     $('#wo_data_table').dataTable().fnDeleteRow(rowindex);
    // });

    // //commit row..
    // //
    // $('.commitRow').click(function() {
    //     console.log(this);
    //     var tr = $(this).closest("tr");
    //     var rowindex = tr.index();

    //     console.log('data committed for row ' + rowindex);

    // });



    $("#wo_data_table").css('visibility', 'visible');

 
   
});

function commit(data) {
    console.log("commit called ");

    var list = ['a', 'b'];

    var info = $("td input[type=text]").each(function(idx) {

        this.outerHTML = this.value;

        list.push(this.value);
    });
    list = list.concat (['4', '5']);

    var row = $(data).closest('tr');
    var nRow = row[0];


   var oTable = $('#wo_data_table').dataTable();
    oTable.fnUpdate( list, nRow);
}

function deleteRow(data) {
    console.log(data);
    var row = $(data).closest('tr');
    var nRow = row[0];
    $('#wo_data_table').dataTable().fnDeleteRow(nRow);
};

// add row..
var counter = 1;

function add_row() {
    var tbl = $('#wo_data_table').DataTable();

    tbl.row.add([
            counter + '.1',
            counter + '.2',
            counter + '.3',
            counter + '.4',
            counter + '.5'
        ])
        .rows()
        .invalidate()
        .draw();



};