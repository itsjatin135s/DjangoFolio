//  with timeline

var tl = gsap.timeline({opacity : 0});
tl.from("#intro", {y: -800, duration: .6});
tl.from("#nametop", {x: -500, duration: .5});
tl.from("#navoption", {x:500, duration: .6});
tl.from("#foot", {y:300, duration: .6});


function reverse(){
	tl.reverse()
}

// info pnnel on index page functions

// hide pannel for sec
function hide(){
	gsap.to('#info',{duration:1,opacity:0
	});
}

// show pannel when changes done
function show(){
	gsap.to('#info',{
		duration:.3,opacity:1,delay:1
	})
}

// pannel variables

// intro
var lines = document.getElementById('lines');

// headings
var h1 = document.getElementById('h1');
var h2 = document.getElementById('h2');
var h3 = document.getElementById('h3');

// details
var d1 = document.getElementById('det1');
var d2 = document.getElementById('det2');
var d3 = document.getElementById('det3');

var achv1 = document.getElementById('achiv1')
var achv2 = document.getElementById('achiv2')
var achv3 = document.getElementById('achiv3')


// myself pannel
function myself(){
	hide();
	setTimeout(function(){
	lines.innerHTML = "You got the task get done just chit-chat and get it done here the more harder it is the more I love it.It's a one place task done."
	h1.innerHTML = 'Technologies'
	h2.innerHTML = 'Interest'
	h3.innerHTML = 'Languages'
	d1.innerHTML = 'Python, MySQL, Git, Git-Hub, Heroku, HTML/CSS/JavaScript'
	d2.innerHTML = 'Web Development, Web Scraping, Digital Art (Photoshop)'
	d3.innerHTML = 'Hindi, English, Spanish (Basics)'
	achv1.className = achv1.className.replace("border-gray-300" , "text-blue-500 border-blue-500")
	achv2.className = achv2.className.replace("text-blue-500 border-blue-500" , "border-gray-300")
	achv3.className = achv3.className.replace("text-blue-500 border-blue-500" , "border-gray-300")
	},380);
	show()
}


// internship pannel
function intern(){
	hide();
	setTimeout(function(){
	lines.innerHTML = 'Here is some of my professional experience gained so far during my graduation.'
	h1.innerHTML = 'Spark Foundation'
	h2.innerHTML = 'Peacock Solar'
	h3.innerHTML = 'Thanisha Lifestyle Creation'
	d1.innerHTML = 'Web Developer Intern | 1 mo.'
	d2.innerHTML = 'Full Stack Web Developer Intern | 2 mos.'
	d3.innerHTML = 'Web Designer  Intern | 3 mos.'
	achv1.className = achv1.className.replace("text-blue-500 border-blue-500" , "border-gray-300")
	achv2.className = achv2.className.replace("text-blue-500 border-blue-500" , "border-gray-300")
	achv3.className = achv3.className.replace("border-gray-300" , "text-blue-500 border-blue-500")
	},380);
	show()
}

// projects pannel
function projects(){
	hide();
	setTimeout(function(){
	lines.innerHTML = 'These are the projects form my stocks I found worth listing and a lot more on my git hub repo below.'
	h1.innerHTML = 'Senscart'
	h2.innerHTML = 'Ekchhat'
	h3.innerHTML = 'SBA Sports'
	d1.innerHTML = 'Realtime product comparison from different websites'
	d2.innerHTML = 'Helping people out in finding covid resources efficiently'
	d3.innerHTML = 'Basic informative website for business purposes'
	achv1.className = achv1.className.replace("text-blue-500 border-blue-500" , "border-gray-300")
	achv2.className = achv2.className.replace("border-gray-300" , "text-blue-500 border-blue-500")
	achv3.className = achv3.className.replace("text-blue-500 border-blue-500" , "border-gray-300")
	},380);
	show()
}








// function contactload(){
// 	var tl = gsap.timeline({opacity : 0});
// 		tl.from("#contact", {y: -800, duration: 1});
// 		tl.from("#nametop", {x: -500, duration: 1});
// 		tl.from("#navoption", {x:500, duration: 1});
// 		tl.from("#foot", {y:300, duration: .6});
// }


// withiout timeline 

// gsap.from('#intro',{duration: 1,
// 					ease: "elastic. in( 1, 0.3)",
// 					y: -500,
// 					opacity : 0
// });

// gsap.from('#nametop',{
// 	duration : 1,
// 	ease : "elastic. in( 1, 0.3)",
// 	x : -500,
// 	opacity:0
// })