var tier2Util = {
    getOnlyAlphbetAndNumber: function (str) {
        return str.replace(/[^a-zA-Z0-9]/g, '');
    },
    removeWordsNotRelated: function (str) {
        return str.replace(/the|limited|ltd|plc|uk/g, '');
    },
    companyNameCleanUp: function (companyName) {
        return tier2Util.removeWordsNotRelated(tier2Util.getOnlyAlphbetAndNumber(companyName.toLowerCase()));
    },
    isCompanyInTier2List: function (companyNameToCheck) {
        companyNameToCheck = tier2Util.companyNameCleanUp(companyNameToCheck);
        if (companyNameToCheck) {
            for (var i = 0; i < tier2List.length; i++) {
                if (tier2List[i] && tier2List[i].includes(companyNameToCheck)) {
                    return true;
                }
            }
        }
        return false;
    },
    // Get text of element only but not its children's text
    getText: function ($elm) {
        return $elm.clone()    //clone the element
            .children() //select all the children
            .remove()   //remove all the children
            .end()  //again go back to selected element
            .text();
    },
    // Add tier-2-checked to the company name component
    // Add / Remove has-tier-2-license to indicate whether the company has tier-2 license
    companyCheck: function ($companyNameElm) {
        var companyName = tier2Util.getText($companyNameElm);

        if (companyName) {
            $companyNameElm.addClass('tier-2-checked');

            if (tier2Util.isCompanyInTier2List(companyName)) {
                $companyNameElm.addClass('has-tier-2-license');
            } else {
                $companyNameElm.removeClass('has-tier-2-license');
            }
        }
    }
}



