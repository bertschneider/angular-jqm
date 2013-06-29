"use strict";
describe("jqmFlip", function () {
    var ng, jqm, ngElementRoot, ngElement, jqmElement;
    beforeEach(function () {
        ng = testutils.ng;
        jqm = testutils.jqm;
        module('templates/jqmFlip.html');
    });


    //
    // WRITE TESTS DAMNIT!
    //

/*
    function triggerNgFlip(event) {
        ngElementRoot.find('div').triggerHandler('click');
    }

    function triggerJqmFlip(event) {

    }
*/

    describe('markup compared to jqm', function () {

        function compile() {
            ngElementRoot = ng.init('<div jqm-flip ng-model="selectedValue" on-label="on" on-value="onValue" off-label="off" off-value="offValue">label</div>');
            ngElement = ngElementRoot.children();
            // ngElementRoot.children()[0] <- label
            // ngElementRoot.children()[1] <- select
            // ngElementRoot.children()[2] <- div mit slidern

            jqmElement = jqm.init('<label for="flip-1">label</label>' +
                '<select name="flip-1" id="flip-1" data-role="slider">' +
                '<option value="offValue">off</option>' +
                '<option value="onValue">on</option>' +
                '</select>');
        };

/*
        it("has same markup if unflipped", function () {
            compile();
            testutils.compareElementRecursive(ngElement, jqmElement);
        });


        it("has same markup if flipped", function () {
            compile();
            triggerNgFlip("click");
            triggerJqmFlip("click");
            testutils.compareElementRecursive(ngElement, jqmElement);
        });
*/
    });
});
