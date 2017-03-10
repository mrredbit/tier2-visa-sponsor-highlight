$(function () {
    $('.company').each(function () {
        var companyNameWithLink = $(this).find('a[data-tn-element=companyName]:not(.tier-2-checked)');
        var companyNameWithSpan = $(this).find('span[itemprop=name]:not(.tier-2-checked)');
        if (companyNameWithLink.length > 0) {
            companyNameWithLink.each(function () {
                tier2Util.companyCheck($(this));
            });
        } else if (companyNameWithSpan.length > 0) {
            companyNameWithSpan.each(function () {
                tier2Util.companyCheck($(this));
            });
        } else {
            tier2Util.companyCheck($(this));
        }
    });
});