
	// ��������Ʈ, ��������Ʈ, ���̸Ӱ� ������ �ζǹ�ȣ 1��, ���̸Ӱ� ������ �ζǹ�ȣ 6��, ��ǻ�Ͱ� ������ �ζǹ�ȣ 1��,��ǻ�Ͱ� ������ �ζǹ�ȣ 6��, ���Ӻ������ȭ��ǥ��ȸ��, ��������
	var current=10000;
	var betting=0;
	var yourSelect=0;
	var yourLotto = new Array();
	var comterSelect=0;
	var comterLotto = new Array();
	var ll=0;
	var bingo=0;

	// ���ӽð�, ���Ӱ�������
	var time_stmp = "";
	var pnl_result = "";


	

	
	// �ζǹ��ñݾ� ���߱�
	function downPP(){

		current=parseInt(document.getElementsByName("current")[0].value);
		betting=parseInt(document.getElementsByName("betting")[0].value);

		if(betting<2000){
			alert("������ ����Ʈ�� �����ϴ�");
			return;
		}else{
			betting=betting-2000;
			current=current+2000;
			document.getElementsByName("betting")[0].value=betting;
			document.getElementsByName("current")[0].value=current;
		}
	}

	//�ζǹ��ñݾ� �ø���
	function upPP(){
		current=parseInt(document.getElementsByName("current")[0].value);
		betting=parseInt(document.getElementsByName("betting")[0].value);

		if(current<2000){
			alert("����Ʈ�� �����մϴ�");
			return;
		}else{
			betting=betting+2000;
			current=current-2000;
			document.getElementsByName("betting")[0].value=betting;
			document.getElementsByName("current")[0].value=current;
		}
	}

	// �ζǹ�ȣ �ٽ� ������ �� �ְ� ��� ������ ��ȣ�� ���ֹ�����
	function reSelect(){

		//���̸Ӱ� ������ ���� �ζ� ��ȣ �ʱ�ȭ
		yourLotto = new Array();

		//ȭ��� ���õ� �ζǹ�ȣ ���ֱ�
		document.getElementsByName("select1")[0].value=0;
		document.getElementsByName("select2")[0].value=0;
		document.getElementsByName("select3")[0].value=0;
		document.getElementsByName("select4")[0].value=0;
		document.getElementsByName("select5")[0].value=0;
		document.getElementsByName("select6")[0].value=0;
	}


// ���̸Ӱ� ��ũ������ ������ �ζǹ�ȣ�� ĳġ�ϱ�
function select(num){
	
	//'number1'���� 'number45'�� ���õ�. ���ڸ� ���.
	yourSelect=num.substring(6,num.length);

	// ���̸Ӱ� �̹� ������ �ѹ��� �����ߴ��� ������
	for(var l =0; l < yourLotto.length; l++){
		if(yourLotto.length>=6){
			alert("6���� ���ڰ� ��� �����ž�����");
			return;
		}
		if(yourSelect==yourLotto[l]){
			alert("�̹̼����� �����Դϴ�");
			return;
		}
	}


	// �����Ŀ��� ���̸� ����� �迭�� �� �߰��ϰ�, �ش� ȭ�鿡 ���� ǥ���Ͽ� �ش�
	yourLotto.push(yourSelect);
	console.log("yourSelect : "+yourSelect+" ,yourLotto.length :" +yourLotto.length);

	//�迭 ����� ���� ǥ���ϴ� ��ġ�� �����Ѵ�
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
			alert("���̸Ӽ��ü��� ȭ�鿡 ǥ���ϱ� �ַ���!!");
	}

}

//�ζǹ�ȣ �ڵ������ϱ⿡ �����ϴ� �۾�
function autoSelect(){
	
	// ���̸� ������ �ζǹ�ȣ ���� �迭 �ʱ�ȭ
	yourLotto=new Array();

	// 1���� 45������ ���������� ������ ������ 6ȸ ������ �迭�� �־��ش�
	for(var j=0;j<6;j++){
		//parseInt(Math.random()*45)+1;
		yourSelect = Math.floor(45*Math.random()) + Math.ceil(1);

		// ���Ƿ� ������ �ѹ��� �̹� �����ż� ����� �ѹ��� �ƴ��� ����
		for(var i=0; i<yourLotto.length;i++){
			if(yourLotto[i]==yourSelect){
				//��ȣ�� �ߺ��Ǿ� ������ �ٽ� ó������ ������
				autoSelect();
			}
		}

		// �ߺ��� ������ ���̸Ӽ��ù迭�� �߰���
		yourLotto[j]=yourSelect;
	}

	// �ߺ����� 6�� ������ ��ȣ�� ȭ�鿡 ǥ����
	document.getElementsByName("select1")[0].value=yourLotto[0];
	document.getElementsByName("select2")[0].value=yourLotto[1];
	document.getElementsByName("select3")[0].value=yourLotto[2];
	document.getElementsByName("select4")[0].value=yourLotto[3];
	document.getElementsByName("select5")[0].value=yourLotto[4];
	document.getElementsByName("select6")[0].value=yourLotto[5];
}

	//���� 6���� ��� ���õǾ����� Ȯ���ϰ� �ζ� ���� �����ϱ�
	function goLotto(){

		
		var select1=document.getElementsByName("select1")[0].value;
		var select2=document.getElementsByName("select2")[0].value;
		var select3=document.getElementsByName("select3")[0].value;
		var select4=document.getElementsByName("select4")[0].value;
		var select5=document.getElementsByName("select5")[0].value;
		var select6=document.getElementsByName("select6")[0].value;

		if(select1=="0"||select2=="0"||select3=="0"||select4=="0"||select5=="0"||select6=="0"){
			alert("��ȣ �������� ��� �������� �ʾҽ��ϴ�");
			return;
		}

		//frm.submit();
		doLotto();

	}

//�ζǽ����ϱ�
function doLotto(){

	//��ǻ�Ͱ� 1���� 45 �߿��� �����ϰ� 6���� ������ �����ϰ��ؼ� �迭����
	for(var j=0;j<6;j++){
		//lotto[j]=parseInt(Math.random()*45)+1;

		comterSelect = Math.floor(45*Math.random()) + Math.ceil(1);

		// ���Ƿ� ������ �ѹ��� �̹� �����ż� ����� �ѹ��� �ƴ��� ����
		for(var i=0; i<comterLotto.length;i++){
			if(comterLotto[i]==comterSelect){

				
				//��ȣ�� �ߺ��Ǿ� ������ �ٽ���
				ll=0;
				comterLotto = new Array();
				doLotto();
			}
		}

		// �ߺ��� ������ ���̸Ӽ��ù迭�� �߰���
		comterLotto[j]=comterSelect;
	}

	// ����� ǥ���Ѵ�
	document.getElementsByName("selected1")[0].value=comterLotto[0];
	document.getElementsByName("selected2")[0].value=comterLotto[1];
	document.getElementsByName("selected3")[0].value=comterLotto[2];
	document.getElementsByName("selected4")[0].value=comterLotto[3];
	document.getElementsByName("selected5")[0].value=comterLotto[4];
	document.getElementsByName("selected6")[0].value=comterLotto[5];
	

	// ���Ӻ����⸦ ���� 6�� �ݺ��ϰ� ����� ���� ����Ʈ ó���� �Ѵ�
	setting();



}

//�ζ� �������� ������ �����ϱ� ������ ������
function setting(){

	bingo =0;

	// ���� ���� Ȯ��
	for(var j=0;j<comterLotto.length;j++){
		for(var k=0;k<yourLotto.length;k++){
			if(comterLotto[j]==yourLotto[k]){
				bingo++;
			}
		}
	}

	switch(bingo){

		case 0:

			alert("���Դϴ�.");
			
			current = current +0;
			betting=0;
			
			document.getElementsByName("current")[0].value=current;
			document.getElementsByName("betting")[0].value=betting;			
		break;
		case 1:
			alert("�ϳ�!!! ���ô� õ��!!!!\n"+1000*(betting/2000));
			
			current=current+1000*(betting/2000);
			betting=0;
			
			document.getElementsByName("current")[0].value=current;
			document.getElementsByName("betting")[0].value=betting;
		break;
		case 2:
			alert("�ΰ��� ����ġ��!!!! ���ô� ��õ��!!!\n"+2000*(betting/2000));
			current=current+2000*(betting/2000);
			betting=0;
			
			
			document.getElementsByName("current")[0].value=current;
			document.getElementsByName("betting")[0].value=betting;
		break;
		case 3:
			alert("3��! ���ô� ����!!!!\n"+10000*(betting/2000));
			current=current+10000*(betting/2000);
			betting=0;
			
			
			document.getElementsByName("current")[0].value=current;
			document.getElementsByName("betting")[0].value=betting;
		break;
		case 4:

			alert("4��!!!! ���ô� �Ƚʸ���!!!!\n"+800000*(betting/2000));
			current=current+800000*(betting/2000);
			betting=0;
			
			
			document.getElementsByName("current")[0].value=current;
			document.getElementsByName("betting")[0].value=betting;
		break;
		case 5:
			alert("5��!!!!! ���ô� �̹鸸��!!!!\n"+200000000*(betting/2000));
			current=current+200000000*(betting/2000);
			betting=0;
			
			
			document.getElementsByName("current")[0].value=current;
			document.getElementsByName("betting")[0].value=betting;
		break;
		case 6:
			alert("6��!!! ���ô� �ʾ��� ���޵ǰڽ��ϴ�.!!!!\n"+1000000000*(betting/2000));
			current=current+1000000000*(betting/2000);
			betting=0;
			
			
			document.getElementsByName("current")[0].value=current;
			document.getElementsByName("betting")[0].value=betting;
		break;
		default:
		 alert("�ζǰ�����");
	}

}