// build time:Mon Jul 25 2022 23:38:25 GMT+0800 (China Standard Time)
$(function(){$('[data-toggle="tooltip"]').tooltip();if(typeof $.fn.slimScroll!="undefined"){$(".sidebar .slimContent").slimScroll({height:"auto",color:"rgba(0,0,0,0.2)",size:"3px"})}$(".geopattern").each(function(){$(this).geopattern($(this).data("pattern-id"))});var t=$("#nav-main").okayNav({swipe_enabled:false});$(".donate-box").on("click",".pay_item",function(){var t=$(this).attr("data-id");var a=$(this).attr("data-src")?$(this).attr("data-src"):"assets/images/donate/"+t+"img.png";var e=t=="alipay"?"支付宝":"微信";$(this).addClass("checked").siblings(".pay_item").removeClass("checked");$(".donate-payimg img").attr("src",a);$("#donate-pay_txt").text(e)});$("[data-stick-bottom]").keepInView({fixed:false,parentClass:"has-sticky",customClass:"sticky",trigger:"bottom",zindex:42,edgeOffset:0});$("[data-stick-top]").keepInView({fixed:true,parentClass:"has-sticky",customClass:"sticky",trigger:"top",zindex:42,edgeOffset:0})});
//rebuild by neat 