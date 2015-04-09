function changeIndexTo(elem, new_index) {

    function changeAttrIndex(attr, item, index) {
       if (item.attr(attr)){ $(item).attr(attr, item.attr(attr).replace(/\d/, index));}
    }

    function changeId(item, index) {
        changeAttrIndex('for', item, index);
        changeAttrIndex('id', item, index);
    }

    $.each($(elem).find('*'), function (ignored_index, item) {
        changeId($(item), new_index);
    });
    changeId(elem, new_index);
    return elem;
}