"use strict";
describe('jqmPage', function() {
    it('generates same markup as data-role="page", including dynamic classes for the viewport', function() {
        var ng = testutils.ng,
            jqm = testutils.jqm;
        ng.init('<div jqm-page></div>');
        jqm.init('<div data-role="page"></div>');
        testutils.compareElementRecursive(ng.viewPort, jqm.viewPort);
    });
    it('generates same markup as data-role="page" when a theme is set, including dynamic classes for the viewport', function() {
        var ng = testutils.ng,
            jqm = testutils.jqm;
        ng.init('<div jqm-page jqm-theme="a"></div>');
        jqm.init('<div data-role="page" data-theme="a"></div>');
        testutils.compareElementRecursive(ng.viewPort, jqm.viewPort);
    });
});