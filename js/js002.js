// 단순히 행성 궤도용 외곽선을 그려보기


function draw00() {

  var canvas = document.getElementById('canvas01');

  
  if (canvas.getContext) {

    var ctx = canvas.getContext('2d');


	// 행성별 원궤도 그리기
	// 원점
	ctx.beginPath();
	ctx.arc(300, 300, 3, 0, Math.PI*2, true);
	ctx.stroke();

	// 보조궤도선
	ctx.beginPath();
	ctx.arc(300, 300, 90, 0, Math.PI*2, true);
	ctx.stroke();

	

	// 머큐리
	ctx.beginPath();
	ctx.arc(300, 300, 120, 0, Math.PI*2, true);
	ctx.stroke();

	// 비너스
	ctx.beginPath();
	ctx.arc(300, 300, 130, 0, Math.PI*2, true);
	ctx.stroke();

	// 어쓰
	ctx.beginPath();
	ctx.arc(300, 300, 150, 0, Math.PI*2, true);
	ctx.stroke();

	// 마르스
	ctx.beginPath();
	ctx.arc(300, 300, 160, 0, Math.PI*2, true);
	ctx.stroke();

	// 쥬피터
	ctx.beginPath();
	ctx.arc(300, 300, 180, 0, Math.PI*2, true);
	ctx.stroke();
	
	// 새턴
	ctx.beginPath();
	ctx.arc(300, 300, 190, 0, Math.PI*2, true);
	ctx.stroke();

	// 우라누스
	ctx.beginPath();
	ctx.arc(300, 300, 210, 0, Math.PI*2, true);
	ctx.stroke();

	// 냅튠
	ctx.beginPath();
	ctx.arc(300, 300, 220, 0, Math.PI*2, true);
	ctx.stroke();

	// 플루토
	ctx.beginPath();
	ctx.arc(300, 300, 230, 0, Math.PI*2, true);
	ctx.stroke();

	// 외곽선용 궤도 그리기
	ctx.beginPath();
	ctx.arc(300, 300, 250, 0, Math.PI*2, true);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(300, 300, 260, 0, Math.PI*2, true);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(300, 300, 290, 0, Math.PI*2, true);
	//ctx.fillStyle = "#E0E4CD";
//	ctx.shadowOffsetX = 10;
//	ctx.shadowOffsetY = 10;
//	ctx.shadowBlur = 4;
//	ctx.shadowColor = "rgba(255,20,20,0.9)";
	ctx.stroke();

	// 한해를 일자별로 눈금시계 만들기
	makeDailyClock();

	// 천궁도 영역 표시하기
	makeHoroScope();

	// 지구별 오늘날짜 직선으로 표시하기
	drawEarthLineFrmCurrMonthNDate();

	// 행성별 현재 위치 직선으로 표시하기


  }
}


// 현재시각에서 월일 정보를 각도로 표현하는 직선 그리기
// 현재시점을 구해서 1월1일과의 차이를 구한다. 가.
// 가에서 구한 값이 1년, 365일과 비교해서 몇 퍼센트인지 구한다. 나.
// 나에서 구한 값으로 도수, 라디안을 구한다. 다.
// 현재 설정한 중심점(300,300)에서, 설정한 반지름290으로 나오는 시작점(300-290, 300)까지 직선을 가정한다. 라.
// 라에서 가정한 직선을 다에서 구한 각도만큼 반시계 방향으로 돌렸을 때 부채꼴이 만들어 내는 최외곽점을 계산해 낸다. 마.
// 중심점(300, 300)으로 이동해서, 마까지 직선을 그린다.

// 한해를 일자별로 눈금시계 만들기
function makeDailyClock() {

	let to_date = new Date(); // 오늘 일자
	to_date.setMonth(0); //올해 첫번째 일자, 월은 0에서 11까지.
	to_date.setDate(1);

	let s_date = to_date.toString();

	to_date = new Date();

	to_date.setMonth(11); // 올해 마지막 일자
	to_date.setDate(31);

	let e_date = to_date.toString();

	to_date = new Date();
	
	console.log("to_date: " + to_date);
	console.log("s_date: " + s_date);
	console.log("e_date: " + e_date);
	
	var milli_to_date = Date.now();//유타코 1970.1.1부터의 오늘까지의 밀리초계산
	var milli_s_date = Date.parse(s_date);//유타코 1970.1.1부터의 올해첫일까지의 밀리초계산
	var milli_e_date = Date.parse(e_date);//유타코 1970.1.1부터의 올해막일까지의 밀리초계산

	console.log("milli_to_date: " + milli_to_date);
	console.log("milli_s_date: " + milli_s_date);
	console.log("milli_e_date: " + milli_e_date);

		
	//윤년이면 366일처리
	var isLeapYr = 365;
	if(new Date(to_date.getFullYear(), 1, 29).getDate() == 29){
		isLeapYr = 366;
	}
	//올해 마지막 밀리새컨드와 첫 밀리새컨드의 차이를 365로 나눠 하루에 해당하는 비율을 구한다
	var ratio = 2*Math.PI*((milli_e_date-milli_s_date)/isLeapYr);

	console.log("isLeapYr: " + isLeapYr);
	console.log("ratio: " + ratio);


	//코사인값, x좌표값 보정치
	var x_r, x_r2 = 0;
	//사인값, y좌표값 보정치
	var y_r, y_r2 = 0;

	var canvas = document.getElementById('canvas01');

	if (canvas.getContext) {

		var ctx = canvas.getContext('2d');

		//직선그리기, 중심좌표(300,300)기준시작점 외곽선 반지름 250
		for(var i=0; i<isLeapYr; i++){

			x_r = 250*Math.cos(Math.PI+Math.PI*ratio*i);
			y_r = 250*Math.sin(Math.PI+Math.PI*ratio*i);

			ctx.beginPath();
			ctx.moveTo(300+x_r, 300+y_r);

			x_r2 = 260*Math.cos(Math.PI+Math.PI*ratio*i);
			y_r2 = 260*Math.sin(Math.PI+Math.PI*ratio*i);

			ctx.lineTo(300+x_r2, 300+y_r2);
			ctx.lineWidth ="1";//선굵기
			ctx.strokeStyle = 'rgba(255, 0, 0, 1)';//선색깔과 투명도, 래드
			ctx.lineCap = "round"; //선끝모양
		
			ctx.stroke();
		}

		// 1월1일 기준선 표시
		ctx.beginPath();
		x_r = 90*Math.cos(Math.PI);
		y_r = 90*Math.sin(Math.PI);
		ctx.moveTo(300+x_r, 300+y_r);

		x_r2 = 260*Math.cos(Math.PI);
		y_r2 = 260*Math.sin(Math.PI);

		ctx.lineTo(300+x_r2, 300+y_r2);
		ctx.lineWidth ="2";//선굵기
		ctx.strokeStyle = 'rgba(255, 0, 0, 1)';//선색깔과 투명도, 래드
		ctx.lineCap = "round"; //선끝모양
	
		ctx.stroke();

		//지구별 현재선 반지름 140
		
//		x_r = 140*Math.cos(Math.PI*0.5 + Math.PI*ratio);
//		y_r = 140*Math.sin(Math.PI*0.5 + Math.PI*ratio);
//
//		console.log("x_r : "+x_r);
//		console.log("y_r : "+y_r);
//
//		ctx.beginPath();
//		ctx.moveTo(300, 300);
//		ctx.lineTo(300+x_r, 300+y_r);
//
//		ctx.lineWidth ="3";//선굵기
//		ctx.strokeStyle = 'rgba(0, 255, 255, 1)';//선색깔과 투명도, 하늘
//		ctx.lineCap = "round"; //선끝모양
//		ctx.stroke();


		//현재 시각 정보
		document.getElementById("da.today").innerText = to_date.toString();

	}


	
}

// 천궁도 영역 표시하기
function makeHoroScope(){

	var dd = new Date();
	var qq = new Date();

	//양자리 3월 21일 ~ 4월 19일
	dd.setMonth(2);
	dd.setDate(21);
	qq.setMonth(3);
	qq.setDate(19);

	drawHoroScope(dd.toString(), qq.toString());

	// 별자리 문자표시
	displayHoroName(dd.toString(), qq.toString());


	//황소자리 4월 20일 ~ 5월 20일
	dd = new Date();
	dd.setMonth(3);
	dd.setDate(20);

	qq = new Date();
	qq.setMonth(4);
	qq.setDate(20);

	drawHoroScope(dd.toString(), qq.toString());

	//쌍둥이자리 5월 21일 ~ 6월 21일
	dd = new Date();
	dd.setMonth(4);
	dd.setDate(21);

	qq = new Date();
	qq.setMonth(5);
	qq.setDate(21);

	drawHoroScope(dd.toString(), qq.toString());

	//게자리 6월 22일 ~ 7월 22일
	dd = new Date();
	dd.setMonth(5);
	dd.setDate(22);

	qq = new Date();
	qq.setMonth(6);
	qq.setDate(22);
	drawHoroScope(dd.toString(), qq.toString());

	//사자자리 7월 23일 ~ 8월 22일
	dd = new Date();
	dd.setMonth(6);
	dd.setDate(23);

	qq = new Date();
	qq.setMonth(7);
	qq.setDate(22);
	drawHoroScope(dd.toString(), qq.toString());


	//처녀자리 8월 23일 ~ 9월 22일
	dd = new Date();
	dd.setMonth(7);
	dd.setDate(23);

	qq = new Date();
	qq.setMonth(8);
	qq.setDate(22);
	drawHoroScope(dd.toString(), qq.toString());


	//천칭자리 9월 23일 ~ 10월 22일
	dd = new Date();
	dd.setMonth(8);
	dd.setDate(23);

	qq = new Date();

	qq.setMonth(9);
	qq.setDate(22);
	drawHoroScope(dd.toString(), qq.toString());


	//전갈자리 10월 23일 ~ 11월 22일
	dd = new Date();
	dd.setMonth(9);
	dd.setDate(23);

	qq = new Date();
	qq.setMonth(10);
	qq.setDate(22);
	drawHoroScope(dd.toString(), qq.toString());


	//궁수자리 11월 23일 ~ 12월 24일
	dd = new Date();
	dd.setMonth(10);
	dd.setDate(23);

	qq = new Date();
	qq.setMonth(11);
	qq.setDate(24);
	drawHoroScope(dd.toString(), qq.toString());


	//염소자리 12월 25일 ~ 1월 19일
	dd = new Date();
	dd.setMonth(11);
	dd.setDate(25);

	qq = new Date();
	qq.setMonth(0);
	qq.setDate(19);

	drawHoroScope(dd.toString(), qq.toString());


	//물병자리 1월 20일 ~ 2월 18일
	dd = new Date();
	dd.setMonth(0);
	dd.setDate(20);

	qq = new Date();
	qq.setMonth(1);
	qq.setDate(18);

	drawHoroScope(dd.toString(), qq.toString());


	//물고기자리 2월 19일 ~ 3월 20일
	dd = new Date();
	dd.setMonth(1);
	dd.setDate(19);

	qq = new Date();
	qq.setMonth(2);
	qq.setDate(20);

	drawHoroScope(dd.toString(), qq.toString());


	
}

// 천궁도 영역 그리기
function drawHoroScope(elem_a, elem_b){


	var canvas = document.getElementById('canvas01');

	if (canvas.getContext) {

		var ctx = canvas.getContext('2d');


		let tell_s = genRtofrmMonthDay(elem_a);
		let tell_e = genRtofrmMonthDay(elem_b);

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);
		
	//	ctx.fillStyle = "rgba(250, 235, 215, 0.5)";
	//	ctx.fill();
		ctx.strokeStyle = "rgba(210, 105, 30, 1)";
		ctx.stroke();
		ctx.closePath();

	}

	
}


// 별자리 문자표시
function displayHoroName(elem_a, elem_b){

	let tell_s = genRtofrmMonthDay(elem_a);
	let tell_e = genRtofrmMonthDay(elem_b);

	var canvas = document.getElementById('canvas01');

	if (canvas.getContext) {

		var ctx = canvas.getContext('2d');

		ctx.font = "20px malgun gothic"; //폰트의 크기, 글꼴체 지정
		ctx.textBaseline = "middle"; //텍스트 출력 기준선 설정(top, middle, bottom, alphabetic, hanging, ideo graphic)
		ctx.textAlign = "center"; //텍스트 가로 방향의 정렬 지정(left, right, center, start, end)

		ctx.fillStyle = "rgba(128, 0, 0,1)"; //색상지정
		// 변수 tell_e 재사용
		tell_e = (tell_e-tell_s)/2;
		ctx.fillText("\U+2648", 300+275*Math.cos(Math.PI*2*tell_s+Math.PI*2*tell_e), 300+275*Math.sin(Math.PI*2*tell_s+Math.PI*2*tell_e));// ARIES
	}
}


// 지구별 오늘날짜 직선으로 표시하기 
// 행성별 현재 위치 직선으로 표시하기
function drawEarthLineFrmCurrMonthNDate() {

	let to_date = new Date(); // 오늘 일자
	to_date.setMonth(0); //올해 첫번째 일자, 월은 0에서 11까지.
	to_date.setDate(1);

	let s_date = to_date.toString();

	to_date = new Date();

	to_date.setMonth(11); // 올해 마지막 일자
	to_date.setDate(31);

	let e_date = to_date.toString();

	to_date = new Date();
	

	console.log("to_date: " + to_date);
	console.log("s_date: " + s_date);
	console.log("e_date: " + e_date);
	
	var milli_to_date = Date.now();//유타코 1970.1.1부터의 오늘까지의 밀리초계산
	var milli_s_date = Date.parse(s_date);//유타코 1970.1.1부터의 올해첫일까지의 밀리초계산
	var milli_e_date = Date.parse(e_date);//유타코 1970.1.1부터의 올해막일까지의 밀리초계산

	//오늘이 경과한 일수가 일년에 대해 가지는 비율값
	var ratio = (milli_to_date-milli_s_date)/(milli_e_date-milli_s_date);

	console.log("milli_to_date: " + milli_to_date);
	console.log("milli_s_date: " + milli_s_date);
	console.log("milli_e_date: " + milli_e_date);

	console.log("ratio: " + ratio);
	console.log("Math.PI*ratio: " + Math.PI*ratio);



	//코사인값, x좌표값 보정치
	var x_r = Math.cos(Math.PI*2*ratio+Math.PI/2);
	//사인값, y좌표값 보정치
	var y_r = Math.sin(Math.PI*2*ratio+Math.PI/2);

	// 직선그리기, 중심좌표(300,300), 외곽선 반지름 290, 지구 반지름 140 가정
	var canvas = document.getElementById('canvas01');

	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');


		//지구별 현재선 반지름 140
		
		x_r = 140*Math.cos(Math.PI*0.5 + Math.PI*ratio);
		y_r = 140*Math.sin(Math.PI*0.5 + Math.PI*ratio);

		console.log("x_r : "+x_r);
		console.log("y_r : "+y_r);

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="2";//선굵기
		ctx.strokeStyle = 'rgba(0, 255, 255, 1)';//선색깔과 투명도, 하늘
		ctx.lineCap = "round"; //선끝모양
		ctx.stroke();

	}


	
}