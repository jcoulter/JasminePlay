function changeIdIndexTo(elem, new_index) {

    function changeId(item, index) {
        return (item.attr('id')) ? $(item).attr("id", item.attr('id').replace(/\d/, index)) : item;
    }

    $.each($(elem).find('*'), function (ignored_index, item) {
        changeId($(item), new_index);
    });
    return changeId(elem, new_index);
}