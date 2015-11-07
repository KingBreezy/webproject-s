function ValidateForm()
	{
		var buyer_firstname=document.getElementById('First').value
		if (buyer_firstname==Null||buyer_firstname==" ")
		{
			alert('Please provide a valid Name');
		}
		if(isNaN(buyer_firstname)=false)
		{
			alert('Please provide a valid Name');
		}
			
		var buyer_lastname=document.getElementById('Last').value
		if (buyer_lastname==Null||buyer_lastname==" ")
		{
			alert('Please provide a valid Name');
		}
		if(isNaN(buyer_lastname)=false)
		{
			alert('Please provide a valid name');
		}
		
		var buyer_email=document.getElementById('Email').value
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (filter.test(buyer_email.value))
		{
			alert('Please provide a valid email address');
			email.focus;
		}
		var buyer_phone=document.getElementById('phone').value
		if (isNaN(buyer_phone)=true)
		{
			alert('Please provide a valid phone number');
		}
		if(buyer_phone==null||buyer_phone==" ")
		{
			alert('Please provide a valid phone number');
		}
		return false;
	}