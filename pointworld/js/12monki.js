	// ��������Ʈ, ��������Ʈ, ���Ӱ������Ʈ
	var current=10000;
	var betting=0;
	var pointQ=0;

	// ���̸Ӱ� ������ ����
	var yourSelect="";
	// ���Ͱ� ������ ����
	var comterSelect="";

	// �� 12���Ż� �ɸ� ����Ʈ
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

	// ���̸Ӱ� �� �Ż� ������ ����Ʈ �迭
	var yourMonki=new Array();

	// ��ǻ�Ͱ� ������ �Ż� 3����
	var monki=new Array();


// ���̸Ӱ� ������ �������� ��������Ʈ�� �����ش�
function select(selection){


	current=parseInt(document.getElementsByName("current")[0].value);
	betting=parseInt(document.getElementsByName("betting")[0].value);



	if(current<500){
		alert("�ѹ� ������ 500����Ʈ�� �ʿ��մϴ�.");
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
	}//��

	if(selection.src.includes("cow.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point02=point02+500;
		document.getElementsByName("points02")[0].value=point02;
		return;
	}//��

	if(selection.src.includes("tiger.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point03=point03+500;
		document.getElementsByName("points03")[0].value=point03;
		return;
	}//��

	if(selection.src.includes("rabbit.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point04=point04+500;
		document.getElementsByName("points04")[0].value=point04;
		return;
	}//��

	if(selection.src.includes("dragon.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point05=point05+500;
		document.getElementsByName("points05")[0].value=point05;
		return;
	}//��

	if(selection.src.includes("snake.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point06=point06+500;
		document.getElementsByName("points06")[0].value=point06;
		return;
	}//��

	if(selection.src.includes("horse.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point07=point07+500;
		document.getElementsByName("points07")[0].value=point07;
		return;
	}//��

	if(selection.src.includes("sheep.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point08=point08+500;
		document.getElementsByName("points08")[0].value=point08;
		return;
	}//��

	if(selection.src.includes("monkey.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point09=point09+500;
		document.getElementsByName("points09")[0].value=point09;
		return;
	}//��

	if(selection.src.includes("chicken.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point10=point10+500;
		document.getElementsByName("points10")[0].value=point10;
		return;
	}//��

	if(selection.src.includes("dog.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point11=point11+500;
		document.getElementsByName("points11")[0].value=point11;
		return;
	}//��

	if(selection.src.includes("pig.jpg")){
		current=current-500;
		document.getElementsByName("current")[0].value=current;
		betting=betting+500;
		document.getElementsByName("betting")[0].value=betting;
		point12=point12+500;
		document.getElementsByName("points12")[0].value=point12;
		return;
	}//��

}

//�ٽ� �����ϱ�
function reSelect(){

		//���̸Ӱ� ������ ���� ����Ʈ �ʱ�ȭ
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


		//ȭ��� ������ ����Ʈ ���ֱ�
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

		//���̸Ӱ� ������ ����Ʈ �ǵ��� ����
		current = current + betting;
		document.getElementsByName("current")[0].value=current;
		betting = 0;
		document.getElementsByName("betting")[0].value=betting;


}

// 12���Ż� �� 3���� ���õ�. ���õ� �Ż� �ɸ� ����Ʈ�� 3�谡 ��.
function doMonkey(){
	
	if(betting<500){
		alert("���� �������� Ŭ���Ͽ� ������ �ϼ���!!!");
		return;
	}

	// ��ǻ�Ͱ� ������ 12�Ż�, 3���� ������ �迭
	monki = new Array(3);

	// 1���� 12�߿��� ���Ƿ� 3���� �����ؼ� 1���� 12���� ��,��,��,..,��,�ط� ������
	for(var j=0;j<3;j++){
		//lotto[j]=parseInt(Math.random()*45)+1;

		monki[j] = Math.floor(12*Math.random()) + Math.ceil(1);
	}

	// ���̸Ӱ� �� �Ż� ������ ����Ʈ�� �迭�� ����
	yourMonki = [point01,point02,point03,point04,point05,point06,point07,point08,point09,point10,point11,point12];

	for(var ll=0; ll<3;ll++){

		for(var tl=0;tl<12;tl++){
			if(monki[ll]==tl+1){

				pointQ = pointQ+ yourMonki[tl]*3;
			}
		}
	}

	//���Ӱ�� ��ũ���� ǥ���ϱ�
	var res_Monki = "";
	for(var cl=0; cl<monki.length;cl++){
		res_Monki = res_Monki+" ."+cl+1;
	}

	document.getElementsByName("monkiResult")[0].value=res_Monki;



	

	// ���Ӱ������Ʈ�� ��������Ʈ�� �����ְ�, ��������Ʈ�� 0���� ����
	current = current + pointQ;
	document.getElementsByName("current")[0].value=current;
	betting = 0;
	document.getElementsByName("betting")[0].value=betting;


	//���̸Ӱ� ������ ���� ����Ʈ �ʱ�ȭ
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


	//ȭ��� ������ ����Ʈ ���ֱ�
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