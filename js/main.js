$(document).ready(function(){

$('.buttarr.top.s1').click(function(){
	var inter = $('#input_field1').val();
	if(inter == '') $('#input_field1').val('1');
	else $('#input_field1').val(++inter);
	changeIF1();
});
$('.buttarr.bott.s1').click(function(){
	var inter = $('#input_field1').val();
	if(inter == '') $('#input_field1').val('0');
	else if (inter < 1) $('#input_field1').val('0');
	else $('#input_field1').val(--inter);
	changeIF1();
});
$('.buttarr.top.s2').click(function(){
	var inter2 = $('#input_field2').val();
	if(inter2 == '') $('#input_field2').val('1');
	else $('#input_field2').val(++inter2);
	changeIF2();
});
$('.buttarr.bott.s2').click(function(){
	var inter2 = $('#input_field2').val();
	if(inter2 == '') $('#input_field2').val('0');
	else if (inter2 < 1) $('#input_field2').val('0');
	else $('#input_field2').val(--inter2);
	changeIF2();
});
$('.buttarr.top.s3').click(function(){
	var inter3 = $('#input_field3').val();
	if(inter3 == '') $('#input_field3').val('1');
	else $('#input_field3').val(++inter3);
	changeIF3();
});
$('.buttarr.bott.s3').click(function(){
	var inter3 = $('#input_field3').val();
	if(inter3 == '') $('#input_field3').val('0');
	else if (inter3 < 1) $('#input_field3').val('0');
	else $('#input_field3').val(--inter3);
	changeIF3();
});
$('.buttarr.top.s4').click(function(){
	var inter4 = $('#input_field4').val();
	if(inter4 == '') $('#input_field4').val('1');
	else $('#input_field4').val(++inter4);
	changeIF4();
});
$('.buttarr.bott.s4').click(function(){
	var inter4 = $('#input_field4').val();
	if(inter4 == '') $('#input_field4').val('0');
	else if (inter4 < 1) $('#input_field4').val('0');
	else $('#input_field4').val(--inter4);
	changeIF4();
});
$('.buttarr.top.s5').click(function(){
	var inter5 = $('#input_field5').val();
	if(inter5 == '') $('#input_field5').val('1');
	else $('#input_field5').val(++inter5);
	changeIF5();
});
$('.buttarr.bott.s5').click(function(){
	var inter5 = $('#input_field5').val();
	if(inter5 == '') $('#input_field5').val('0');
	else if (inter5 < 1) $('#input_field5').val('0');
	else $('#input_field5').val(--inter5);
	changeIF5();
});
$('.buttarr.top.s6').click(function(){
	var inter6 = $('#input_field6').val();
	if(inter6 == '') $('#input_field6').val('1');
	else $('#input_field6').val(++inter6);
	changeIF6();
});
$('.buttarr.bott.s6').click(function(){
	var inter6 = $('#input_field6').val();
	if(inter6 == '') $('#input_field6').val('0');
	else if (inter6 < 1) $('#input_field6').val('0');
	else $('#input_field6').val(--inter6);
	changeIF6();
});
$('.buttarr.top.s7').click(function(){
	var inter7 = $('#input_field7').val();
	if(inter7 == '') $('#input_field7').val('1');
	else $('#input_field7').val(++inter7);
	changeIF7();
});
$('.buttarr.bott.s7').click(function(){
	var inter7 = $('#input_field7').val();
	if(inter7 == '') $('#input_field7').val('0');
	else if (inter7 < 1) $('#input_field7').val('0');
	else $('#input_field7').val(--inter7);
	changeIF7();
});
$('.buttarr.top.s8').click(function(){
	var inter8 = $('#input_field8').val();
	if(inter8 == '') $('#input_field8').val('1');
	else $('#input_field8').val(++inter8);
	changeIF8();
});
$('.buttarr.bott.s8').click(function(){
	var inter8 = $('#input_field8').val();
	if(inter8 == '') $('#input_field8').val('0');
	else if (inter8 < 1) $('#input_field8').val('0');
	else $('#input_field8').val(--inter8);
	changeIF8();
});
$('.buttarr.top.s9').click(function(){
	var inter9 = $('#input_field9').val();
	if(inter9 == '') $('#input_field9').val('1');
	else $('#input_field9').val(++inter9);
	changeIF9();
});
$('.buttarr.bott.s9').click(function(){
	var inter9 = $('#input_field9').val();
	if(inter9 == '') $('#input_field9').val('0');
	else if (inter9 < 1) $('#input_field9').val('0');
	else $('#input_field9').val(--inter9);
	changeIF9();
});
$('.buttarr.top.s10').click(function(){
	var inter10 = $('#input_field10').val();
	if(inter10 == '') $('#input_field10').val('1');
	else $('#input_field10').val(++inter10);
	changeIF10();
});
$('.buttarr.bott.s10').click(function(){
	var inter10 = $('#input_field10').val();
	if(inter10 == '') $('#input_field10').val('0');
	else if (inter10 < 1) $('#input_field10').val('0');
	else $('#input_field10').val(--inter10);
	changeIF10();
});

	var selectRegion,
		selectPrice,
		sum = 0,
		rez1 = 0,
		rez2 = 0,
		rez3 = 0,
		rez4 = 0,
		rez5 = 0,
		rez6 = 0,
		rez7 = 0,
		rez8 = 0,
		rez9 = 0,
		rez10 = 0,
		regionPrice = {
			"Талдом":2000,
			"Дмитров":2000,
			"Сергиев Посад":3000,
			"Икша":3000,
			"Лобня":4000,
			"Клин":5000,
			"Дубна":3000,
			"Кимры":3000,
			"Хотьково":3000,
			"Подъячево":3000,
			"Софрино":3500,
			"Рогачево":3000,
		}
		
		function insertRegionPrice(){
			var html = '',
				price;
			for(region in regionPrice) {
				html += '<option data-region="' + region + '" data-price="' + regionPrice[region] + '">' + region + ' - ' + regionPrice[region] + ' руб.</option>';
			}
			$('#region').append(html);
		}
		
		function changeRegion(){
			sum = 0;
			selectRegion = $('#region option').filter(':selected').data('region');
			selectPrice = $('#region option').filter(':selected').data('price');
			
			recalc();
		}
		
		function changeIF1(){
			rez1 = ($('#input_field1').val()) * 750;
			if (rez1 <= 0) {
				rez1 = 0;
			}
			recalc();
		}
		function changeIF2(){
			rez2 = ($('#input_field2').val()) * 750;
			if (rez2 <= 0) {
				rez2 = 0;
			}
			recalc();
		}
		function changeIF3(){
			rez3 = ($('#input_field3').val()) * 1000;
			if (rez3 <= 0) {
				rez3 = 0;
			}
			recalc();
		}
		function changeIF4(){
			rez4 = ($('#input_field4').val()) * 1500;
			if (rez4 <= 0) {
				rez4 = 0;
			}
			recalc();
		}
		function changeIF5(){
			rez5 = ($('#input_field5').val()) * 2500;
			if (rez5 <= 0) {
				rez5 = 0;
			}
			recalc();
		}
		function changeIF6(){
			rez6 = ($('#input_field6').val()) * 4000;
			if (rez6 <= 0) {
				rez6 = 0;
			}
			recalc();
		}
		function changeIF7(){
			rez7 = ($('#input_field7').val()) * 400;
			if (rez7 <= 0) {
				rez7 = 0;
			}
			recalc();
		}
		function changeIF8(){
			rez8 = ($('#input_field8').val()) * 400;
			if (rez8 <= 0) {
				rez8 = 0;
			}
			recalc();
		}
		function changeIF9(){
			rez9 = ($('#input_field9').val()) * 8000;
			if (rez9 <= 0) {
				rez9 = 0;
			}
			recalc();
		}
		function changeIF10(){
			rez10 = ($('#input_field10').val()) * 8000;
			if (rez10 <= 0) {
				rez10 = 0;
			}
			recalc();
		}
		function isNumeric(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		}
		
		function recalc(){
			selectPrice = isNumeric(selectPrice) ? selectPrice : 0;
			rez1 = isNumeric(rez1) ? rez1 : 0;
			rez2 = isNumeric(rez2) ? rez2 : 0;
			rez3 = isNumeric(rez3) ? rez3 : 0;
			rez4 = isNumeric(rez4) ? rez4 : 0;
			rez5 = isNumeric(rez5) ? rez5 : 0;
			rez6 = isNumeric(rez6) ? rez6 : 0;
			rez7 = isNumeric(rez7) ? rez7 : 0;
			rez8 = isNumeric(rez8) ? rez8 : 0;
			rez9 = isNumeric(rez9) ? rez9 : 0;
			rez10 = isNumeric(rez10) ? rez10 : 0;
			sum = selectPrice + rez1 + rez2 + rez3 + rez4 + rez5 + rez6 + rez7 + rez8 + rez9 + rez10;
			changeTable();
		}
		
		function changeTable(){
			$('#sum').text(sum + ' руб.');
		}
		
		insertRegionPrice();
		
		$('#region').change(function(){
			changeRegion();
		});
		
		$('#input_field1').change(function(){
			changeIF1();
		});
		$('#input_field2').change(function(){
			changeIF2();
		});
		$('#input_field3').change(function(){
			changeIF3();
		});
		$('#input_field4').change(function(){
			changeIF4();
		});
		$('#input_field5').change(function(){
			changeIF5();
		});
		$('#input_field6').change(function(){
			changeIF6();
		});
		$('#input_field7').change(function(){
			changeIF7();
		});
		$('#input_field8').change(function(){
			changeIF8();
		});
		$('#input_field9').change(function(){
			changeIF9();
		});
		$('#input_field10').change(function(){
			changeIF10();
		});


  $('input[type="text"]').val('');
  
    $('#vk_link').mouseover(function(){$('#vk_link').css('color','red')});
	$('#vk_link').mouseout(function(){$('#vk_link').css('color','blue')});

	
  
});


