!function(a){a.fn.bootstrapSwitch=function(c){var b={init:function(){return this.each(function(){var o=a(this),m,f,l,n,h="",g=o.attr("class"),i,d,j="ON",e="OFF";a.each(["switch-mini","switch-small","switch-large"],function(p,q){if(g.indexOf(q)>=0){h=q}});o.addClass("has-switch");if(o.data("on")!==undefined){i="switch-"+o.data("on")}if(o.data("on-label")!==undefined){j=o.data("on-label")}if(o.data("off-label")!==undefined){e=o.data("off-label")}f=a("<span>").addClass("switch-left").addClass(h).addClass(i).html(j);i="";if(o.data("off")!==undefined){i="switch-"+o.data("off")}l=a("<span>").addClass("switch-right").addClass(h).addClass(i).html(e);n=a("<label>").html("&nbsp;").addClass(h).attr("for",o.find("input").attr("id"));m=o.find(":checkbox").wrap(a("<div>")).parent().data("animated",false);if(o.data("animated")!==false){m.addClass("switch-animate").data("animated",true)}m.append(f).append(n).append(l);o.find(">div").addClass(o.find("input").is(":checked")?"switch-on":"switch-off");if(o.find("input").is(":disabled")){a(this).addClass("deactivate")}var k=function(p){p.siblings("label").trigger("mousedown").trigger("mouseup").trigger("click")};o.on("keydown",function(p){if(p.keyCode===32){p.stopImmediatePropagation();p.preventDefault();k(a(p.target).find("span:first"))}});f.on("click",function(p){k(a(this))});l.on("click",function(p){k(a(this))});o.find("input").on("change",function(q){var p=a(this).parent();q.preventDefault();q.stopImmediatePropagation();p.css("left","");if(a(this).is(":checked")){p.removeClass("switch-off").addClass("switch-on")}else{p.removeClass("switch-on").addClass("switch-off")}if(p.data("animated")!==false){p.addClass("switch-animate")}p.parent().trigger("switch-change",{el:a(this),value:a(this).is(":checked")})});o.find("label").on("mousedown touchstart",function(q){var p=a(this);d=false;q.preventDefault();q.stopImmediatePropagation();p.closest("div").removeClass("switch-animate");if(p.closest(".switch").is(".deactivate")){p.unbind("click")}else{p.on("mousemove touchmove",function(w){var r=a(this).closest(".switch"),t=(w.pageX||w.originalEvent.targetTouches[0].pageX)-r.offset().left,u=(t/r.width())*100,v=25,s=75;d=true;if(u<v){u=v}else{if(u>s){u=s}}r.find(">div").css("left",(u-s)+"%")});p.on("click touchend",function(t){var s=a(this),r=a(t.target),u=r.siblings("input");t.stopImmediatePropagation();t.preventDefault();s.unbind("mouseleave");if(d){u.prop("checked",!(parseInt(s.parent().css("left"))<-25))}else{u.prop("checked",!u.is(":checked"))}d=false;u.trigger("change")});p.on("mouseleave",function(s){var r=a(this),t=r.siblings("input");s.preventDefault();s.stopImmediatePropagation();r.unbind("mouseleave");r.trigger("mouseup");t.prop("checked",!(parseInt(r.parent().css("left"))<-25)).trigger("change")});p.on("mouseup",function(r){r.stopImmediatePropagation();r.preventDefault();a(this).unbind("mousemove")})}})})},toggleActivation:function(){a(this).toggleClass("deactivate")},isActive:function(){return !a(this).hasClass("deactivate")},setActive:function(d){if(d){a(this).removeClass("deactivate")}else{a(this).addClass("deactivate")}},toggleState:function(d){var e=a(this).find("input:checkbox");e.prop("checked",!e.is(":checked")).trigger("change",d)},setState:function(e,d){a(this).find("input:checkbox").prop("checked",e).trigger("change",d)},status:function(){return a(this).find("input:checkbox").is(":checked")},destroy:function(){var d=a(this).find("div"),e;d.find(":not(input:checkbox)").remove();e=d.children();e.unwrap().unwrap();e.unbind("change");return e}};if(b[c]){return b[c].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof c==="object"||!c){return b.init.apply(this,arguments)}else{a.error("Method "+c+" does not exist!")}}}}(jQuery);$(function(){$(".switch")["bootstrapSwitch"]()});
