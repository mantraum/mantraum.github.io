// �ܼ��� �༺ �˵��� �ܰ����� �׷�����


function draw00() {

  var canvas = document.getElementById('canvas01');

  
  if (canvas.getContext) {

    var ctx = canvas.getContext('2d');


	// �༺�� ���˵� �׸���
	// ����
	ctx.beginPath();
	ctx.arc(300, 300, 3, 0, Math.PI*2, true);
	ctx.stroke();

	// �����˵���
	ctx.beginPath();
	ctx.arc(300, 300, 90, 0, Math.PI*2, true);
	ctx.stroke();

	

	// ��ť��
	ctx.beginPath();
	ctx.arc(300, 300, 120, 0, Math.PI*2, true);
	ctx.stroke();

	// ��ʽ�
	ctx.beginPath();
	ctx.arc(300, 300, 130, 0, Math.PI*2, true);
	ctx.stroke();

	// �
	ctx.beginPath();
	ctx.arc(300, 300, 150, 0, Math.PI*2, true);
	ctx.stroke();

	// ������
	ctx.beginPath();
	ctx.arc(300, 300, 160, 0, Math.PI*2, true);
	ctx.stroke();

	// ������
	ctx.beginPath();
	ctx.arc(300, 300, 180, 0, Math.PI*2, true);
	ctx.stroke();
	
	// ����
	ctx.beginPath();
	ctx.arc(300, 300, 190, 0, Math.PI*2, true);
	ctx.stroke();

	// ��󴩽�
	ctx.beginPath();
	ctx.arc(300, 300, 210, 0, Math.PI*2, true);
	ctx.stroke();

	// ��ƪ
	ctx.beginPath();
	ctx.arc(300, 300, 220, 0, Math.PI*2, true);
	ctx.stroke();

	// �÷���
	ctx.beginPath();
	ctx.arc(300, 300, 230, 0, Math.PI*2, true);
	ctx.stroke();

	// �ܰ����� �˵� �׸���
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

	// ���ظ� ���ں��� ���ݽð� �����
	makeDailyClock();

	// õ�õ� ���� ǥ���ϱ�
	makeHoroScope();

	// ������ ���ó�¥ �������� ǥ���ϱ�
	drawEarthLineFrmCurrMonthNDate();

	// �༺�� ���� ��ġ �������� ǥ���ϱ�


  }
}


// ����ð����� ���� ������ ������ ǥ���ϴ� ���� �׸���
// ��������� ���ؼ� 1��1�ϰ��� ���̸� ���Ѵ�. ��.
// ������ ���� ���� 1��, 365�ϰ� ���ؼ� �� �ۼ�Ʈ���� ���Ѵ�. ��.
// ������ ���� ������ ����, ������ ���Ѵ�. ��.
// ���� ������ �߽���(300,300)����, ������ ������290���� ������ ������(300-290, 300)���� ������ �����Ѵ�. ��.
// �󿡼� ������ ������ �ٿ��� ���� ������ŭ �ݽð� �������� ������ �� ��ä���� ����� ���� �ֿܰ����� ����� ����. ��.
// �߽���(300, 300)���� �̵��ؼ�, ������ ������ �׸���.

// ���ظ� ���ں��� ���ݽð� �����
function makeDailyClock() {

	let to_date = new Date(); // ���� ����
	to_date.setMonth(0); //���� ù��° ����, ���� 0���� 11����.
	to_date.setDate(1);

	let s_date = to_date.toString();

	to_date = new Date();

	to_date.setMonth(11); // ���� ������ ����
	to_date.setDate(31);

	let e_date = to_date.toString();

	to_date = new Date();
	
	console.log("to_date: " + to_date);
	console.log("s_date: " + s_date);
	console.log("e_date: " + e_date);
	
	var milli_to_date = Date.now();//��Ÿ�� 1970.1.1������ ���ñ����� �и��ʰ��
	var milli_s_date = Date.parse(s_date);//��Ÿ�� 1970.1.1������ ����ù�ϱ����� �и��ʰ��
	var milli_e_date = Date.parse(e_date);//��Ÿ�� 1970.1.1������ ���ظ��ϱ����� �и��ʰ��

	console.log("milli_to_date: " + milli_to_date);
	console.log("milli_s_date: " + milli_s_date);
	console.log("milli_e_date: " + milli_e_date);

		
	//�����̸� 366��ó��
	var isLeapYr = 365;
	if(new Date(to_date.getFullYear(), 1, 29).getDate() == 29){
		isLeapYr = 366;
	}
	//���� ������ �и�������� ù �и��������� ���̸� 365�� ���� �Ϸ翡 �ش��ϴ� ������ ���Ѵ�
	var ratio = 2*Math.PI*((milli_e_date-milli_s_date)/isLeapYr);

	console.log("isLeapYr: " + isLeapYr);
	console.log("ratio: " + ratio);


	//�ڻ��ΰ�, x��ǥ�� ����ġ
	var x_r, x_r2 = 0;
	//���ΰ�, y��ǥ�� ����ġ
	var y_r, y_r2 = 0;

	var canvas = document.getElementById('canvas01');

	if (canvas.getContext) {

		var ctx = canvas.getContext('2d');

		//�����׸���, �߽���ǥ(300,300)���ؽ����� �ܰ��� ������ 250
		for(var i=0; i<isLeapYr; i++){

			x_r = 250*Math.cos(Math.PI+Math.PI*ratio*i);
			y_r = 250*Math.sin(Math.PI+Math.PI*ratio*i);

			ctx.beginPath();
			ctx.moveTo(300+x_r, 300+y_r);

			x_r2 = 260*Math.cos(Math.PI+Math.PI*ratio*i);
			y_r2 = 260*Math.sin(Math.PI+Math.PI*ratio*i);

			ctx.lineTo(300+x_r2, 300+y_r2);
			ctx.lineWidth ="1";//������
			ctx.strokeStyle = 'rgba(255, 0, 0, 1)';//������� ����, ����
			ctx.lineCap = "round"; //�������
		
			ctx.stroke();
		}

		// 1��1�� ���ؼ� ǥ��
		ctx.beginPath();
		x_r = 90*Math.cos(Math.PI);
		y_r = 90*Math.sin(Math.PI);
		ctx.moveTo(300+x_r, 300+y_r);

		x_r2 = 260*Math.cos(Math.PI);
		y_r2 = 260*Math.sin(Math.PI);

		ctx.lineTo(300+x_r2, 300+y_r2);
		ctx.lineWidth ="2";//������
		ctx.strokeStyle = 'rgba(255, 0, 0, 1)';//������� ����, ����
		ctx.lineCap = "round"; //�������
	
		ctx.stroke();

		//������ ���缱 ������ 140
		
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
//		ctx.lineWidth ="3";//������
//		ctx.strokeStyle = 'rgba(0, 255, 255, 1)';//������� ����, �ϴ�
//		ctx.lineCap = "round"; //�������
//		ctx.stroke();


		//���� �ð� ����
		document.getElementById("da.today").innerText = to_date.toString();

	}


	
}

// õ�õ� ���� ǥ���ϱ�
function makeHoroScope(){

	var dd = new Date();
	var qq = new Date();

	//���ڸ� 3�� 21�� ~ 4�� 19��
	dd.setMonth(2);
	dd.setDate(21);
	qq.setMonth(3);
	qq.setDate(19);

	drawHoroScope(dd.toString(), qq.toString());

	// ���ڸ� ����ǥ��
	displayHoroName(dd.toString(), qq.toString());


	//Ȳ���ڸ� 4�� 20�� ~ 5�� 20��
	dd = new Date();
	dd.setMonth(3);
	dd.setDate(20);

	qq = new Date();
	qq.setMonth(4);
	qq.setDate(20);

	drawHoroScope(dd.toString(), qq.toString());

	//�ֵ����ڸ� 5�� 21�� ~ 6�� 21��
	dd = new Date();
	dd.setMonth(4);
	dd.setDate(21);

	qq = new Date();
	qq.setMonth(5);
	qq.setDate(21);

	drawHoroScope(dd.toString(), qq.toString());

	//���ڸ� 6�� 22�� ~ 7�� 22��
	dd = new Date();
	dd.setMonth(5);
	dd.setDate(22);

	qq = new Date();
	qq.setMonth(6);
	qq.setDate(22);
	drawHoroScope(dd.toString(), qq.toString());

	//�����ڸ� 7�� 23�� ~ 8�� 22��
	dd = new Date();
	dd.setMonth(6);
	dd.setDate(23);

	qq = new Date();
	qq.setMonth(7);
	qq.setDate(22);
	drawHoroScope(dd.toString(), qq.toString());


	//ó���ڸ� 8�� 23�� ~ 9�� 22��
	dd = new Date();
	dd.setMonth(7);
	dd.setDate(23);

	qq = new Date();
	qq.setMonth(8);
	qq.setDate(22);
	drawHoroScope(dd.toString(), qq.toString());


	//õĪ�ڸ� 9�� 23�� ~ 10�� 22��
	dd = new Date();
	dd.setMonth(8);
	dd.setDate(23);

	qq = new Date();

	qq.setMonth(9);
	qq.setDate(22);
	drawHoroScope(dd.toString(), qq.toString());


	//�����ڸ� 10�� 23�� ~ 11�� 22��
	dd = new Date();
	dd.setMonth(9);
	dd.setDate(23);

	qq = new Date();
	qq.setMonth(10);
	qq.setDate(22);
	drawHoroScope(dd.toString(), qq.toString());


	//�ü��ڸ� 11�� 23�� ~ 12�� 24��
	dd = new Date();
	dd.setMonth(10);
	dd.setDate(23);

	qq = new Date();
	qq.setMonth(11);
	qq.setDate(24);
	drawHoroScope(dd.toString(), qq.toString());


	//�����ڸ� 12�� 25�� ~ 1�� 19��
	dd = new Date();
	dd.setMonth(11);
	dd.setDate(25);

	qq = new Date();
	qq.setMonth(0);
	qq.setDate(19);

	drawHoroScope(dd.toString(), qq.toString());


	//�����ڸ� 1�� 20�� ~ 2�� 18��
	dd = new Date();
	dd.setMonth(0);
	dd.setDate(20);

	qq = new Date();
	qq.setMonth(1);
	qq.setDate(18);

	drawHoroScope(dd.toString(), qq.toString());


	//������ڸ� 2�� 19�� ~ 3�� 20��
	dd = new Date();
	dd.setMonth(1);
	dd.setDate(19);

	qq = new Date();
	qq.setMonth(2);
	qq.setDate(20);

	drawHoroScope(dd.toString(), qq.toString());


	
}

// õ�õ� ���� �׸���
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


// ���ڸ� ����ǥ��
function displayHoroName(elem_a, elem_b){

	let tell_s = genRtofrmMonthDay(elem_a);
	let tell_e = genRtofrmMonthDay(elem_b);

	var canvas = document.getElementById('canvas01');

	if (canvas.getContext) {

		var ctx = canvas.getContext('2d');

		ctx.font = "20px malgun gothic"; //��Ʈ�� ũ��, �۲�ü ����
		ctx.textBaseline = "middle"; //�ؽ�Ʈ ��� ���ؼ� ����(top, middle, bottom, alphabetic, hanging, ideo graphic)
		ctx.textAlign = "center"; //�ؽ�Ʈ ���� ������ ���� ����(left, right, center, start, end)

		ctx.fillStyle = "rgba(128, 0, 0,1)"; //��������
		// ���� tell_e ����
		tell_e = (tell_e-tell_s)/2;
		ctx.fillText("\U+2648", 300+275*Math.cos(Math.PI*2*tell_s+Math.PI*2*tell_e), 300+275*Math.sin(Math.PI*2*tell_s+Math.PI*2*tell_e));// ARIES
	}
}


// ������ ���ó�¥ �������� ǥ���ϱ� 
// �༺�� ���� ��ġ �������� ǥ���ϱ�
function drawEarthLineFrmCurrMonthNDate() {

	let to_date = new Date(); // ���� ����
	to_date.setMonth(0); //���� ù��° ����, ���� 0���� 11����.
	to_date.setDate(1);

	let s_date = to_date.toString();

	to_date = new Date();

	to_date.setMonth(11); // ���� ������ ����
	to_date.setDate(31);

	let e_date = to_date.toString();

	to_date = new Date();
	

	console.log("to_date: " + to_date);
	console.log("s_date: " + s_date);
	console.log("e_date: " + e_date);
	
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


		//������ ���缱 ������ 140
		
		x_r = 140*Math.cos(Math.PI*0.5 + Math.PI*ratio);
		y_r = 140*Math.sin(Math.PI*0.5 + Math.PI*ratio);

		console.log("x_r : "+x_r);
		console.log("y_r : "+y_r);

		ctx.beginPath();
		ctx.moveTo(300, 300);
		ctx.lineTo(300+x_r, 300+y_r);

		ctx.lineWidth ="2";//������
		ctx.strokeStyle = 'rgba(0, 255, 255, 1)';//������� ����, �ϴ�
		ctx.lineCap = "round"; //�������
		ctx.stroke();

	}


	
}