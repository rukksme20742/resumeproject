// function Loadjson(file,callback){
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function(){
// 		if(xhr.readyState === 4 && xhr.status == "200"){
// 			callback(xhr.responseText);
// 		}
// 	};
// xhr.send(null);
// }
// Loadjson("data.json",function(text){
// 	var data = JSON.parse(text);
// 	console.log(data);
// 	basics(data.details);
// 	careerinfo(data.career);
// 	educationinfo(data.education);
// 	skillsset(data.skills);
// 	achievement(data.achieve);
// })
function Loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if (response.ok) {
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}
var newfile = Loadjson("data.json");
newfile.then(data=>{
	console.log(data);
 	basics(data.details);
 	careerinfo(data.career);
 	educationinfo(data.education);
	skillsset(data.skills);
 	achievement(data.achieve);
})
var left = document.querySelector(".left");
function basics(det){
	var img = document.createElement("img");
	img.src = det.image;
	left.appendChild(img);
	var name = document.createElement("h3");
	name.textContent = det.name;
	left.appendChild(name);
	var pno = document.createElement("h3");
	pno.textContent = det.phno;
	left.appendChild(pno);
	var mail = document.createElement("a");
	mail.href = "shaikruksana2000@gmal.com";
	mail.textContent = det.email;
	left.appendChild(mail);
	var adr = document.createElement("h3");
	adr.textContent = "Address:";
	left.appendChild(adr);
	var adr1 = document.createElement("hr");
	left.appendChild(adr1);
	var adr = document.createElement("p");
	adr.textContent = det.address;
	left.appendChild(adr);
}
var right = document.querySelector(".right");
function careerinfo(infoc){
	var ci = document.createElement("h3");
	ci.textContent = "Career objective";
	right.appendChild(ci);
	var c1 = document.createElement("hr");
	right.appendChild(c1);
	var cii = document.createElement("p");
	cii.textContent = infoc.info;
	right.appendChild(cii);
}
function educationinfo(infoe){
	var ed = document.createElement("h2");
	ed.textContent = "Educational Qualifications:";
	right.appendChild(ed);
	var e1 = document.createElement("hr");
	right.appendChild(e1);
	var table1 = document.createElement("table");
	table1.border = "1";
	right.appendChild(table1);
	tabledata="";
	for(i=0;i<infoe.length;i++){
		tabledata+= "<tr><td>"+infoe[i].qualification+"</td><td>"+infoe[i].institute+"</td><td>"+infoe[i].year+"</td><td>"+infoe[i].perc+"</td></tr>";
	}
	table1.innerHTML=tabledata;
}
function skillsset(infos){
	var sk1 = document.createElement("h2");
	sk1.textContent = "Technical skills:";
	right.appendChild(sk1);
	var e1 = document.createElement("hr");
	right.appendChild(e1);
	for(i=0;i<infos.length;i++){
		var sk = document.createElement("h2");
		sk.textContent = infos[i].title;
		right.appendChild(sk);
		var uo = document.createElement("ul");
		var li = document.createElement("li");
		li.textContent = infos[i].info;
		uo.appendChild(li);
		right.appendChild(uo);
	}
}
function achievement(infoa){
	var ac = document.createElement("h2");
	ac.textContent = "Achievements:";
	right.appendChild(ac);
	var a = document.createElement("hr");
	right.appendChild(a);
	for(i=0;i<infoa.length;i++){
		var ach = document.createElement("h2");
		ach.textContent = infoa[i].title;
		right.appendChild(ach);
		var uo = document.createElement("ul");
		var li = document.createElement("li");
		li.textContent = infoa[i].info;
		uo.appendChild(li);
		right.appendChild(uo);
	}
}
function openpage(){
	window.open("resume.html","_self",true)
}