$(function () {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    // For Company Detail Page
    // Observe body change, because angelList's search result is using Ajax
    var mainObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if ($(mutation.target).is('.startup-container')) {
                $('#startups_content .startup-link:not(.tier-2-checked)').each(function () {
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

    // For Company Detail Page
    $('.profile-text .u-fontWeight500.s-vgBottom0_5').each(function () {
        tier2Util.companyCheck($(this));
    });
});