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


// 원그리기, 원점

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
// moveTo()로 직선을 그리지 못하게 건너뛸 수도 있다.

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
	ctx.moveTo(300, 300);
	ctx.arc(300, 300, 290, 0, Math.PI*2, true);
	ctx.stroke();
  }


}