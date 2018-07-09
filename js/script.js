$(function(){
	//effect bounce
	$("#btn1").on("click",function(){
		$(".div1").effect("bounce",{
			times:7,
			distance:100,
			direction:"left"
		},1000);
	});

	//effect explode
	$("#btn2").on("click",function(){
		$(".div2").effect("explode",{
			pieces:9			
		},2000,function(){//после проявления эффекта запускаем функцию обратного вызова. восстанавливаем блок
			$(".div2").effect("explode",{
				pieces:9,
				mode:'show'
			},2000);
		});
	});

	//effect pulsate
	$("#btn3").on("click",function(){
		$(".div3").effect("pulsate",{
			times: 7,
			mode:'hide'
		},1000,function(){
			$(".div3").css({
				backgroundColor:"white",
				display:"block",
				border:"none"
			})
		});
	});

	//show/Hide
	$("#btnshow").on("click",function(){
		$(".divshow").show("explode",2000);
	});
	$("#btnhide").on("click",function(){
		$(".divhide").hide("explode",2000);
	});

	//Add/Remove class
	$("#btnadd").on("click", function(){
		$("#pic1").addClass("imgcircle",1000);
	});
	$("#btnremove").on("click", function(){
		$("#pic2").removeClass("imgcircle",1000);
	});

	//Switch class
	$("#btnswitch").on("click", function(){
		$(".divtxt p").switchClass("abzac","newabzac",1000);
	});

	//color Animate
	$("#animbtn").on("click", function(){
		$(".anim").animate({
			backgroundColor:"yellow",
			width:"400",
			height:"400",
			color:"red"
		},2000);
	});
/*------- Widget accordeon ------- */
	$("#accordeon").accordion({
		//какая секция будет открыта при загрузке, начиная с 0
		active:false,
		collapsible:true,// позволяет закрывать секцию
		heightStyle:'content', //высота выпадающего пункта по высоте контента его
		/*event:'mouseover',*/ //открывает пункт аккордеона по наведению мышкой
		icons:{"header":"ui-icon-plus", "activeHeader":"ui-icon-minus"}
	});
	$("#tabs").tabs({
		collapsible:true,
		heightStyle:'auto',
		active:2
	});
	// Widget menu
	$("ul.menu").menu();		//подключаем меню
	$("#calendar").datepicker({ 	//выбор даты
		changeYear:true,			//выбор года в выпадающем списке
		changeMonth:true, 			//выбор месяца в выпадающем списке
		yearRange:'1966:2018',		//диапазон годов
		showWeek:true, 				//отображается порядковый номер недели
		showOn: 'button',			//по нажатию кнопки открывается календарь. если написать both - то будет открываеться и по нажатию самого поля ввода
		showButtonPanel:true, 		// появляются 2 кнопки в календаре: Сегодня и Закрыть
		showAnim:'explode',			//открывается календарь с эффектом соответствующим
		numberOfMonths:[1,1],		//[2,3] - показывает в 2 строки в 3 ряда месяцы
		duration:'slow',			//медленно анимация
		buttonText:'Выбрать дату'	//название кнопки
		/*buttonImage:'img/1.jpg'*/
	});

	//widget Button
	$("#btn4, #link").button();

	//widget Dialog
	$("#btn5").on("click", function(){
		$("#dialog").dialog({
			modal:true,				//затеняет фон под всплывающим окном
			buttons:{
				Cancel:function(){
					$(this).dialog('close');
				}
			},
			show:{effect:'explode', duration:800},
			hide:{effect:'explode', duration:800}
		});
	});

	//widget slider
	$("#slider").slider({
		max:200,				//максимальное значение в шкале
		range: true, 			//2 ползунка
		values:[10,50], 		//значения ползунков
		step:5,					//разбег в 5 пунктов
		animate:true,
		slide: function( event, ui ) { //меняем цифровые показатели при передвижении ползунков
        	$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    							// в момент события-перетаскивания ползунка перезаписываем значения цифровые
    $( "#amount" ).val( "$" + $( "#slider" ).slider( "values", 0 ) +
      " - $" + $( "#slider" ).slider( "values", 1 ) ); 
	

	//Interactions draggable
	$("#kart1, #kart2, #kart3").draggable({
		revert:true, //будет возвращаться обратно
		helper:'clone', //когда перемещение - создается полупрозрачный клон
		opacity:0.5,
		zIndex:100,
		cursor:'pointer',
		revertDuration:1000 //время, за которое возвращается картинка обратно
	});

	//Interactions droppable
	$(".pics img").draggable({
		revert:"invalid", //чтобы назад не возвращалось
		start:function(event,ui){
			ui.helper.css('transform','rotate(5deg) scale(1.5)');
		},
		stop: function(event,ui){
			ui.helper.css('transform','rotate(0deg) scale(1)');
		},
		zIndex:100
	});
	$("#trash").droppable({
		activeClass:'highlight',
		drop: function(event,ui){ //в момент отпускания объекта над корзиной
			ui.helper.hide('explode');
			$(this).attr('src','img/trashcan-full-icon.png');
		}
	});

	//Interactions Sortable
	$(".spisok1").sortable({
		connectWith:'.spisok2',  //можем менять местами элементы со вторым списком. но нужно и во втором задать то же свойство, только с именем первого
		change: function(event,ui){
			ui.helper.css("backgroundColor","red");
		},
		stop: function(event,ui){
			ui.item.css("backgroundColor","grey")
		}
	});
	$(".spisok2").sortable({
		connectWith:'.spisok1',
		change: function(event,ui){
			ui.helper.css("backgroundColor","red");
		},
		stop: function(event,ui){
			ui.item.css("backgroundColor","grey")
		}
	});

	//изменение размера объекта
	$("#resize").resizable();

	//меню SuperFish
	$("#menu1, #menu2, #menu3").superfish({
		delay:1000, //задержка для выпадающего меню
		/*animation: {opacity:'show'},
		animationOut:{opacity:'hide'},
		speed:'fast'*/
	});

	//Gallery color-box
	$(".gal").colorbox({
		rel:"gal",//группируем картинки по этому классу, чтобы они могли переключаться
		transition: 'fade', //способ transition
		speed:500,			   //время смены картинок
		width:500,//размер модального окна
		height:400,
		opacity:0.5,
		slideshow:true,
		slideshowSpeed:2500,
		slidesowAuto:true,
		current:"Фото {current} из {total}",
		slideshowStart:"Запуск слайдшоу",
		slideshowStop:"Стоп слайдшоу"
	});
	$(".youtube").colorbox({
		iframe:true,
		width:500,
		height:400
	});
	$(".inline").colorbox({
		inline:true,
		width:"50%"
	});

	//bxSlider

    $('.slider').bxSlider({
    	mode: 'horizontal',
    	captions: true,// выводит текст вспомогательный
    	auto: true,//для автовоспроизведения
  		autoControls: true,// управление - кнопки контроля
  		stopAutoOnClick: true,
  		pager: true,
  		slideWidth: 200,
  		minSlides:2, //минимум 2 картинки одновременно показывает
  		maxSlides:3,//переключает по столько картинок
  		slideMargin:20, //отступ между картинками, если minSlides>1
  		video:true,
  		adaptiveHeight:true
    });

    //spacegallery
    $('#myGallery').spacegallery();

    //wow js
    var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       0          // distance to the element when triggering the animation (default is 0)    
	  }
	);
	wow.init();
/*--------------------------------------------------*/	
});
