$(function () {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    // For Company Detail Page
    // Observe body change, because jobhero's search result is using Ajax
    var mainObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {

            if ($(mutation.target).is('#jobs-pages')) {
                $('.job-card-company:not(.tier-2-checked)').each(function () {
                    tier2Util.companyCheck($(this));
                });
            }
        });
    });

    var body = $('body').get(0);
    if (body) {
        mainObserver.observe(body, {
            childList: true,
            subtree: true,
            attributes: false
        });
    }

    $('.job-card-company:not(.tier-2-checked)').each(function () {
        tier2Util.companyCheck($(this));
    });
});