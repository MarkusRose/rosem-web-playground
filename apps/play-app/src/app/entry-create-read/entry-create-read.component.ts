import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DataService } from '../data.service';
import { Observable, Subject, map, takeUntil } from 'rxjs';

@Component({
  selector: 'rosem-playground-entry-create-read',
  templateUrl: './entry-create-read.component.html',
  styleUrls: ['./entry-create-read.component.less'],
})
export class EntryCreateReadComponent implements OnInit {
  public entryForm: FormGroup;
  private ngUnsubscribe: Subject<void>;

  public get formData() {
    return this.entryForm.get('data');
  }

  public data$: Observable<string[]>;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.ngUnsubscribe = new Subject<void>();
    this.entryForm = this.formBuilder.group({
      data: '',
    });
    this.data$ = this.dataService.load();
  }

  public onSubmit(): void {
    const value = this.formData?.value;
    if (value && value !== '') {
      this.dataService
        .create(value)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe({
          next: (data) => {
            console.log(data);
            this.data$ = this.dataService.load();
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {
            console.log('Subscription finished');
          },
        });
      this.formData?.setValue('');
    }
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
