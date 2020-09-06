import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustFormService } from '../cust-form.service'

@Component({
  selector: 'app-cust-form',
  templateUrl: './cust-form.component.html',
  styleUrls: ['./cust-form.component.css']
})
export class CustFormComponent implements OnInit {
  formLabels: Array<any>;
  labels;
  custForm: FormGroup;
  resJsonRes;
  downloadJsonHref;
  constructor(private fb: FormBuilder, private custFormService: CustFormService) {
    this.custForm = this.fb.group({
      color: [''],
      name: ['', [Validators.maxLength(500)]],
      gender: ['']
    });
   }

  ngOnInit(): void {
    this.showCustFormConfig();
  }

  addData() {
    console.log('Adding Data......');
  }

  downloadJson() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.labels));
    const dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "custForm.json");
    dlAnchorElem.click();
  }

  addComponent() {
    console.log('In addComponent......');
  }

  getErrorMessage(controlName) {
    if(controlName === 'name') {
      if (this.custForm.get(controlName).hasError('maxlength')) {
        return 'Character count should be less than 500';
      }
    }
  }

  showCustFormConfig() {
    this.custFormService.getFormConfig().subscribe((data) => {
      this.labels = data;
      this.formLabels = this.labels.CustFormLabels;
    });
  }

}
