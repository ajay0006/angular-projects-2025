import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, filter, map, share } from 'rxjs';
import { environment } from '../environment';
import { B } from '@angular/cdk/keycodes';

export enum LocalStorageKeys {
  Language = 'lang',
  Theme = 'theme',
  CLOSE_WINDOW = 'close_window',
  OPEN_WINDOW = 'open_window',
  CASE_SEARCH_CRITERIA_HISTORY = 'case_search_criteria_history',
  LAUNCH_CASE_IN_NEW_WINDOW = 'launch_case_in_new_window',
  SCREEN_VISIBLE_COLUMNS = 'screen_visible_columns',
  USER_EXPERIENCE_PREFERENCES = 'user_experience_preferences',
  SESSION_ACTIVITY_DATE = "session_activity_date",
  INVENTORY_DEFAULT_CRITERIA = 'inventory_default_criteria',
  INVENTORY_SIDEBAR_WIDTH = 'inventory_sidebar_width'
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorage implements OnDestroy {
  public static readonly STORAGE_PREFIX = environment.hrefBase;

  private readonly changeValue = new BehaviorSubject<{
    key: string;
    value: any;
  }>({ key: '', value: null });

  public changes = this.changeValue.asObservable().pipe(share())

  constructor() {
    {
      this.start();
    }
  }

  ngOnDestroy(): void {
    this.stop();
  }

  setItem(key: LocalStorageKeys, value: any) {
    localStorage.removeItem(
      LocalStorage.STORAGE_PREFIX + key);
    localStorage.setItem(
      LocalStorage.STORAGE_PREFIX + key,
      JSON.stringify(value)
    );
    this.changeValue.next({ key, value });
  }

  getItem(key: LocalStorageKeys, defaultValue: any): any {
    try {
      const value = JSON.parse(<string>localStorage.getItem(LocalStorage.STORAGE_PREFIX + key),
      );
      if (value) {
        return value;
      }
    } catch (e) {
    }

    return defaultValue
  }

  setString(key: LocalStorageKeys, value: string) {
    localStorage.removeItem(
      LocalStorage.STORAGE_PREFIX + key);
    localStorage.setItem(
      LocalStorage.STORAGE_PREFIX + key,
      value
    );
    this.changeValue.next({ key, value });
  }

  getString(key: LocalStorageKeys, defaultValue: string): string {
    try {
      const value = localStorage.getItem(LocalStorage.STORAGE_PREFIX + key);
      if (value) {
        return value;
      }
    } catch (e) {
    }
    return defaultValue;
  }

  setBool(key: LocalStorageKeys): Boolean {
    return localStorage.getItem(LocalStorage.STORAGE_PREFIX + key) === 'true';
  }

  setObject(key: LocalStorageKeys, value: object) {
    localStorage.removeItem(
      LocalStorage.STORAGE_PREFIX + key);
    localStorage.setItem(
      LocalStorage.STORAGE_PREFIX + key,
      JSON.stringify(value)
    );
    this.changeValue.next({ key, value });
  }

  getObject(key: LocalStorageKeys, defaultObject: object): object {
    try {
      const value = JSON.parse(
        <string>localStorage.getItem(LocalStorage.STORAGE_PREFIX + key));
      if (value) {
        return value;
      }
    } catch (e) {
    }

    return defaultObject;
  }

  clearItem(key: LocalStorageKeys) {
    localStorage.removeItem(key);
    this.changeValue.next({ key, value: null });
  }

  private start() {
    window.addEventListener('storage', this.storageEventListener.bind(this));
  }

  private storageEventListener(event: StorageEvent) {
    if (event.storageArea === localStorage) {
      let v: any;
      try {
        v = JSON.parse(<string>event.newValue);
      } catch (e) {
        v = event.newValue;
      }
      this.changeValue.next({ key: event.key || '', value: v });
    }
  }

  public getKeyChangeObservable(key: string): Observable<any> {
    const observedKey = LocalStorage.STORAGE_PREFIX + key;
    return this.changes.pipe(
      filter(Boolean),
      filter(pair => pair.key === observedKey),
      map(pair => { return pair.value })
    );
  }

  private stop(){
    window.removeEventListener('storage', this.storageEventListener.bind(this));
    this.changeValue.complete();
  }

}
