$(function () {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    // Observe body change, because whoishiring search result is using Ajax
    var mainObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if ($(mutation.target).is('.list')) {
                $(mutation.addedNodes).each(function () {
                    if (this.nodeType === 1) { // Is element node
                        if ($(this).is('.Item')) {
                            $(this).find('.info > h2 > span:not(.tier-2-checked)').each(function () {
                                tier2Util.companyCheck($(this));
                            })
                        }
                    }
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
});