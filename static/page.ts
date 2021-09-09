const fUtil = require("../misc/file.ts");
const stuff = require("./info");
const http = require("http");

function toAttrString(table) {
	return typeof table == "object"
		? Object.keys(table)
				.filter((key) => table[key] !== null)
				.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(table[key])}`)
				.join("&")
		: table.replace(/"/g, '\\"');
}
function toParamString(table) {
	return Object.keys(table)
		.map((key) => `<param name="${key}" value="${toAttrString(table[key])}">`)
		.join(" ");
}
function toObjectString(attrs, params) {
	return `<object id="obj" ${Object.keys(attrs)
		.map((key) => `${key}="${attrs[key].replace(/"/g, '\\"')}"`)
		.join(" ")}>${toParamString(params)}</object>`;
}

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @param {import("url").UrlWithParsedQuery} url
 * @returns {boolean}
 */
module.exports = function (req, res, url) {
	if (req.method != "GET") return;
	const query = url.query;

	var attrs, params, title;
	switch (url.pathname) {
		case "/videomaker/full/": {
			let presave =
				query.movieId && query.movieId.startsWith("m")
					? query.movieId
					: `m-${fUtil[query.noAutosave ? "getNextFileId" : "fillNextFileId"]("movie-", ".xml")}`;
			attrs = {
				data: process.env.SWF_URL + "/go_full.swf",
				type: "application/x-shockwave-flash",
				
				id: "Studio",
                                swf: process.env.SWF_URL + "/go_full.swf",
                                width: "100%",
                                height: "100%",

                                align: "middle",
                                allowScriptAccess: "always",
                                allowFullScreen: "true",
                                wmode: "window",

                                hasVersion: "10.3"
			};
			params = {
				flashvars: {
                                        movieId: "",
					loadas: 0,
					asId: "",
					originalId: "",
					presaveId: presave,
					apiserver: "/",
					storePath: process.env.STORE_URL + "/<store>",
					clientThemePath: process.env.CLIENT_URL + "/<client_theme>",
					animationPath: process.env.SWF_URL + "/",
					userId: "0DyHqK6Yj9dM",
					username: "good bois",
					uemail: "crazy suitcase",
					numContact: "0",
					ut: 23,
					ve: false,
					isEmbed: 0,
					nextUrl: "/go/movie/?movieId=<movieId>",
					bgload: process.env.SWF_URL + "/go_full.swf",
					lid: "13",
					ctc: "go",
					themeColor: "silver",
					tlang: "en_US",
					siteId: "13",
					templateshow: "false",
					forceshow: "false",
					appCode: "go",
					lang: "en",
					tmcc: "192",
					fb_app_url: "/",
					is_published: "1",
					is_private_shared: "0",
					upl: 1,
					role: "student",
					hb: "1",
					pts: "0",
					msg_index: "",
					ad: 0,
					has_asset_bg: 0,
					has_asset_char: 0,
					initcb: "studioLoaded",
					retut: 0,
					s3base: "https://josephcrosmanplays532.github.io/s3base/",
					st: "",
					uisa: 0,
					u_info_school: "OjI6bVFMTXBnN1pPRTdkeHJLamtiT1ZUZ2RoOXhHVmg5N2loU3VLZTJEYlp4WWxqcTY3aHhZbG1DVjJhUldkc2xxNVZWNVgyV2VOeTNVVlpPUWRHbkJlUkNyMTBSM2QyT2kxNmxHc2NsbEVpVXFnZklqMTBsNHVjPQ==",
					tm: "FIN",
					tray: "retro",
					uplp: 0,
					isWide: 1,
				},
				movie: process.env.SWF_URL + "/go_full.swf",
			};
			break;
		}

		default:
			return;
	}
	res.setHeader("Content-Type", "text/html; charset=UTF-8");
	Object.assign(params.flashvars, query);
	res.end(
		`<html lang="en"><head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<link rel="dns-prefetch" href="/">

<title>The Video Maker From GoAnimate - Make a Video For YouTube!</title>

<meta name="viewport" content="width=device-width, initial-scale=1">

<meta name="description" content="The Video Maker lets You make a video for YouTube for free! Drag &amp; drop or type &amp; go.  It's Fast, Fun, Easy and Free -  GoAnimate!">

<meta property="og:site_name" content="GoAnimate for Schools">
<meta property="fb:app_id" content="122508887813978">
<meta name="google-site-verification" content="Vta3YTpj6Kx6u4p-EzeMArY0alNItkyUYYMvNM8seVI">

<link rel="stylesheet" href="https://josephcrosmanplays532.github.io/static/642cd772aad8e952/school/css/common_combined.css.gz.css">

<link rel="stylesheet" href="/html/css/studio.css">

<script>
var srv_tz_os = -4, view_name = "school", user_cookie_name = "u_info_school";
var user_country = "US";
</script>

<!--[if lt IE 9]>
<script src="https://d2qrjeyl4jwu9j.cloudfront.net/static/642cd772aad8e952/go/js/lib/html5shiv.js.gz.js"></script>
<![endif]-->
<script src="https://josephcrosmanplays532.github.io/static/642cd772aad8e952/school/js/common_combined.js.gz.js"></script>
<script type="text/javascript" src="https://josephcrosmanplays532.github.io/static/477/go/po/goserver_js-en_US.json"></script>
<script type="text/javascript">
var I18N_LANG = 'en_US';
var GT = new Gettext({'locale_data': json_locale_data});
</script>
<script src="https://josephcrosmanplays532.github.io/ajax/cookie_policy.js" async=""></script>
<script src="https://josephcrosmanplays532.github.io/static/477/go/js/movie.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/477/go/js/cookie.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/477/go/js/studio.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/477/go/js/jquery/jquery.tmpl.min.js"></script>
<script src="https://josephcrosmanplays532.github.io/school/js/studio.js.gz.js"></script>

<!-- Google Knowledge Graph -->
<script type="application/ld+json">
{
    "@context": "http://web.archive.org/web/20181226033546/http://schema.org",
    "@type": "Organization",
    "name": "GoAnimate",
    "url": "http://josephcrosmanplays532.github.io",
    "logo": "http://gawpstorage.s3.amazonaws.com/img/google_knowledge_graph_logo.jpg",
    "sameAs": [
        "http://www.facebook.com/GoAnimateInc",
        "http://twitter.com/GoAnimate",
        "http://www.linkedin.com/company/goanimate",
        "http://plus.google.com/+goanimate",
        "http://www.youtube.com/user/GoAnimate"
    ]
}
</script>

</head>
<body class="page-action-videomaker full_screen_studio" style="">
<script type="text/javascript">
if (self !== top) {
            jQuery('body').hide();
    }
</script>


<div style="position:relative;">
    <div id="studioBlock" style="height: 0px;"><!-- --></div>

    <div id="playerBlock"></div>
</div>

    <div id="previewPlayerContainer" style="display: none;">
        <div class="preview-player" id="previewPlayer">
            <h2>Preview Video</h2>
            <div id="playerdiv"></div>
            <div class="buttons clearfix">
                <button class="preview-button save" onclick="switchBackToStudio();">< Back to editing</button>
                <button class="preview-button save" onclick="publishStudio();">Save Now ></button>            </div>

            <a class="close_btn" href="#" onclick="switchBackToStudio(); return false;">×</a>
        </div>
    </div>
    <div class="video-tutorial" id="video-tutorial" style="display: none;">
        <div class="video-tutorial-body">
            <h2>&nbsp;</h2>
            <div class="video-tutorial-player">
                <div id="wistia_player" class="wistia_embed" style="width:860px;height:445px">&nbsp;</div>
            </div>
            <a class="close_btn" href="#" onclick="return false;">×</a>
        </div>
        <div class="video-tutorial-footer clearfix">
            <button class="tutorial-button" type="button">
                Close            </button>
        </div>
    </div>


<div style="display:none">
    
</div>

<script>
    
    var hideHTMLBox = function() {
        window.close();
    };

    function tutorialStarted() {
    }
    function tutorialStep(sn) {
    }
    function tutorialCompleted() {
    } 

    var enable_full_screen = true;

    var studio_data = {
        id: "Studio",
        swf: "https://josephcrosmanplays532.github.io/animation/857/go_full.swf",
        width: "100%",
        height: "100%",

        align: "middle",
        allowScriptAccess: "always",
        allowFullScreen: "true",
        wmode: "window",

        hasVersion: "10.3"
    };

    if (!enable_full_screen) {
        studio_data.width  = 960;
        studio_data.height  = 630;
        resize_studio = false;
    }

studio_data.flashvars = ${JSON.stringify(params.flashvars)};

var _ccad = null;

function proceedWithFullscreenStudio() {
    // These should be executed only when we are really ready to show the studio
    window.onbeforeunload = function(e) {
        var e = e || window.event;
        var msg = null;
        if (loadedFullscreenStudio && studioApiReady) {
            msg = 'You are about to lose all your unsaved changes in the studio.';
        }
        if (e && msg != null) {
            e.returnValue = msg;
        }

        if (msg != null) {
            return msg;
        }
    };

    $('div#studioBlock').css('height', '0px');
    $('#studio_holder').flash(studio_data);
    full_screen_studio();

    ajust_studio();
}


    var studioApiReady = false;
    var videoTutorial = null;

    function studioLoaded() {
        studioApiReady = true;
        $(document).trigger('studioApiReady');
    };
    $(document).ready(function() {
        if (enable_full_screen) {

            if (!true) {
                $('#studio_container').css('top', '0px');
            }
            $('#studio_container').show();
            $('.site-footer').hide();
            $('#studioBlock').css('height', '1800px');

            if (false) {
                checkCopyMovie('javascript:proceedWithFullscreenStudio()', '');
            } else if (false) {
                checkEditMovie('');
            } else {
                proceedWithFullscreenStudio();
            }

            $(window).on('resize', function() {
                ajust_studio();
            });
            $(window).on('studio_resized', function() {
                if (show_cc_ad) {
                    _ccad.refreshThumbs();
                }
            });

            if (studioApiReady) {
                var api = studioApi($('#studio_holder'));
                api.bindStudioEvents();
            }
            $('.ga-importer').prependTo($('#studio_container'));
        } else {
            $('#studioBlock').flash(studio_data);
        }
        // Video Tutorial
        videoTutorial = new VideoTutorial($("#video-tutorial"));
    })
    // restore studio when upsell overlay hidden
    .on('hidden', '#upsell-modal', function(e) {
        if ($(e.target).attr('id') == 'upsell-modal') {
            restoreStudio();
        }
    })
    .on('studioApiReady', function() {
        var api = studioApi($('#studio_holder'));
        api.bindStudioEvents();
    })
    jQuery("#previewPlayerContainer, #video-tutorial").hide();

    function initPreviewPlayer(dataXmlStr, startFrame) {
        savePreviewData(dataXmlStr);

        if (typeof startFrame == 'undefined') {
            startFrame = 1;
        } else {
            startFrame = Math.max(1, parseInt(startFrame));
        }

        previewSceen();
        jQuery("#previewPlayerContainer").show();

        createPreviewPlayer("playerdiv", {
            height: 360,
            width: 640,
            player_url: "https://josephcrosmanplays532.github.io/animation/18/player.swf",
            quality: "medium"
        }, {
            movieOwner: "", movieOwnerId: "", movieId: "", ut: "-1",
            movieLid: "8", movieTitle: "", movieDesc: "", userId: "", username: "", uemail: "",
            apiserver: "/", thumbnailURL: "", copyable: "0", isPublished: "0", ctc: "go", tlang: "en_US", is_private_shared: "0",
            autostart: "1", appCode: "go", is_slideshow: "0", originalId: "0", is_emessage: "0", isEmbed: "0", refuser: "",
            utm_source: "", uid: "", isTemplate: "1", showButtons: "0", chain_mids: "", showshare: "0", averageRating: "",
                        s3base: "https://josephcrosmanplays532.github.io/s3base/",
                        ratingCount: "", fb_app_url: "/", numContact: 0, isInitFromExternal: 1, storePath: "http://lightspeed.goanimate.com/store/50/<store>", clientThemePath: "https://josephcrosmanplays532.github.io/static/477/<client_theme>", animationPath: "https://josephcrosmanplays532.github.io/animation/18/",
            startFrame: startFrame
        });
    }
    function switchBackToStudio() {
        try {
            (jQuery("#previewPlayerContainer #Player").get(0) || {pause:function(){}}).pause();
        } catch (err) {};
        jQuery("#previewPlayerContainer").hide();
        restoreStudio();
        document.getElementById("Studio").onExternalPreviewPlayerCancel();
    }
    function publishStudio() {
        try {
            (jQuery("#previewPlayerContainer #Player").get(0) || {pause:function(){}}).pause();
        } catch (err) {};
        jQuery("#previewPlayerContainer").hide();
        restoreStudio();
        document.getElementById("Studio").onExternalPreviewPlayerPublish();
    }
    function exitStudio(share) {
        loadedFullscreenStudio = false;
    }

    VideoTutorial.tutorials.composition = {
        title: 'Composition Tutorial',
        wistiaId: 'nuy96pslyp',
    };
    VideoTutorial.tutorials.enterexit = {
        title: 'Enter and Exit Effects Tutorial',
        wistiaId: 'fvjsa3jnzc',
    }
</script>

<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js"></script><style id="wistia_19_style" type="text/css" class="wistia_injected_style">
@font-face {
font-family: 'WistiaPlayerOverpassNumbers';
src: url(data:application/x-font-ttf;charset=utf-8;base64,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);
}
</style>

<footer class="site-footer hidden-print" style="display: none;">
    <div class="container">
        <div class="row site-footer-nav">
            <div class="col-sm-3">
                <div class="site-footer-nav-col">
                    <h5>About GoAnimate</h5>
                    <ul class="list-unstyled">
                        <li><a href="https://josephcrosmanplays532.github.io/about">Who We Are</a></li>
                        <li><a href="https://josephcrosmanplays532.github.io/contactus">Contact Us</a></li>
                        <li><a href="https://josephcrosmanplays532.github.io/video-maker-tips">Blog</a></li>
                        <li><a href="https://press.josephcrosmanplays532.github.io/">Press</a></li>
                    </ul>
                </div>
            </div>

            <div class="col-sm-3">
                <div class="site-footer-nav-col">
                    <h5>GoAnimate Solutions</h5>
                    <ul class="list-unstyled">
                        <li><a href="https://goanimateforschools.github.io/" target="_blank">GoAnimate for Schools</a></li>
                        <li class="hidden-xs">&nbsp;</li>
                        <li class="hidden-xs">&nbsp;</li>
                        <li class="hidden-xs">&nbsp;</li>
                    </ul>
                </div>
            </div>

            <div class="col-sm-3">
                <div class="site-footer-nav-col">
                    <h5>Usage Guidelines</h5>
                    <ul class="list-unstyled">
                        <li><a href="https://josephcrosmanplays532.github.io/termsofuse">Terms of Service</a></li>
                        <li><a href="https://josephcrosmanplays532.github.io/privacy">Privacy Policy</a></li>
                        <li class="hidden-xs">&nbsp;</li>
                        <li class="hidden-xs">&nbsp;</li>
                    </ul>
                </div>
            </div>

            <div class="col-sm-3">
                <div class="site-footer-nav-col">
                    <h5>Getting Help</h5>
                    <ul class="list-unstyled">
                        <li><a href="https://blog.goanimateforschools.com/">Educator Experiences</a></li>
                        <li><a href="https://josephcrosmanplays532.zendesk.github.io/hc/en-us">Help Center</a></li>
                        <li class="hidden-xs">&nbsp;</li>
                        <li class="hidden-xs">&nbsp;</li>
                    </ul>
                </div>
            </div>
        </div>
        <hr>

        <div class="row site-footer-copyright">
            <div class="col-sm-6">
                <div class="site-footer-socials-container">
                    Follow us on:
                    <ul class="site-footer-socials clearfix">
                        <li><a class="facebook" href="https://www.facebook.com/GoAnimateInc">Facebook</a></li>
                        <li><a class="twitter" href="https://twitter.com/Go4Schools">Twitter</a></li>
                        <li><a class="linkedin" href="https://www.linkedin.com/company/goanimate">Linked In</a></li>
                        <li><a class="gplus" href="https://plus.google.com/+goanimate">Google+</a></li>
                        <li><a class="youtube" href="https://www.youtube.com/user/GoAnimate">YouTube</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="pull-right">
                    <img src="https://josephcrosmanplays532.github.io/static/477/go/img/footer/logo_amazon.png" alt="AWS Partner Network">
                    &nbsp;&nbsp;&nbsp;
                    GoAnimate © 2018
                </div>
            </div>
        </div>

    </div>
</footer>


<div id="studio_container" style="width: 1077px; height: 722px;"><div id="studio_holder" style="width: 1077px;">${toObjectString(attrs, params)}</div>
</div>`
	);
	return true;
};
