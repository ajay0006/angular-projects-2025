import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SACaseDetailDTO, T2CaseDetailDTO } from './models';
import { dummySACaseDetailDTOs, dummyT2CaseDetailDTOs } from './dummy-data';

@Injectable({
  providedIn: 'root'
})
export class CaseDataService {

  getCaseData(caseNumber: string): Observable<{ data: SACaseDetailDTO | T2CaseDetailDTO; type: 'SA' | 'T2' } | null> {
    if (caseNumber.startsWith('SA-')) {
      const saCase = dummySACaseDetailDTOs.find(c => c.caseNumber === caseNumber);
      return saCase ? of({ data: saCase, type: 'SA' }) : of(null);
    }
    
    if (caseNumber.startsWith('T2-')) {
      const t2Case = dummyT2CaseDetailDTOs.find(c => c.caseNumber === caseNumber);
      return t2Case ? of({ data: t2Case, type: 'T2' }) : of(null);
    }
    
    return of(null);
  }
}