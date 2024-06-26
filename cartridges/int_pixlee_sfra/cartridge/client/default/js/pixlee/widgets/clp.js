'use strict';

/* global Pixlee */

module.exports = function () {
    var $pixleeContainer = $('#pixlee_container');

    if ($pixleeContainer.length) {
        var apiKey = $pixleeContainer.data('apikey');
        var widgetId = $pixleeContainer.data('widgetid');
        var categoryId = $pixleeContainer.data('categoryid');

        window.PixleeAsyncInit = function () {
            Pixlee.init({ apiKey: apiKey });
            Pixlee.addCategoryWidget({
                widgetId: widgetId,
                nativeCategoryId: categoryId,
                ecomm_platform: 'demandware',
                getCookieConsent: true
            });

            if ($('#pixlee-events-init').length) { // presence of this element in the DOM means tracking is allowed
                Pixlee.acceptCookiePolicy();
            }
        };

        $.getScript('//assets.pxlecdn.com/assets/pixlee_widget_1_0_0.js');
    }
};
