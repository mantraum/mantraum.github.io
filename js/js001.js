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

// �½�Ʈ�� ���׸���
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

// ���׸���

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


// ���׸���, ����, �༺ �� ���˵�

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

// beginPath()�� ���� ������,
// ������ �׸� ���� �Ǵ� ������,
// ���� ���� �׸��� �����Ϸ��� ������,
// ������ �׸��� �ȴ�.

	// ����
	ctx.beginPath();
	ctx.arc(300, 300, 3, 0, Math.PI*2, true);
	ctx.stroke();

	// ��ť��
	ctx.beginPath();
	ctx.arc(300, 300, 100, 0, Math.PI*2, true);
	ctx.stroke();

	// ��ʽ�
	ctx.beginPath();
	ctx.arc(300, 300, 120, 0, Math.PI*2, true);
	ctx.stroke();

	// �
	ctx.beginPath();
	ctx.arc(300, 300, 140, 0, Math.PI*2, true);
	ctx.stroke();

	// ������
	ctx.beginPath();
	ctx.arc(300, 300, 160, 0, Math.PI*2, true);
	ctx.stroke();

	// ������
	ctx.beginPath();
	ctx.arc(300, 300, 200, 0, Math.PI*2, true);
	ctx.stroke();
	
	// ����
	ctx.beginPath();
	ctx.arc(300, 300, 220, 0, Math.PI*2, true);
	ctx.stroke();

	// ��󴩽�
	ctx.beginPath();
	ctx.arc(300, 300, 250, 0, Math.PI*2, true);
	ctx.stroke();

	// ��ƪ
	ctx.beginPath();
	ctx.arc(300, 300, 270, 0, Math.PI*2, true);
	ctx.stroke();

	// �÷���
	ctx.beginPath();
	ctx.arc(300, 300, 290, 0, Math.PI*2, true);
	ctx.stroke();
  }


}


// ���׸���, ����, �༺ �� ���˵�, õ�õ�

function draw03() {

  var canvas = document.getElementById('canvas01');

  
  if (canvas.getContext) {

    var ctx = canvas.getContext('2d');


	// ����
	ctx.beginPath();
	ctx.arc(300, 300, 3, 0, Math.PI*2, true);
	ctx.stroke();

	// ��ť��
	ctx.beginPath();
	ctx.arc(300, 300, 100, 0, Math.PI*2, true);
	ctx.stroke();

	// ��ʽ�
	ctx.beginPath();
	ctx.arc(300, 300, 120, 0, Math.PI*2, true);
	ctx.stroke();

	// �
	ctx.beginPath();
	ctx.arc(300, 300, 140, 0, Math.PI*2, true);
	ctx.stroke();

	// ������
	ctx.beginPath();
	ctx.arc(300, 300, 160, 0, Math.PI*2, true);
	ctx.stroke();

	// ������
	ctx.beginPath();
	ctx.arc(300, 300, 200, 0, Math.PI*2, true);
	ctx.stroke();
	
	// ����
	ctx.beginPath();
	ctx.arc(300, 300, 220, 0, Math.PI*2, true);
	ctx.stroke();

	// ��󴩽�
	ctx.beginPath();
	ctx.arc(300, 300, 250, 0, Math.PI*2, true);
	ctx.stroke();

	// ��ƪ
	ctx.beginPath();
	ctx.arc(300, 300, 270, 0, Math.PI*2, true);
	ctx.stroke();

	// �÷���
	ctx.beginPath();
	ctx.arc(300, 300, 280, 0, Math.PI*2, true);
	ctx.stroke();

	// �ܰ���
	ctx.beginPath();
	ctx.arc(300, 300, 290, 0, Math.PI*2, true);
	ctx.stroke();

	//�ܰ����� �´� ���ó�¥ ǥ���ϱ� 
	drawLineFrmCurrMonthNDate();


	// õ�õ� ǥ���ϱ�
//	ctx.beginPath();
//	ctx.moveTo(300, 300);
//	ctx.lineTo(400, 120);
//	ctx.stroke();




  }


}

// ����ð����� ���� ������ ������ ǥ���ϴ� ���� �׸���
// ��������� ���ؼ� 1��1�ϰ��� ���̸� ���Ѵ�. ��.
// ������ ���� ���� 1��, 365�ϰ� ���ؼ� �� �ۼ�Ʈ���� ���Ѵ�. ��.
// ������ ���� ������ ����, ������ ���Ѵ�. ��.
// ���� ������ �߽���(300,300)����, ������ ������290���� ������ ������(300-290, 300)���� ������ �����Ѵ�. ��.
// �󿡼� ������ ������ �ٿ��� ���� ������ŭ �ݽð� �������� ������ �� ��ä���� ����� ���� �ֿܰ����� ����� ����. ��.
// �߽���(300, 300)���� �̵��ؼ�, ������ ������ �׸���.
function drawLineFrmCurrMonthNDate() {

	let s_date = new Date(2022,0, 1); //���� ù��° ����, ���� 0���� 11����.
	let e_date = new Date(2022,11, 31); // ���� ������ ����
	let to_date = new Date(); // ���� ����

	var milli_to_date = Date.now();//��Ÿ�� 1970.1.1������ ���ñ����� �и��ʰ��
	var milli_s_date = Date.parse(s_date);//��Ÿ�� 1970.1.1������ ����ù�ϱ����� �и��ʰ��
	var milli_e_date = Date.parse(e_date);//��Ÿ�� 1970.1.1������ ���ظ��ϱ����� �и��ʰ��

	//������ ����� �ϼ��� �ϳ⿡ ���� ������ ������
	var ratio = (milli_to_date-milli_s_date)/(milli_e_date-milli_s_date);

	console.log("��Ÿ�� 1970.1.1������ ���ñ����� �и��ʰ��: " + milli_to_date);
	console.log("��Ÿ�� 1970.1.1������ ����ù�ϱ����� �и��ʰ��: " + milli_s_date);
	console.log("��Ÿ�� 1970.1.1������ ���ظ��ϱ����� �и��ʰ��: " + milli_e_date);

	console.log("������ ����� �ϼ��� �ϳ⿡ ���� ������ ������: " + ratio);
	console.log("������ ����� �ϼ��� �ϳ⿡ ���� ������ ������: " + Math.PI*2*ratio);



	//�ڻ��ΰ�, x��ǥ�� ����ġ
	var x_r = Math.cos(Math.PI*2*ratio+Math.PI/2);
	//���ΰ�, y��ǥ�� ����ġ
	var y_r = Math.sin(Math.PI*2*ratio+Math.PI/2);

	// �����׸���, �߽���ǥ(300,300), �ܰ��� ������ 290, ���� ������ 140 ����
	var canvas = document.getElementById('canvas01');

	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');


		//���ؼ� �ܰ��� ������ 290
		x_r = 290*Math.cos(Math.PI);
		y_r = 290*Math.sin(Math.PI);

		console.log("�ܰ��� ������ 290 : "+x_r);
		console.log("�ܰ��� ������ 290 : "+y_r);

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="3";//������
		ctx.strokeStyle = 'rgba(255, 0, 0, 1)';//������� ����
		ctx.lineCap = "round"; //�������
		
		ctx.stroke();


		//������ ���缱 ������ 140
		x_r = 140*Math.cos(Math.PI + Math.PI*ratio);
		y_r = 140*Math.sin(Math.PI + Math.PI*ratio);

		console.log("������ ���缱 ������ 140 : "+x_r);
		console.log("������ ���缱 ������ 140 : "+y_r);

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="3";//������
		ctx.strokeStyle = 'rgba(0, 255, 0, 1)';//������� ����
		ctx.lineCap = "round"; //�������
		ctx.stroke();
	}


	
}


//���ڸ� 3�� 21�� ~ 4�� 19��
//Ȳ���ڸ� 4�� 20�� ~ 5�� 20��
//�ֵ����ڸ� 5�� 21�� ~ 6�� 21��
//���ڸ� 6�� 22�� ~ 7�� 22��
//�����ڸ� 7�� 23�� ~ 8�� 22��
//ó���ڸ� 8�� 23�� ~ 9�� 22��
//õĪ�ڸ� 9�� 23�� ~ 10�� 22��
//�����ڸ� 10�� 23�� ~ 11�� 22��
//�ü��ڸ� 11�� 23�� ~ 12�� 24��
//�����ڸ� 12�� 25�� ~ 1�� 19��
//�����ڸ� 1�� 20�� ~ 2�� 18��
//������ڸ� 2�� 19�� ~ 3�� 20��