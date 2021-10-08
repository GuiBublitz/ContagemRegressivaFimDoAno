$(function(){
	const nextYear = new Date().getFullYear() + 1;
	const nextYearDynamic = new Date(`January 01 ${nextYear} 00:00:00`);

	setElHtml("days",'-',"hours",'-',"minutes",'-',"seconds",'-');

	const update = () => {
		currentDate = new Date();
		difference = nextYearDynamic - currentDate;
		const days = Math.floor(difference / 1000 / 60 / 60 / 24);
		const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
		const minutes = Math.floor(difference / 1000 / 60) % 60;
		const seconds = Math.floor(difference / 1000) % 60; 

		setElHtml("days",days,"hours",hours,"minutes",minutes,"seconds",seconds);

	};
	setInterval(update, 1000);

	function setElHtml(elHtml1,time1,elHtml2,time2,elHtml3,time3,elHtml4,time4){
		 document.getElementById(elHtml1).innerHTML = time1;
		 document.getElementById(elHtml2).innerHTML = time2;
		 document.getElementById(elHtml3).innerHTML = time3;
		 document.getElementById(elHtml4).innerHTML = time4;
	}


	/*Quanto tempo falta para o natal/////////////////////////////////////////////*/
	

});


  	

