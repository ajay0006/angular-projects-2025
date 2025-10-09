import { Injectable } from '@angular/core';
import { LocalStorage, LocalStorageKeys } from '../services/local-storage'
import { map } from 'rxjs';

interface TableColumnsDefinition {
  tableName: string;
  defaultColumns: string[];
  displayColumns: string[];
  callBack: any;
}

export interface RegisteredTable {
  tableName: string;
  defaultColumns: string[];
  displayColumns: string[];
  visibleColumns: string[];
}

@Injectable({
  providedIn: 'root'
})

export class VisibleColumn {
  private readonly tableColumns: TableColumnsDefinition[];
  private readonly visibleColumns: Map<string, string[]>;

  constructor(
    private readonly localstorage: LocalStorage,
  ) {
    this.tableColumns = [];
    const visibleColumnArray = this.localstorage.getItem(LocalStorageKeys.SCREEN_VISIBLE_COLUMNS, new Map<string, string[]>().entries());
    this.visibleColumns = new Map<string, string[]>(visibleColumnArray);
  }

  public setVisibleColumns(tableName: string, visibleColumns: string[]) {
    this.visibleColumns.set(tableName, visibleColumns);

    const visibleColumnArray = Array.from(this.visibleColumns.entries())
    this.localstorage.setItem(LocalStorageKeys.SCREEN_VISIBLE_COLUMNS, visibleColumnArray);

    this.notifyTable(tableName, visibleColumns)
  }

  private notifyTable(tableName: string, columns: string[]) {
    const tableColumn = this.tableColumns.find((entry: TableColumnsDefinition) => { 
      return entry.tableName === tableName;
     });

    tableColumn?.callBack(columns);
  }
}
