//apiaddress = "webservice.php?url=http://localhost/tubes4/server/api.php/";
//apiaddress = "webservice.php?url=http://localhost/GitHub/IF3038-2013/src/server/api.php/";
apiaddress = "webservice.php?url=http://tubes4asdasd.aws.af.cm/api.php/";
soapaddress = "soapregistration.php";
function isLogin(){	/*---------------------------JO---cek apakah sudah login----------------- */	if (localStorage.userLogin!= null)		{		window.location="dashboard/";			}}function validateLogin(form){					/*---------------------------JO---validasi form login--phpnya:login.php----------------- */	alert("masuk");	if (window.XMLHttpRequest)	{		xmlhttp = new XMLHttpRequest();					}else{		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");		}		xmlhttp.onreadystatechange = function()	{		alert(xmlhttp.readyState + " " + xmlhttp.status);		if (xmlhttp.readyState==4 && xmlhttp.status==200)			{							alert(xmlhttp.responseText);			if(xmlhttp.responseText==1){				localStorage.userLogin=form.userId.value;		/*----simpan user yg login ke local storage ------*/				localStorage.tglLogin= new Date().getTime();	/*----simpan waktu login ke local storage ------*/				window.location="dashboard/";			}else{				alert("error password or username");			}								}	}			xmlhttp.open("GET", apiaddress + "checklogin/"+form.userId.value+"/"+sha1(form.password.value),true);	xmlhttp.send();}												function ShowAkhir(){	 if(document.getElementById("regakhir").style.display == 'none')	{			document.getElementById("regakhir").style.display='block';			document.getElementById("regawal").style.display='none';	}	else	 {			document.getElementById("regakhir").style.display = 'none';	 }}function ShowAwal(){	 if(document.getElementById("regawal").style.display == 'none')	{			document.getElementById("regawal").style.display='block';			document.getElementById("regakhir").style.display='none';	}	else	 {			document.getElementById("regawal").style.display = 'none';	 }}	function check(form)											/*-------------------------------udah ngga kepake----------------------------------- */{	if(form.userId.value == "admin" && form.password.value == "testing")	{		window.location="dashboard/";	}	else	{		alert("error password or username");	}}	function logingg(){		var uicon = document.getElementById("usericon").src;	var picon = document.getElementById("passicon").src;	var cicon = document.getElementById("conficon").src;	var nicon = document.getElementById("nameicon").src;	var eicon = document.getElementById("emailicon").src;	var aicon = document.getElementById("avaicon").src;	var dicon = document.getElementById("dateicon").src;	var lokasi = window.location.href.substring(0,window.location.href.lastIndexOf("/")) + "/pict/centang.png";	/*-------------------------*/			if ((uicon == lokasi) && (picon == lokasi) && (cicon == lokasi) && (nicon == lokasi) && (eicon == lokasi) && (aicon == lokasi) && (dicon == lokasi))			{				document.getElementById("submitb").disabled = false;			}	else{				document.getElementById("submitb").disabled = true;	}}function masuk(form)							/*------------masuk ke dashboard & masukin form ke db-php:insertReg.php---------- */{			
	alert(form.username.value);
	localStorage.userLogin=form.username.value;/*----simpan user yg baru register ke local storage ------*/									
	localStorage.tglLogin= new Date().getTime();	/*----simpan waktu register ke local storage ------*/
	window.location = "dashboard/";	
	// /* var xmlhttp = createAJAX();
	// /*
	// if (window.XMLHttpRequest){
		// xmlhttp = new XMLHttpRequest();				
	// }else{
		// xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");	
	// }
	// */
	// alert(form.avatar.path);
	
	// //alert(form.namaleng.value.replace(' ',';'));
	// alert("masuk");
	// xmlhttp.onreadystatechange = function()
	// {
		// alert(xmlhttp.readyState + " " + xmlhttp.status);
		// if (xmlhttp.readyState==4 && xmlhttp.status==200)	
		// {				
			// alert(xmlhttp.responseText);
			// if(xmlhttp.responseText==1)
			// {	
				// alert("Success to register.");
				// localStorage.userLogin=form.username.value;/*----simpan user yg baru register ke local storage ------*/									
				// localStorage.tglLogin= new Date().getTime();	/*----simpan waktu register ke local storage ------*/					
				// window.location="dashboard/";
			// }else{
				// alert("Failed.");
					// document.getElementById("usericon").src="pict/canceled.png";
			// }				
		// }		
	// }
	
	// var url = soapaddress;
	// alert(url);
	// var parameters = "username="+form.username.value+"&password="+form.password.value+"&namaleng="+form.namaleng.value+"&tanggal="+form.tanggal.value+"&email="+form.email.value;
	// alert(parameters);
	// postAJAX(xmlhttp, url, parameters); */
	//alert(apiaddress + "insertReg/" + form.username.value+"/"+form.password.value+"/"+form.namaleng.value+"/"+form.tanggal.value+"/"+form.email.value+"/"+form.avatar.value );
	//xmlhttp.open("GET", apiaddress + "register/insertReg/" + form.username.value+"/"+sha1(form.password.value)+"/"+form.namaleng.value+"/"+form.tanggal.value+"/"+form.email.value+"/"+form.avatar.value /*.split('\\')[2]*/ ,true);
	//xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	//xmlhttp.send("user="+form.username.value+"&pwd="+form.password.value+"&nama="+form.namaleng.value+"&tgl="+form.tanggal.value+"&email="+form.email.value+"&avatar="+form.avatar.value);
	
}function user_validating()			/*----------------------------JO---validasi buat registrasi user-----registeruser.php---------------------- */{	var userid = document.registration.username.value;	var userpass = document.registration.password.value;			if (window.XMLHttpRequest){			xmlhttp = new XMLHttpRequest();						}else{			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");			}				xmlhttp.onreadystatechange = function(){			if (xmlhttp.readyState==4 && xmlhttp.status==200)	{								if((userid.length >= "5") && (userid != userpass) && (xmlhttp.responseText==1)){						document.getElementById("usericon").src="pict/centang.png";				}else{						document.getElementById("usericon").src="pict/canceled.png";				}							}				}					xmlhttp.open("GET", apiaddress + "register/user/"+userid,true);		xmlhttp.send();									}	function pass_validating(){	var userid = document.registration.username.value;	var userpass = document.registration.password.value;	var usermail = document.registration.email.value;	var confpass = document.registration.confirmpass.value;		if((userpass != userid) && (userpass.length >= "8") && (userpass != usermail))		{			if(userpass != confpass)				{					document.getElementById("conficon").src="pict/canceled.png";				}			document.getElementById("passicon").src="pict/centang.png";		}			else		{			document.getElementById("passicon").src="pict/canceled.png";		}		}	function conf_validating(){	var userpass = document.registration.password.value;	var confpass = document.registration.confirmpass.value;		if(confpass == userpass)		{			document.getElementById("conficon").src="pict/centang.png";		}			else		{			document.getElementById("conficon").src="pict/canceled.png";		}}function nama_validating(){	var name = document.registration.namaleng.value;		if(name.match(/([a-zA-Z])+([ \t\r\n\v\f])+([a-zA-Z])/))		{			document.getElementById("nameicon").src="pict/centang.png";		}			else		{			document.getElementById("nameicon").src="pict/canceled.png";		}}function email_validating()				/*-----------------------------JO--validasi buat email--registeremail.php--------------------------- */{	var emails = document.registration.email.value;	if (window.XMLHttpRequest){		xmlhttp = new XMLHttpRequest();					}else{		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");		}		xmlhttp.onreadystatechange = function(){		if (xmlhttp.readyState==4 && xmlhttp.status==200)	{							if(emails.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i) && xmlhttp.responseText==1){					document.getElementById("emailicon").src="pict/centang.png";			}else{					document.getElementById("emailicon").src="pict/canceled.png";			}		}			}			xmlhttp.open("GET", apiaddress + "register/email/"+emails,true);	xmlhttp.send();														}function date_validating(){	document.getElementById("dateicon").src="pict/centang.png";}function avatar_validating(){	var ekstensi = document.registration.avatar.value;		if((ekstensi.lastIndexOf(".jpg") != -1) || (ekstensi.lastIndexOf(".jpeg") != -1) || (ekstensi.lastIndexOf(".png") != -1) || (ekstensi.lastIndexOf(".bmp") != -1))		{			document.getElementById("avaicon").src="pict/centang.png";		}			else		{			document.getElementById("avaicon").src="pict/canceled.png";		}}function isformvalid(){	var uservalid = document.getElementById("usericon").src;	var userid = document.registration.username.value;	var userpass = document.registration.password.value;		if((userid.length >= "5") && (userid != userpass))		{			document.getElementsByName("submit")[0].disabled = false;		}}