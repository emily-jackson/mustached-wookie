var badLinkCheck = /^(http)/ig;
var cce = '';
var cceArray = [];
var tempCCE = '';
var pdt = '';
var pdtArray = [];
var tempPDT = '';

(function checkForCase() {
    // make sure a case is loaded
    if (document.querySelector('.a-case-tab')) {
        // there can be multiple case tabs open, so place all CCEs into an array... every check... Maybe not the most efficient way to handle...
        cceArray = document.querySelectorAll('#ticket_custom21');
        cce = cceArray[cceArray.length -1].value;
    
        // don't add a link to the page once it's been added
        if (cce !== tempCCE && !(badLinkCheck.test(cce))) {
            cceArray[cceArray.length - 1].parentElement.insertAdjacentHTML('afterend', "<div class='jiraLink'><img src='https://i.imgur.com/cXxqLDL.png'><a href='https://jira.dev.pardot.com/browse/" + cce + "' target='_blank'>" + cce + "</a><div>");
            // cache the cce of the current page
            tempCCE = cce;
        }
        
        //  place all PDTs into an array
        pdtArray = document.querySelectorAll('#ticket_custom3');
        pdt = pdtArray[pdtArray.length - 1].value;
        
        // don't add a link to the page once it's been added
        if (pdt !== tempPDT && !(badLinkCheck.test(pdt))) {
            pdtArray[pdtArray.length - 1].parentElement.insertAdjacentHTML('afterend', "<div class='jiraLink'><img src='https://i.imgur.com/cXxqLDL.png'><a href='https://jira.dev.pardot.com/browse/" + pdt + "' target='_blank'>" + pdt + "</a></div>");
            // cache the pdt of the current page
            tempPDT = pdt;
        }
    }
    
    // evey 5 seconds check for new cases to linky
    setTimeout(checkForCase, 5000 );
})();
