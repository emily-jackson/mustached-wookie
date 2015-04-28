var cce = '';
var cceArray = [];
var pdt = '';
var pdtArray = [];
var tempCCE = '';
var tempPDT = '';
(function checkForCase() {
    // make sure a case is loaded
    if (document.querySelector('.a-case-tab')) {
        
        //  how I'm handling Desk tabs - place all CCEs into an array
        cceArray = document.querySelectorAll('#ticket_custom21');
    
        // don't add a link to the page if we're still on the same page
        if (cce !== tempCCE) {
            cceArray[cceArray.length - 1].insertAdjacentHTML('beforebegin', "<a href='https://jira.dev.pardot.com/browse/" + cce + "' target='_blank'>" + cce + "</a>");
            // cache the cce of the current page
            tempCCE = cce;
        }
        
        //  how I'm handling Desk tabs - place all PDTs into an array
        pdtArray = document.querySelectorAll('#ticket_custom3');
        
        // don't add a link to the page if we're still on the same page
        if (pdt !== tempPDT) {
            pdtArray[pdtArray.length - 1].insertAdjacentHTML('beforebegin', "<a href='https://jira.dev.pardot.com/browse/" + pdt + "' target='_blank'>" + pdt + "</a>");
            // cache the pdt of the current page
            tempPDT = pdt;
        }
    }
    
    // evey 5 seconds check for new cases to linky
    setTimeout(checkForCase, 5000 );
})();
