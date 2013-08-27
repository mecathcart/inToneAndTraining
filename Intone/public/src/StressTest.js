
var participant = localStorage.getObject('participant');
var i = 0;

/* Play sound check*/
var soundCheck = function(){
   playAudioFile("sound_check");
};

var playAudioFile = function(divid) {
    document.getElementById(divid).play();
};

/* Inserts Image placeholder*/
var stressImg = document.createElement("img");

/* Inserts audio stimuli*/
var stressAudio = document.createElement("audio");
stressAudio.id = "stress_test_stimuli";
audio_div.appendChild(stressAudio);

/* Creates the Maps*/
var createMap1 = function(sample){
	var stressMap1 = document.createElement("map");
	stressMap1.name = "stressMap1";

	var area1 = document.createElement("area");
	area1.shape = "rect";
	area1.coords = "0,0,300,300";
	area1.href = "#";
	area1.onclick = function(){
		if(sample.stressSyllable === 1){
			participant.correctAnswerST++;
		}
		console.log("The correct answer is" + participant.correctAnswerST);
		participant.totalAnswerST++;
		stress_test_image.removeChild(stressMap1);
		stressTest();
	};

	var area2 = document.createElement("area");
		area2.shape = "rect";
		area2.coords = "300,0,640,300";
		area2.href = "#";
		area2.onclick = function(){
			if(sample.stressSyllable === 2){
				participant.correctAnswerST++;
			}
			participant.totalAnswerST++;
			stress_test_image.removeChild(stressMap1);
			stressTest();
			console.log("The correct answer is" + participant.correctAnswerST);
	};

	stressImg.useMap = "#stressMap1";
	stress_test_image.appendChild(stressMap1);
	stressMap1.appendChild(area1);
	stressMap1.appendChild(area2);
};

var createMap2 = function(sample){
	var stressMap2 = document.createElement("map");
	stressMap2.name = "stressMap2";

	var area1 = document.createElement("area");
	area1.shape = "rect";
	area1.coords = "0,0,200,300";
	area1.href = "#";
	area1.onclick = function(){
		if(sample.stressSyllable === 1){
				participant.correctAnswerST++;
			}
			participant.totalAnswerST++;
			stress_test_image.removeChild(stressMap2);
			stressTest();
			console.log("The correct answer is" + participant.correctAnswerST);
	};

	var area2 = document.createElement("area");
		area2.shape = "rect";
		area2.coords = "200,0,400,300";
		area2.href = "#";
		area2.onclick = function(){
			if(sample.stressSyllable === 2){
				participant.correctAnswerST++;
			}
			participant.totalAnswerST++;
			stress_test_image.removeChild(stressMap2);
			stressTest();
			console.log("The correct answer is" + participant.correctAnswerST);
		};

	var area3 = document.createElement("area");
		area3.shape = "rect";
		area3.coords = "400,0,640,300";
		area3.href = "#";
		area3.onclick = function(){
			if(sample.stressSyllable === 3){
				participant.correctAnswerST++;
			}
			participant.totalAnswerST++;
			stress_test_image.removeChild(stressMap2);
			stressTest();
			console.log("The correct answer is" + participant.correctAnswerST);
		};

	stressImg.useMap = "#stressMap2";
	stress_test_image.appendChild(stressMap2);
	stressMap2.appendChild(area1);
	stressMap2.appendChild(area2);
	stressMap2.appendChild(area3);
};

var createMap3 = function(sample){
	var stressMap3 = document.createElement("map");
	stressMap3.name = "stressMap3";

	var area1 = document.createElement("area");
	area1.shape = "rect";
	area1.coords = "0,0,150,300";
	area1.href = "#";
	area1.onclick = function(){
		if(sample.stressSyllable === 1){
				participant.correctAnswerST++;
				console.log(sample);

			}
			participant.totalAnswerST++;
			stress_test_image.removeChild(stressMap3);
			stressTest();
			console.log("The correct answer is" + participant.correctAnswerST);
	};

	var area2 = document.createElement("area");
		area2.shape = "rect";
		area2.coords = "150,0,300,300";
		area2.href = "#";
		area2.onclick = function(){
			if(sample.stressSyllable === 2){
				participant.correctAnswerST++;
			}
			participant.totalAnswerST++;
			stress_test_image.removeChild(stressMap3);
			stressTest();
			console.log("The correct answer is" + participant.correctAnswerST);
		};

	var area3 = document.createElement("area");
		area3.shape = "rect";
		area3.coords = "300,0,450,300";
		area3.href = "#";
		area3.onclick = function(){
			if(sample.stressSyllable === 3){
				participant.correctAnswerST++;
			}
			participant.totalAnswerST++;
			stress_test_image.removeChild(stressMap3);
			stressTest();
			console.log("The correct answer is" + participant.correctAnswerST);
		};

	var area4 = document.createElement("area");
		area4.shape = "rect";
		area4.coords = "450,0,640,300";
		area4.href = "#";
		area4.onclick = function(){
			if(sample.stressSyllable === 4){
				participant.correctAnswerST++;
			}
			participant.totalAnswerST++;
			stress_test_image.removeChild(stressMap3);
			stressTest();
			console.log("The correct answer is" + participant.correctAnswerST);
		};

	stressImg.useMap = "#stressMap3";
	stress_test_image.appendChild(stressMap3);
	stressMap3.appendChild(area1);
	stressMap3.appendChild(area2);
	stressMap3.appendChild(area3);
	stressMap3.appendChild(area4);
};

/* Start Stress Test*/
var stressTest = function(){
	/*hide start button and instructions*/
	$("#stress_test_image").hide();
	$("#stress_test_instructions").hide();
	$("#start_stress_test").hide();
	$("#stressHeading").hide;
	$("h1").hide();
	$("h2").hide();
	$(".banner").hide();

	if(i < stressStimuli.length){	

		/* Plays audio stimuli*/
		var sample = stressStimuli[i];	
		stressAudio.src = sample.audio;
		playAudioFile("stress_test_stimuli");
		$("#cross").show();
		window.setTimeout(insertImage,1500,[stressStimuli[i].image]);

		/*Inserts Map*/
		if(sample.numSyllables === 2){
			createMap1(sample);
		}else if(sample.numSyllables === 3){
			createMap2(sample);
		}else {
			createMap3(sample);
		}
		
		/*Move on to next stimuli*/
		i++;
	}else{
		/*stops stress test when stimuli is done*/
		$("#stress_test_image").hide();
		document.getElementById("results").innerHTML ="Your score is " + participant.correctAnswerST +"/" +participant.totalAnswerST;
		//console.log(createParticipant().participant.correctAnswerST);
		$("#practice").show();
		localStorage.setObject('participant',participant);
	}
};

var insertImage = function(sample){
		$("#cross").hide();

		/* Inserts Image*/
		stressImg.src = sample;
		$("#stress_test_image").append(stressImg);
		$("#stress_test_image").show();	
}


