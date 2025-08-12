import { type Investment_Object } from "../models/investment.model";
import { type InvestmentResult } from "../models/investmentResult.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class InvestmentService {
    private results: InvestmentResult = {
        year: 0,
        investmentValue: 0,
        interest: 0,
        totalInterest: 0,
        investedCapital: 0,
        annualInvestment: 0,
    }
    private resultsArray: InvestmentResult[] = [];
    private investment: Investment_Object = { initialInvestment: 0, annualInvestment: 0, expectedReturn: 0, duration: 0 };

    constructor() {
        const investmentInput = localStorage.getItem("investmentInput");
        if (investmentInput) {
            this.investment = JSON.parse(investmentInput);
            this.resultsArray = this.calculateInvestmentResults(this.investment);
        }
    }

    calculateInvestmentResults(investment: Investment_Object) {
        const { initialInvestment, annualInvestment, expectedReturn, duration } = investment;
        const annualData = [];
        let investmentValue = initialInvestment;

        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest =
                investmentValue - annualInvestment * year - initialInvestment;
            this.results = {
                year: year,
                investmentValue: investmentValue,
                interest: interestEarnedInYear,
                totalInterest: totalInterest,
                investedCapital: initialInvestment + annualInvestment * year,
                annualInvestment: annualInvestment,
            };

            annualData.push({ ...this.results });
        }
        this.saveResultsToLocalStorage()
        return annualData;
    }
    getResults(): InvestmentResult[] {
        return this.resultsArray;

    }

    saveResultsToLocalStorage() {
        localStorage.setItem("investmentInput", JSON.stringify(this.investment));
    }
}