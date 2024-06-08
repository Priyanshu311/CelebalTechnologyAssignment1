import React from "react";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      UserName:"",
      emailAddress: "",
      password: "",
      passwordConfirmation: "",
      PhoneNumber:"",
      country:"",
      City:"",
      AadharNo:"",
      firstNameError: "",
      emailAddressError: "",
      AadharNoError:"",
      passwordError: "",
      passwordConfirmationError: "",
      isFormSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateFirstName = this.validateFirstName.bind(this);
    this.validateLastName = this.validateLastName.bind(this);
    this.validateUserName = this.validateUserName.bind(this);
    this.validateEmailAddress = this.validateEmailAddress.bind(this);
    this.validatePhoneNumber = this.validatePhoneNumber.bind(this);
    // this.validateCountry = this.validateCountry.bind(this);
    // this.validateCity = this.validateCity.bind(this);
    // this.validateAddharNo = this.validateAddharNo.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(
      this
    );
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    return;
  }

  handleBlur(event) {
    const { name } = event.target;

    this.validateField(name);
    return;
  }

  handleSubmit(event) {
    event.preventDefault();
    let formFields = [
      "firstName",
      "lastName",
      "UserName",
      "emailAddress",
      "password",
      "passwordConfirmation",
      "PhoneNumber",
      "country",
      "City",
      "AadharNo"
    ];
    let isValid = true;
    formFields.forEach(field => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });

    return this.state.isFormSubmitted;
  }

  validateField(name) {
    let isValid = false;

    if (name === "firstName") isValid = this.validateFirstName();
    else if (name === "lastName") isValid = this.validateLastName();
    else if (name === "UserName") isValid = this.validateUserName();
    else if (name === "emailAddress") isValid = this.validateEmailAddress();
    else if (name === "PhoneNumber") isValid = this.validatePhoneNumber();
    else if (name === "country") isValid = this.validatecountry();
    else if (name === "City") isValid = this.validateCity();
    else if (name === "AadharNo") isValid = this.validateAadharNo();
    else if (name === "password") isValid = this.validatePassword();
    else if (name === "passwordConfirmation")
      isValid = this.validatePasswordConfirmation();
    return isValid;
  }

  validateFirstName() {
    let firstNameError = "";
    const value = this.state.firstName;
    if (value.trim() === "") firstNameError = "First Name is required";

    this.setState({
      firstNameError
    });
    return firstNameError === "";
  }

  validateLastName() {
    let lastNameError = "";
    const value = this.state.lastName;
    if (value.trim() === "") lastNameError = "Last Name is required";

    this.setState({
      lastNameError
    });
    return lastNameError === "";
  }

  validateUserName() {
    let UserNameError = "";
    const value = this.state.UserName;
    if (value.trim() === "") UserNameError = "User Name is required";

    this.setState({
      UserNameError
    });
    return UserNameError === "";
  }

  validateEmailAddress() {
    let emailAddressError = "";
    const value = this.state.emailAddress;
    if (value.trim === "") emailAddressError = "Email Address is required";
    else if (!emailValidator.test(value))
      emailAddressError = "Email is not valid";

    this.setState({
      emailAddressError
    });
    return emailAddressError === "";
  }
  
  
      //PhoneNumber
      validatePhoneNumber() {
        let PhoneNumberError = "";
        const value = this.state.PhoneNumber;
        if (value.trim() === "") PhoneNumberError = "PhoneNumber is required";
        
        this.setState({
          PhoneNumberError
          });
          return PhoneNumberError === "";
          }
          //country
          validatecountry() {
            let countryError = "";
            const value = this.state.country;
            if (value.trim() === "") countryError = "User Name is required";
            
            this.setState({
              countryError
              });
              return countryError === "";
              }
              //City
              
              validateCity() {
                let CityError = "";
                const value = this.state.City;
                if (value.trim() === "") CityError = "City is required";
                
                this.setState({
                  CityError
    });
    return CityError === "";
  }

  //AadharNo
  validateAadharNo() {
    let AadharNoError = "";
    const value = this.state.AadharNo;
    if (value.trim() === "") AadharNoError = "AadharNo is required";

    this.setState({
      AadharNoError
    });
    return AadharNoError === "";
  }
  validatePassword() {
    let passwordError = "";
    const value = this.state.password;
    if (value.trim === "") passwordError = "Password is required";
    else if (!passwordValidator.test(value))
      passwordError =
        "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

    this.setState({
      passwordError
    });
    return passwordError === "";
  }
  
  validatePasswordConfirmation() {
    let passwordConfirmationError = "";
    if (this.state.password !== this.state.passwordConfirmation)
      passwordConfirmationError = "Password does not match Confirmation";
    
    this.setState({
      passwordConfirmationError
      });
      return passwordConfirmationError === "";
      }


  render() {
    return (
      <div className="main" >
        <h3>SignUp Form</h3>
        {this.state.isFormSubmitted ? (
          <div className="details">
            <h3>Thanks for signing up, find your details below:</h3>
            <div>First Name: {this.state.firstName}</div>
            <div>Last Name: {this.state.lastName}</div>
            <div>User Name: {this.state.UserName}</div>
            <div>Email Address: {this.state.emailAddress}</div>
            <div>Phone Number: {this.state.PhoneNumber}</div>
            <div>Country: {this.state.country}</div>
            <div>City: {this.state.City}</div>
            <div>AadharNo: {this.state.AadharNo}</div>
          </div>
        ) : (
          <div style={{textAlign:"center"}}>
          <form onSubmit={this.handleSubmit} >
          {/* FirstName */}
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.firstNameError && (
              <div className="errorMsg">{this.state.firstNameError}</div>
            )}

            {/* LastName */}
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.lastNameError && (
              <div className="errorMsg">{this.state.lastNameError}</div>
            )}

            {/* UserName */}
            <input
              type="text"
              placeholder="User Name"
              name="UserName"
              value={this.state.UserName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.UserNameError && (
              <div className="errorMsg">{this.state.UserNameError}</div>
            )}
            {/* email */}

            <input
              type="email"
              placeholder="Email Address"
              name="emailAddress"
              value={this.state.emailAddress}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.emailAddressError && (
              <div className="errorMsg">{this.state.emailAddressError}</div>
            )}

            
            {/* PhoneNumber */}
            <input
              type="text"
              placeholder="Phone Number"
              name="PhoneNumber"
              value={this.state.PhoneNumber}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.UserNameError && (
              <div className="errorMsg">{this.state.UserNameError}</div>
            )}

            {/* Country */}
            <input
              type="text"
              placeholder="Country "
              name="country "
              value={this.state.country }
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.CountryError && (
              <div className="errorMsg">{this.state.CountryError}</div>
            )}

            {/* City */}
            <input
              type="text"
              placeholder="City "
              name="City"
              value={this.state.City }
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.CityError && (
              <div className="errorMsg">{this.state.CityError}</div>
            )}
            

            {/* AadharNo */}
            <input
              type="text"
              placeholder="AadharNo "
              name="AadharNo "
              value={this.state.AadharNo }
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.AadharNoError && (
              <div className="errorMsg">{this.state.AadharNoError}</div>
            )}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.passwordError && (
              <div className="errorMsg">{this.state.passwordError}</div>
            )}


            <input
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirmation"
              value={this.state.passwordConfirmation}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.passwordConfirmationError && (
              <div className="errorMsg">
                {this.state.passwordConfirmationError}
              </div>
            )}
            <button>Signup</button>
          </form>
          </div>
        )}
      </div>
    );
  }
}
export default FormComponent;
