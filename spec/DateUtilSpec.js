describe("DateUtil", function () {

    it("should find gaps", function () {
        expect(hasGap(new Date("12/12/2010"), new Date("12/13/2010"))).toBeFalsy();
        expect(hasGap(new Date("12/12/2010"), new Date("1/13/2011"))).toBeFalsy();
        expect(hasGap(new Date("12/12/2010"), new Date("2/13/2011"))).toBeTruthy();
        expect(hasGap(new Date("12/12/2010"), new Date("12/13/2011"))).toBeTruthy();
    });

    it("should measure number of months between", function () {
        expect(monthsBetween(new Date("12/12/2011"), new Date("12/13/2010"))).toEqual(0);
        expect(monthsBetween(new Date("12/12/2010"), new Date("12/13/2010"))).toEqual(0);
        expect(monthsBetween(new Date("12/12/2010"), new Date("1/12/2011"))).toEqual(0);
        expect(monthsBetween(new Date("12/12/2010"), new Date("1/13/2011"))).toEqual(0);
        expect(monthsBetween(new Date("12/12/2010"), new Date("2/12/2011"))).toEqual(1);
        expect(monthsBetween(new Date("12/12/2010"), new Date("2/28/2011"))).toEqual(1);
        expect(monthsBetween(new Date("12/12/2010"), new Date("3/1/2011"))).toEqual(2);
        expect(monthsBetween(new Date("12/12/2010"), new Date("3/31/2011"))).toEqual(2);
    });

    it("should sort date arrays", function () {
        var d1 = "12/12/2012";
        var d2 = "12/13/2012";
        var d3 = "12/14/2012";
        var input = [d3, d1, d2];
        var expected = [d3, d2, d1];
        expect(sortDates(input)).toEqual(expected);
    });
});
