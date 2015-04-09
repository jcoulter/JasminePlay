function changeIndexTo(elem, new_index) {

    function changeAttrIndex(attr, item, index) {
        if (item.attr(attr)) {
            $(item).attr(attr, item.attr(attr).replace(/\d/, index));
        }
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

function appendTo(sorted, containerId) {
    $.each(sorted, function (idx, itm) {
        changeIndexTo($(itm), idx);
        $("#" + containerId).append(itm);
    })
}

function sortDivsIn(containerId, sortedClass) {
    var sorted = $("." + sortedClass).sort(function (a, b) {
        var a_startDate = $(a).children("[name=\"startDate\"]")[0].value;
        var b_startDate = $(b).children("[name=\"startDate\"]")[0].value;
        return a_startDate - b_startDate;
    });

    appendTo(sorted, containerId);
}