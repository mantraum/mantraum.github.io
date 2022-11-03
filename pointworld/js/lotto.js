
	// 보유포인트, 배팅포인트, 개이머가 선택한 로또번호 1개, 개이머가 선택한 로또번호 6개, 컴퓨터가 선택한 로또번호 1개,컴퓨터가 선택한 로또번호 6개, 개임분위기용화면표시회수, 맞힌개수
	var current=10000;
	var betting=0;
	var yourSelect=0;
	var yourLotto = new Array();
	var comterSelect=0;
	var comterLotto = new Array();
	var ll=0;
	var bingo=0;

	// 개임시간, 개임결과기록판
	var time_stmp = "";
	var pnl_result = "";


	

	
	// 로또배팅금액 낮추기
	function downPP(){

		current=parseInt(document.getElementsByName("current")[0].value);
		betting=parseInt(document.getElementsByName("betting")[0].value);

		if(betting<2000){
			alert("배팅한 포인트가 없습니다");
			return;
		}else{
			betting=betting-2000;
			current=current+2000;
			document.getElementsByName("betting")[0].value=betting;
			document.getElementsByName("current")[0].value=current;
		}
	}

	//로또배팅금액 올리기
	function upPP(){
		current=parseInt(document.getElementsByName("current")[0].value);
		betting=parseInt(document.getElementsByName("betting")[0].value);

		if(current<2000){
			alert("포인트가 부족합니다");
			return;
		}else{
			betting=betting+2000;
			current=current-2000;
			document.getElementsByName("betting")[0].value=betting;
			document.getElementsByName("current")[0].value=current;
		}
	}

	// 로또번호 다시 설정할 수 있게 모든 설정된 번호를 없애버리기
	function reSelect(){

		//개이머가 선택해 놓은 로또 번호 초기화
		yourLotto = new Array();

		//화면상에 선택된 로또번호 없애기
		document.getElementsByName("select1")[0].value=0;
		document.getElementsByName("select2")[0].value=0;
		document.getElementsByName("select3")[0].value=0;
		document.getElementsByName("select4")[0].value=0;
		document.getElementsByName("select5")[0].value=0;
		document.getElementsByName("select6")[0].value=0;
	}


// 개이머가 스크린에서 선택한 로또번호를 캐치하기
function select(num){
	
	//'number1'에서 'number45'가 선택됨. 숫자만 때어냄.
	yourSelect=num.substring(6,num.length);

	// 개이머가 이미 선택한 넘버를 선택했는지 검증함
	for(var l =0; l < yourLotto.length; l++){
		if(yourLotto.length>=6){
			alert("6개의 숫자가 모두 결정돼었내요");
			return;
		}
		if(yourSelect==yourLotto[l]){
			alert("이미선택한 숫자입니다");
			return;
		}
	}


	// 검증후에는 개이머 저장용 배열에 값 추가하고, 해당 화면에 값을 표시하여 준다
	yourLotto.push(yourSelect);
	console.log("yourSelect : "+yourSelect+" ,yourLotto.length :" +yourLotto.length);

	//배열 사이즈에 따라 표시하는 위치를 결정한다
	switch(yourLotto.length){
		case 1:
			document.getElementsByName("select1")[0].value=yourSelect;
			break;
		case 2:
			document.getElementsByName("select2")[0].value=yourSelect;
			break;
		case 3:
			document.getElementsByName("select3")[0].value=yourSelect;
			break;
		case 4:
			document.getElementsByName("select4")[0].value=yourSelect;
			break;
		case 5:
			document.getElementsByName("select5")[0].value=yourSelect;
			break;
		case 6:
			document.getElementsByName("select6")[0].value=yourSelect;
			break;
		default: 
			alert("개이머선택숫자 화면에 표시하기 애러남!!");
	}

}

//로또번호 자동생성하기에 대응하는 작업
function autoSelect(){
	
	// 개이머 선택한 로또번호 저장 배열 초기화
	yourLotto=new Array();

	// 1에서 45까지의 범위내에서 임의의 정수를 6회 생성해 배열에 넣어준다
	for(var j=0;j<6;j++){
		//parseInt(Math.random()*45)+1;
		yourSelect = Math.floor(45*Math.random()) + Math.ceil(1);

		// 임의로 생성한 넘버가 이미 생성돼서 저장된 넘버가 아닌지 검증
		for(var i=0; i<yourLotto.length;i++){
			if(yourLotto[i]==yourSelect){
				//번호가 중복되어 있으면 다시 처음부터 생성함
				autoSelect();
			}
		}

		// 중복이 없으면 개이머선택배열에 추가함
		yourLotto[j]=yourSelect;
	}

	// 중복없이 6번 생성된 번호를 화면에 표시함
	document.getElementsByName("select1")[0].value=yourLotto[0];
	document.getElementsByName("select2")[0].value=yourLotto[1];
	document.getElementsByName("select3")[0].value=yourLotto[2];
	document.getElementsByName("select4")[0].value=yourLotto[3];
	document.getElementsByName("select5")[0].value=yourLotto[4];
	document.getElementsByName("select6")[0].value=yourLotto[5];
}

	//숫자 6개가 모두 선택되었는지 확인하고 로또 개임 실행하기
	function goLotto(){

		
		var select1=document.getElementsByName("select1")[0].value;
		var select2=document.getElementsByName("select2")[0].value;
		var select3=document.getElementsByName("select3")[0].value;
		var select4=document.getElementsByName("select4")[0].value;
		var select5=document.getElementsByName("select5")[0].value;
		var select6=document.getElementsByName("select6")[0].value;

		if(select1=="0"||select2=="0"||select3=="0"||select4=="0"||select5=="0"||select6=="0"){
			alert("번호 여섯개가 모두 지정되지 않았습니다");
			return;
		}

		//frm.submit();
		doLotto();

	}

//로또실행하기
function doLotto(){

	//컴퓨터가 1에서 45 중에서 랜덤하게 6개의 정수를 생성하게해서 배열생성
	for(var j=0;j<6;j++){
		//lotto[j]=parseInt(Math.random()*45)+1;

		comterSelect = Math.floor(45*Math.random()) + Math.ceil(1);

		// 임의로 생성한 넘버가 이미 생성돼서 저장된 넘버가 아닌지 검증
		for(var i=0; i<comterLotto.length;i++){
			if(comterLotto[i]==comterSelect){

				
				//번호가 중복되어 있으면 다시함
				ll=0;
				comterLotto = new Array();
				doLotto();
			}
		}

		// 중복이 없으면 개이머선택배열에 추가함
		comterLotto[j]=comterSelect;
	}

	// 결과를 표시한다
	document.getElementsByName("selected1")[0].value=comterLotto[0];
	document.getElementsByName("selected2")[0].value=comterLotto[1];
	document.getElementsByName("selected3")[0].value=comterLotto[2];
	document.getElementsByName("selected4")[0].value=comterLotto[3];
	document.getElementsByName("selected5")[0].value=comterLotto[4];
	document.getElementsByName("selected6")[0].value=comterLotto[5];
	

	// 개임분위기를 위해 6번 반복하고 결과에 따른 포인트 처리를 한다
	setting();



}

//로또 개임판의 값들을 개임하기 전으로 돌리기
function setting(){

	bingo =0;

	// 맞춘 개수 확인
	for(var j=0;j<comterLotto.length;j++){
		for(var k=0;k<yourLotto.length;k++){
			if(comterLotto[j]==yourLotto[k]){
				bingo++;
			}
		}
	}

	switch(bingo){

		case 0:

			alert("꽝입니다.");
			
			current = current +0;
			betting=0;
			
			document.getElementsByName("current")[0].value=current;
			document.getElementsByName("betting")[0].value=betting;			
		break;
		case 1:
			alert("하나!!! 배팅당 천원!!!!\n"+1000*(betting/2000));
			
			current=current+1000*(betting/2000);
			betting=0;
			
			document.getElementsByName("current")[0].value=current;
			document.getElementsByName("betting")[0].value=betting;
		break;
		case 2:
			alert("두개는 본전치기!!!! 배팅당 이천원!!!\n"+2000*(betting/2000));
			current=current+2000*(betting/2000);
			betting=0;
			
			
			document.getElementsByName("current")[0].value=current;
			document.getElementsByName("betting")[0].value=betting;
		break;
		case 3:
			alert("3개! 배팅당 만원!!!!\n"+10000*(betting/2000));
			current=current+10000*(betting/2000);
			betting=0;
			
			
			document.getElementsByName("current")[0].value=current;
			document.getElementsByName("betting")[0].value=betting;
		break;
		case 4:

			alert("4개!!!! 배팅당 팔십만원!!!!\n"+800000*(betting/2000));
			current=current+800000*(betting/2000);
			betting=0;
			
			
			document.getElementsByName("current")[0].value=current;
			document.getElementsByName("betting")[0].value=betting;
		break;
		case 5:
			alert("5개!!!!! 배팅당 이백만원!!!!\n"+200000000*(betting/2000));
			current=current+200000000*(betting/2000);
			betting=0;
			
			
			document.getElementsByName("current")[0].value=current;
			document.getElementsByName("betting")[0].value=betting;
		break;
		case 6:
			alert("6개!!! 배팅당 십억이 지급되겠습니다.!!!!\n"+1000000000*(betting/2000));
			current=current+1000000000*(betting/2000);
			betting=0;
			
			
			document.getElementsByName("current")[0].value=current;
			document.getElementsByName("betting")[0].value=betting;
		break;
		default:
		 alert("로또게임중");
	}

}