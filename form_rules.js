$().ready(function(){
  $("#commentForm").validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true, 
        email: true
      },
      email_confirmation: {
        required: true,
        email: true,
        equalTo: "#email"
      },
      country: {
        required: true
      },
      zipCode: {
        required: true,
        zipcodeUS: true
      }, 
      password: {
        required: true,
        minlength: 5
      },
      password_confirmation: {
        required: true,
        equalTo: '#password'
      }
    }, 
    messages: {
      zipCode: {
        zipcodeUS: "Please enter a valid US zip code!"
      }
    }
  }); 

  $.validator.addMethod( "zipcodeUS", function( value, element ) {
    return this.optional( element ) || /^\d{5}(-\d{4})?$/.test( value );
  }, "The specified US ZIP Code is invalid" );
})