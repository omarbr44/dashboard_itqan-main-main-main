function fn_openDialog(modal_template = "dialog", txt1 = 'تأكيد حذف المستخدم', message = 'يبدو انك على وشك حذف المستخدم خل تود فعلا هذا المستخدم المباشر', callbackk = function () { }) {
    function handleClick() {
        //alert('Button was clicked!');
        callbackk();
    }
    let tmpl = md_dialog_template;
    let modal_name = "dialog_md";
    if (modal_template == "dialog") {
        tmpl = md_dialog_template;
        modal_name = "dialog_md";
    } else if (modal_template == "error") {
        tmpl = md_delete_template;
        modal_name = "delete_md"
    }
    const MODAL_ID = '#' + modal_name;
    let _data = { "TXT": txt1, "MSG": message };
    let _$rendered = Mustache.render(tmpl, _data);
    let $el = $(MODAL_ID);
    $el.innerHTML = _$rendered;

    //console.log($el.innerHTML);
    $(MODAL_ID + '_cd').html(_$rendered);
    $(MODAL_ID + '_cd')
    $(MODAL_ID + '_btn').on('click', handleClick);

    $el.removeClass('hidden');

}
