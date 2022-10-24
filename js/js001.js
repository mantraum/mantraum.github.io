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


// ���׸���, ����, �༺ �� ���˵�, ������� �������� ǥ���ϱ�

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

	console.log("s_date: " + s_date);
	console.log("e_date: " + e_date);
	console.log("to_date: " + to_date);

	var milli_to_date = Date.now();//��Ÿ�� 1970.1.1������ ���ñ����� �и��ʰ��
	var milli_s_date = Date.parse(s_date);//��Ÿ�� 1970.1.1������ ����ù�ϱ����� �и��ʰ��
	var milli_e_date = Date.parse(e_date);//��Ÿ�� 1970.1.1������ ���ظ��ϱ����� �и��ʰ��

	//������ ����� �ϼ��� �ϳ⿡ ���� ������ ������
	var ratio = (milli_to_date-milli_s_date)/(milli_e_date-milli_s_date);

	console.log("milli_to_date: " + milli_to_date);
	console.log("milli_s_date: " + milli_s_date);
	console.log("milli_e_date: " + milli_e_date);

	console.log("ratio: " + ratio);
	console.log("Math.PI*ratio: " + Math.PI*ratio);



	//�ڻ��ΰ�, x��ǥ�� ����ġ
	var x_r = Math.cos(Math.PI*2*ratio+Math.PI/2);
	//���ΰ�, y��ǥ�� ����ġ
	var y_r = Math.sin(Math.PI*2*ratio+Math.PI/2);

	// �����׸���, �߽���ǥ(300,300), �ܰ��� ������ 290, ���� ������ 140 ����
	var canvas = document.getElementById('canvas01');

	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');

		//���ؼ� �ܰ��� ������ 290
		x_r = 290*Math.cos(Math.PI*0.3);
		y_r = 290*Math.sin(Math.PI*0.3);

		console.log("x_r : "+x_r);
		console.log("y_r : "+y_r);

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="3";//������
		ctx.strokeStyle = 'rgba(255, 255, 0, 1)';//������� ����, ���
		ctx.lineCap = "round"; //�������
		
		ctx.stroke();

		//���ؼ� �ܰ��� ������ 290
		x_r = 290*Math.cos(Math.PI*0.6);
		y_r = 290*Math.sin(Math.PI*0.6);

		console.log("x_r : "+x_r);
		console.log("y_r : "+y_r);

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="3";//������
		ctx.strokeStyle = 'rgba(0, 255, 255, 1)';//������� ����, �ϴ�
		ctx.lineCap = "round"; //�������
		
		ctx.stroke();


		//���ؼ� �ܰ��� ������ 290
		x_r = 290*Math.cos(Math.PI);
		y_r = 290*Math.sin(Math.PI);

		console.log("x_r : "+x_r);
		console.log("y_r : "+y_r);

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="3";//������
		ctx.strokeStyle = 'rgba(255, 0, 0, 1)';//������� ����, ����
		ctx.lineCap = "round"; //�������
		
		ctx.stroke();

		//������ ���缱 ������ 140
		x_r = 140*Math.cos(Math.PI*ratio);
		y_r = 140*Math.sin(Math.PI*ratio);

		console.log("x_r : "+x_r);
		console.log("y_r : "+y_r);

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="3";//������
		ctx.strokeStyle = 'rgba(255, 0, 255, 1)';//������� ����, ����
		ctx.lineCap = "round"; //�������
		ctx.stroke();

		//������ ���缱 ������ 140
		x_r = 140*Math.cos(Math.PI*0.5 + Math.PI*ratio);
		y_r = 140*Math.sin(Math.PI*0.5 + Math.PI*ratio);

		console.log("x_r : "+x_r);
		console.log("y_r : "+y_r);

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="3";//������
		ctx.strokeStyle = 'rgba(0, 255, 255, 1)';//������� ����, �ϴ�
		ctx.lineCap = "round"; //�������
		ctx.stroke();


		//������ ���缱 ������ 140
		x_r = 140*Math.cos(Math.PI + Math.PI*ratio);
		y_r = 140*Math.sin(Math.PI + Math.PI*ratio);

		console.log("x_r : "+x_r);
		console.log("y_r : "+y_r);


		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="3";//������
		ctx.strokeStyle = 'rgba(0, 255, 0, 1)';//������� ����, �׸�
		ctx.lineCap = "round"; //�������
		ctx.stroke();

		

		//������ ���缱 ������ 140
		x_r = 140*Math.cos(Math.PI*1.25 + Math.PI*ratio);
		y_r = 140*Math.sin(Math.PI*1.25 + Math.PI*ratio);

		console.log("x_r : "+x_r);
		console.log("y_r : "+y_r);

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="3";//������
		ctx.strokeStyle = 'rgba(0, 0, 255, 1)';//������� ����, ���
		ctx.lineCap = "round"; //�������
		ctx.stroke();
	}


	
}


// ���׸���, ����, �༺ �� ���˵�, ������� �������� ǥ���ϱ�

function draw04() {

  var canvas = document.getElementById('canvas01');

  
  if (canvas.getContext) {

    var ctx = canvas.getContext('2d');


	// ����
	ctx.beginPath();
	ctx.arc(300, 300, 3, 0, Math.PI*2, true);
	ctx.stroke();

	// �༺�� ���˵� �׸���

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

	// õ�õ� ���� ǥ���ϱ�

	Date dd = new Date();

	let tell_s = genRtofrmMonthDay(new Date(2022,2,21).toString());
	let tell_e = genRtofrmMonthDay(new Date(2022,3,19).toString());

	//���ڸ� 3�� 21�� ~ 4�� 19��
	dd.setMonth(2);
	dd.setMonth(21);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd.setMonth(3);
	dd.setMonth(19);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.arc(300, 300, 290, Math.PI*tell_s, Math.PI*tell_e, true);
	ctx.fillStyle = "rgba(0, 255, 255, 0.3)";
	ctx.closePath();
	ctx.stroke();

	//ctx.fill();


	//Ȳ���ڸ� 4�� 20�� ~ 5�� 20��
	dd.setMonth(3);
	dd.setMonth(20);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd.setMonth(4);
	dd.setMonth(20);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.arc(300, 300, 290, Math.PI*tell_s, Math.PI*tell_e, true);
	ctx.fillStyle = "rgba(0, 255, 255, 0.32)";
	ctx.closePath();
	ctx.stroke();

	//ctx.fill();

	//�ֵ����ڸ� 5�� 21�� ~ 6�� 21��
	dd.setMonth(4);
	dd.setMonth(21);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd.setMonth(5);
	dd.setMonth(21);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.arc(300, 300, 290, Math.PI*tell_s, Math.PI*tell_e, true);
	ctx.fillStyle = "rgba(0, 255, 255, 0.34)";
	ctx.closePath();
	ctx.stroke();

	//ctx.fill();

	//���ڸ� 6�� 22�� ~ 7�� 22��
	dd.setMonth(5);
	dd.setMonth(22);
	tell_s = genRtofrmMonthDay(dd.toString());

	dd.setMonth(6);
	dd.setMonth(22);
	tell_e = genRtofrmMonthDay(dd.toString());

	ctx.beginPath();
	ctx.arc(300, 300, 290, Math.PI*tell_s, Math.PI*tell_e, true);
	ctx.fillStyle = "rgba(0, 255, 255, 0.36)";
	ctx.closePath();
	ctx.stroke();

	//ctx.fill();

	//�����ڸ� 7�� 23�� ~ 8�� 22��
	//ó���ڸ� 8�� 23�� ~ 9�� 22��
	//õĪ�ڸ� 9�� 23�� ~ 10�� 22��
	//�����ڸ� 10�� 23�� ~ 11�� 22��
	//�ü��ڸ� 11�� 23�� ~ 12�� 24��
	//�����ڸ� 12�� 25�� ~ 1�� 19��
	//�����ڸ� 1�� 20�� ~ 2�� 18��
	//������ڸ� 2�� 19�� ~ 3�� 20��


	 

	// �ܰ���
	ctx.beginPath();
	ctx.arc(300, 300, 290, 0, Math.PI*2, true);
	ctx.stroke();

	//�ܰ����� �´� ���ó�¥ ǥ���ϱ� 
	//drawLineFrmCurrMonthNDate();



  }

  // �ش� �⵵�� ��� ������ �� ���� �� �ۼ�Ʈ�� �ش��ϴ��� ��ȯ�Ѵ�
  // ��: 3�� 21���� �� ���� �� �ۼ�Ʈ�� ���� ���̴�.

	function genRtofrmMonthDay(da_te) {

		console.log("genRtofrmMonthDay: " + da_te);

			let s_date = new Date(new Date(da_te).getFullYear(),0, 1); //���� ù��° ����, ���� 0���� 11����.
			let e_date = new Date(new Date(da_te).getFullYear(),11, 31); // ���� ������ ����
			let to_date = new Date(da_te);

			var milli_s_date = Date.parse(s_date);//��Ÿ�� 1970.1.1������ ����ù�ϱ����� �и��ʰ��
			var milli_e_date = Date.parse(e_date);//��Ÿ�� 1970.1.1������ ���ظ��ϱ����� �и��ʰ�� 

			//������ ����� �ϼ��� �ϳ⿡ ���� ������ ������
			var ratio = (Date.parse(to_date)-milli_s_date)/(milli_e_date-milli_s_date);

			console.log("milli_to_date: " + Date.parse(to_date));
			console.log("milli_s_date: " + milli_s_date);
			console.log("milli_e_date: " + milli_e_date);

			console.log("ratio: " + ratio);
			console.log("Math.PI*ratio: " + Math.PI*ratio);

			return ratio;



	}


}


