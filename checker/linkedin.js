$(function () {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    // Observe body change, because linkedin is using Ajax
    var mainObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            $(mutation.addedNodes).each(function () {
                if (this.nodeType === 1) { // Is element node
                    if ($(this).is('.job-card__company-name:not(.tier-2-checked)')) {
                        tier2Util.companyCheck($(this));
                    }

                    if ($(this).is('.jobs-details-top-card__company-url:not(.tier-2-checked)')) {
                        if ($(this)) {
                            jobDetailTopObserver.observe($(this).get(0), {
                                childList: true,
                                subtree: true,
                                attributes: true
                            });
                        }
                        tier2Util.companyCheck($(this));
                    }
                }
            });
        });
    });

    // Observe the jobs detail page top company name change because it is using Ajax
    var jobDetailTopObserver = new MutationObserver(function (mutations) {
        tier2Util.companyCheck($('.jobs-details-top-card__company-url').first());
    });

    var body = $('body').get(0);
    if (body) {
        mainObserver.observe(body, {
            childList: true,
            subtree: true,
            attributes: false
        });
    }

    // First round of checking
    var $jobDetailTopCompanyName = $('.jobs-details-top-card__company-url:not(.tier-2-checked)');
    if ($jobDetailTopCompanyName.length > 0) {
        jobDetailTopObserver.observe($jobDetailTopCompanyName.get(0), {
            childList: true,
            subtree: true,
            attributes: true
        });
        tier2Util.companyCheck($jobDetailTopCompanyName.first());
    }

    $('.job-card__company-name:not(.tier-2-checked)').each(function () {
        tier2Util.companyCheck($(this));
    });

});