/* Dynamic loading plugin */
function ccs_init() {
    load_css();
    var ccs_script = document.createElement('script');
    // Adjust js path of the CookieConsent Plugin here
    ccs_script.src = '/js/cookieconsent.min.js';
    ccs_script.type = 'text/javascript';
    ccs_script.onload = function () {
        ccs_app();
    }
    document.body.appendChild(ccs_script)

    function load_css() {
        var ccs_style = document.createElement('link');
        // Adjust css path of the CookieConsent Plugin here
        ccs_style.href = '/css/cookieconsent.min.css';
        ccs_style.rel = 'stylesheet';
        ccs_style.type = 'text/css';
        document.body.appendChild(ccs_style);
    }
}

// Change variables here
var useGeoIPCheck = true;

// Themes colors
var consentBgColor = "#43BCC7";
var consentBtnColor = "#07417C";

// Google Analytics Configuration
// var gaId = "UA-154973784-9";
var gaId = "UA-220497662-1";
var gaDomain = "ao-kreston.ch";

// Facebook pixel Configuration
var fbConfig = {
    appId: "1234234545675686797890",
    cookie: true,
    xfbml: true,
    version: 'v2.10'
};

// Language
var ccs_langs = {
    'de': {
        messageOptIn: "D&uuml;rfen wir Cookies zur Verbesserung Ihrer Nutzererfahrung verwenden? <a href='/de/datenschutz' style='text-decoration: underline'>Mehr dazu</a>",
        messageOptOut: "Diese Webseite verwendet Cookies, um Ihnen die bestm&ouml;gliche Nutzererfahrung zu bieten. <a href='/de/datenschutz' style='text-decoration: underline'>Mehr dazu</a>",
        yesText: "Ja",
        noText: "Nein",
        dismissText: "Alles klar!",
        denyText: "Ablehnen",
        cookiePolicyText: "Cookie-Richtlinien",
        gaOptOutSuccessText: "Das Tracking durch Google Analytics wurde in Ihrem Browser f%FCr diese Website deaktiviert."
    },
    'en': {
        messageOptIn: "Can we use cookies to improve your user experience? <a herf='/en/privacy-policy'>Learn more</a>",
        messageOptOut: "This website uses cookies to ensure you get the best experience on our website. <a herf='/en/privacy-policy'>Learn more</a>",
        yesText: "Yes",
        noText: "No",
        dismissText: "Got it!",
        denyText: "Decline",
        cookiePolicyText: "Cookie Policy",
        gaOptOutSuccessText: "Tracking by Google Analytics has been disabled in your browser for this website."
    },
    'fr': {
        messageOptIn: "Can we use cookies to improve your user experience? <a herf='/fr/politique-de-confidentialite'>Learn more</a>",
        messageOptOut: "This website uses cookies to ensure you get the best experience on our website. <a herf='/fr/politique-de-confidentialite'>Learn more</a>",
        yesText: "Yes",
        noText: "No",
        dismissText: "Got it!",
        denyText: "Decline",
        cookiePolicyText: "Cookie Policy",
        gaOptOutSuccessText: "Tracking by Google Analytics has been disabled in your browser for this website."
    },
};

// Add or remove functions you need here
function loadCookiePlugins() {
    addGATag();
    // addFBPixel();
    // addGCTracking();
}

// Add or remove functions you need here
function removePluginCookies() {
    removeGACookies();
}

// Clear cookies function
function clearCookie(d, b, c) {
    try {
        if (function (h) {
            var e = document.cookie.split(";"),
                a = "",
                f = "",
                g = "";
            for (i = 0; i < e.length; i++) {
                a = e[i].split("=");
                f = a[0].replace(/^\s+|\s+$/g, "");
                if (f == h) {
                    if (a.length > 1) g = unescape(a[1].replace(/^\s+|\s+$/g, ""));
                    return g
                }
            }
            return null
        }(d)) {
            b = b || document.domain;
            c = c || "/";
            document.cookie = d + "=; expires=" + new Date + "; domain=" + b + "; path=" + c
        }
    } catch (j) {
    }
};

// Get field by language
function getFieldForLang(field) {
    lang = lang_parent;
    if (typeof ccs_langs[lang] === "undefined") {
        lang = "en";
    }
    if (typeof ccs_langs[lang][field] !== "undefined") {
        return ccs_langs[lang][field];
    } else
        return "";
}

// Add Google Analytics Code
function addGATag() {
    var script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', gaId, {
        'anonymize_ip': true
    });
};

// Remove Google Analytics Cookies
function removeGACookies() {
    // disable cookies
    clearCookie('_ga', '.' + gaDomain, '/');
    clearCookie('_gat_gtag_' + gaId, '.' + gaDomain, '/');
    clearCookie('_gid', '.' + gaDomain, '/');
    // Get an array of cookies
    var arrSplit = document.cookie.split(';');
    for (var i = 0; i < arrSplit.length; i++) {
        var cookie = arrSplit[i].trim();
        var cookieName = cookie.split('=')[0];
        // If the prefix of the cookies name matches the one specified, remove it
        if (cookieName.indexOf('ssupp.') === 0) {
            // Remove the cookie
            document.cookie = cookieName + '=; Max-Age=-99999999;';
        }
    }
};

// Facebook Pixel Code
function addFBPixel() {
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = function () {
        FB.init(fbConfig);
        FB.AppEvents.logPageView();
    };
}

var mode = 'opt-in';

function ccs_app() {
    function ccs_init(oType) {
        if (oType === undefined) {
            oType = 'opt-in';
        }
        mode = oType;
        var cs_config = {
            "palette": {
                "popup": {
                    text: "#FFF",
                    "background": consentBgColor
                },
                "button": {
                    "background": consentBtnColor
                }
            },
            "theme": "classic",
            "type": oType,
            "showLink": false,
            "content": {
                "message": getFieldForLang('messageOptIn'),
                "allow": getFieldForLang('yesText'),
                "dismiss": getFieldForLang('noText'),
                "deny": getFieldForLang('denyText')
            },
            "law": {
                "regionalLaw": false,
            },
            "revokable": true,
            "revokeBtn": "<div class='cc-revoke {{classes}}'>" + getFieldForLang('cookiePolicyText') + "</div>",
            "animateRevokable": false,
            "onPopupOpen": function () {
                var hasConsented = this.hasConsented();
                if (this.options.type == 'opt-out' && !hasConsented) {
                    loadCookiePlugins();
                }
            },
            "onInitialise": function (status) {
                var type = this.options.type;
                if (type == 'opt-in' && status == 'allow') {
                    // enable cookies
                    loadCookiePlugins();
                }
                if (type == 'opt-out' && status == 'dismiss') {
                    // enable cookies
                    loadCookiePlugins();
                }
                if (type == 'opt-out' && status == 'deny') {
                    // enable cookies
                    removePluginCookies();
                }
            },
            "onStatusChange": function (status, chosenBefore) {
                var type = this.options.type;
                console.log('change: ' + status);
                if (type == 'opt-in' && status == 'allow') {
                    // enable cookies
                    loadCookiePlugins();
                }
                if (type == 'opt-out' && status == 'dismiss') {
                    // enable cookies
                    loadCookiePlugins();
                }
                if (type == 'opt-out' && status == 'deny') {
                    // enable cookies
                    removePluginCookies();
                }
            },
            onRevokeChoice: function () {
                var type = this.options.type;
                if (type == 'opt-in') {
                    removePluginCookies();
                }
            }
        }

        switch (oType) {
            case 'opt-out':
                cs_config.content.message = getFieldForLang('messageOptOut');
                cs_config.content.dismiss = getFieldForLang('dismissText');
                cs_config.content.deny = getFieldForLang('denyText');
                break;
        }

        window.cookieconsent.initialise(cs_config);
    }

    function callIPLocator(isIpEnabled) {
        if (isIpEnabled === undefined) {
            isIpEnabled = false;
        }
        if (isIpEnabled) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) { // XMLHttpRequest.DONE == 4
                    if (xmlhttp.status == 200) {
                        var data = JSON.parse(xmlhttp.responseText);
                        if (data.success == true) {
                            if (data.country == "CH") {
                                ccs_init('opt-out');
                                return;
                            }
                        }
                        return ccs_init('opt-in');
                    } else
                        return ccs_init('opt-in');
                }
            };
            xmlhttp.open('GET', 'https://locator.twcloud.ch/');
            xmlhttp.send();
        } else {
            ccs_init('opt-in');
        }

    }

    // Param = true -> IP Locator enabled / false -> IP Locator disabled (OPT-IN Set)
    callIPLocator(useGeoIPCheck);
}

/* Global Function */
var disableStr = 'cookieconsent_status';

// Opt-out function
function gaOptout() {
    removeGACookies();
    if (mode == 'opt-in') {
        document.cookie = disableStr + '=dismiss; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
        window[disableStr] = 'dismiss';
    } else if (mode == 'opt-out') {
        document.cookie = disableStr + '=deny; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
        window[disableStr] = 'deny';
    }

    alert(unescape(getFieldForLang('gaOptOutSuccessText')));
}

ccs_init();
