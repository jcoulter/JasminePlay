describe("HtmlUtil", function () {

    it("should change the index portion of an id", function () {
        expect(changeIdIndexTo($('<div id="MyId3"></div>'), 4)).toHaveAttr('id', 'MyId4');
        expect(changeIdIndexTo($('<div id="My3Id"></div>'), 4)).toHaveAttr('id', 'My4Id');
        expect(changeIdIndexTo($('<div id="3MyId"></div>'), 4)).toHaveAttr('id', '4MyId');
        expect(changeIdIndexTo($('<div id="3My2Id1"></div>'), 4)).toHaveAttr('id', '4My2Id1');
    });

    it("should change the index portion of children element's ids", function () {
        var elem = $('<div id="MyId3"><p>' +
            '<label id="startDate3lbl">My Label</label>' +
            '<input type="text" id="startDate3"/></p></div>');
        var actual = changeIdIndexTo(elem, 4);
        expect(actual).toHaveAttr('id', 'MyId4');
        expect(actual.find('#startDate4lbl')).toExist();
        expect(actual.find('#startDate4')).toExist();
        expect(actual.find('*').length).toEqual(3);
    });

});