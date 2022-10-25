// 
function draw() {
  var canvas = document.getElementById('canvas01');
  if (canvas.getContext) {
     var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
  }
}

// 태스트용 원그리기
function draw00() {

  var canvas = document.getElementById('canvas01');

  
  if (canvas.getContext) {

    var ctx = canvas.getContext('2d');


    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 3; j++) {
        ctx.beginPath();
        var x = 25 + j * 50; // x coordinate
        var y = 25 + i * 50; // y coordinate
        var radius = 20; // Arc radius
        var startAngle = 0; // Starting point on circle
        var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
        var anticlockwise = i % 2 == 0 ? false : true; // clockwise or anticlockwise

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
}

// 원그리기

function draw01() {

  var canvas = document.getElementById('canvas01');

  
  if (canvas.getContext) {

    var ctx = canvas.getContext('2d');

	ctx.beginPath();

	var x = 300; // x coordinate
	var y = 300; // y coordinate
	var radius = 260; // Arc radius
	var startAngle = 0; // Starting point on circle
	var endAngle = Math.PI*2;
	ctx.arc(x, y, radius, startAngle, endAngle, true);

	ctx.stroke();
  }


}


// 원그리기, 원점, 행성 별 원궤도

function draw02() {

  var canvas = document.getElementById('canvas01');

  
  if (canvas.getContext) {

    var ctx = canvas.getContext('2d');

//	ctx.beginPath();
//
//	var x = 300; // x coordinate
//	var y = 300; // y coordinate
//	var radius = 260; // Arc radius
//	var startAngle = 0; // Starting point on circle
//	var endAngle = Math.PI*2;
//	ctx.arc(x, y, radius, startAngle, endAngle, true);
//
//	ctx.stroke();

// beginPath()를 하지 않으면,
// 마지막 그린 점이 되는 점에서,
// 다음 원을 그리기 시작하려는 점까지,
// 직선을 그리게 된다.

	// 원점
	ctx.beginPath();
	ctx.arc(300, 300, 3, 0, Math.PI*2, true);
	ctx.stroke();

	// 머큐리
	ctx.beginPath();
	ctx.arc(300, 300, 100, 0, Math.PI*2, true);
	ctx.stroke();

	// 비너스
	ctx.beginPath();
	ctx.arc(300, 300, 120, 0, Math.PI*2, true);
	ctx.stroke();

	// 어쓰
	ctx.beginPath();
	ctx.arc(300, 300, 140, 0, Math.PI*2, true);
	ctx.stroke();

	// 마르스
	ctx.beginPath();
	ctx.arc(300, 300, 160, 0, Math.PI*2, true);
	ctx.stroke();

	// 쥬피터
	ctx.beginPath();
	ctx.arc(300, 300, 200, 0, Math.PI*2, true);
	ctx.stroke();
	
	// 새턴
	ctx.beginPath();
	ctx.arc(300, 300, 220, 0, Math.PI*2, true);
	ctx.stroke();

	// 우라누스
	ctx.beginPath();
	ctx.arc(300, 300, 250, 0, Math.PI*2, true);
	ctx.stroke();

	// 냅튠
	ctx.beginPath();
	ctx.arc(300, 300, 270, 0, Math.PI*2, true);
	ctx.stroke();

	// 플루토
	ctx.beginPath();
	ctx.arc(300, 300, 290, 0, Math.PI*2, true);
	ctx.stroke();
  }


}


// 원그리기, 원점, 행성 별 원궤도, 현재월일 직선으로 표시하기

function draw03() {

  var canvas = document.getElementById('canvas01');

  
  if (canvas.getContext) {

    var ctx = canvas.getContext('2d');


	// 원점
	ctx.beginPath();
	ctx.arc(300, 300, 3, 0, Math.PI*2, true);
	ctx.stroke();

	// 머큐리
	ctx.beginPath();
	ctx.arc(300, 300, 100, 0, Math.PI*2, true);
	ctx.stroke();

	// 비너스
	ctx.beginPath();
	ctx.arc(300, 300, 120, 0, Math.PI*2, true);
	ctx.stroke();

	// 어쓰
	ctx.beginPath();
	ctx.arc(300, 300, 140, 0, Math.PI*2, true);
	ctx.stroke();

	// 마르스
	ctx.beginPath();
	ctx.arc(300, 300, 160, 0, Math.PI*2, true);
	ctx.stroke();

	// 쥬피터
	ctx.beginPath();
	ctx.arc(300, 300, 200, 0, Math.PI*2, true);
	ctx.stroke();
	
	// 새턴
	ctx.beginPath();
	ctx.arc(300, 300, 220, 0, Math.PI*2, true);
	ctx.stroke();

	// 우라누스
	ctx.beginPath();
	ctx.arc(300, 300, 250, 0, Math.PI*2, true);
	ctx.stroke();

	// 냅튠
	ctx.beginPath();
	ctx.arc(300, 300, 270, 0, Math.PI*2, true);
	ctx.stroke();

	// 플루토
	ctx.beginPath();
	ctx.arc(300, 300, 280, 0, Math.PI*2, true);
	ctx.stroke();

	// 외곽선
	ctx.beginPath();
	ctx.arc(300, 300, 290, 0, Math.PI*2, true);
	ctx.stroke();

	//외곽선에 맞는 오늘날짜 표시하기 
	drawLineFrmCurrMonthNDate();


  }


}

// 현재시각에서 월일 정보를 각도로 표현하는 직선 그리기
// 현재시점을 구해서 1월1일과의 차이를 구한다. 가.
// 가에서 구한 값이 1년, 365일과 비교해서 몇 퍼센트인지 구한다. 나.
// 나에서 구한 값으로 도수, 라디안을 구한다. 다.
// 현재 설정한 중심점(300,300)에서, 설정한 반지름290으로 나오는 시작점(300-290, 300)까지 직선을 가정한다. 라.
// 라에서 가정한 직선을 다에서 구한 각도만큼 반시계 방향으로 돌렸을 때 부채꼴이 만들어 내는 최외곽점을 계산해 낸다. 마.
// 중심점(300, 300)으로 이동해서, 마까지 직선을 그린다.
function drawLineFrmCurrMonthNDate() {

	let s_date = new Date(2022,0, 1); //올해 첫번째 일자, 월은 0에서 11까지.
	let e_date = new Date(2022,11, 31); // 올해 마지막 일자
	let to_date = new Date(); // 오늘 일자

	console.log("s_date: " + s_date);
	console.log("e_date: " + e_date);
	console.log("to_date: " + to_date);

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

		//기준선 외곽선 반지름 290
		x_r = 290*Math.cos(Math.PI*0.3);
		y_r = 290*Math.sin(Math.PI*0.3);

		console.log("x_r : "+x_r);
		console.log("y_r : "+y_r);

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="3";//선굵기
		ctx.strokeStyle = 'rgba(255, 255, 0, 1)';//선색깔과 투명도, 노랑
		ctx.lineCap = "round"; //선끝모양
		
		ctx.stroke();

		//기준선 외곽선 반지름 290
		x_r = 290*Math.cos(Math.PI*0.6);
		y_r = 290*Math.sin(Math.PI*0.6);

		console.log("x_r : "+x_r);
		console.log("y_r : "+y_r);

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="3";//선굵기
		ctx.strokeStyle = 'rgba(0, 255, 255, 1)';//선색깔과 투명도, 하늘
		ctx.lineCap = "round"; //선끝모양
		
		ctx.stroke();


		//기준선 외곽선 반지름 290
		x_r = 290*Math.cos(Math.PI);
		y_r = 290*Math.sin(Math.PI);

		console.log("x_r : "+x_r);
		console.log("y_r : "+y_r);

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="3";//선굵기
		ctx.strokeStyle = 'rgba(255, 0, 0, 1)';//선색깔과 투명도, 래드
		ctx.lineCap = "round"; //선끝모양
		
		ctx.stroke();

		//지구별 현재선 반지름 140
		x_r = 140*Math.cos(Math.PI*ratio);
		y_r = 140*Math.sin(Math.PI*ratio);

		console.log("x_r : "+x_r);
		console.log("y_r : "+y_r);

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="3";//선굵기
		ctx.strokeStyle = 'rgba(255, 0, 255, 1)';//선색깔과 투명도, 자주
		ctx.lineCap = "round"; //선끝모양
		ctx.stroke();

		//지구별 현재선 반지름 140
		x_r = 140*Math.cos(Math.PI*0.5 + Math.PI*ratio);
		y_r = 140*Math.sin(Math.PI*0.5 + Math.PI*ratio);

		console.log("x_r : "+x_r);
		console.log("y_r : "+y_r);

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="3";//선굵기
		ctx.strokeStyle = 'rgba(0, 255, 255, 1)';//선색깔과 투명도, 하늘
		ctx.lineCap = "round"; //선끝모양
		ctx.stroke();


		//지구별 현재선 반지름 140
		x_r = 140*Math.cos(Math.PI + Math.PI*ratio);
		y_r = 140*Math.sin(Math.PI + Math.PI*ratio);

		console.log("x_r : "+x_r);
		console.log("y_r : "+y_r);


		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="3";//선굵기
		ctx.strokeStyle = 'rgba(0, 255, 0, 1)';//선색깔과 투명도, 그린
		ctx.lineCap = "round"; //선끝모양
		ctx.stroke();

		

		//지구별 현재선 반지름 140
		x_r = 140*Math.cos(Math.PI*1.25 + Math.PI*ratio);
		y_r = 140*Math.sin(Math.PI*1.25 + Math.PI*ratio);

		console.log("x_r : "+x_r);
		console.log("y_r : "+y_r);

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="3";//선굵기
		ctx.strokeStyle = 'rgba(0, 0, 255, 1)';//선색깔과 투명도, 블루
		ctx.lineCap = "round"; //선끝모양
		ctx.stroke();
	}


	
}


// 현재시각에서 월일 정보를 각도로 표현하는 직선 그리기
// 현재시점을 구해서 1월1일과의 차이를 구한다. 가.
// 가에서 구한 값이 1년, 365일과 비교해서 몇 퍼센트인지 구한다. 나.
// 나에서 구한 값으로 도수, 라디안을 구한다. 다.
// 현재 설정한 중심점(300,300)에서, 설정한 반지름290으로 나오는 시작점(300-290, 300)까지 직선을 가정한다. 라.
// 라에서 가정한 직선을 다에서 구한 각도만큼 반시계 방향으로 돌렸을 때 부채꼴이 만들어 내는 최외곽점을 계산해 낸다. 마.
// 중심점(300, 300)으로 이동해서, 마까지 직선을 그린다.
function drawLineFrmCurrMonthNDate2() {

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

		

		//기준선 외곽선 반지름 290
		x_r = 290*Math.cos(Math.PI);
		y_r = 290*Math.sin(Math.PI);

		console.log("x_r : "+x_r);
		console.log("y_r : "+y_r);

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="3";//선굵기
		ctx.strokeStyle = 'rgba(255, 0, 0, 1)';//선색깔과 투명도, 래드
		ctx.lineCap = "round"; //선끝모양
		
		ctx.stroke();

		//지구별 현재선 반지름 140
		
		x_r = 140*Math.cos(Math.PI*0.5 + Math.PI*ratio);
		y_r = 140*Math.sin(Math.PI*0.5 + Math.PI*ratio);

		console.log("x_r : "+x_r);
		console.log("y_r : "+y_r);

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="3";//선굵기
		ctx.strokeStyle = 'rgba(0, 255, 255, 1)';//선색깔과 투명도, 하늘
		ctx.lineCap = "round"; //선끝모양
		ctx.stroke();

	}


	
}


// 원그리기, 원점, 행성 별 원궤도, 현재월일 직선으로 표시하기

function draw04() {

  var canvas = document.getElementById('canvas01');

  
  if (canvas.getContext) {

    var ctx = canvas.getContext('2d');


	// 원점
	ctx.beginPath();
	ctx.arc(300, 300, 3, 0, Math.PI*2, true);
	ctx.stroke();

	// 행성별 원궤도 그리기

	// 머큐리
	ctx.beginPath();
	ctx.arc(300, 300, 100, 0, Math.PI*2, true);
	ctx.stroke();

	// 비너스
	ctx.beginPath();
	ctx.arc(300, 300, 120, 0, Math.PI*2, true);
	ctx.stroke();

	// 어쓰
	ctx.beginPath();
	ctx.arc(300, 300, 140, 0, Math.PI*2, true);
	ctx.stroke();

	// 마르스
	ctx.beginPath();
	ctx.arc(300, 300, 160, 0, Math.PI*2, true);
	ctx.stroke();

	// 쥬피터
	ctx.beginPath();
	ctx.arc(300, 300, 200, 0, Math.PI*2, true);
	ctx.stroke();
	
	// 새턴
	ctx.beginPath();
	ctx.arc(300, 300, 220, 0, Math.PI*2, true);
	ctx.stroke();

	// 우라누스
	ctx.beginPath();
	ctx.arc(300, 300, 250, 0, Math.PI*2, true);
	ctx.stroke();

	// 냅튠
	ctx.beginPath();
	ctx.arc(300, 300, 270, 0, Math.PI*2, true);
	ctx.stroke();

	// 플루토
	ctx.beginPath();
	ctx.arc(300, 300, 280, 0, Math.PI*2, true);
	ctx.stroke();

	// 천궁도 영역 표시하기

	var dd = new Date();

	//양자리 3월 21일 ~ 4월 19일
	dd.setMonth(2);
	dd.setDate(21);
	let tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();
	dd.setMonth(3);
	dd.setDate(19);
	let tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);
	
	ctx.fillStyle = "rgba(250, 235, 215, 0.5)";
	ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();


	//황소자리 4월 20일 ~ 5월 20일
	dd = new Date();
	dd.setMonth(3);
	dd.setDate(20);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();
	dd.setMonth(4);
	dd.setDate(20);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.34)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();

	//쌍둥이자리 5월 21일 ~ 6월 21일
	dd = new Date();
	dd.setMonth(4);
	dd.setDate(21);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();

	dd.setMonth(5);
	dd.setDate(21);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.4)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();

	//게자리 6월 22일 ~ 7월 22일
	dd = new Date();
	dd.setMonth(5);
	dd.setDate(22);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();

	dd.setMonth(6);
	dd.setDate(22);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.44)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();

	//사자자리 7월 23일 ~ 8월 22일
	dd = new Date();
	dd.setMonth(6);
	dd.setDate(23);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();
	dd.setMonth(7);
	dd.setDate(22);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.4)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();


	//처녀자리 8월 23일 ~ 9월 22일
	dd = new Date();
	dd.setMonth(7);
	dd.setDate(23);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();

	dd.setMonth(8);
	dd.setDate(22);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.46)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();


	//천칭자리 9월 23일 ~ 10월 22일
	dd = new Date();
	dd.setMonth(8);
	dd.setDate(23);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();

	dd.setMonth(9);
	dd.setDate(22);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.52)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();


	//전갈자리 10월 23일 ~ 11월 22일
	dd = new Date();
	dd.setMonth(9);
	dd.setDate(23);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();

	dd.setMonth(10);
	dd.setDate(22);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.60)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();


	//궁수자리 11월 23일 ~ 12월 24일
	dd = new Date();
	dd.setMonth(10);
	dd.setDate(23);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();

	dd.setMonth(11);
	dd.setDate(24);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.68)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();


	//염소자리 12월 25일 ~ 1월 19일
	dd = new Date();
	dd.setMonth(11);
	dd.setDate(25);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();

	dd.setMonth(0);
	dd.setDate(19);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.75)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();


	//물병자리 1월 20일 ~ 2월 18일
	dd = new Date();
	dd.setMonth(0);
	dd.setDate(20);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();

	dd.setMonth(1);
	dd.setDate(18);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.83)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();


	//물고기자리 2월 19일 ~ 3월 20일
	dd = new Date();
	dd.setMonth(1);
	dd.setDate(19);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();

	dd.setMonth(2);
	dd.setDate(20);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.9)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();


	 

	// 외곽선
	ctx.beginPath();
	ctx.arc(300, 300, 290, 0, Math.PI*2, true);
	ctx.stroke();

	//외곽선에 맞는 오늘날짜 표시하기 
	drawLineFrmCurrMonthNDate2();



  }
}

  // 해당 년도의 몇월 몇일이 한 해의 몇 퍼센트에 해당하는지 반환한다
  // 예: 3월 21일은 한 해의 몇 퍼센트가 지난 것이다.

	function genRtofrmMonthDay(da_te) {

		

		let to_date = new Date(da_te);
		console.log("genRtofrmMonthDay: " + to_date.toString());

		let s_date = new Date(new Date(da_te).getFullYear(),0, 1); //올해 첫번째 일자, 월은 0에서 11까지.
		let e_date = new Date(new Date(da_te).getFullYear(),11, 31); // 올해 마지막 일자
		

		var milli_s_date = Date.parse(s_date);//유타코 1970.1.1부터의 올해첫일까지의 밀리초계산
		var milli_e_date = Date.parse(e_date);//유타코 1970.1.1부터의 올해막일까지의 밀리초계산 

		//오늘이 경과한 일수가 일년에 대해 가지는 비율값
		var ratio = (Date.parse(to_date)-milli_s_date)/(milli_e_date-milli_s_date);

		console.log("milli_to_date: " + Date.parse(to_date));
		console.log("milli_s_date: " + milli_s_date);
		console.log("milli_e_date: " + milli_e_date);

		console.log("ratio: " + ratio);
		console.log("Math.PI*2*ratio: " + Math.PI*2*ratio);

		return ratio;


	}


// 원그리기, 원점, 행성 별 원궤도, 현재월일 직선으로 표시하기
// 행성궤도 사이즈 공전, 자전 주기에 따른 에너지량 고려해 조정


function draw05() {

  var canvas = document.getElementById('canvas01');

  
  if (canvas.getContext) {

    var ctx = canvas.getContext('2d');


	// 원점
	ctx.beginPath();
	ctx.arc(300, 300, 3, 0, Math.PI*2, true);
	ctx.stroke();

	// 행성별 원궤도 그리기

	// 머큐리
	ctx.beginPath();
	ctx.arc(300, 300, 80, 0, Math.PI*2, true);
	ctx.stroke();

	// 비너스
	ctx.beginPath();
	ctx.arc(300, 300, 90, 0, Math.PI*2, true);
	ctx.stroke();

	// 어쓰
	ctx.beginPath();
	ctx.arc(300, 300, 120, 0, Math.PI*2, true);
	ctx.stroke();

	// 마르스
	ctx.beginPath();
	ctx.arc(300, 300, 130, 0, Math.PI*2, true);
	ctx.stroke();

	// 쥬피터
	ctx.beginPath();
	ctx.arc(300, 300, 160, 0, Math.PI*2, true);
	ctx.stroke();
	
	// 새턴
	ctx.beginPath();
	ctx.arc(300, 300, 170, 0, Math.PI*2, true);
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

	// 천궁도 영역 표시하기

	var dd = new Date();

	//양자리 3월 21일 ~ 4월 19일
	dd.setMonth(2);
	dd.setDate(21);
	let tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();
	dd.setMonth(3);
	dd.setDate(19);
	let tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);
	
	ctx.fillStyle = "rgba(250, 235, 215, 0.5)";
	ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();

	// 문자표시
	ctx.font = "20px malgun gothic"; //폰트의 크기, 글꼴체 지정
	ctx.textBaseline = "middle"; //텍스트 출력 기준선 설정(top, middle, bottom, alphabetic, hanging, ideo graphic)
	ctx.textAlign = "center"; //텍스트 가로 방향의 정렬 지정(left, right, center, start, end)

	ctx.fillStyle = "rgba(255,0,255,1)"; //색상지정
	// 변수 tell_e 재사용
	tell_e = (tell_e-tell_s)/2;
	ctx.fillText("&#9800;", Math.cos(Math.PI*2*tell_s+Math.PI*2*tell_e), Math.sin(Math.PI*2*tell_s+Math.PI*2*tell_e));// ARIES


	//황소자리 4월 20일 ~ 5월 20일
	dd = new Date();
	dd.setMonth(3);
	dd.setDate(20);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();
	dd.setMonth(4);
	dd.setDate(20);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.34)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();

	//쌍둥이자리 5월 21일 ~ 6월 21일
	dd = new Date();
	dd.setMonth(4);
	dd.setDate(21);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();

	dd.setMonth(5);
	dd.setDate(21);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.4)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();

	//게자리 6월 22일 ~ 7월 22일
	dd = new Date();
	dd.setMonth(5);
	dd.setDate(22);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();

	dd.setMonth(6);
	dd.setDate(22);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.44)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();

	//사자자리 7월 23일 ~ 8월 22일
	dd = new Date();
	dd.setMonth(6);
	dd.setDate(23);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();
	dd.setMonth(7);
	dd.setDate(22);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.4)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();


	//처녀자리 8월 23일 ~ 9월 22일
	dd = new Date();
	dd.setMonth(7);
	dd.setDate(23);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();

	dd.setMonth(8);
	dd.setDate(22);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.46)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();


	//천칭자리 9월 23일 ~ 10월 22일
	dd = new Date();
	dd.setMonth(8);
	dd.setDate(23);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();

	dd.setMonth(9);
	dd.setDate(22);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.52)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();


	//전갈자리 10월 23일 ~ 11월 22일
	dd = new Date();
	dd.setMonth(9);
	dd.setDate(23);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();

	dd.setMonth(10);
	dd.setDate(22);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.60)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();


	//궁수자리 11월 23일 ~ 12월 24일
	dd = new Date();
	dd.setMonth(10);
	dd.setDate(23);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();

	dd.setMonth(11);
	dd.setDate(24);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.68)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();


	//염소자리 12월 25일 ~ 1월 19일
	dd = new Date();
	dd.setMonth(11);
	dd.setDate(25);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();

	dd.setMonth(0);
	dd.setDate(19);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.75)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();


	//물병자리 1월 20일 ~ 2월 18일
	dd = new Date();
	dd.setMonth(0);
	dd.setDate(20);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();

	dd.setMonth(1);
	dd.setDate(18);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.83)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();


	//물고기자리 2월 19일 ~ 3월 20일
	dd = new Date();
	dd.setMonth(1);
	dd.setDate(19);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd = new Date();

	dd.setMonth(2);
	dd.setDate(20);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, Math.PI*2*tell_s, Math.PI*2*tell_e, true);

	ctx.fillStyle = "rgba(250, 235, 215, 0.9)";
	//ctx.fill();
	ctx.strokeStyle = "rgba(210, 105, 30, 1)";
	ctx.stroke();
	ctx.closePath();


	 

	// 외곽선
	ctx.beginPath();
	ctx.arc(300, 300, 260, 0, Math.PI*2, true);
//	ctx.stroke();
//
//	ctx.beginPath();
//	ctx.arc(300, 300, 290, 0, Math.PI*2, true);
	//ctx.fillStyle = "#E0E4CD";
	ctx.shadowOffsetX = 10;
	ctx.shadowOffsetY = 10;
	ctx.shadowBlur = 4;
	ctx.shadowColor = "rgba(255,20,20,0.9)";
	ctx.stroke();

	//외곽선에 맞는 오늘날짜 표시하기 
	drawLineFrmCurrMonthNDate2();



  }
}


