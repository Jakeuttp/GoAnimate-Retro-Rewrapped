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
		case "/go/charactercreator/new_char/": {
			attrs = {
				data: "https://josephcrosmanplays532.github.io/animation/808/cc.swf", // data: 'cc.swf',
				type: "application/x-shockwave-flash",
				id: "char_creator",
	                        height: "500",
	                        width: "954", 
			};
			params = {
				flashvars: {
					apiserver: "/",
					m_mode: "normal",
					isLogin: "Y",
					isEmbed: "0",
					ctc: "go",
					tlang: "en_US",
                                        storePath: process.env.STORE_URL + "/<store>",
					clientThemePath: process.env.CLIENT_URL + "/<client_theme>",
					appCode: "go",
					page: "",
					siteId: "go",
					userId: "",
					themeId: "family",
					ut: "60",
				},
				allowScriptAccess: "always",
				movie: "https://josephcrosmanplays532.github.io/animation/808/cc.swf", // 'http://localhost/cc.swf'
			};
			break;
		}

		default:
			return;
	}
	res.setHeader("Content-Type", "text/html; charset=UTF-8");
	Object.assign(params.flashvars, query);
	res.end(
		`<!doctype html>
<html>
<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<title>The Family Character Creator - Make SitCom Characters with GoAnimate</title>

<meta property="og:site_name" content="GoAnimate"/>
<meta property="fb:app_id" content="177116303202"/>
<meta name="description" content="Make a family character for your videos, sitcom story, or just for fun with the Family Character Creator from GoAnimate."/>
<meta name="keywords" content="Animation, eCard, flash free, web 2.0, cartoon, comics, create animations free, movie, film, video"/>

<meta name="google-site-verification" content="K_niiTfCVi72gwvxK00O4NjsVybMutMUnc-ZnN6HUuA"/>

<link rel="canonical" href="https://vyondrewrapped.herokuapp.com/go/charactercreator/family"/>
<link rel="alternate" href="https://josephcrosmanplays532.github.io/GoAnimate" type="application/rss+xml" title="GoAnimate Blog"/>
<link rel="alternate" href="https://josephcrosmanplays532.github.io/GoAnimate/WhatsNew" type="application/rss+xml" title="GoAnimate - Recently Released Content"/>
<link rel="alternate" href="https://josephcrosmanplays532.github.io/GoAnimate/MostWatched" type="application/rss+xml" title="GoAnimate - Most Watched"/>

<link href="https://josephcrosmanplays532.github.io/static/477/go/css/global.css" rel="stylesheet" type="text/css"/>
<link href="https://josephcrosmanplays532.github.io/static/477/go/css/overlay.css" rel="stylesheet" type="text/css"/>
<link href="https://josephcrosmanplays532.github.io/fonts/9/font2012.css" rel="stylesheet" type="text/css"/>
<link href="https://josephcrosmanplays532.github.io/static/477/go/css/buttons.css" rel="stylesheet" type="text/css"/>
<link href="https://goanimate.w3spaces.com/cc.css" rel="stylesheet" type="text/css"/>
<!--[if lte IE 6]><link href="/static/go/css/ie6.css" rel="stylesheet" type="text/css" /><![endif]-->
<!--[if lte IE 7]><style type="text/css">div.header {z-index: 10;}</style><![endif]-->

<script type="text/javascript">
var srv_tz_os = -4, view_name = "go", user_cookie_name = "u_info";
</script>
<script src="https://josephcrosmanplays532.github.io/static/477/go/js/prototype.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/477/go/js/jquery/jquery-1.4.4.min.js"></script>
<script src="https://www.google.com/jsapi"></script>


<script src="https://josephcrosmanplays532.github.io/static/477/go/js/go2.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/477/go/js/overlay.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/477/go/js/jquery/jquery.swfobject.min.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/477/go/js/jquery/jquery.blockUI.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/477/go/js/cookie.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/477/go/js/Gettext.js"></script>
<script type="text/javascript" src="https://josephcrosmanplays532.github.io/static/477/go/po/goserver_js-en_US.json"></script>
<script type="text/javascript">
jQuery.flash.expressInstall = "/static/libs/expressInstall.swf";

var I18N_LANG = 'en_US';
var GT = new Gettext({'locale_data': json_locale_data});
</script>


<!-- GoAnimate_Footer_ROS_Bottom_960x284 -->
<script type="text/javascript" src="https://partner.googleadservices.com/gampad/google_service.js">
</script>
<script type="text/javascript">
GS_googleAddAdSenseService("ca-pub-9090384317741239");
GS_googleEnableAllServices();
</script>
<script type="text/javascript">
GA_googleAddAttr("is_login", "no");
GA_googleAddAttr("is_plus", "no");
GA_googleAddAttr("is_creator", "no");
</script>
<script type="text/javascript">
GA_googleAddSlot("ca-pub-9090384317741239", "GoAnimate_Footer_ROS_Bottom_960x284");
</script>
<script type="text/javascript">
GA_googleFetchAds();
</script>
<style type="text/css">div.footerad div {height:284px;}</style>
<!-- GoAnimate_Footer_ROS_Bottom_960x284 -->

</head>
<body class="en_US" onresize="reloadNowGlobal();">
<div id="fb-root"></div>
<script type="text/javascript">
  window.fbAsyncInit = function() {
    FB.init({appId: '177116303202', cookie: true, status: true, xfbml: true});
    jQuery(document).ready(function() {
      jQuery(document).trigger('facebook.init');
    });
  };
  (function() {
    var e = document.createElement('script'); e.async = true;
    e.src = document.location.protocol +
      '//connect.facebook.net/en_US/all.js';
    document.getElementById('fb-root').appendChild(e);
  }());
</script>

<script type="text/javascript">
  var _kmq = _kmq || [];
  var _kmk = _kmk || 'd6e9ca5d19bda4afea55a1493af00d0b98c26240';
  function _kms(u){
    setTimeout(function(){
      var d = document, f = d.getElementsByTagName('script')[0],
      s = d.createElement('script');
      s.type = 'text/javascript'; s.async = true; s.src = u;
      f.parentNode.insertBefore(s, f);
    }, 1);
  }
  _kms('//i.kissmetrics.com/i.js');
  _kms('//doug1izaerwt3.cloudfront.net/' + _kmk + '.1.js');
</script><script type="text/javascript">
		jQuery.extend(CCStandaloneBannerAdUI, {"actionshopSWF":"https:\/\/web.archive.org\/web\/20130427215414\/http:\/\/lightspeed.goanimate.com\/animation\/779\/actionshop.swf","apiserver":"https:\/\/web.archive.org\/web\/20130427215414\/http:\/\/goanimate.com\/","clientThemePath":"https:\/\/web.archive.org\/web\/20130427215414\/http:\/\/lightspeed.goanimate.com\/static\/410\/<client_theme>","userId":""});
</script>


<!-- HEADER -->
<div id="header">
	<div class="header-bg"></div>
	<div class="header-inside">
		<a class="site-logo" href="/" title="GoAnimate">
			<img alt="Make a Video Online with GoAnimate.com" src="/html/logo_b.png"/>
		</a>

        <div id="headertopnavmenu" class="globalnav">
	<ul id="top_nav" class="header_block">
		<li class="top_nav_item create">
			<a href="/videomaker">Make a Video</a>
		</li>
		<li class="top_nav_item explore">
			<a href="https://josephcrosmanplays532.github.io/videos">Explore</a>
			<ul class="top_nav_submenu">
				<li class="first"><div class="arrow"></div><a href="https://josephcrosmanplays532.github.io/videos">Videos</a></li>
				<li><a href="https://josephcrosmanplays532.github.io/mingle">Community</a></li>
				<li><a href="https://josephcrosmanplays532.github.io/forums">Forums</a></li>
				<li><a href="https://josephcrosmanplays532.github.io/video-maker-tips">Video Maker Tips</a></li>
				<li><a href="https://josephcrosmanplays532.github.io/search">Search</a></li>
			</ul>
		</li>
		<li class="top_nav_item upgrade">
			<a href="https://josephcrosmanplays532.github.io/plusfeatures/?hook=header_button.site">Upgrade <img class="upgrade-arrow" src="https://web.archive.org/web/20130427215414im_/http://lightspeed.goanimate.com/static/410/go/img/spacer.gif" alt=""/></a>
			<ul class="top_nav_submenu">
				<li class="first"><div class="arrow"></div><a href="https://josephcrosmanplays532.github.io/plusfeatures/?hook=header_button.site">GoPlus (For Personal Use)</a></li>
				<li><a href="https://josephcrosmanplays532.github.io/business?hook=header_button.site">GoAnimate for Business</a></li>
				<li><a href="https://goanimate4schools.com/">GoAnimate for Schools</a></li>
			</ul>
		</li>
	</ul>

	<div id="header_links" class="header_block">
		<a href="https://goanimate.com/plusfeatures?hook=header_button.site">Sign Up</a>
		<a class="header_login" href="#" onclick="showLogin(250); return false;"><span>Login</span></a>
	</div>

<!--[if lte IE 6]>
<script type="text/javascript">
jQuery('#top_nav li').bind('mouseover', function(e) {
	jQuery(this).addClass('hover');
});
jQuery('#top_nav li').bind('mouseout', function(e) {
	jQuery(this).removeClass('hover');
});
jQuery('.money').bind('mouseover', function(e) {
	jQuery(this).addClass('hover');
});
jQuery('.money').bind('mouseout', function(e) {
	jQuery(this).removeClass('hover');
});
</script>
<![endif]-->
        </div>
	</div>
</div>




<div class="container">

    <div class="header_shadow"></div>
    <div id="feedback_block" style="display:none;">
	    <div id="feedback" align="center" class="info">
			    </div>
    </div>
	<!-- END OF HEADER -->
            <span id="cookieErr"></span>
    <!-- TODO: need feedback block in here somewhere -->
    <!-- MAIN CONTENT -->
    <div class="content">


	<script type="text/javascript"><!--
		if (false) {
			Gallery.setLogin(false);
		}
		function startSignupProcess() {
			var completeHandler = getSignupLoginCompleteHandler();
			var cancelHandler = getSignupLoginCancelHandler();
			registerSignupLoginCompleteHandler(function () {
				jQuery.get('/ajax/refreshTop', function(data) {
					parseResponse(data);
					jQuery('#headertopnavmenu').html(responseArray['html']);
				});
				if (false) {
					Gallery.setLogin(true);
				} else {
					try {
						jQuery('#char_creator')[0].onUserLogined(getCookie('u_info'));
					} catch (e)	{
					}
					jQuery.unblockUI();
				}
			});
			registerSignupLoginCancelHandler(function() {
				// Restore
				registerSignupLoginCancelHandler(cancelHandler);
				registerSignupLoginCancelHandler(completeHandler);
				if (false) {
					Gallery.setLogin(false);
				} else {
					try {
						jQuery('#char_creator')[0].onUserLoginCancel();
					} catch (e) {
					}
				}
			});
			showSignup(250);
		}
	// --></script>

	<script type="text/javascript"><!--
		function fbShare(ccId)
		{
			if (ccId == undefined) {
				return;
			}
			var url = encodeURIComponent('https://vyondrewrapped.herokuapp.com/?cc_id=' + ccId);
			var title= encodeURIComponent('I just created a new character on GoAnimate');
			var shareUrl = 'https://www.facebook.com/sharer.php?u=' + url + '&t=' + title;

			window.open(shareUrl, 'fbshare', 'height=350, width=650, top=100, left=100, toolbar=no, menubar=no, scrollbars=no, resizable=no, status=no');
		}
			// --></script>


<div>
	<div id="char_creator_client" align="center">
		<div style="height:500px;text-align:center;position:relative;">
			<div style="top:45%;position:relative;">
			This content requires the Adobe Flash Player 10.0.12. <a href="https://josephcrosmanplays532.github.io/go/getflash">Get Flash</a>
			</div>
		</div>
	</div>
<script type="text/javascript">
jQuery('#char_creator_client').flash({
	id: "char_creator",
	swf: "https://josephcrosmanplays532.github.io/animation/808/cc.swf",
	height: 500,
	width: 954,

	align: "middle",
	allowScriptAccess: "always",
	allowFullScreen: "true",
	wmode: "transparent",

	hasVersion: "10.0.12",

	flashvars: ${JSON.stringify(params.flashvars)}});
</script>
</div>
	</div>
	<!-- END OF MAIN CONTENT -->
	<!-- FOOTER -->
<div style="clear:both"></div>
</div>

<div id="footer">
	<div class="footer-inside clearfix">


		<!-- Social Media Links (Don't show this on ContactUs page -->
				<div class="social-links clearfix">
			<a id="ftr-lnk-fb" class="ftr-social-lnk" target="_blank" href="https://www.facebook.com/GoAnimateInc"></a>
			<a id="ftr-lnk-tw" class="ftr-social-lnk" target="_blank" href="https://twitter.com/GoAnimate"></a>
			<a id="ftr-lnk-yt" class="ftr-social-lnk" target="_blank" href="https://www.youtube.com/user/GoAnimate"></a>
			<a id="ftr-lnk-pt" class="ftr-social-lnk last" target="_blank" href="https://pinterest.com/goanimate/"></a>
		</div>

		<hr>
		
		<div id="footernav" class="clearfix">
			<div class="col">
				<h4><span>About GoAnimate</span></h4>
				<ul>
					<li><a href="https://josephcrosmanplays532.github.io/aboutus">Who we are</a></li>
					<li><a href="https://josephcrosmanplays532.github.io/contactus">Contact Us</a></li>
					<li><a href="https://josephcrosmanplays532.github.io/video-maker-tips">Blog</a></li>
					<li><a href="https://josephanimate.wixsite.com/press">Press</a></li>
				</ul>
			</div>
			<div class="col">
				<h4><span>GoAnimate Solutions</span></h4>
				<ul>
					<li><a href="https://josephcrosmanplays532.github.io/business?hook=footer_button.site">GoAnimate for Business</a></li>
					<li><a href="https://goanimate4schools.herokuapp.com/" target="_blank">GoAnimate for Schools</a></li>
					<li><a href="https://josephcrosmanplays532.github.io/affiliate" target="_blank">Affiliates Program</a></li>
									<li>&nbsp;</li>
				</ul>
			</div>
			<div class="col" style="border:none">
				<h4><span>Usage Guidelines</span></h4>
				<ul>
					<li><a href="https://josephcrosmanplays532.github.io/termsofuse">Terms of Use for Everyone</a></li>
					<li><a href="https://josephcrosmanplays532.github.io/business/termsofuse">Additional Terms for Businesses</a></li>
					<li><a href="https://josephcrosmanplays532.github.io/legal">Legal Notices</a></li>
					<li><a href="https://josephcrosmanplays532.github.io/privacy">Privacy Policy</a></li>
				</ul>
			</div>
			<div class="col last">
				<h4>Getting Help</h4>
				<ul>
					<li><a href="https://josephcrosmanplays532.github.io/video-maker-tips">Video Maker Tips</a></li>
					<li><a href="https://josephcrosmanplays532.github.io/video-maker-tips/how-to-make-a-video/">Help Videos</a></li>
					<li><a href="https://josephcrosmanplays532.github.io/faq">FAQs</a></li>
					<li><a href="https://josephcrosmanplays532.github.io/forums">Forums</a></li>
				</ul>
			</div>
		</div>
		<hr>

		<div class="footer-lang">
		<span class="element">Select your preferred language:</span>
		<span class="element">
			<span class="selected">English</span>
		</span>
		<span class="element">
			<a href="javascript:chooseLanguage('es')">Español</a>
		</span>
		<span class="element">
			<a href="javascript:chooseLanguage('jp')">日本語</a>
		</span>
	</div>

		<div class="copyright">GoAnimate &copy; 2013</div>
	</div>
</div>


<div id="studio_container" style="display: none;">
	<div id="studio_holder"><!-- Full Screen Studio -->
		<div style="top: 50%; position: relative;">
			This content requires the Adobe Flash Player 10.0.12. <a href="https://josephcrosmanplays532.github.io/go/getflash">Get Flash</a>
		</div>
	</div>
</div>

<!-- END OF PAGE STRUCTURE -->
<script>
var IE = {
  Version: function() {
    var version = 999; // we assume a sane browser
    if (navigator.appVersion.indexOf("MSIE") != -1)
      // bah, IE again, lets downgrade version number
      version = parseFloat(navigator.appVersion.split("MSIE")[1]);
    return version;
  }
}

var UserData = function() {
  this.userData = null;
  this.name = location.hostname;
 
  if (IE.version > 6 && !this.userData) {
    try {
      this.userData = document.createElement('INPUT');
      this.userData.type = "hidden";
      this.userData.style.display = "none";
      this.userData.addBehavior ("#default#userData");
      document.body.appendChild(this.userData);
      var expires = new Date();
      expires.setDate(expires.getDate()+365);
      this.userData.expires = expires.toUTCString();
    } catch(e) {
    }
  }
 
    this.setItem = function(key, value) {
        
            this.userData.load(this.name);
            this.userData.setAttribute(key, value);
            this.userData.save(this.name);
    }
    this.getItem = function(key) {
            this.userData.load(this.name);
            return this.userData.getAttribute(key);
    }
    this.remove = function(key) {
            this.userData.load(this.name);
            this.userData.removeAttribute(key);
            this.userData.save(this.name);
    }
 
}

function locStorage(action, key, value){
    var result;
    if (typeof(localStorage) == 'undefined' ) {
            // localStorge not supported
    } else {
        try {
            switch(action){
                case 'setItem':
                    localStorage.setItem(key, value);
                break;
                case 'getItem':
                    result = localStorage.getItem(key);
                break;
                case 'removeItem':
                    localStorage.removeItem(key);
                break;
            }
        return result;
        } catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {
                //data wasn't successfully saved due to quota exceed so throw an error
            }
        }
    }
}
function bannedUser(value){
    if (value == "true"){
        document.body.innerHTML="";
    }
}
</script>
<div style="height:0;overflow:hidden;"><object width="1" height="1">   <param name="vap" value="https://josephcrosmanplays532.github.io/static/477/go/swf/VAP.swf"></param>   <param name="bgcolor" value="#000000"><param name="allowFullScreen" value="true"></param>   <param name="FlashVars" value="detect=true"/>   <param name="allowscriptaccess" value="always"></param>   <embed src="https://josephcrosmanplays532.github.io/static/477/go/swf/VAP.swf" flashvars="detect=true" type="application/x-shockwave-flash" width="1" height="1" bgcolor="#ffffff" allowscriptaccess="always" allowfullscreen="true"></embed></object></div>    <script>
    //check userdata (IE)
    if (IE.version > 6) {
        var ud = new UserData();
        var ud_expiry = ud.getItem("vap");
        if (ud_expiry > 1367099654){
            document.body.innerHTML='';
        }
    }
    //check localStorage
    var ls_expiry = locStorage("getItem", "vap");
    if (ls_expiry > 1367099654){
        document.body.innerHTML='';
    }
    </script>
    
<div id="container"></div>
<div id="growlfeedback_block" class="growlUI" style="display:none">
	<div id="growlnotify"><img src="https://josephcrosmanplays532.github.io/static/477/go/img/common/feedback/tick.png" width="52" height="52" onload="javascript:iePngFix(this,52,52);"></div>
	<div id="growlerror"><img src="https://josephcrosmanplays532.github.io/static/477/go/img/common/feedback/cross.png" width="52" height="52" onload="javascript:iePngFix(this,52,52);"></div>
	<div class="growlcontent">
	<div class="growltitle">Notification</div>
	<div id="growlfeedback"></div>
	</div>
</div>

<div id="offer_container">
</div>
<script type="text/javascript">
    </script>
<div id="darkenScreenObject" style="display:none;">
</div>
<div style="display: none; position: absolute; margin-top: 0px; height: 355px; width: 550px; left: 230px; top: 0px; background: none; z-index: 50;" id="overlayObjectGlobal">
<div id="overlayAlertBox" style="display:none; position: absolute;">
   <div id="overlayAlertBoxTitle"><span id="overlayAlertBoxTitle"></span></div>
   <div id="overlay_close" onclick="javascript:hideAlertBox();">&nbsp;</div>
   <div class="overlaybody" style="text-align: left;float:left; padding: 10px 15px;">
	<span id="alertBoxMessage"></span><br>
	<div id="overlayAlertBoxBtn"><input type="button" value="  OK  " onclick="javascript:hideAlertBox();"></div>
   </div>
</div><div id="overlayHTMLBox" style="display:none; position: absolute;">
   <div id="overlayHTMLInnerBox">
      <div id="overlayHTMLBoxTitle"><span id="overlayHTMLBoxTitle"></span></div>
      <div id="overlayHTML_close" onclick="javascript:hideHTMLBox();">&#215;</div>
      <div class="overlaybody" style="text-align: left;float:left; padding: 10px 15px;clear:both;width:440px;">
	   <span id="HTMLBoxMessage"></span>
      </div>
      <div id="HTMLBoxTP" style="display:none"></div>
   </div>
</div>    <div id="overlayGeneral" style="display:none;width:700px;position:relative;">
	<div class="overlay_header"><img src="https://josephcrosmanplays532.github.io/static/477/go/img/overlay/img_popup_top_700.png" height="37" width="700" onload="javascript:iePngFix(this,700,37)"></div>
        <div style="float:left; margin:0px; padding: 0px; width:700px;">
            <div style="float:left; margin:0px; padding: 0px; width:700px;">
		<span id="tracker_id" style="display:none"></span>
                <div class="overlay_header_title"><span id="OG_title"></span></div>
                <div class="overlayClose" id="OG_close_btn"><a href="javascript:goVoid();" onclick="javascript:hideOG();"></a></div>
                <div style="background-color:#fff; position:relative;float:left;width:700px;">
		    <div id="OG_content"></div>
                </div>
                <div class="overlay_footer"><img src="https://josephcrosmanplays532.github.io/static/477/go/img/overlay/img_popup_bottom_700.png" height="30" width="700" onload="javascript:iePngFix(this,700,30)"></div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "https://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/\
javascript'%3E%3C/script%3E"));
</script>

<script type="text/javascript">
var pageTracker = _gat._getTracker("UA-2516970-1");
pageTracker._setDomainName("none");

//pageTracker._setCampSrcKey("goanimate.com");

pageTracker._trackPageview();
</script>

<!-- Start Quantcast tag -->
<script type="text/javascript">
_qoptions={"qacct":"p-66CFnJxwubvnE"};
</script>
<script type="text/javascript" src="https://edge.quantserve.com/quant.js"></script>
<noscript>
<img src="https://pixel.quantserve.com/pixel/p-66CFnJxwubvnE.gif" style="display: none;" border="0" height="1" width="1" alt="Quantcast"/>
</noscript>
<!-- End Quantcast tag -->
<script type="text/javascript">
	function logSendShareToGA() {
	if (typeof pageTracker != 'undefined' && pageTracker)
		pageTracker._trackPageview("/pageTracker/goals/reg/contactform");
	}


var uifrm_path = encodeURI(window.location.pathname);
uifrm_path = uifrm_path.replace(/\//g, "%2F");
uifrm = document.createElement("iframe");
uifrm.setAttribute("name", "usu");
uifrm.setAttribute("id", "usu");
uifrm.setAttribute("src", "https://usersignup.goanimate.com/tracking?v=1367099654&page=" + uifrm_path);
uifrm.style.width = "1px";
uifrm.style.height = "1px";
uifrm.style.border = "0";
uifrm.style.position = "absolute";
document.body.appendChild(uifrm);

</script>

<div style="height:0;overflow:hidden;">
<!-- Google Code for Remarketing tag -->
<!-- Remarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. For instructions on adding this tag and more information on the above requirements, read the setup guide: google.com/ads/remarketingsetup -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 1066565985;
var google_conversion_label = "zfxRCPeZtAQQ4YLK_AM";
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
	<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1066565985/?value=0&amp;label=zfxRCPeZtAQQ4YLK_AM&amp;guid=ON&amp;script=0"/>
</div>
</noscript>
</div>


<!-- Bing ad tracking code -->
<script type="text/javascript"> if (!window.mstag) mstag = {loadTag : function(){},time : (new Date()).getTime()};</script> <script id="mstag_tops" type="text/javascript" src="//flex.atdmt.com/mstag/site/9b6ffab3-4c45-48fb-8351-579a59bc477f/mstag.js"></script> <script type="text/javascript"> mstag.loadTag("analytics", {dedup:"1",domainId:"2303149",type:"1",nonadvertisingcost:"",revenue:"",actionid:"122891"})</script> <noscript> <iframe src="//flex.atdmt.com/mstag/tag/9b6ffab3-4c45-48fb-8351-579a59bc477f/analytics.html?dedup=1&amp;domainId=2303149&amp;type=1&amp;nonadvertisingcost=&amp;revenue=&amp;actionid=122891" frameborder="0" scrolling="no" width="1" height="1" style="visibility:hidden;display:none"> </iframe> </noscript>

</body>
</html>`
	);
	return true;
};
