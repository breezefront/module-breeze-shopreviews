define([
    'jquery',
    'pagebuilderSlider'
], function ($) {
    'use strict';

    if (!$.fn.slick) {
        $.fn.slick = $.fn.pagebuilderSlider;
    }

    return $.breezemap['pagebuilderSlider'];
});
