
	// ��������Ʈ, ��������Ʈ, ��ǻ������Ʈ, ���̸Ӱ� ������ ����������, ��ǻ�Ͱ� ������ ����������, ��ǻ�Ͱ� ������ ������������ ������, ���Ӻ������ȭ��ǥ��ȸ��
	var current=10000;
	var betting=0;
	var comPnt=10000;
	var yourSelect="gawi.gif";
	var comterSelect="gawi.gif";
	var rndom=0;
	var ll=0;

	// ���ӽð�, ���Ӱ�������
	var time_stmp = "";
	var pnl_result = "";


	// ���̸��� ���������� ����, �������� �� ������ ����, ������ ����, ���� ������ ������ ��
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

// ��������Ʈ 1000������ ���̱�
	function downPP(){
		current=parseInt(document.getElementsByName("current")[0].value);
		betting=parseInt(document.getElementsByName("betting")[0].value);
		if(betting<1000){
			alert("������ ����Ʈ�� ������");
			return;
		}else{
			betting=betting-1000;
			current=current+1000;
			document.getElementsByName("betting")[0].value=betting;
			document.getElementsByName("current")[0].value=current;
		}
	}

// ��������Ʈ 1000������ �ø���
	function upPP(){
		current=parseInt(document.getElementsByName("current")[0].value);
		betting=parseInt(document.getElementsByName("betting")[0].value);
		comPnt=parseInt(document.getElementsByName("comPnt")[0].value);


		if(current<1000){
			alert("����Ʈ�� �����ϳ���");
			return;
		}else{
			betting=betting+1000;
			if(comPnt<betting){
				alert("��ǻ������Ʈ�� �����ϳ���");
				return;
			}
			current=current-1000;
						
			document.getElementsByName("betting")[0].value=betting;
			document.getElementsByName("current")[0].value=current;
		}
	}

		
// ���������� �����ؼ� ����Ʈ ����ϱ�
	function doGame(){
		// Ÿ�ӽ�����
		time_stmp = new Date().toLocaleString();
		document.getElementsByName('datum')[0].value=time_stmp;

		// 1���� 3������ ������ ������ �����ؼ�, 1�� ����, 2�� ����, 3�� ���� �����Ѵ�
		rndom = Math.floor(3*Math.random()) + Math.ceil(1);
		console.log("rndom : "+rndom);

		if(rndom==1) document.getElementsByName("comterSelect")[0].src="./img/gawi.gif";
		if(rndom==2) document.getElementsByName("comterSelect")[0].src="./img/bawi.gif";
		if(rndom==3) document.getElementsByName("comterSelect")[0].src="./img/bo.gif";


		// �׳� ��ǻ���� ������������ ������ �ٲ��ִ� ȭ���÷��̸� �Ѵ�

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

	// ���������������ϱ�
	function doPlay(){

		//
		
		pnl_result = document.getElementsByName("res_Pnl")[0].value;

		// ������ ���� �̱��, ������ ������ �̱��, ���� ������ �̱�� ������ �Ѵ�
		comterSelect=document.getElementsByName("comterSelect")[0].src;

		if(comterSelect.includes("bo")){
			comterSelect = "bo.gif";
			if(yourSelect.includes("gawi")) {// ����, ��, �̱�
				//alert("�̰峻��");
				document.getElementsByName("result")[0].value="�̰峻��";
				current=current + 2*betting;
				document.getElementsByName("current")[0].value=current;
				document.getElementsByName("betting")[0].value=0;
				comPnt = comPnt - betting;
				document.getElementsByName("comPnt")[0].value=comPnt;
				//��Ͼ�����Ʈ
				pnl_result = pnl_result+"\n"+document.getElementsByName('datum')[0].value+" :"+
				document.getElementsByName("result")[0].value+" , ���̸� : "+yourSelect+", ��ǻ�� : "+ comterSelect+ ", ��������Ʈ :"+ betting;
				document.getElementsByName("res_Pnl")[0].value=pnl_result;

				ll=0;
				return;
			}
			if(yourSelect.includes("bo")){// ��, ��, ���
				//alert("��峻��");
				document.getElementsByName("result")[0].value="��峻��";
				current=current + betting;
				document.getElementsByName("current")[0].value=current;
				document.getElementsByName("betting")[0].value=0;

				//��Ͼ�����Ʈ
				pnl_result = pnl_result+"\n"+document.getElementsByName('datum')[0].value+" :"+
				document.getElementsByName("result")[0].value+" , ���̸� : "+yourSelect+", ��ǻ�� : "+ comterSelect+ ", ��������Ʈ :"+ betting;
				document.getElementsByName("res_Pnl")[0].value=pnl_result;

				
				ll=0;
				return;

			}
			if(yourSelect.includes("bawi")){// ����, ��, ��
				//alert("������");
				document.getElementsByName("result")[0].value="������";
				//document.getElementsByName("current")[0].value=current;
				document.getElementsByName("betting")[0].value=0;
				comPnt = comPnt + betting;
				document.getElementsByName("comPnt")[0].value=comPnt;

				//��Ͼ�����Ʈ
				pnl_result = pnl_result+"\n"+document.getElementsByName('datum')[0].value+" :"+
				document.getElementsByName("result")[0].value+" , ���̸� : "+yourSelect+", ��ǻ�� : "+ comterSelect+ ", ��������Ʈ :"+ betting;
				document.getElementsByName("res_Pnl")[0].value=pnl_result;

				
				ll=0;
				return;

			}
		}
//
	if(comterSelect.includes("gawi")){
		comterSelect = "gawi.gif";
			if(yourSelect.includes("bawi")) {// ����, ��, �̱�
				//alert("�̰峻��");
				document.getElementsByName("result")[0].value="�̰峻��";
				current=current + 2*betting;
				document.getElementsByName("current")[0].value=current;
				document.getElementsByName("betting")[0].value=0;
				comPnt = comPnt - betting;
				document.getElementsByName("comPnt")[0].value=comPnt;

				//��Ͼ�����Ʈ
				pnl_result = pnl_result+"\n"+document.getElementsByName('datum')[0].value+" :"+
				document.getElementsByName("result")[0].value+" , ���̸� : "+yourSelect+", ��ǻ�� : "+ comterSelect+ ", ��������Ʈ :"+ betting;
				document.getElementsByName("res_Pnl")[0].value=pnl_result;
				
				ll=0;
				return;
			}
			if(yourSelect.includes("gawi")){// ��, ��, ���
				//alert("��峻��");
				document.getElementsByName("result")[0].value="��峻��";
				current=current + betting;
				document.getElementsByName("current")[0].value=current;
				document.getElementsByName("betting")[0].value=0;

				//��Ͼ�����Ʈ
				pnl_result = pnl_result+"\n"+document.getElementsByName('datum')[0].value+" :"+
				document.getElementsByName("result")[0].value+" , ���̸� : "+yourSelect+", ��ǻ�� : "+ comterSelect+ ", ��������Ʈ :"+ betting;
				document.getElementsByName("res_Pnl")[0].value=pnl_result;

				ll=0;
				return;

			}
			if(yourSelect.includes("bo")){// ����, ��, ��

				//alert("������");
				document.getElementsByName("result")[0].value="������";
				//document.getElementsByName("current")[0].value=current;
				document.getElementsByName("betting")[0].value=0;
				comPnt = comPnt + betting;
				document.getElementsByName("comPnt")[0].value=comPnt;

				//��Ͼ�����Ʈ
				pnl_result = pnl_result+"\n"+document.getElementsByName('datum')[0].value+" :"+
				document.getElementsByName("result")[0].value+" , ���̸� : "+yourSelect+", ��ǻ�� : "+ comterSelect+ ", ��������Ʈ :"+ betting;

				ll=0;
				return;

			}
		}

		if(comterSelect.includes("bawi")){
			comterSelect = "bawi.gif";
			if(yourSelect.includes("bo")) {// ����, ��, �̱�
				//alert("�̰峻��");
				document.getElementsByName("result")[0].value="�̰峻��";
				current=current + 2*betting;
				document.getElementsByName("current")[0].value=current;
				document.getElementsByName("betting")[0].value=0;
				comPnt = comPnt - betting;
				document.getElementsByName("comPnt")[0].value=comPnt;

				//��Ͼ�����Ʈ
				pnl_result = pnl_result+"\n"+document.getElementsByName('datum')[0].value+" :"+
				document.getElementsByName("result")[0].value+" , ���̸� : "+yourSelect+", ��ǻ�� : "+ comterSelect+ ", ��������Ʈ :"+ betting;
				document.getElementsByName("res_Pnl")[0].value=pnl_result;
				
				ll=0;
				return;
			}
			if(yourSelect.includes("bawi")){// ��, ��, ���
				//alert("��峻��");
				document.getElementsByName("result")[0].value="��峻��";
				current=current + betting;
				document.getElementsByName("current")[0].value=current;
				document.getElementsByName("betting")[0].value=0;

				//��Ͼ�����Ʈ
				pnl_result = pnl_result+"\n"+document.getElementsByName('datum')[0].value+" :"+
				document.getElementsByName("result")[0].value+" , ���̸� : "+yourSelect+", ��ǻ�� : "+ comterSelect+ ", ��������Ʈ :"+ betting;
				document.getElementsByName("res_Pnl")[0].value=pnl_result;

				ll=0;
				return;

			}
			if(yourSelect.includes("gawi")){// ����, ��, ��

				//alert("������");
				document.getElementsByName("result")[0].value="������";
				//document.getElementsByName("current")[0].value=current;
				document.getElementsByName("betting")[0].value=0;
				comPnt = comPnt + betting;
				document.getElementsByName("comPnt")[0].value=comPnt;

				//��Ͼ�����Ʈ
				pnl_result = pnl_result+"\n"+document.getElementsByName('datum')[0].value+" :"+
				document.getElementsByName("result")[0].value+" , ���̸� : "+yourSelect+", ��ǻ�� : "+ comterSelect+ ", ��������Ʈ :"+ betting;
				document.getElementsByName("res_Pnl")[0].value=pnl_result;

				ll=0;
				return;

			}
		}
		



	}