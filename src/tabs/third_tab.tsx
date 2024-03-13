import {React} from "react";
import "../Components.css";

export const ContentPage = () => {
     const scroll = (id: string) => {

        document.getElementById(id)
            ?.scrollIntoView({ block: "center", behavior: "smooth" });

     };

        return (
            <div className="backgroundOfPage">
                <div className="mainBlock">
                    <h1>Types of lending</h1>
                    <div>
                        {['Annuity', 'Simple', 'Differentiated'].map((id) => (
                            <button key={id} onClick={() => scroll(id)} className="scrollingButton">
                                Type of lending {id}
                            </button>
                        ))}
                        <br />
                        <br />
                    </div>
                    <div className="textBlock" >
                        <h1>
                            Lending is the process of a lender providing monetary or material resources to a borrower for temporary use on the terms of repayment, payment and urgency. When you take out a loan from a bank, your monthly payment will consist of two parts:
                            loan body - the amount of debt;
                            percent - what the bank charges on top according to the lending rate.

                            The ratio of these parts may be different.
                        </h1>
                        <div id='Annuity'>
                            <h2>Annuity Payment Description</h2>
                            <h3>
                                Annuity (French annuité from Latin annuus - annual, annual) or financial annuity - a schedule of a short-term financial instrument.
                            </h3>
                            <p>
                                Annuity payments are achieved on equal terms at intervals of time. The annuity payment amount includes both principal and interest. When concluding a loan agreement, the parties agree on the interest rate, loan term and down payment amount, as well as the methodology for calculating monthly payments. Some banks allow clients to choose their own payment scheme - differentiated or annuity. They differ in the way interest is calculated and collected and the total loan amount. With an annuity, the loan is repaid in equal installments - the amount of the contribution remains unchanged throughout the entire loan period
                            </p>
                        </div>
                        <div id='Simple'>
                            <h2>Simple Payment Description</h2>
                            <h3>
                                Payments in equal installments This method also provides for repaying the loan in equal installments.
                            </h3>
                            <p>
                                 They are calculated by dividing the principal and interest calculated for the entire term of the loan by the number of payment periods (usually the payment period is a month). The main difference from an annuity is the payment structure: the entire principal debt and all interest will be immediately divided into 12 equal parts and every month you will repay the same amount of principal and interest.
                            </p>
                        </div>
                        <div id='Differentiated'>
                            <h2>Differentiated Payment Description</h2>
                                <h3>Differentiated payment (DP) is a type of payment used when a financial institution creates a loan repayment scheme. </h3>
                            <p>The main difference from annuity payments is that the payment amount decreases over time. The amount to repay the loan body in a differentiated payment is always constant. The interest part in the amount of the differentiated payment is initially large, and then decreases, since it depends on the principal debt on the loan, and it decreases. For comparison, we use the expected loan parameters (amount, rate, term), but with an annuity repayment scheme
                                Due to the fact that in the differentiated payment, under equal loan conditions, the amount to repay the principal debt (loan body) is greater than in the annuity payment, the principal debt initially decreases faster. Therefore, less interest will be accrued, which is more profitable for the borrower[4].
                                The amount for full early repayment of the loan with the same dates with an annuity loan will be less. The borrower will need less funds to completely close the loan.
                                The amount of mandatory insurance payments in the case of a mortgage loan will be less, since it depends on the outstanding balance on the loan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );

}
