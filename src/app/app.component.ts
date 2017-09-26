import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';

  displaySuccess = false;

  user = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    pw_confirm: '',
    st_address: '',
    apt_no: '',
    city: '',
    state: '',
    feels_lucky: ''
  }


  fields = {city: '#efefefef',
            email: '#efefefef',
            first_name: '#efefefef',
            last_name: '#efefefef',
            password: '#efefefef',
            pw_confirm: '#efefefef',
            st_address: '#efefefef',
            state: '#efefefef'
            };
 
  clearForm = () => {this.user = {
                        first_name: '',
                        last_name: '',
                        email: '',
                        password: '',
                        pw_confirm: '',
                        st_address: '',
                        apt_no: '',
                        city: '',
                        state: '',
                        feels_lucky: ''
                        };
                      this.fields = {
                        city: '#efefef',
                        email: '#efefef',
                        first_name: '#efefef',
                        last_name: '#efefef',
                        password: '#efefef',
                        pw_confirm: '#efefef',
                        st_address: '#efefef',
                        state: '#efefef'
                        };
                      };
                      
  usStates = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', 'District of Columbia'];
  
  chkAndSubmit = () => {
                        console.log("CHECK AND SUBMIT");
                        var valid = true;
                        for (let field in this.fields){
                          if (this.user[field].length < 2){
                            this.fields[field] = '#fd3030';
                            valid = false;
                          }
                          else {
                            this.fields[field] = '#efefef';
                          }
                        }
                        if (valid){
                          this.displaySuccess = true;
                        }
                        console.log(this.displaySuccess);
                      };
}