import { Component, OnInit } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses.service';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/redux/root/state';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  constructor(private expenseServices: ExpensesService, private store: Store<RootState>) { }

  ngOnInit() {

  }

}
