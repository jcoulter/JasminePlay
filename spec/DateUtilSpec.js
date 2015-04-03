describe("DateUtil", function () {
    var dateUtil;

    beforeEach(function () {
        dateUtil = new DateUtil;
    });

    it("should find gaps", function () {
        expect(dateUtil.hasGap(new Date("12/12/2010"), new Date("12/13/2010"))).toBeFalsy();
        expect(dateUtil.hasGap(new Date("12/12/2010"), new Date("1/13/2011"))).toBeFalsy();
        expect(dateUtil.hasGap(new Date("12/12/2010"), new Date("2/13/2011"))).toBeTruthy();
        expect(dateUtil.hasGap(new Date("12/12/2010"), new Date("12/13/2011"))).toBeTruthy();
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
});
