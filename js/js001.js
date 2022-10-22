// �½�Ʈ�� ���׸���
function draw00() {
  var canvas = document.getElementById('canvas01');

  
  if (canvas.getContext()) {

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

/* ���׸���
600 ���� 600 ĵ����
�߽� 300,300
������ 260
*/
function draw01() {
  var canvas = document.getElementById('canvas01');

  
  if (canvas.getContext()) {

    var ctx = canvas.getContext('2d');

	ctx.beginPath();

	var x = 300; // x coordinate
	var y = 300; // y coordinate
	var radius = 260; // Arc radius
	var startAngle = 0; // Starting point on circle
	var endAngle = Math.PI;
	ctx.arc(x, y, radius, startAngle, endAngle, true);

	ctx.stroke();


}