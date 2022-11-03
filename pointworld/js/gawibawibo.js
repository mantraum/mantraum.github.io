
	// 보유포인트, 배팅포인트, 컴퓨터포인트, 개이머가 선택한 가위바위보, 컴퓨터가 생성한 가위바위보, 컴퓨터가 생성한 가위바위보용 랜덤수, 개임분위기용화면표시회수
	var current=10000;
	var betting=0;
	var comPnt=10000;
	var yourSelect="gawi.gif";
	var comterSelect="gawi.gif";
	var rndom=0;
	var ll=0;

	// 개임시간, 개임결과기록판
	var time_stmp = "";
	var pnl_result = "";


	// 개이머의 가위바위보 선택, 가위였을 때 누르면 바위, 바위는 보로, 보는 가위로 변경해 줌
	function select(){

		yourSelect=document.getElementsByName("yourSelect")[0].src;
		//console.log("selection : "+selection);

		if(yourSelect.includes("gawi")) {
			yourSelect="bawi.gif";
			document.getElementsByName("yourSelect")[0].src="./img/bawi.gif";
			return;
		}
		if(yourSelect.includes("bawi")) {
			yourSelect="bo.gif";
			document.getElementsByName("yourSelect")[0].src="./img/bo.gif";
			return;
		}

		if(yourSelect.includes("bo")) {
			yourSelect="gawi.gif";
			document.getElementsByName("yourSelect")[0].src="./img/gawi.gif";
			return;
		}

	}

// 배팅포인트 1000단위로 줄이기
	function downPP(){
		current=parseInt(document.getElementsByName("current")[0].value);
		betting=parseInt(document.getElementsByName("betting")[0].value);
		if(betting<1000){
			alert("배팅한 포인트가 없내요");
			return;
		}else{
			betting=betting-1000;
			current=current+1000;
			document.getElementsByName("betting")[0].value=betting;
			document.getElementsByName("current")[0].value=current;
		}
	}

// 배팅포인트 1000단위로 올리기
	function upPP(){
		current=parseInt(document.getElementsByName("current")[0].value);
		betting=parseInt(document.getElementsByName("betting")[0].value);
		comPnt=parseInt(document.getElementsByName("comPnt")[0].value);


		if(current<1000){
			alert("포인트가 부족하내요");
			return;
		}else{
			betting=betting+1000;
			if(comPnt<betting){
				alert("컴퓨터포인트가 부족하내요");
				return;
			}
			current=current-1000;
						
			document.getElementsByName("betting")[0].value=betting;
			document.getElementsByName("current")[0].value=current;
		}
	}

		
// 가위바위보 실행해서 포인트 계산하기
	function doGame(){
		// 타임스탬핑
		time_stmp = new Date().toLocaleString();
		document.getElementsByName('datum')[0].value=time_stmp;

		// 1에서 3까지의 임의의 정수를 생성해서, 1은 가위, 2는 바위, 3은 보로 간주한다
		rndom = Math.floor(3*Math.random()) + Math.ceil(1);
		console.log("rndom : "+rndom);

		if(rndom==1) document.getElementsByName("comterSelect")[0].src="./img/gawi.gif";
		if(rndom==2) document.getElementsByName("comterSelect")[0].src="./img/bawi.gif";
		if(rndom==3) document.getElementsByName("comterSelect")[0].src="./img/bo.gif";


		// 그냥 컴퓨터의 가위바위보를 여러번 바꿔주는 화면플래이를 한다

		if(ll<10) {
			//setInterval('doGame()',328);
			setTimeout('doGame()',528);
			document.getElementsByName("result")[0].value=10-ll;
			ll++;
		}else{
			ll=0;
			//return doPlay();
			//setInterval('doPlay()',1200);
			doPlay();

		}
		
		

		
	}

	// 가위바위보생성하기
	function doPlay(){

		//
		
		pnl_result = document.getElementsByName("res_Pnl")[0].value;

		// 가위는 보에 이기고, 바위는 가위에 이기고, 보는 바위에 이기는 판정을 한다
		comterSelect=document.getElementsByName("comterSelect")[0].src;

		if(comterSelect.includes("bo")){
			comterSelect = "bo.gif";
			if(yourSelect.includes("gawi")) {// 가위, 보, 이김
				//alert("이겼내요");
				document.getElementsByName("result")[0].value="이겼내요";
				current=current + 2*betting;
				document.getElementsByName("current")[0].value=current;
				document.getElementsByName("betting")[0].value=0;
				comPnt = comPnt - betting;
				document.getElementsByName("comPnt")[0].value=comPnt;
				//기록업대이트
				pnl_result = pnl_result+"\n"+document.getElementsByName('datum')[0].value+" :"+
				document.getElementsByName("result")[0].value+" , 개이머 : "+yourSelect+", 컴퓨터 : "+ comterSelect+ ", 배팅포인트 :"+ betting;
				document.getElementsByName("res_Pnl")[0].value=pnl_result;

				ll=0;
				return;
			}
			if(yourSelect.includes("bo")){// 보, 보, 비김
				//alert("비겼내요");
				document.getElementsByName("result")[0].value="비겼내요";
				current=current + betting;
				document.getElementsByName("current")[0].value=current;
				document.getElementsByName("betting")[0].value=0;

				//기록업대이트
				pnl_result = pnl_result+"\n"+document.getElementsByName('datum')[0].value+" :"+
				document.getElementsByName("result")[0].value+" , 개이머 : "+yourSelect+", 컴퓨터 : "+ comterSelect+ ", 배팅포인트 :"+ betting;
				document.getElementsByName("res_Pnl")[0].value=pnl_result;

				
				ll=0;
				return;

			}
			if(yourSelect.includes("bawi")){// 바위, 보, 짐
				//alert("졌내요");
				document.getElementsByName("result")[0].value="졌내요";
				//document.getElementsByName("current")[0].value=current;
				document.getElementsByName("betting")[0].value=0;
				comPnt = comPnt + betting;
				document.getElementsByName("comPnt")[0].value=comPnt;

				//기록업대이트
				pnl_result = pnl_result+"\n"+document.getElementsByName('datum')[0].value+" :"+
				document.getElementsByName("result")[0].value+" , 개이머 : "+yourSelect+", 컴퓨터 : "+ comterSelect+ ", 배팅포인트 :"+ betting;
				document.getElementsByName("res_Pnl")[0].value=pnl_result;

				
				ll=0;
				return;

			}
		}
//
	if(comterSelect.includes("gawi")){
		comterSelect = "gawi.gif";
			if(yourSelect.includes("bawi")) {// 가위, 보, 이김
				//alert("이겼내요");
				document.getElementsByName("result")[0].value="이겼내요";
				current=current + 2*betting;
				document.getElementsByName("current")[0].value=current;
				document.getElementsByName("betting")[0].value=0;
				comPnt = comPnt - betting;
				document.getElementsByName("comPnt")[0].value=comPnt;

				//기록업대이트
				pnl_result = pnl_result+"\n"+document.getElementsByName('datum')[0].value+" :"+
				document.getElementsByName("result")[0].value+" , 개이머 : "+yourSelect+", 컴퓨터 : "+ comterSelect+ ", 배팅포인트 :"+ betting;
				document.getElementsByName("res_Pnl")[0].value=pnl_result;
				
				ll=0;
				return;
			}
			if(yourSelect.includes("gawi")){// 보, 보, 비김
				//alert("비겼내요");
				document.getElementsByName("result")[0].value="비겼내요";
				current=current + betting;
				document.getElementsByName("current")[0].value=current;
				document.getElementsByName("betting")[0].value=0;

				//기록업대이트
				pnl_result = pnl_result+"\n"+document.getElementsByName('datum')[0].value+" :"+
				document.getElementsByName("result")[0].value+" , 개이머 : "+yourSelect+", 컴퓨터 : "+ comterSelect+ ", 배팅포인트 :"+ betting;
				document.getElementsByName("res_Pnl")[0].value=pnl_result;

				ll=0;
				return;

			}
			if(yourSelect.includes("bo")){// 바위, 보, 짐

				//alert("졌내요");
				document.getElementsByName("result")[0].value="졌내요";
				//document.getElementsByName("current")[0].value=current;
				document.getElementsByName("betting")[0].value=0;
				comPnt = comPnt + betting;
				document.getElementsByName("comPnt")[0].value=comPnt;

				//기록업대이트
				pnl_result = pnl_result+"\n"+document.getElementsByName('datum')[0].value+" :"+
				document.getElementsByName("result")[0].value+" , 개이머 : "+yourSelect+", 컴퓨터 : "+ comterSelect+ ", 배팅포인트 :"+ betting;

				ll=0;
				return;

			}
		}

		if(comterSelect.includes("bawi")){
			comterSelect = "bawi.gif";
			if(yourSelect.includes("bo")) {// 가위, 보, 이김
				//alert("이겼내요");
				document.getElementsByName("result")[0].value="이겼내요";
				current=current + 2*betting;
				document.getElementsByName("current")[0].value=current;
				document.getElementsByName("betting")[0].value=0;
				comPnt = comPnt - betting;
				document.getElementsByName("comPnt")[0].value=comPnt;

				//기록업대이트
				pnl_result = pnl_result+"\n"+document.getElementsByName('datum')[0].value+" :"+
				document.getElementsByName("result")[0].value+" , 개이머 : "+yourSelect+", 컴퓨터 : "+ comterSelect+ ", 배팅포인트 :"+ betting;
				document.getElementsByName("res_Pnl")[0].value=pnl_result;
				
				ll=0;
				return;
			}
			if(yourSelect.includes("bawi")){// 보, 보, 비김
				//alert("비겼내요");
				document.getElementsByName("result")[0].value="비겼내요";
				current=current + betting;
				document.getElementsByName("current")[0].value=current;
				document.getElementsByName("betting")[0].value=0;

				//기록업대이트
				pnl_result = pnl_result+"\n"+document.getElementsByName('datum')[0].value+" :"+
				document.getElementsByName("result")[0].value+" , 개이머 : "+yourSelect+", 컴퓨터 : "+ comterSelect+ ", 배팅포인트 :"+ betting;
				document.getElementsByName("res_Pnl")[0].value=pnl_result;

				ll=0;
				return;

			}
			if(yourSelect.includes("gawi")){// 바위, 보, 짐

				//alert("졌내요");
				document.getElementsByName("result")[0].value="졌내요";
				//document.getElementsByName("current")[0].value=current;
				document.getElementsByName("betting")[0].value=0;
				comPnt = comPnt + betting;
				document.getElementsByName("comPnt")[0].value=comPnt;

				//기록업대이트
				pnl_result = pnl_result+"\n"+document.getElementsByName('datum')[0].value+" :"+
				document.getElementsByName("result")[0].value+" , 개이머 : "+yourSelect+", 컴퓨터 : "+ comterSelect+ ", 배팅포인트 :"+ betting;
				document.getElementsByName("res_Pnl")[0].value=pnl_result;

				ll=0;
				return;

			}
		}
		



	}