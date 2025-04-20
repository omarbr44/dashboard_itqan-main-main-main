
function Ajax_proess(url, btn, data_dict = {}, callbackk = function(){ }) {
    $(btn).prop("disabled", true);
    $(btn).addClass("disabled");
    $(btn).find(".spinner-border").removeClass("d-none");
    $(btn).find(".fa-spinner").removeClass("hidden");
   // console.log(data_dict);
    $.ajax({
        url: url,
        method: 'POST',
        datatype: "html",
        data: data_dict,
        success: function (json) {
            //ajax completed
            $(btn).prop("disabled", false);
            $(btn).removeClass("disabled");
            $(btn).find(".spinner-border").addClass("d-none");
            $(btn).find(".fa-spinner").addClass("hidden");
            if (json.status == "1") {
                
                callbackk(json);
            }
            else {
                alert(json.message);
            }
        }

    });
}
function Ajax_proessJson(url, btn, data_dict = {}, callbackk = function () { }) {
    $(btn).prop("disabled", true);
    $(btn).addClass("disabled");
    $(btn).find(".spinner-border").removeClass("d-none");
    $(btn).find(".fa-spinner").removeClass("hidden");
    // console.log(data_dict);
    $.ajax({
        url: url,
        method: 'POST',
        data: data_dict,//_form.serialize(),
        processData: false,
        contentType: false,
        success: function (json) {
            //ajax completed
            $(btn).prop("disabled", false);
            $(btn).removeClass("disabled");
            $(btn).find(".spinner-border").addClass("d-none");
            $(btn).find(".fa-spinner").addClass("hidden");
            if (json.status == "1") {

                callbackk(json);
            }
            else {
                alert(json.message);
            }
        }

    });
}
function Ajax_Retrival(url, destForm, frm_template, callbackk = function () { }) {
    thisform = $(destForm);
    $.ajax({
        type: "post",
        url: url,
        data: {},
        datatype: "html",
        success: function (json) {
            let _rendered = Mustache.render(frm_template, json.data);
            let f = thisform.get(0); //document.getElementById('frmAdd');
            f.innerHTML = _rendered;
            //process any ajax load
            $('.ajax_load').each(function () {
                
                var $dropdown = $(this);
                let _id = $dropdown.attr('id');
                let _url = $dropdown.data('url');
                let _val = $dropdown.data('val');
                //alert(_id + "$$" + _url);
                if (_id && _url) {
                    loadDropdownData(_url, '#' + _id, _val);
                }
            });
           // alert($('.drp').data('bind'))
            $('.drp').val($('.drp').data('bind'));
            $('.chk').each(function () {

                if ($(this).data('bind') == true) {

                    $(this).prop('checked', true);
                } else {
                    $(this).prop('checked', false);
                }
            });
            callbackk(json);
            //console.log(frmAddTemplate);
            //alert(json.data.Id);
            
            //if (!initialValue && json.data.pid > 0)
            //    initialValue = json.data.pid;
            //$('#pid').val(initialValue).select2({
            //    //data: data,
            //    maximumSelectionLength: 2,
            //    dropdownParent: $("#offcanvasRight")
            //});


        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status + ": " + xhr.responseText);
        }
    });
}
function Ajax_SimpleRetrival(url, callbackk = function () { }) {
    
    $.ajax({
        type: "post",
        url: url,
        data: {},
        datatype: "html",
        success: function (json) {
            
            callbackk(json);
         
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status + ": " + xhr.responseText);
        }
    });
}
function Ajax_SimpleRetrival2(url, btn, callbackk = function () { }) {
    $(btn).prop("disabled", true);
    $(btn).addClass("disabled");
    $(btn).find(".spinner-border").removeClass("d-none");
    $.ajax({
        type: "post",
        url: url,
        data: {},
        datatype: "html",
        success: function (json) {
            $(btn).prop("disabled", false);
            $(btn).removeClass("disabled");
            $(btn).find(".spinner-border").addClass("d-none");
            callbackk(json);

        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status + ": " + xhr.responseText);
        }
    });
}
//==========================
function Init_DataTable(TABLE_ID, TABLE_DATA_URL, TABLE_COLs, TABLE_PAGE_SIZE = 10, TABLE_DEFs, allow_order = false, allow_paging = true, allow_search = true, callbackk = function () { }) {
    var table = $(TABLE_ID).DataTable({

        ajax: {
            url: TABLE_DATA_URL,
            dataSrc: ''
        },
        columns: TABLE_COLs,
        columnDefs: TABLE_DEFs,
        "ordering": allow_order,
        paging: allow_paging,
        searching: allow_search,
        pageLength: TABLE_PAGE_SIZE,
        language: {
            url: "//cdn.datatables.net/plug-ins/1.11.3/i18n/ar.json"
        },
        
        // Callback function for processing data
        initComplete: function (settings, json) {
            callbackk(json);
            //console.log('Data loaded:', json); // Log the entire response
        },
        createdRow: function (row, data, dataIndex) {
            console.log('Data loaded:', "json");
            $(row).addClass('bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'); // Apply multiple CSS classes
        }
    });
    return table;

}

function Init_DataTable_minimal(TABLE_ID, TABLE_DATA_URL, TABLE_COLs, TABLE_PAGE_SIZE = 10, TABLE_DEFs, allow_order = false, allow_paging = true, allow_search = true, callbackk = function () { }) {
    var table = $(TABLE_ID).DataTable({

        ajax: {
            url: TABLE_DATA_URL,
            dataSrc: ''
        },
        columns: TABLE_COLs,
        columnDefs: TABLE_DEFs,
        "ordering": allow_order,
        paging: allow_paging,
        searching: allow_search,
        pageLength: TABLE_PAGE_SIZE,
        language: {
            info: ""
           // url: "//cdn.datatables.net/plug-ins/1.11.3/i18n/ar.json"
        },
        // Callback function for processing data
        initComplete: function (settings, json) {
            callbackk(json);
            //console.log('Data loaded:', json); // Log the entire response
        }
    });
    return table;

}

function Init_DataTable2(TABLE_ID, TABLE_DATA_URL, TABLE_COLs, TABLE_PAGE_SIZE = 10, TABLE_DEFs, allow_order = false, allow_paging = true, allow_search = true, callbackk = function () { }) {
    var table = $(TABLE_ID).DataTable({
        ajax: {
            url: TABLE_DATA_URL,
            dataSrc: ''
        },
        columns: TABLE_COLs,
        columnDefs: TABLE_DEFs,
        "ordering": allow_order,
        paging: allow_paging,
        searching: allow_search,
        pageLength: TABLE_PAGE_SIZE,
        language: {
            url: "//cdn.datatables.net/plug-ins/1.11.3/i18n/ar.json"
        },
        // إضافة الأزرار المخفية في layout
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'copy',
                className: 'button-copy',
                init: function (api, node, config) {
                    $(node).hide(); // إخفاء الزر عند التهيئة
                }
            },
            {
                extend: 'csv',
                className: 'btn-csv',
                init: function (api, node, config) {
                    $(node).hide(); // إخفاء الزر عند التهيئة
                }
            },
            {
                extend: 'excel',
                className: 'buttons-excel',
                init: function (api, node, config) {
                    $(node).hide(); // إخفاء الزر عند التهيئة
                }
            },
            {
                extend: 'pdf',
                className: 'buttons-pdf',
                init: function (api, node, config) {
                    $(node).hide(); // إخفاء الزر عند التهيئة
                }
            },
            {
                extend: 'print',
                className: 'buttons-print',
                init: function (api, node, config) {
                    $(node).hide(); // إخفاء الزر عند التهيئة
                }
            }
        ],
        initComplete: function (settings, json) {
            callbackk(json);
        }
    });

    // أحداث لاستدعاء الأزرار المخفية عند النقر على الأزرار المخصصة
    $('#btnexl').on('click', function () {
        table.button('.buttons-excel').trigger();
    });

    $('#pdf').on('click', function () {
        table.button('.buttons-pdf').trigger();
    });

    $('#Print').on('click', function () {
        table.button('.buttons-print').trigger();
    });

    return table;
}
function Init_DataTable_NoAjax(TABLE_ID, TABLE_PAGE_SIZE = 10, allow_order = false, allow_paging = true, allow_search = true, callbackk = function () { }) {
    var table = $(TABLE_ID).DataTable({
        //ajax: {
        //    url: TABLE_DATA_URL,
        //    dataSrc: ''
        //},
        // columns: TABLE_COLs,
        // columnDefs: TABLE_DEFs,
        "ordering": allow_order,
        paging: allow_paging,
        searching: allow_search,
        pageLength: TABLE_PAGE_SIZE,
        language: {
            url: "//cdn.datatables.net/plug-ins/1.11.3/i18n/ar.json"
        },
        // إضافة الأزرار المخفية في layout
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'copy',
                className: 'button-copy',
                init: function (api, node, config) {
                    $(node).hide(); // إخفاء الزر عند التهيئة
                }
            },
            {
                extend: 'csv',
                className: 'btn-csv',
                init: function (api, node, config) {
                    $(node).hide(); // إخفاء الزر عند التهيئة
                }
            },
            {
                extend: 'excel',
                className: 'buttons-excel',
                init: function (api, node, config) {
                    $(node).hide(); // إخفاء الزر عند التهيئة
                }
            },
            {
                extend: 'pdf',
                className: 'buttons-pdf',
                init: function (api, node, config) {
                    $(node).hide(); // إخفاء الزر عند التهيئة
                }
            },
            {
                extend: 'print',
                className: 'buttons-print',
                init: function (api, node, config) {
                    $(node).hide(); // إخفاء الزر عند التهيئة
                }
            }
        ],
        initComplete: function (settings, json) {
            callbackk(json);
        }
    });

    // أحداث لاستدعاء الأزرار المخفية عند النقر على الأزرار المخصصة
    $('#btnexl').on('click', function () {
        table.button('.buttons-excel').trigger();
    });

    $('#pdf').on('click', function () {
        table.button('.buttons-pdf').trigger();
    });

    $('#Print').on('click', function () {
        table.button('.buttons-print').trigger();
    });

    return table;
}
function loadDropdownData(url, dropdownSelector,init_val='') {
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var dropdown = $(dropdownSelector);
            dropdown.empty(); // remove any existing options
            dropdown.append('<option value="">اختر</option>'); // add a default "Select" option
            //console.log(data ,'aa');
            $.each(data, function (index, item) {
                
                if (init_val && item.id == init_val) {
                    dropdown.append('<option selected value="' + item.id + '">' + item.name + '</option>');
                } else {
                    dropdown.append('<option value="' + item.id + '">' + item.name + '</option>');
                }
                
            });
        },
        error: function (xhr, status, error) {
            console.error('Error loading dropdown data:', error);
        }
    });
}
function loadSelect2DropdownData(url, dropdownSelector, canvaselector, init_val = '') {
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var dropdown = $(dropdownSelector);
            dropdown.empty(); // remove any existing options
            dropdown.append('<option value="">اختر</option>'); // add a default "Select" option
            //console.log(data, 'aa');
            $.each(data, function (index, item) {

                dropdown.append('<option value="' + item.id + '">' + item.name + '</option>');

            });
            $(dropdownSelector).val(init_val).select2({
                //data: data,
                maximumSelectionLength: 2,
                dropdownParent: $(canvaselector)
            });
        },
        error: function (xhr, status, error) {
            console.error('Error loading dropdown data:', error);
        }
    });
}
//=======================
function getOptionTextByValue(el,value) {
    var option = $(el+' option[value="' + value + '"]');
    return option.length ? option.text() : null; // Returns the text or null if not found
}


//function Ajax_SaveForm(frm, btn, callbackk = function () { }) {
//    let _form = $(frm);
//    let datainfo = _form.serialize();
//    let myform = document.getElementById("frmAdd");
//    var formData = new FormData(myform);
//    formresult = {};
//    for (var entry of formData.entries()) {
//        if (entry[0] != '__RequestVerificationToken')
//            formresult[entry[0]] = entry[1];
//        //console.log(entry[0], entry[1]);
//    }
//    console.log(JSON.stringify(formresult));
//    //let form_data = 
//    $(btn).prop("disabled", true);
//    $(btn).addClass("disabled");
//    $(btn).find(".spinner-border").removeClass("d-none");
//    // console.log(data_dict);
//    $.ajax({
//        url: _form.attr("action"),
//        method: 'POST',
//        data: _form.serialize(),
//        datatype: "html",
//        //data: JSON.stringify(formresult),
//        //processData: false,
//        //contentType: false,
//        success: function (json) {
//            $(btn).prop("disabled", false);
//            $(btn).removeClass("disabled");
//            $(btn).find(".spinner-border").addClass("d-none");
//            if (json.status == "1") {
//                callbackk();

//            }
//            else {
//                alert(json.message);
//                window.location.reload();
//            }
//        }

//    });
//}