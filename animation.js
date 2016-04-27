window.onload = initialPage;

var bar = true; //tracks side bar position, true means side bar is showing

function initialPage(){
	adjustUItoScreenSize();
	startingEffects();
	setNavigation();
	navbarAutoCollapse();
}

function modifyViews(){//to be continued
	if (Cookies.get("view") == undefined){
		if ($(window).width() > 768){
			Cookies.set("view", "desktop");
			prependViewportWidth("200");
		}else{
			Cookies.set("view", "mobile");
			prependViewportWidth("700");
		}
	}else{
		if (Cookies.get("view") == "desktop"){
			prependViewportWidth("1200");
		}else{
			prependViewportWidth("700");
		}
	}
	
	$(document).ready(function(){
		$(".changeView").click(function(){
			if (Cookies.get("view") == "desktop"){
				Cookies.set("view", "mobile");
				location.reload();
			}else{
				Cookies.set("view", "desktop");
				location.reload();
			}
		});
	});
	
	function prependViewportWidth(width){
		var metaTag=document.createElement('meta');
		metaTag.name = "viewport"
		metaTag.content = "width=" + width + ", initial-scale=5.0, maximum-scale=5.0, user-scalable=5"
		document.getElementsByTagName('head')[0].appendChild(metaTag);
	}
};//to be continued


function adjustUItoScreenSize(){
	$(document).ready(function() {
		if($( window ).width() > 768) {
			toLargeScreen();
		}
		if($( window ).width() <= 768) {
			toSmallScreen();
		}
		$(window).resize(function() {
			if($( window ).width() > 768) {
				toLargeScreen();
			}
			if($( window ).width() <= 768) {
				toSmallScreen();
			}
		});
	});
	
	function toLargeScreen(){
		if (bar == false){
			$("#Nav").css("left","-220px");
			$(".center").css("padding-left","100px");
		}else{
			$(".center").css("padding-left","270px");
		}
		$("#Nav").attr("class","navExpaned navbar navbar-default");
		$("#Nav").css("height","100%");
		$("#myNavbar").attr("class","collapse navbar-collapse expandedList");
		$("#myNavbar").css("background-color","transparent");
		$(".bar").css("display","");	
	}
	
	function toSmallScreen(){
		if (bar == false){
			$("#Nav").css("left","0");
			$(".center").css("padding-left","50px");
		}else{
			$(".center").css("padding-left","50px");
		}
		$("#Nav").attr("class","navCollapsed navbar navbar-default");
		$("#Nav").css("height","0%");
		$("#myNavbar").attr("class","collapse navbar-collapse");
		$("#myNavbar").css("background-color","grey");
		$(".bar").css("display","none");
	}
}

function startingEffects(){
	TweenLite.to($(".center"), 0, {"background-image": "url('Sea.jpg')"});
	slideMenu();
	navFunctions();
}

function slideMenu(){
	var tl = new TimelineLite();
	if($( window ).width() > 768) {
		$("#welcome").delay(3000).fadeIn(500);
		tl.to(".navExpaned", 0, {left:"100%", opacity:0, height:0, top:"50%"});
		tl.to("#bar3", 0.1, {left:"100%", opacity:0, height:"0", top:"50%"});
		tl.to("#bar3", 0.2, {left:0, opacity:1, height:"100%", top:"0", width:"200px"});
		tl.to(".navExpaned", 0.05, {left:"0%", opacity:"0.5", height:"0", top:"50%"});
		tl.to(".navExpaned", 0.15, {left:0, opacity:1, height:"100%", top:"0"}, "-=0.1");
		tl.to(".navExpaned", 0, {left:"100%", opacity:0, height:0, top:"50%"});
		tl.to(".navExpaned", 0.05, {left:"0%", opacity:"0.5", height:"0", top:"50%"});
		tl.to(".navExpaned", 0.15, {left:0, opacity:1, height:"100%", top:"0"}, "-=0.1");
		tl.to(".navExpaned", 0, {left:"100%", opacity:0, height:0, top:"50%"});+
		tl.to(".navExpaned", 0.25, {left:"5%", opacity:"0.5", height:"30", top:"50%"});
		tl.to(".navExpaned", 0.25, {left:"5%", opacity:"0", height:"0", top:"50%"});
		tl.to("#bar3", 0.3, {left:0, opacity:0, height:"100%", top:"0", width:"200px"},"-=0.6");
		tl.to("#bar3", 0.3, {left:0, opacity:0, height:"100%", top:"0", width:"0px"},"-=0.6");
		tl.to(".navExpaned", 0.2, {left:0, opacity:1, height:"100%", top:"0"}, "-=0.2");
		tl.to("#bar1", 0.05, {left:"50%", opacity:0, height:"0", top:"50%"}, "-=0.1");
		tl.to("#bar1", 0.1, {left:"215px", opacity:1, height:"100%", top:"0"});
		tl.to("#bar2", 0.05, {left:"50%", opacity:0, height:"0", top:"50%"}, "-=0.1");
		tl.to("#bar2", 0.1, {left:"230px", opacity:1, height:"100%", top:"0"});
		tl.to("#bar5", 0.05, {left:"50%", opacity:0, height:"0", top:"50%"}, "-=0.1");
		tl.to("#bar5", 0.1, {left:"210px", opacity:1, height:"100%", top:"0"});
		tl.from(".clickToPE", 0.15, {right:200, opacity:0, rotation: "-180"});
		tl.from(".clickToLE", 0.15, {right:200, opacity:0, rotation: "-180"});
		tl.from(".clickToCI", 0.15, {right:200, opacity:0, rotation: "-180"});
		tl.from(".changeView", 0.15, {right:200, opacity:0, rotation: "-180"});
	}else{
		$("#welcome").delay(500).fadeIn(500);
		tl.to(".navCollapsed", 0, {top:"1000px", opacity:"0"});
		tl.to(".navCollapsed", 0.5, {top:0, opacity:1});
		tl.to("#bar1", 0, {left:"215px", opacity:1, height:"100%", top:"0"});
		tl.to("#bar2", 0, {left:"230px", opacity:1, height:"100%", top:"0"});
		tl.to("#bar5", 0, {left:"210px", opacity:1, height:"100%", top:"0"});
	}
}

function navFunctions (){
	var tl = new TimelineLite();
	tl.to("#bar4", 0, {left:"210px", opacity:0, height:"100%", width:"30px", top:"0", "z-index": 1});
	if ($( window ).width() > 768) {
		tl.to("#bar4", 2, {left:"210px", opacity:0, height:"100%", width:"30px", top:"0", "z-index": 1});
		barOut();
	}else{
		$(".center").css("padding-left","50px");
	}
	$(document).ready(function(){//overwrite bootstrap css --better for phone & desktop
		$("#bar4").on('click', function () {
			if (bar == true){
				barOut()
			}else{
				barIn()
			};
		});
		$(".NavLink").on('click', function () {
			if (bar == true){
				barOut()
			};
		});		
	});
	
	function barOut(){
		tl.to("#bar4", 2, {left:"0px", opacity:1, height:"100%", width:"55px", top:"0", "z-index": 1});
		tl.to(".navExpaned", 0.2, {left:"-220px", opacity:1, height:"100%", top:"0"}, "-=2");
		tl.to("#bar1", 1, {left:"0px", opacity:1, height:"100%", top:"0"}, "-=2");
		tl.to("#bar2", 1, {left:"50px", opacity:1, height:"100%", top:"0"}, "-=2");
		tl.to("#bar5", 1, {left:"0px", opacity:1, height:"100%", top:"0", width:"50"}, "-=2");
		tl.to("#bar6", 1, {delay: 1, opacity:"1"},"-=2");
		if($( window ).width() > 768) {
			tl.to(".center", 1, {"padding-left":"100px"}, "-=2");
		}
		bar = false;
	}
	
	function barIn(){
		tl.to("#bar4", 0, {left:"210px", opacity:0, height:"100%", width:"30px", top:"0", "z-index": 1});
		tl.to(".navExpaned", 0.2, {left:0, opacity:1, height:"100%", top:"0"}, "-=0.2");
		tl.to("#bar1", 0.1, {left:"215px", opacity:1, height:"100%", top:"0"});
		tl.to("#bar2", 0.1, {left:"230px", opacity:1, height:"100%", top:"0"});
		tl.to("#bar5", 0.1, {left:"210px", opacity:1, height:"100%", top:"0", width:"20"});
		tl.to("#bar6", 0.1, {opacity:"0"});
		tl.to(".center", 1, {"padding-left":"270px"}, "-=1");
		tl.from(".clickToPE", 0.2, {right:200, opacity:0, rotation: "-180"});
		tl.from(".clickToLE", 0.2, {right:200, opacity:0, rotation: "-180"});
		tl.from(".clickToCI", 0.2, {right:200, opacity:0, rotation: "-180"});
		tl.from(".changeView", 0.2, {right:200, opacity:0, rotation: "-180"});
		bar = true;
	}
}
//Starting Effects

function setNavigation(){
	function changeToPageFadeStyle(buttonClass, pageId){
		$(document).ready(function(){
			$("."+buttonClass).click(function(){
				$(".center").fadeOut(200);
				$("#"+pageId).delay(300).fadeIn(500);
			});
		});
	}
	changeToPageFadeStyle("clickToWelcome", "welcome");
	changeToPageFadeStyle("clickToPE", "PE");
	changeToPageFadeStyle("clickToLE", "LE");
	changeToPageFadeStyle("clickToCI", "CI");
	
	function changeToPageBackgroundChange(buttonClass, background){
		$(document).ready(function(){
			$("."+buttonClass).click(function(){
				TweenLite.to($(".center"), 0, {delay: 0.2, "background-image": background});
			});
		});
	}
	changeToPageBackgroundChange("clickToWelcome", "url('Sea.jpg')");
	changeToPageBackgroundChange("clickToPE", "url('Graph.jpg')");
	changeToPageBackgroundChange("clickToLE", "url('Wall.jpg')");
	changeToPageBackgroundChange("clickToCI", "url('')");
	
	function preloadImage(image){
		$('#loadPics').prepend('<img src="' + image + '" />')
	}
	preloadImage("Sea.jpg");
	preloadImage("Graph.jpg");
	preloadImage("Wall.jpg");
}
//Navigation modules

function navbarAutoCollapse(){
	$(document).ready(function(){
		$("#menuButton").blur(function(){
			setTimeout(function(){ $("#myNavbar").collapse("hide") }, 200);
		});
	});
	$(document).ready(function(){//overwrite bootstrap css --better for phone & desktop
		$("#menuButton").on('mouseenter', function () {
			$("#menuButton").css("background-color", "black");
		});
		$("#menuButton").on('mouseleave', function () {
			$("#menuButton").css("background-color", "grey");
		});
		$("#myNavbar").on('hidden.bs.collapse', function () {
			$("#menuButton").css("background-color", "grey");
			$("#menuButton").on('mouseleave', function () {
				$("#menuButton").css("background-color", "grey");
			});
		});
		$("#myNavbar").on('show.bs.collapse', function () {
			$("#menuButton").css("background-color", "black");
			$("#menuButton").on('mouseleave', function () {
				$("#menuButton").css("background-color", "grey");
			});
		});
	});
}
//Menu button improvement