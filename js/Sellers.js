function ValidateForm()
	{
		var seller_firstname=document.getElementById('fname').value
		if (seller_firstname==Null||seller_firstname==" ")
		{
			alert('Please provide a valid Name');
		}
		if(isNaN(seller_firstname)=false)
		{
			alert('Please provide a valid Name');
		}
			
		var seller_lastname=document.getElementById('lname').value
		if (seller_lastname==Null||seller_lastname==" ")
		{
			alert('Please provide a valid Name');
		}
		if(isNaN(seller_lastname)=false)
		{
			alert('Please provide a valid name');
		}
		
		var seller_email=document.getElementById('email').value
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (filter.test(seller_email.value))
		{
			alert('Please provide a valid email address');
			email.focus;
		}
		var seller_phone=document.getElementById('phone').value
		if (isNaN(seller_phone)=true)
		{
			alert('Please provide a valid phone number');
		}
		if(seller_phone==null||seller_phone==" ")
		{
			alert('Please provide a valid phone number');
		}
		
		
		//Antique info
		
		var seller_Antique=document.getElementById('AntiqueName').value
		if(seller_Antique==null||seller_Antique==" ")
		{
			alert('Please provide a valid Name');
		}
		
		var seller_description=document.getElementById('des').value
		if(seller_description==null||seller_description==" ")
		{
			alert('Please provide a valid descrition');
		}
		
		var seller_age=document.getElementById('age').value
		if (isNaN(seller_age)=true)
		{
			alert('Please provide a valid age');
		}
		
		if(seller_age==null||seller_age==" ")
		{
			alert('Please provide a valid age');
		}
		if (age<100){
			alert("not classified as an antique ass its less than 100 years old");
		}
		
		
		var sWeight=document.getElementById('weight').value
		if (isNaN(sWeight)=true)
		{
			alert('Please provide a valid weight for this item');
		}
		
		if(sWeight==null||sWeight==" ")
		{
			alert('Please provide a valid weight for this item');
		}
		
		var sHeight=document.getElementById('Height').value
		if (isNaN(sHeight)=true)
		{
			alert('Please provide a valid height');
		}
		
		if(sHeight==null||sHeight==" ")
		{
			alert('Please provide a valid height');
		}
		
		var sWidth=document.getElementById('Width').value
		if (isNaN(sWidth)=true)
		{
			alert('Please provide a valid width');
		}
		
		if(sWidth==null||sWidth==" ")
		{
			alert('Please provide a valid width');
		}
		
		var sLenght=document.getElementById('length').value
		if (isNaN(sLength)=true)
		{
			alert('Please provide a valid Length');
		}
		
		if(sLength==null||sLength==" ")
		{
			alert('Please provide a valid Length');
		}
		
		var sPrice=document.getElementById('ApproxPrice').value
		if (isNaN(sPrice)=true)
		{
			alert('Please provide a valid Price');
		}
		
		if(sPrice==null||sPrice==" ")
		{
			alert('Please provide a valid ');
		}
		
		var sPic=document.getElementById('Picture').value
		var filename = sPic.value;
		var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
		if(ext != "gif" || ext != "GIF" || ext != "JPEG" || ext != "jpeg" || ext != "jpg" || ext != "JPG" || ext != "doc")
		{
			alert("Upload Gif or Jpg images only");
			fup.focus();
		}
		return false;
	}
