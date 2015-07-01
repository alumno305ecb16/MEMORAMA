// JavaScript Document
$(document).ready(function(e) {	
document.addEventListener("deviceready",function(){
var puntosb=0;
var puntosm=0;
var puntostot=0;

var numale=0;
var srcp="images/img/principal.jpg";
var src="";
var src1="";
var src2="";
var src3="";
var src4="";
var src5="";
var src6="";
var src7="";
var src8="";

var src9="";
var src10="";
var src11="";
var src12="";
var src13="";
var src14="";
var src15="";
var src16="";


var valorx=0;

var img1=false;
var img2=false;
var img3=false;
var img4=false;
var img5=false;
var img6=false;
var img7=false;
var img8=false;
var img9=false;
var img10=false;
var img11=false;
var img12=false;
var img13=false;
var img14=false;
var img15=false;
var img16=false;
var img17=false;
var img18=false;
var img19=false;
var img20=false;
var img21=false;
var img22=false;
var img23=false;
var img24=false;
var img25=false;
var img26=false;
var img27=false;
var img28=false;
var img29=false;
var img30=false;

var seleccion1="";
var seleccion2="";

var pasoseleccion=0;

var idimagen="";
var idimagen1="";
var idimagen2="";

var numal=0;
var nivel=1;
var cc=100;

var imgcont=0;
var count=cc;
var count1=0;

	var counter=clearInterval(timer,1000);
	
	function timer()
	{
		count=count-1
		$('#contador').html("TIEMPO:"+count);
			
		if(count==0)
		{
			$(location).attr('href',"#resultados"); 
			clearInterval(counter);
			seleccion2="";
			seleccion1="";
		}
	}
	
	
	var counter1=clearInterval(timer1,1000);
	
	function timer1()
	{
		//count1=count1-1;
		//alert(count1);
		//$('#contador').html("TIEMPO:"+count1);
		
		if(count1==0)
		{
			seleccion2="";
			seleccion1="";
			existe();
			clearInterval(counter1);
			
		}
	}

function numaleatorio()
{
	numale = Math.floor(Math.random()*30)+1;
//	alert(numale);
	
			if(numale==1)
			{
				if(img1==false)
					{
						src="images/img/img1.jpg";
						img1=true;
					//	alert("false");
					}else{
						//alert("true");
						numaleatorio();		
					}
			}else if(numale==2)
			{
				if(img2==false)
					{
						src="images/img/img2.jpg";
						img2=true;
						//alert("false");
					}else{
						numaleatorio();
					//	alert("true");	
					}
			}else if(numale==3)
			{
				if (img3==false)
					{
						src="images/img/img3.jpg";
						img3=true;
						//alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}	
			}else if(numale==4)
			{
				if(img4==false)
					{
						src="images/img/img4.jpg";
						img4=true;	
					//	alert("true")
					}else{
						numaleatorio();
						//alert("false");
					}
			}else if(numale==5)
			{
				if(img5==false)
					{
						src="images/img/img5.jpg";
						img5=true;	
					//	alert("true");
					}else{
						numaleatorio();
						//alert("false")
					}
			}else if(numale==6)
			{
				if(img6==false)
					{
						src="images/img/img6.jpg";
						img6=true;	
					//	alert("true");
					}else{
						numaleatorio();
						//alert("false");
					}
			}else if(numale==7)
			{
				if(img7==false)
					{
						src="images/img/img7.jpg";
						img7=true;	
						//alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}else if(numale==8)
			{
				if(img8==false)
					{
						src="images/img/img8.jpg";
						img8=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}else if(numale==9)
			{
				if(img9==false)
					{
						src="images/img/img9.jpg";
						img9=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			} else if(numale==10)
			{
				if(img10==false)
					{
						src="images/img/img10.jpg";
						img10=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
				}
			}else if(numale==11)
			{
				if(img11==false)
					{
						src="images/img/img11.jpg";
						img11=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}else if(numale==12)
			{
				if(img12==false)
					{
						src="images/img/img12.jpg";
						img12=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}else if(numale==13)
			{
				if(img13==false)
					{
						src="images/img/img13.jpg";
						img13=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}else if(numale==14)
			{
				if(img14==false)
					{
						src="images/img/img14.jpg";
						img14=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}else if(numale==15)
			{
				if(img15==false)
					{
						src="images/img/img15.jpg";
						img15=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}else if(numale==16)
			{
				if(img16==false)
					{
						src="images/img/img16.jpg";
						img16=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}else if(numale==17)
			{
				if(img17==false)
					{
						src="images/img/img17.jpg";
						img17=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}else if(numale==18)
			{
				if(img18==false)
					{
						src="images/img/img18.jpg";
						img18=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}else if(numale==19)
			{
				if(img19==false)
					{
						src="images/img/img19.jpg";
						img19=true;	
					//	alert("true");
					}else{
						numaleatorio();
						//alert("false");
					}
			}else if(numale==20)
			{
				if(img20==false)
					{
						src="images/img/img20.jpg";
						img20=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}else if(numale==21)
			{
				if(img21==false)
					{
						src="images/img/img21.jpg";
						img21=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}else if(numale==22)
			{
				if(img22==false)
					{
						src="images/img/img22.jpg";
						img22=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}else if(numale==23)
			{
				if(img23==false)
					{
						src="images/img/img23.jpg";
						img23=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}else if(numale==24)
			{
				if(img24==false)
					{
						src="images/img/img24.jpg";
						img24=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}else if(numale==25)
			{
				if(img25==false)
					{
						src="images/img/img25.jpg";
						img25=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}else if(numale==26)
			{
				if(img26==false)
					{
						src="images/img/img26.jpg";
						img26=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}else if(numale==27)
			{
				if(img27==false)
					{
						src="images/img/img27.jpg";
						img27=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}else if(numale==28)
			{
				if(img28==false)
					{
						src="images/img/img28.jpg";
						img28=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}else if(numale==29)
			{
				if(img29==false)
					{
						src="images/img/img29.jpg";
						img29=true;	
					//	alert("true");
					}else{
						numaleatorio();
				//		alert("false");
					}
			}else if(numale==30)
			{
					if(img30==false)
					{
						src="images/img/img30.jpg";
						img30=true;	
					//	alert("true");
					}else{
						numaleatorio();
					//	alert("false");
					}
			}
			
				
			
}

$('#btnjuego').on('tap', function (){
	fal()
	ciclo()
	$('.imge').show();
	imageninicio()	
})

	function ciclo()
	{
		for (x=1; x <= 8; x++)
		
		{
			
		numaleatorio();
		
			switch(x)
			{
				case(1):
					src1=src;
					break;
				case(2):
					src2=src;
					break;
				case(3):
					src3=src;
					break;
				case(4):
					src4=src;
					break;
				case(5):
					src5=src;
					break;
				case(6):
					src6=src;
					break;
				case(7):
					src7=src;
					break;
				case(8):
					src8=src;
					break;
			}
			
		
		}
		
		numalea()
		
	}

		$('#btnintentar').on('tap', function (){
			nivel=1;
			$('#nivel').html("NIVEL "+nivel);
			cc=100;
			count=cc;
			$('.imge').show();
			imageninicio()
			fal()
			ciclo()	
			
			//counter=setInterval(timer,1000);
		})

		$('.imge').on('tap', function (){
			idimagen = $(this).attr('id')
			
		//	alert(idimagen);
			pasoseleccion=pasoseleccion+1;
			switch(idimagen)
			{
				case("ii1"):
					$("#i1").attr("src",src1);
					if(pasoseleccion==1)
					{
						seleccion1=src1;
						idimagen1=idimagen;
					}else if(pasoseleccion==2)
					{
						seleccion2=src1;
						pasoseleccion=0;
					}
					break;
				case("ii3"):
					$("#i3").attr("src",src2);
					if(pasoseleccion==1)
					{
						seleccion1=src2;
						idimagen1=idimagen;
					}else if(pasoseleccion==2)
					{
						seleccion2=src2;
						pasoseleccion=0;
					}
					break;
				case("ii5"):
					$("#i5").attr("src",src3);
					if(pasoseleccion==1)
					{
						seleccion1=src3;
						idimagen1=idimagen;
					}else if(pasoseleccion==2)
					{
						seleccion2=src3;
						pasoseleccion=0;
					}
					break;
				case("ii7"):
					$("#i7").attr("src",src4);
					if(pasoseleccion==1)
					{
						seleccion1=src4;
						idimagen1=idimagen;
					}else if(pasoseleccion==2)
					{
						seleccion2=src4;
						pasoseleccion=0;
					}
					break;
				case("ii9"):
					$("#i9").attr("src",src5);
					if(pasoseleccion==1)
					{
						seleccion1=src5;
						idimagen1=idimagen;
					}else if(pasoseleccion==2)
					{
						seleccion2=src5;
						pasoseleccion=0;
					}
					break;
				case("ii11"):
					$("#i11").attr("src",src6);
					if(pasoseleccion==1)
					{
						seleccion1=src6;
						idimagen1=idimagen;
					}else if(pasoseleccion==2)
					{
						seleccion2=src6;
						pasoseleccion=0;
					}
					break;
				case("ii13"):
					$("#i13").attr("src",src7);
					if(pasoseleccion==1)
					{
						seleccion1=src7;
						idimagen1=idimagen;
					}else if(pasoseleccion==2)
					{
						seleccion2=src7;
						pasoseleccion=0;
					}
					break;
				case("ii15"):
					$("#i15").attr("src",src8);
					if(pasoseleccion==1)
					{
						seleccion1=src8;
						idimagen1=idimagen;
					}else if(pasoseleccion==2)
					{
						seleccion2=src8;
						pasoseleccion=0;
					}
					break;
				case("ii2"):
					$("#i2").attr("src",src9);
					if(pasoseleccion==1)
					{
						seleccion1=src9;
						idimagen1=idimagen;
					}else if(pasoseleccion==2)
					{
						seleccion2=src9;
						pasoseleccion=0;
					}
					break;
				case("ii4"):
					$("#i4").attr("src",src10);
					if(pasoseleccion==1)
					{
						seleccion1=src10;
						idimagen1=idimagen;
					}else if(pasoseleccion==2)
					{
						seleccion2=src10;
						pasoseleccion=0;
					}
					break;
				case("ii6"):
					$("#i6").attr("src",src11);
					if(pasoseleccion==1)
					{
						seleccion1=src11;
						idimagen1=idimagen;
					}else if(pasoseleccion==2)
					{
						seleccion2=src11;
						pasoseleccion=0;
					}
					break;
				case("ii8"):
					$("#i8").attr("src",src12);
					if(pasoseleccion==1)
					{
						seleccion1=src12;
						idimagen1=idimagen;
					}else if(pasoseleccion==2)
					{
						seleccion2=src12;
						pasoseleccion=0;
					}
					break;
				case("ii10"):
					$("#i10").attr("src",src13);
					if(pasoseleccion==1)
					{
						seleccion1=src13;
						idimagen1=idimagen;
					}else if(pasoseleccion==2)
					{
						seleccion2=src13;
						pasoseleccion=0;
					}
					break;
				case("ii12"):
					$("#i12").attr("src",src14);
					if(pasoseleccion==1)
					{
						seleccion1=src14;
						idimagen1=idimagen;
					}else if(pasoseleccion==2)
					{
						seleccion2=src14;
						pasoseleccion=0;
					}
					break;
				case("ii14"):
					$("#i14").attr("src",src15);
					if(pasoseleccion==1)
					{
						seleccion1=src15;
						idimagen1=idimagen;
					}else if(pasoseleccion==2)
					{
						seleccion2=src15;
						pasoseleccion=0;
					}
					break;
				case("ii16"):
					$("#i16").attr("src",src16);
					if(pasoseleccion==1)
					{
						seleccion1=src16;
						idimagen1=idimagen;
					}else if(pasoseleccion==2)
					{
						seleccion2=src16;
						pasoseleccion=0;
					}
					break;
			
			}
				if(seleccion2!="")
				{
					counter1=setInterval(timer1,1000);
				}
			
		})

		function existe()
		{
			if(seleccion2!="")
			{
					
				if(seleccion1==seleccion2)
				{
					if(idimagen1!=idimagen)
					{
					//alert("PAREJA")
					puntosb=puntosb+1;
					seleccion1="";
					seleccion2="";
				//	navigator.notification.vibrate(1000);
					$('#'+idimagen1).hide();
					$('#'+idimagen).hide();
					//alert(puntosb);
					if(puntosb==8)
					{
						puntostot=puntostot+puntosb;
						//alert(puntostot);
						puntosb=0;
						nivel=nivel+1;
						$('#nivel').html("NIVEL "+nivel);
						
						cc=cc-10;
						count=cc;
						clearInterval(counter);
						fal();
						
						$('.imge').show();
						imageninicio()
						ciclo();
						
					}
			
					}else{
						pasoseleccion=pasoseleccion=0;
						puntosm=puntosm+1;
					//	alert("No Puedes Seleccionar la Misma Imagen");	
						nopareja();
						seleccion1="";
						seleccion2="";
						
					}
					
					
				}else
				{
				//	alert("NO PAREJA")
					puntosm=puntosm+1;
					//alert(idimagen);	
					
					nopareja();
					seleccion1="";
					seleccion2="";
					
					
				}	
				//count1=1;
			}	
			
		}

			
function numalea()
{
	for (y=1; y <=8; y++)
	{
		//alert(y);
		if (img1==true){
			src="images/img/img1.jpg";
			img1=false;
			
		}else if(img2==true)
		{
			src="images/img/img2.jpg";
			img2=false;
			
		}else if(img3==true)
		{
			src="images/img/img3.jpg";
			img3=false;
			
		}else if(img4==true)
		{
			src="images/img/img4.jpg";
			img4=false;
			
		}else if(img5==true)
		{
			src="images/img/img5.jpg";
			img5=false;
			
		}else if(img6==true)
		{
			src="images/img/img6.jpg";
			img6=false;
			
		}else if(img7==true)
		{
			src="images/img/img7.jpg";
			img7=false;
			
		}else if(img8==true)
		{
			src="images/img/img8.jpg";
			img8=false;
			
		}else if(img9==true)
		{
			src="images/img/img9.jpg";
			img9=false;
			
		}else if(img10==true)
		{
			src="images/img/img10.jpg";
			img10=false;
			
		}else if(img11==true)
		{
			src="images/img/img11.jpg";
			img11=false;
			
		}
		else if(img12==true)
		{
			src="images/img/img12.jpg";
			img12=false;
			
		}else if(img13==true)
		{
			src="images/img/img13.jpg";
			img13=false;
			
		}else if(img14==true)
		{
			src="images/img/img14.jpg";
			img14=false;
			
		}else if(img15==true)
		{
			src="images/img/img15.jpg";
			img15=false;
			
		}else if(img16==true)
		{
			src="images/img/img16.jpg";
			img16=false;
			
		}else if(img17==true)
		{
			src="images/img/img17.jpg";
			img17=false;
			
		}else if(img18==true)
		{
			src="images/img/img18.jpg";
			img18=false;
			
		}else if(img19==true)
		{
			src="images/img/img19.jpg";
			img19=false;
			
		}else if(img20==true)
		{
			src="images/img/img20.jpg";
			img20=false;
			
		}else if(img21==true)
		{
			src="images/img/img21.jpg";
			img21=false;
			
		}else if(img22==true)
		{
			src="images/img/img22.jpg";
			img22=false;
			
		}else if(img23==true)
		{
			src="images/img/img23.jpg";
			img23=false;
			
		}else if(img24==true)
		{
			src="images/img/img24.jpg";
			img24=false;
			
		}else if(img25==true)
		{
			src="images/img/img25.jpg";
			img25=false;
			
		}else if(img26==true)
		{
			src="images/img/img26.jpg";
			img26=false;
			
		}else if(img27==true)
		{
			src="images/img/img27.jpg";
			img27=false;
			
		}else if(img28==true)
		{
			src="images/img/img28.jpg";
			img28=false;
			
		}else if(img29==true)
		{
			src="images/img/img29.jpg";
			img29=false;
			
		}else if(img30==true)
		{
			src="images/img/img30.jpg";
			img30=false;
			
		}else{
			
		}
		//alert(src);
		
		switch(y)
		{
			case(1):
				src9=src;
				break;
			case(2):
				src10=src;
				break;
			case(3):
				src11=src;
				break;
			case(4):
				src12=src;
				break;
			case(5):
				src13=src;
				break;
			case(6):
				src14=src;
				break;
			case(7):
				src15=src;
				break;
			case(8):
				src16=src;
				break;
		}
		
		
	}
}



function fal()
{
img1=false;
img2=false;
img3=false;
img4=false;
img5=false;
img6=false;
img7=false;
img8=false;
img9=false;
img10=false;
img11=false;
img12=false;
img13=false;
img14=false;
img15=false;
img16=false;
img17=false;
img18=false;
img19=false;
img20=false;
img21=false;
img22=false;
img23=false;
img24=false;
img25=false;
img26=false;
img27=false;
img28=false;
img29=false;
img30=false;	
counter=setInterval(timer,1000);
}

function nopareja()
{
	
	switch(idimagen)
			{
				case("ii1"):
					$("#i1").attr("src",srcp);
					break;
				case("ii3"):
					$("#i3").attr("src",srcp);
					break;
				case("ii5"):
					$("#i5").attr("src",srcp);
					break;
				case("ii7"):
					$("#i7").attr("src",srcp);
					
					break;
				case("ii9"):
					$("#i9").attr("src",srcp);
					
					break;
				case("ii11"):
					$("#i11").attr("src",srcp);
					
					break;
				case("ii13"):
					$("#i13").attr("src",srcp);
					
					break;
				case("ii15"):
					$("#i15").attr("src",srcp);
					
					break;
				case("ii2"):
					$("#i2").attr("src",srcp);
					
					break;
				case("ii4"):
					$("#i4").attr("src",srcp);
					
					break;
				case("ii6"):
					$("#i6").attr("src",srcp);
					
					break;
				case("ii8"):
					$("#i8").attr("src",srcp);
					
					break;
				case("ii10"):
					$("#i10").attr("src",srcp);
					
					break;
				case("ii12"):
					$("#i12").attr("src",srcp);
					
					break;
				case("ii14"):
					$("#i14").attr("src",srcp);
					
					break;
				case("ii16"):
					$("#i16").attr("src",srcp);
					
					break;
			}
			
			
			
			
			switch(idimagen1)
			{
				case("ii1"):
					$("#i1").attr("src",srcp);
					break;
				case("ii3"):
					$("#i3").attr("src",srcp);
					break;
				case("ii5"):
					$("#i5").attr("src",srcp);
					break;
				case("ii7"):
					$("#i7").attr("src",srcp);
					
					break;
				case("ii9"):
					$("#i9").attr("src",srcp);
					
					break;
				case("ii11"):
					$("#i11").attr("src",srcp);
					
					break;
				case("ii13"):
					$("#i13").attr("src",srcp);
					
					break;
				case("ii15"):
					$("#i15").attr("src",srcp);
					
					break;
				case("ii2"):
					$("#i2").attr("src",srcp);
					
					break;
				case("ii4"):
					$("#i4").attr("src",srcp);
					
					break;
				case("ii6"):
					$("#i6").attr("src",srcp);
					
					break;
				case("ii8"):
					$("#i8").attr("src",srcp);
					
					break;
				case("ii10"):
					$("#i10").attr("src",srcp);
					
					break;
				case("ii12"):
					$("#i12").attr("src",srcp);
					
					break;
				case("ii14"):
					$("#i14").attr("src",srcp);
					
					break;
				case("ii16"):
					$("#i16").attr("src",srcp);
					
					break;
			}
	
}

function imageninicio()
{
	$("#i1").attr("src",srcp);
	$("#i2").attr("src",srcp);
	$("#i3").attr("src",srcp);
	$("#i4").attr("src",srcp);
	$("#i5").attr("src",srcp);
	$("#i6").attr("src",srcp);
	$("#i7").attr("src",srcp);
	$("#i8").attr("src",srcp);
	$("#i9").attr("src",srcp);
	$("#i10").attr("src",srcp);
	$("#i11").attr("src",srcp);
	$("#i12").attr("src",srcp);
	$("#i13").attr("src",srcp);
	$("#i14").attr("src",srcp);
	$("#i15").attr("src",srcp);
	$("#i16").attr("src",srcp);
	
}

}); 
});