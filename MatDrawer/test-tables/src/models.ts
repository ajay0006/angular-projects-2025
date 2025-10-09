export interface CaseDetailDTO {
    caseNumber?: string;
    clientName?: string;
    accountNumber?: string;
    caseStatus?: string;
    assignedUserId?: string;
    assignedUerName?: string;
    officeNameEn?: string;
    officeNameFn?: string;
}

export interface T2CaseDetailDTO extends CaseDetailDTO{
    caseType?: string;
    category?: string;
    createdDate?: Date;
    taxYearEnd?: Date;
    carpProjectNumber?: string;
}

export interface SACaseDetailDTO extends CaseDetailDTO{
    workLoad?: string;
    category?: string;
    createdDate?: Date;
    receivedDate?: Date;
    fillingPeriods?: FilingPeriod[];
}

export interface FilingPeriod {
    startDate?: Date;
    endDate?: Date;

}