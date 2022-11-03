	// 보유포인트, 배팅포인트, 개임결과포인트
	var current=10000;
	var betting=0;
	var pointQ=0;

	// 개이머가 선택한 동물
	var yourSelect="";
	// 컴터가 선택한 동물
	var comterSelect="";

	// 각 12지신상에 걸린 포인트
	var point01=0;
	var point02=0;
	var point03=0;
	var point04=0;
	var point05=0;
	var point06=0;
	var point07=0;
	var point08=0;
	var point09=0;
	var point10=0;
	var point11=0;
	var point12=0;

	// 개이머가 각 신상에 배팅한 포인트 배열
	var yourMonki=new Array();

	// 컴퓨터가 선택한 신상 3가지
	var monki=new Array();


// 개이머가 선택한 동물에게 배팅포인트를 더해준다
function select(selection){


	current=parseInt(document.getElementsByName("current")[0].value);
	betting=parseInt(document.getElementsByName("betting")[0].value);



	if(current<500){
		alert("한번 지정에 500포인트가 필요합니다.");
		return;
	}

	var len=selection.src.length;
	var set=selection.src.substring(54,len);
	console.log("len :"+ len+", set "+selection.src);
	//file:///C:/mantraum/mantraum.github.io/pointworld/img/snake.jpg

	if(selection.src.includes("mouse.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point01=point01+500;
		document.getElementsByName("points01")[0].value=point01;
		return;
	}//자

	if(selection.src.includes("cow.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point02=point02+500;
		document.getElementsByName("points02")[0].value=point02;
		return;
	}//축

	if(selection.src.includes("tiger.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point03=point03+500;
		document.getElementsByName("points03")[0].value=point03;
		return;
	}//인

	if(selection.src.includes("rabbit.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point04=point04+500;
		document.getElementsByName("points04")[0].value=point04;
		return;
	}//묘

	if(selection.src.includes("dragon.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point05=point05+500;
		document.getElementsByName("points05")[0].value=point05;
		return;
	}//진

	if(selection.src.includes("snake.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point06=point06+500;
		document.getElementsByName("points06")[0].value=point06;
		return;
	}//사

	if(selection.src.includes("horse.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point07=point07+500;
		document.getElementsByName("points07")[0].value=point07;
		return;
	}//오

	if(selection.src.includes("sheep.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point08=point08+500;
		document.getElementsByName("points08")[0].value=point08;
		return;
	}//미

	if(selection.src.includes("monkey.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point09=point09+500;
		document.getElementsByName("points09")[0].value=point09;
		return;
	}//신

	if(selection.src.includes("chicken.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point10=point10+500;
		document.getElementsByName("points10")[0].value=point10;
		return;
	}//유

	if(selection.src.includes("dog.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point11=point11+500;
		document.getElementsByName("points11")[0].value=point11;
		return;
	}//술

	if(selection.src.includes("pig.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point12=point12+500;
		document.getElementsByName("points12")[0].value=point12;
		return;
	}//해

}

//다시 선택하기
function reSelect(){

		//개이머가 배팅해 놓은 포인트 초기화
		point01=0;
		point02=0;
		point03=0;
		point04=0;
		point05=0;
		point06=0;
		point07=0;
		point08=0;
		point09=0;
		point10=0;
		point11=0;
		point12=0;


		//화면상에 설정된 포인트 없애기
		document.getElementsByName("points01")[0].value=0;
		document.getElementsByName("points02")[0].value=0;
		document.getElementsByName("points03")[0].value=0;
		document.getElementsByName("points04")[0].value=0;
		document.getElementsByName("points05")[0].value=0;
		document.getElementsByName("points06")[0].value=0;
		document.getElementsByName("points07")[0].value=0;
		document.getElementsByName("points08")[0].value=0;
		document.getElementsByName("points09")[0].value=0;
		document.getElementsByName("points10")[0].value=0;
		document.getElementsByName("points11")[0].value=0;
		document.getElementsByName("points12")[0].value=0;

		//개이머가 설정한 포인트 되돌려 놓기
		current = current + betting;
		document.getElementsByName("current")[0].value=current;
		betting = 0;
		document.getElementsByName("betting")[0].value=betting;


}

// 12지신상 중 3개가 선택됨. 선택된 신상에 걸린 포인트는 3배가 됨.
function doMonkey(){
	
	if(betting<500){
		alert("먼저 동물들을 클릭하여 배팅을 하세요!!!");
		return;
	}

	// 컴퓨터가 설정한 12신상, 3개을 보관할 배열
	monki = new Array(3);

	// 1에서 12중에서 임의로 3개를 생성해서 1부터 12까지 자,축,인,..,술,해로 간주함
	for(var j=0;j<3;j++){
		//lotto[j]=parseInt(Math.random()*45)+1;

		monki[j] = Math.floor(12*Math.random()) + Math.ceil(1);
	}

	// 개이머가 각 신상에 배팅한 포인트를 배열로 생성
	yourMonki = [point01,point02,point03,point04,point05,point06,point07,point08,point09,point10,point11,point12];

	for(var ll=0; ll<3;ll++){

		for(var tl=0;tl<12;tl++){
			if(monki[ll]==tl+1){

				pointQ = pointQ+ yourMonki[tl]*3;
			}
		}
	}

	//개임결과 스크린에 표시하기
	var res_Monki = "";
	for(var cl=0; cl<monki.length;cl++){
		res_Monki = res_Monki+" ."+cl+1;
	}

	document.getElementsByName("monkiResult")[0].value=res_Monki;



	

	// 개임결과포인트를 보유포인트에 더해주고, 배팅포인트는 0으로 설정
	current = current + pointQ;
	document.getElementsByName("current")[0].value=current;
	betting = 0;
	document.getElementsByName("betting")[0].value=betting;


	//개이머가 배팅해 놓은 포인트 초기화
	point01=0;
	point02=0;
	point03=0;
	point04=0;
	point05=0;
	point06=0;
	point07=0;
	point08=0;
	point09=0;
	point10=0;
	point11=0;
	point12=0;


	//화면상에 설정된 포인트 없애기
	document.getElementsByName("points01")[0].value=0;
	document.getElementsByName("points02")[0].value=0;
	document.getElementsByName("points03")[0].value=0;
	document.getElementsByName("points04")[0].value=0;
	document.getElementsByName("points05")[0].value=0;
	document.getElementsByName("points06")[0].value=0;
	document.getElementsByName("points07")[0].value=0;
	document.getElementsByName("points08")[0].value=0;
	document.getElementsByName("points09")[0].value=0;
	document.getElementsByName("points10")[0].value=0;
	document.getElementsByName("points11")[0].value=0;
	document.getElementsByName("points12")[0].value=0;




	//frm.submit();
}