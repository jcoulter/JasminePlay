describe("HtmlUtil", function () {

    it("should change the index portion of an id", function () {
        expect(changeIndexTo($('<div id="MyId3"></div>'), 4)).toHaveAttr('id', 'MyId4');
        expect(changeIndexTo($('<div id="My3Id"></div>'), 4)).toHaveAttr('id', 'My4Id');
        expect(changeIndexTo($('<div id="3MyId"></div>'), 4)).toHaveAttr('id', '4MyId');
        expect(changeIndexTo($('<div id="3My2Id1"></div>'), 4)).toHaveAttr('id', '4My2Id1');
    });

    it("should change the for attribute of a label", function () {
        expect(changeIndexTo($('<div id="MyId3" for="Input3"></div>'), 4)).toHaveAttr('id', 'MyId4');
        expect(changeIndexTo($('<div id="MyId3" for="Input3"></div>'), 4)).toHaveAttr('for', 'Input4');
    });

    it("should change the index portion of children element's ids", function () {
        var elem = $('<div id="MyId3"><p>' +
            '<label id="startDate3lbl" for="startDate3">My Label</label>' +
            '<input type="text" id="startDate3"/></p></div>');
        var actual = changeIndexTo(elem, 4);
        expect(actual).toHaveAttr('id', 'MyId4');
        expect(actual.find('#startDate4lbl')).toExist();
        expect(actual.find('#startDate4lbl')).toHaveAttr('for', 'startDate4');
        expect(actual.find('#startDate4')).toExist();
        expect(actual.find('*').length).toBe(3);
    });

    it("should append elements to list - and update their ids", function (){
        setFixtures(sandbox({id: 'MyId'})) ;
        var toAppendStr = '<div id="appended1"/><div id="appended2"/>'
        appendTo($(toAppendStr), "MyId");
        var appended = $.makeArray($("#MyId").find('*'));
        expect(appended.length).toBe(2);
        expect($(appended[0]).attr('id')).toBe("appended0");
        expect($(appended[1]).attr('id')).toBe("appended1");
    });

});