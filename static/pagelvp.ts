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
		case "/go/movie/": {
			title = "Player";
			attrs = {
				data: "https://josephcrosmanplays532.github.io/animation/18/player.swf",
				type: "application/x-shockwave-flash",
				
				id: "Player",
	                        swf: "https://josephcrosmanplays532.github.io/animation/18/player.swf",
	                        height: "379",
	                        width: "620",
	                        bgcolor: "#000000",
	                        scale: "exactfit",
	                        allowScriptAccess: "always",
	                        allowFullScreen: "true",
	                        wmode: "transparent",

	                        hasVersion: "10.0.12",
			};
			params = {
				flashvars: {
					movieOwner: "Dina Roach",
					movieOwnerId: "0ZQgqAU_m7b8",
					movieId: "",
					movieLid: "0",
					movieTitle: "If+Supernatural+was+an+anime",
					movieDesc: "I+don%27t+even+know",
					userId: "0ZQgqAU_m7b8",
					username: "Dina Roach",
					uemail: "",
					ut: null,
					numContact: "0",
					apiserver: "/",
					duration: "31",
					playcount: 1,
					thumbnailURL: "https://josephcrosmanplays532.github.io/s3base/files/thumbnails/movie/1451/6298451/15335238L.jpg",
					copyable: "0",
					isPublished: "1",
					ctc: "go",
					tlang: "en_US",
					is_private_shared: "0",
					autostart: "0",
					appCode: "go",
					is_slideshow: "0",
					originalId: "0zEt_fo4L-5k",
					is_emessage: "0",
					storePath: process.env.STORE_URL + "/<store>",
					clientThemePath: process.env.CLIENT_URL + "/<client_theme>",
					animationPath: "https://josephcrosmanplays532.github.io/animation/18/",
					isEmbed: "0",
					refuser: null,
					utm_source: null,
					uid: null,
					isTemplate: "0",
					showButtons: "1",
					chain_mids: "",
					averageRating: "0",
					ratingCount: "0",
					fb_app_url: "/",
					ad: 1,
					endStyle: 0,
					isWide: "1",
					pwm: 1,
					s3base: "https://josephcrosmanplays532.github.io/s3base/",
					showshare: false,
				},
				movie: "https://josephcrosmanplays532.github.io/animation/18/player.swf",
			};
			break;
		}

		default:
			return;
	}
	res.setHeader("Content-Type", "text/html; charset=UTF-8");
	Object.assign(params.flashvars, query);
	res.end(
		`
<!DOCTYPE html>
<html>
<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<link rel="dns-prefetch" href="//josephcrosmanplays532.github.io/">

<script>document.title='${title}'</script>

<meta name="title" content="Video Player - GoAnimate"/>
<meta name="description" content="Watch the video: Test on GoAnimate."/>
<link rel="canonical" href="https://typescriptwrapper.herokuapp.com/player?movieId=m-3"/>
<link rel="image_src" href="https://josephcrosmanplays532.github.io/s3base/files/thumbnails/movie/1217/1588217/20431706.jpg"/>
<link rel="video_src" href="https://josephcrosmanplays532.github.io/animation/808/player.swf?domain=typescriptwrapper.herokuapp.com&movieId=m-3"/>
<meta name="video_height" content="309"/>
<meta name="video_width" content="550"/>
<meta name="video_type" content="application/x-shockwave-flash"/>
<meta name="medium" content="video"/>

<meta property="og:type" content="article"/>
<meta property="og:title" content="Video Player"/>
<meta property="og:description" content="I don't even know"/>
<meta property="og:url" content="https://typescriptwrapper.herokuapp.com/player?movieId=m-3"/>
<meta property="og:image" content="https://josephcrosmanplays532.github.io/s3base/files/thumbnails/movie/1451/6298451/15335238L.jpg"/>

<meta property="og:video" content="https://typescriptwrapper.herokuapp.com/player?movieId=m-3"/>
<meta property="og:video:height" content="309"/>
<meta property="og:video:width" content="550"/>
<meta property="og:video:type" content="application/x-shockwave-flash"/>

<link rel="alternate" type="application/json+oembed" href="https://josephcrosmanplays532.github.io/api/oembed?url=http%3A%2F%2Fgoanimate.com%2Fvideos%2F0-DagtdzdpIc&amp;format=json"/>
<link rel="alternate" type="text/xml+oembed" href="https://josephcrosmanplays532.github.io/api/oembed?url=http%3A%2F%2Fgoanimate.com%2Fvideos%2F0-DagtdzdpIc&amp;format=xml"/>
<meta property="og:site_name" content="GoAnimate"/>
<meta property="fb:app_id" content="177116303202"/>

<meta name="google-site-verification" content="K_niiTfCVi72gwvxK00O4NjsVybMutMUnc-ZnN6HUuA"/>

<link rel="alternate" href="https://josephcrosmanplays532.github.io/GoAnimate" type="application/rss+xml" title="GoAnimate Blog"/>
<link rel="alternate" href="https://josephcrosmanplays532.github.io/GoAnimate/WhatsNew" type="application/rss+xml" title="GoAnimate - Recently Released Content"/>
<link rel="alternate" href="https://josephcrosmanplays532.github.io/GoAnimate/MostWatched" type="application/rss+xml" title="GoAnimate - Most Watched"/>


<link href="https://josephanimate2021.w3spaces.com/font.css" rel="stylesheet" type="text/css"/>
<link href="https://josephanimate2021.w3spaces.com/bootstrap.min.css" rel="stylesheet" type="text/css"/>
<link href="https://josephanimate2021.w3spaces.com/bootstrap-modal.css" rel="stylesheet" type="text/css"/>
<link href="https://josephanimate2021.w3spaces.com/bootstrapSwitch.css" rel="stylesheet" type="text/css"/>
<link href="https://josephanimate2021.w3spaces.com/style.css" rel="stylesheet" type="text/css"/>
<link href="https://josephanimate2021.w3spaces.com/site.css" rel="stylesheet" type="text/css"/>
<link href="https://josephanimate2021.w3spaces.com/overlay.css" rel="stylesheet" type="text/css"/>

<link href="https://josephanimate2021.w3spaces.com/watermark.css" rel="stylesheet" type="text/css"/>
<link href="https://josephanimate2021.w3spaces.com/video.css" rel="stylesheet" type="text/css"/>
<link href="https://josephanimate2021.w3spaces.com/videos.css" rel="stylesheet" type="text/css"/>
<link href="https://josephanimate2021.w3spaces.com/video_export.css" rel="stylesheet" type="text/css"/>
<link href="https://josephanimate2021.w3spaces.com/movie_license.css" rel="stylesheet" type="text/css"/>

<script type="text/javascript">
var srv_tz_os = -4, view_name = "go", user_cookie_name = "u_info";
</script>

<script src="https://josephanimate2021.w3spaces.com/jquery-1.8.3.min.js"></script>

<script src="https://josephanimate2021.w3spaces.com/bootstrap.min.js"></script>
<script src="https://josephanimate2021.w3spaces.com/bootstrap-modalmanager.js"></script>
<script src="https://josephanimate2021.w3spaces.com/bootstrap-modal.js"></script>
<script src="https://josephanimate2021.w3spaces.com/bootstrapSwitch.js"></script>


<script src="https://josephanimate2021.w3spaces.com/go2.js"></script>
<script src="https://josephanimate2021.w3spaces.com/jquery.swfobject.min.js"></script>
<script src="https://josephanimate2021.w3spaces.com/jquery.blockUI.js"></script>
<script src="https://josephanimate2021.w3spaces.com/jquery.scrollTo.min.js"></script>
<script src="https://josephanimate2021.w3spaces.com/app.js"></script>

<script src="https://josephanimate2021.w3spaces.com/cookie.js"></script>
<script src="https://josephanimate2021.w3spaces.com/Gettext.js"></script>
<script type="text/javascript" src="https://josephanimate2021.w3spaces.com/goserver_js-en_US.json"></script>
<script type="text/javascript">
var I18N_LANG = 'en_US';
var GT = new Gettext({'locale_data': json_locale_data});
</script>
<script src="https://josephanimate2021.w3spaces.com/comments.js"></script>

<!-- Google Analytics -->
<script type="text/javascript">
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-2516970-1']);
_gaq.push(['_setDomainName', 'none']);
_gaq.push(['_trackPageview', '/movie']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;

ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';

var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
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
GA_googleAddSlot("ca-pub-9090384317741239", "GoAnimate_Movie_ATF_Right_300x250");
</script>
<script type="text/javascript">
GA_googleFetchAds();
</script>
<!-- GoAnimate_Footer_ROS_Bottom_960x284 -->

</head>
<body class="en_US">
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
</script>
<script type="text/javascript">
		jQuery.extend(CCStandaloneBannerAdUI, {"actionshopSWF":"https:\/\/web.archive.org\/web\/20130729085605\/http:\/\/lightspeed.goanimate.com\/animation\/808\/actionshop.swf","apiserver":"https:\/\/web.archive.org\/web\/20130729085605\/http:\/\/goanimate.com\/","clientThemePath":"https:\/\/web.archive.org\/web\/20130729085605\/http:\/\/lightspeed.goanimate.com\/static\/425\/<client_theme>","userId":""});
</script>

<div class="page-container">

<!-- HEADER -->
<div class="site-header">
	<div class="site-header-bg"></div>
	<div class="container site-header-inside">
		<a class="site-logo" href="/html/" title="GoAnimate">
			<img alt="Make a Video Online with GoAnimate.com" src="/html/logo_s.png"/>
		</a>

		<div class="pull-right">
			<ul id="top-nav" class="top-nav">
				<li>
					<a href="https://github.com/josephcrosmanplays532?tab=repositories&q=Vyond&hook=header_button.site">Vyond Lvm Clones</a>
				</li>
				<li class="divider"></li>
				<li>
					<a href="#" onclick="document.getElementById('file').click(); return false;">
						<div class="pull-left"><i class="top-nav-login-goog"></i><i class="top-nav-login-fb"></i></div>Upload Your Video					</a>
				</li>
				<li class="divider"></li>
				<li class="dropdown">
					<a class="dropdown-toggle" href="https://josephcrosmanplays532.github.io" data-toggle="dropdown">Explore <span class="caret"></span></a>
					<ul class="dropdown-menu">
						<li><a href="#video-extra">Videos</a></li>
						<li><a href="https://josephcrosmanplays532.github.io/forums">Forums</a></li>
						<li><a href="https://josephcrosmanplays532.github.io/video-maker-tips">Video Maker Tips</a></li>
						<li><a href="https://josephcrosmanplays532.github.io/search">Search</a></li>
					</ul>
				</li>
				<li class="dropdown">
					<a class="dropdown-toggle" href="https://github.com/josephcrosmanplays532?hook=header_button.site" data-toggle="dropdown">Featured Lvm Clones <span class="caret"></span></a>
					<ul class="dropdown-menu">
						<li><a href="https://github.com/josephcrosmanplays532/PHPWrapper?hook=header_button.site">PHPWrapper (Written in PHP like the Old GoAnimate)</a></li>
						<li><a href="https://github.com/josephcrosmanplays532/TypeScript-Wrapper?hook=header_button.site">TypeScript Wrapper (Written in TypeScript)</a></li>
						<li><a href="https://goanimate4schools.herokuapp.com/">GoAnimate for Schools</a></li>
					</ul>
				</li>
			</ul>

			<div class="top-nav-vm-btn">
				<a class="btn btn-orange pull-left" href="/create">Make a Video</a>
			</div>
		</div>

	</div>
</div>



<!-- END OF HEADER -->
<div class="container main-container" id="video-page">
	<div class="row">
		<div class="span8">
			<div class="video-header clearfix">
				<a href="https://josephcrosmanplays532.github.io/users/josephanimate2021"><img class="portrait portrait-small" src="https://josephcrosmanplays532.github.io/s3base/files/thumbnails/asset/1451/6298451/167994681.jpg" alt="Joseph Animate 2021"></a>
				<div class="meta">
					<h1>If Supernatural was an anime</h1>
					by <a href="https://josephcrosmanplays532.github.io/users/josephanimate2021" title="Dina Roach">Joseph Animate 2021</a> 
					<div class="more">
						<span class="views"><i class="stat-view"></i> 16</span>

						<span class="status public">
							<span class="label label-draft">Draft</span>
							<span class="label label-private">Private</span>
							<span class="label label-public">Public</span>
							<span class="label label-unlisted">Unlisted</span>
						</span>

					</div>
				</div>
			</div>

			<div class="video-content">
				<div class="player-container">
					<meta name="medium" content="video"/>
<div style="position:relative">
	<!-- //removed private label overlay on top of the player
	<div id="playerStatus" style="position:absolute;z-index:1;right:0px;top:0px;display:none">
		<img src="/static/go/img/v2/private_overlay.gif"/></a>
	</div>
	-->
	<div style="position:relative">
			<div id="playerdiv" align="center" style="width:620px;height:379px;">
			This content requires the Macromedia Flash Player 10.0.12. <a href="https://josephcrosmanplays532.github.io/go/getflash">Get Flash</a>
		</div>
		<div class="ConnectionBridge" style="position:absolute;top:0px;left:0px;">
		   <div id="bridgediv" style="display: block; width: 1px; height: 1px;"></div>
<script type="text/javascript">
jQuery('#bridgediv').flash({
	id: "Bridge",
	swf: "https://josephcrosmanplays532.github.io/static/libs/ConnectionBridge.swf?v=425",
	height: 1,
	width: 1,

	scale: "exactfit",
	wmode: "transparent"
});
</script>
		</div>
	</div>
</div>
<script type="text/javascript">
jQuery('#playerdiv').flash({
	id: "Player",
	swf: "https://josephcrosmanplays532.github.io/animation/18/player.swf",
	height: 379,
	width: 620,
	bgcolor: "#D7D7D7",
	scale: "exactfit",
	allowScriptAccess: "always",
	allowFullScreen: "true",
	wmode: "transparent",

	hasVersion: "10.0.12",

	flashvars: ${JSON.stringify(params.flashvars)}});
</script>				</div>
			</div>
			<div class="video-actions">
				<span class="divider">|</span>
				<button class="button" data-remote="/ajax/getMovieShare/m-16" data-action="video-share"><i class="ico-share"></i> Share</button>

				<span class="divider">|</span>
			</div>
		</div>
		<div class="span4" id="player-aside">

		</div>
	</div>

	<div class="row">
		<div class="span8">

			<div class="inside">
				<div class="video-social-share clearfix">
					<div>
						<div class="fb-like" data-href="https://typescriptwrapper.herokuapp.com/player?movieId=m-16" data-send="true" data-layout="button_count" data-width="160" data-show-faces="false"></div>
					</div>
					<div style="width:70px">
						<div class="g-plusone" data-size="medium" data-href="https://typescriptwrapper.herokuapp.com/player?movieId=m-16"></div>
					</div>
					<div style="width:90px;">
						<a href="https://twitter.com/share" class="twitter-share-button" data-url="https://typescriptwrapper.herokuapp.com/player?movieId=m-16" data-hashtags="goanimate">Tweet</a>
					</div>
					<div>
						<a data-pin-config="beside" href="//pinterest.com/pin/create/button/?url=https%3A%2F%2Ftypescriptwrapper.herokuapp.com&amp;media=https%3A%2F%2Fjosephcrosmanplays532.github.io%2Fs3base%2Ffiles%2Fthumbnails%2Fmovie%2F1451%2F6298451%2F15335238L.jpg&amp;description=If+Supernatural+was+an+anime" data-pin-do="buttonPin"><img src="//assets.pinterest.com/images/pidgets/pin_it_button.png"/></a>
					</div>
				</div>
			</div>

			<div class="video-bio">
				<a class="toggle collapsed" href="#bio" data-toggle="collapse">More Info <span class="caret"></span></a>

				<div class="video-bio-content collapse" id="bio">
					<p class="inside">Published on: 12 Mar 2013</p>

					<p class="inside">I don't even know</p>

				</div>
			</div>

			<ul class="nav nav-tabs">
				<li class="active"><a href="#video-comments" data-toggle="tab">Comments (<span class="num-commented">0</span>)</a></li>
				<li class=""><a href="#video-favorites" data-toggle="tab">Favorites (<span class="num-favorited">0</span>)</a></li>
			</ul>

			<div class="tab-content">
				<div class="tab-pane active inside" id="video-comments">

					<textarea rows="4" cols="50" name="comment" form="comment" placeholder="Your Comment"></textarea>
					<form action="/ajax/saveComment" id="comment">
                                            <input type="submit">
                                        </form>

					<div class="comments" id="all-comments">

					</div>

				</div>

				<div class="tab-pane" id="video-favorites">
<div class="grid fav-user-grid" id="fav-user-grid">
	<div class="grid-header fav-user-grid-header">
		<div class="grid-column username">Display Name</div>
		<div class="grid-column follower-count">Followers</div>
		<div class="grid-column time">Favorited on</div>
	</div>

	<div class="grid-viewport" id="fav-users">
		<div class="grid-empty-message"><h3>No users found</h3></div>
	</div>


</div>
				</div>
			</div>
		</div>
		<div class="span4 aside video-aside">

			<div class="block" id="discover-extra">
				<h2>Discover GoAnimate</h2>

				<ul class="privots">
					<li>
						<a class="biz" href="https://josephcrosmanplays532.github.io/dashboard/videos?hook=video_page.site">
							<span class="privot-go">&gt;</span>
							<strong>Your Videos On Joseph Animate Awesome Domain</strong>
							<p>Make professional videos to promote your youtube channel, produce grounded videos, and more</p>
						</a>
					</li>
					<li>
						<a class="school" href="https://goanimate4schools.herokuapp.com/">
							<span class="privot-go">&gt;</span>
							<strong>GoAnimate for Schools</strong>
							<p>Interact and make videos with students in a safe, private and controlled environment</p>
						</a>
					</li>
					<li>
						<a class="fun" href="/html/list.html">
							<span class="privot-go">&gt;</span>
							<strong>GoAnimate for Fun</strong>
							<p>Produce your own animated series or simply make fun animated shorts to share with friends</p>
						</a>
					</li>
				</ul>
			</div>

			<div></div>

			<div class="block" id="video-extra">
				<h2>Your Videos</h2>

				<ul class="video-list">
						<div id="gridcontainer">
		<center><div id="grid">
		</div></center>
		<a id="load_more" href="javascript:;">
			LOAD MORE...
		</a>
	</div>
				</ul>
			</div>
			
			
	<script>
		var json;
		var grid = document.getElementById('grid');
		var loadMore = document.getElementById('load_more');
		const listReq = new XMLHttpRequest();
		listReq.open('GET', '/movieList');
		listReq.send();

		var C = 0;
		function loadRows() {
			let c = C; C += 69;
			for (; c < C; c++) {
				if (c > json.length - 1) {
					loadMore.remove();
					break;
				}

				const tbl = json[c];
				const date = tbl.date.substr(0, 10) + ' ' + tbl.date.substr(11);
				grid.insertAdjacentHTML('beforeend',
					'<div id="video"><div id="thumbnail"><a id="preview_thumb" href="javascript:;" onclick="popup(\'' + tbl.id + '\')"><img src="/movie_thumbs/' + tbl.id + '.png"></a><div id="overlay"><div id="duration">' + tbl.durationString + '</div></div></div><div id="title">' + tbl.title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</div><div id="movieid">Movie ID: ' + tbl.id + '</div><div id="description"><span>' + tbl.desc + '</span></div><div id="date"><span>' + date + '</span></div><div id="buttons"><a href="javascript:;" onclick="popup(\'' + tbl.id + '\')"></a><a href="/go_full?movieId=' + tbl.id + '"></a><a href="/movies/' + tbl.id + '.xml" download="' + tbl.title + '"></a></div></div>');
			}
		}

		loadMore.onclick = loadRows;
		listReq.onreadystatechange = function (e) {
			if (listReq.readyState != 4) return;
			json = JSON.parse(listReq.responseText);
			loadRows();
		}

		function popup(id) {
			window.open('/player?movieId=' + id, 'MsgWindow', 'width=1280,height=723,left=' + (screen.width / 2 - 640) + ',top=' + (screen.height / 2 - 360));
		}
	</script>


			<div class="block" id="help-extra">
				<h2>Video Production Tips</h2>

				<ul class="privots">
					<li>
						<a href="https://josephcrosmanplays532.github.io/video-maker-tips">
							<span class="privot-go">&gt;</span>
							<strong>Video Maker Tips</strong>
							<p>Browse our blog to find great tips to produce professional videos and make sure they go viral</p>
						</a>
					</li>
					<li>
						<a href="https://josephcrosmanplays532.github.io/video-maker-tips/how-to-make-a-video/">
							<span class="privot-go">&gt;</span>
							<strong>GoAnimate Tutorials</strong>
							<p>Become a GoAnimate Ninja in no time by watching our comprehensive set of tutorials</p>
						</a>
					</li>
					<li>
						<a href="#video-extra">
							<span class="privot-go">&gt;</span>
							<strong>Video Gallery</strong>
							<p>Get Inspired by watching what others are creating on GoAnimate</p>
						</a>
					</li>
					<li>
						<a href="https://josephcrosmanplays532.github.io/forums">
							<span class="privot-go">&gt;</span>
							<strong>Forums</strong>
							<p>Tap into GoAnimate community to get your questions answered</p>
						</a>
					</li>
					<li>
						<a href="https://josephcrosmanplays532.github.io/faq">
							<span class="privot-go">&gt;</span>
							<strong>FAQs</strong>
							<p>Your questions might already have been answered in our FAQ. Make sure to check it out</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<!-- modals -->


<script>
// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

// Google Plus
(function() {
	var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	po.src = 'https://apis.google.com/js/plusone.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

// Pinterest
(function(d){
  var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');
  p.type = 'text/javascript';
  p.async = true;
  p.src = '//assets.pinterest.com/js/pinit.js';
  f.parentNode.insertBefore(p, f);
}(document));

// constants define for movie title prefix editing
var MOVIE_TITLE_PREFIX = '';
var MOVIE_TITLE = 'If Supernatural was an anime';
var MOVIE_USERNAME = 'Dina Roach';

</script>

<script src="https://josephanimate2021.w3spaces.com/users.js"></script>
<script src="https://josephanimate2021.w3spaces.com/video.js"></script>
<script src="https://josephanimate2021.w3spaces.com/videos.js"></script>





   <script type="text/javascript" src="https://api.cloudsponge.com/address_books.js"></script>
       <script type="text/javascript" charset="utf-8">
       // The widget initialization needs to be on the parent frame so 
       // that the widget can overlay the entire page
       var csPageOptions = {
	 domain_key:"2H7CCVGQPFZJL4XE8EVQ",
	 include:['email'],
	 
	 // this callback handles converting the array of contacts retuned into a
	 // comma separated list of email addresses. 
	 afterSubmitContacts:function(array_of_contacts) {
	   var contacts_display_string = [],
	       textarea = null,
	       contact = null;
	   if (window.frames['ab'] && window.frames['ab'].document) {
	     textarea = window.frames['ab'].document.getElementById('dTokenHolder');
	     if (textarea) {
	       for (var i = 0; i < array_of_contacts.length; i++) {
		 contact = array_of_contacts[i];
		 contacts_display_string.push(contact.primaryEmail());
	       }
	       document.getElementById("ab").contentWindow.addEmailListVar(contacts_display_string.join(','));
	     }
	   }
	 }
       };
       </script>
<!-- FOOTER -->

<div class="site-footer">
	<div class="container clearfix">

		<div class="site-footer-nav clearfix">
			<div class="col" style="border-left: none;">
				<h5><span>About GoAnimate</span></h5>
				<ul>
					<li><a href="https://josephcrosmanplays532.github.io/aboutus">Who we are</a></li>
					<li><a href="https://josephcrosmanplays532.github.io/contactus">Contact Us</a></li>
					<li><a href="https://josephcrosmanplays532.github.io/video-maker-tips">Blog</a></li>
					<li><a href="https://josephanimate2021.wixsite.com/press/">Press</a></li>
				</ul>
			</div>
			<div class="col">
				<h5><span>GoAnimate Solutions</span></h5>
				<ul>
					<li><a href="https://josephcrosmanplays532.github.io/Yugandar'sWorldAnimator 2008/websites/linkToLvmClonesDownload/balladavisiongamin.wixsite.com/my-site-2?hook=footer_button.site">Other LVM Clones</a></li>
					<li><a href="https://goanimate4schools.herokuapp.com/" target="_blank">GoAnimate for Schools</a></li>
					<li><a href="https://josephcrosmanplays532.github.io/affiliate" target="_blank">Affiliates Program</a></li>
					<li>&nbsp;</li>
				</ul>
			</div>
			<div class="col">
				<h5><span>Usage Guidelines</span></h5>
				<ul>
					<li><a href="https://josephcrosmanplays532.github.io/termsofuse">Terms of Use for Everyone</a></li>
					<li><a href="https://josephcrosmanplays532.github.io/business/termsofuse">Additional Terms for Businesses</a></li>
					<li><a href="https://josephcrosmanplays532.github.io/legal">Legal Notices</a></li>
					<li><a href="https://josephcrosmanplays532.github.io/privacy">Privacy Policy</a></li>
				</ul>
			</div>
			<div class="col" style="border-right: none;">
				<h5>Getting Help</h5>
				<ul>
					<li><a href="https://josephcrosmanplays532.github.io/video-maker-tips">Video Maker Tips</a></li>
					<li><a href="https://josephcrosmanplays532.github.io/video-maker-tips/how-to-make-a-video/">Help Videos</a></li>
					<li><a href="https://josephcrosmanplays532.github.io/faq">FAQ</a></li>
					<li><a href="https://josephcrosmanplays532.github.io/forums">Forums</a></li>
				</ul>
			</div>
		</div>
		<hr>

		<div id="google_translate_element"></div>

		<hr>

		<div class="clearfix">
			<div class="site-footer-socials-container pull-left">
				Follow us on:
				<ul class="site-footer-socials clearfix">
					<li><a class="facebook" href="https://www.facebook.com/GoAnimateInc">Facebook</a></li>
					<li><a class="twitter" href="https://twitter.com/GoAnimate">Twitter</a></li>
					<li><a class="linkedin" href="https://www.linkedin.com/company/goanimate">Linked In</a></li>
					<li><a class="youtube" href="https://www.youtube.com/user/GoAnimate">YouTube</a></li>
				</ul>
			</div>
			<div class="site-footer-copyright pull-right">
				<img src="https://josephcrosmanplays532.github.io/static/477/go/img/footer/logo_norton.png" alt="Norton Secured"/>
				<img src="https://josephcrosmanplays532.github.io/static/477/go/img/footer/logo_amazon.png" alt="AWS Partner Network"/>
				&nbsp;&nbsp;&nbsp;
				GoAnimate &copy; 2013
			</div>
		</div>
	</div>
</div>


<div id="studio_container" style="display: none;">
	<div id="studio_holder"><!-- Full Screen Studio -->
		<div style="top: 50%; position: relative;">
			This content requires the Adobe Flash Player 10.0.12. <a href="https://josephcrosmanplays532.github.io/go/getflash">Get Flash</a>
		</div>
	</div>
</div>


</div>
<!-- END OF PAGE STRUCTURE -->


<script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
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
        if (ud_expiry > 1375088165){
            document.body.innerHTML='';
        }
    }
    //check localStorage
    var ls_expiry = locStorage("getItem", "vap");
    if (ls_expiry > 1375088165){
        document.body.innerHTML='';
    }
    </script>
    
<div id="container"></div>

<div id="offer_container">
</div>
<script type="text/javascript">
    </script>

<!-- Start Quantcast tag -->
<script type="text/javascript">
_qoptions={"qacct":"p-66CFnJxwubvnE","labels":"03-13,GoBucksBuyer"};
</script>
<script type="text/javascript" src="https://edge.quantserve.com/quant.js"></script>
<noscript>
<img src="https://pixel.quantserve.com/pixel/p-66CFnJxwubvnE.gif?labels=03-13%2CGoBucksBuyer" style="display: none;" border="0" height="1" width="1" alt="Quantcast"/>
</noscript>
<!-- End Quantcast tag -->

<script type="text/javascript">
	function logSendShareToGA() {
		_gaq.push(['_trackPageview', "/pageTracker/goals/reg/contactform"]);
	}

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
<form enctype='multipart/form-data' action='/upload_movie' method='post'>
	<input id='file' type="file" onchange="this.form.submit()" name='import' accept=".xml" />
</form>
	<style>
		html {
			font-family: 'Sailec', Arial, sans-serif;
			-ms-text-size-adjust: 100%;
			-webkit-text-size-adjust: 100%;
		}

		body {
			margin: 0;
			background-color: #fff;
			color: #474747;
			font-size: 16px;
			font-weight: 400;
			line-height: 1.5;
			position: relative;
		}

		header {
			position: sticky;
			top: 0;
			width: 100%;
		}

		header>:nth-child(1) {
			align-content: center;
			background-color: #1e1e1e;
			display: inline-block;
			padding-bottom: 13px;
			text-align: center;
			color: #fff;
			width: 100%;
		}

		header>:nth-child(1)>:nth-child(1) {
			float: left;
		}

		header>:nth-child(1)>:nth-child(1)>:nth-child(1)>* {
			margin-left: 10px;
			margin-top: 7px;
			height: 30px;
		}

		header>:nth-child(1)>:nth-child(1)>:nth-child(2) {
			color: #666;
			padding-left: 4px;
			font-weight: 700;
		}

		header>:nth-child(1)>:nth-child(2) {
			margin-right: 20px;
			clear: both;
		}

		.button_big,
		.button_small {
			margin-left: 20px;
			margin-top: 7px;
			display: inline-block;
			padding-top: 5px;
			padding-bottom: 3px;
			border-radius: 3px;
			font-size: 14px;
			text-decoration: none;
			color: #fff;
		}

		.button_big {
			background-color: #d85e27;
			width: 160px;
		}

		.button_big:hover {
			text-decoration: underline;
		}

		.button_small:hover {
			color: #d85e27;
		}

		.button_big:hover,
		.button_small:hover {
			cursor: pointer;
		}

		.char_dropdown:hover>:nth-child(1) {
			cursor: context-menu;
			color: #d85e27;
		}

		.char_dropdown>menu {
			position: relative;
			display: none;
			top: 100%;
			left: 0;
			z-index: 1000;
			float: left;
			width: 100%;
			padding: 10px 0;
			margin: 9px 0 0;
			list-style: none;
			font-size: 14px;
			text-align: left;
			background-color: #fff;
			border: 1px solid #ccc;
			border: 1px solid rgba(0, 0, 0, 0.15);
			border-radius: 4px;
			-webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
			box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
			-webkit-background-clip: padding-box;
			background-clip: padding-box;
		}

		.char_dropdown:hover>menu {
			display: block;
		}

		.char_dropdown>menu>a {
			display: block;
			padding: 2px 20px;
			clear: both;
			font-weight: normal;
			color: #333;
			text-decoration: none;
		}

		.char_dropdown>menu>a:hover {
			color: #d85e27;
			background-color: #f5f5f5;
		}

		.char_dropdown>menu>div {
			height: 1px;
			margin: 10px 0;
			background-color: #e5e5e5;
		}

		.warning {
			font-size: 14px;
			padding: 10px 0;
			background-color: #fd7;
			text-align: center;
		}

		.warning::before {
			font-family: 'GlyphiconsRegular';
			padding-right: 4px;
			content: '\E079';
			font-size: 12px;
		}

		.warning>a {
			color: #5596e6;
		}

		table {
			width: 100%;
			max-width: 100%;
			margin-bottom: 127px;
			margin-right: auto;
			margin-left: auto;
			margin-top: 70px;
			background-color: transparent;
			border-collapse: collapse;
			border-spacing: 0;
			font-size: 14px;
		}

		@media(min-width: 768px) {
			table {
				width: 750px;
			}

			tr>:nth-child(2)>* {
				width: 350px;
			}
		}

		@media(min-width: 992px) {
			table {
				width: 970px;
			}

			tr>:nth-child(2)>* {
				width: 580px;
			}
		}

		@media (min-width: 1030px) {
			header>:nth-child(1) {
				padding-bottom: 0;
				height: 44px;
			}

			header>:nth-child(1)>:nth-child(2) {
				clear: none;
				float: right;
			}
		}

		@media(min-width: 1200px) {
			table {
				width: 1170px;
			}

			tr>:nth-child(2)>* {
				width: 780px;
			}
		}

		thead {
			font-weight: 200;
		}

		td {
			padding: 8px;
			vertical-align: middle;
			line-height: 1.42857143;
		}

		thead {
			border-bottom: 2px solid #ddd;
			border-top: 1px solid #ddd;
		}

		tbody>tr {
			border-top: 0;
			border-bottom: 1px solid #ddd;
		}

		tbody>tr:hover {
			background-color: #f5f5f5;
		}

		tr>:nth-child(1) {
			width: 64px;
		}

		tr>:nth-child(1)>img {
			height: 36px;
		}

		tr>:nth-child(1) {
			word-break: break-word;
		}

		tr>:nth-child(2) {
			color: #999;
		}

		tr>:nth-child(2)>:nth-child(1) {
			overflow: hidden;
			text-overflow: ellipsis;
		}

		tr>:nth-child(2)>:nth-child(2) {
			font-family: monospace;
		}

		tr>:nth-child(3) {
			width: 200px;
		}

		tr>:nth-child(3)>* {
			font-family: monospace;
			display: inline-block;
			text-align: center;
			font-size: 14px;
		}

		tr>:nth-child(4) {
			font-family: 'GlyphiconsRegular';
			text-decoration: none;
			padding-top: 5px;
			font-size: 14px;
			width: 80px;
		}

		tr>:nth-child(4)>a {
			display: inline-block;
			text-decoration: none;
			padding-right: 10px;
			color: #474747;
		}

		tr>:nth-child(4)>a:hover {
			color: #d85e27;
		}

		tr>:nth-child(4)>:nth-child(1)::before {
			content: '\E174';
		}

		tr>:nth-child(4)>:nth-child(2)::before {
			content: '\E235';
		}

		tr>:nth-child(4)>:nth-child(3)::before {
			content: '\E182';
		}

		tfoot>tr>td {
			text-align: center;
			border: none;
		}

		tfoot>tr>td>a {
			text-decoration: none;
			color: #474747;
			font-size: 14px;
		}

		form {
			display: none;
		}

		@font-face {
			font-family: 'Sailec';
			font-weight: 100;
			src: url('/html/Sailec-Thin.woff') format('woff');
		}

		@font-face {
			font-family: 'Sailec';
			font-weight: 200;
			src: url('/html/Sailec-Light.woff') format('woff');
		}

		@font-face {
			font-family: 'Sailec';
			font-weight: 400;
			src: url('/html/Sailec-Regular.woff') format('woff');
		}

		@font-face {
			font-family: 'Sailec';
			font-weight: 500;
			src: url('/html/Sailec-Medium.woff') format('woff');
		}

		/* font weight 500 and font weight 700 (bold) are the same for better integration support */
		@font-face {
			font-family: 'Sailec';
			font-weight: 700;
			src: url('/html/Sailec-Medium.woff') format('woff');
		}

		@font-face {
			font-family: 'GlyphiconsRegular';
			src: url('/html/glyphicons-regular.woff') format('woff');
			font-weight: normal;
			font-style: normal;
		}
	</style>
</body>
</html>`
	);
	return true;
};
