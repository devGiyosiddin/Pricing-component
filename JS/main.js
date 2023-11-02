const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment-period"]');
const elPaymentFeatureValue = document.querySelectorAll('.feature-card-cost-value');

elsPaymentPeriodRadio.forEach(function (elPaymentPeriodRadio)  {
    elPaymentPeriodRadio.addEventListener ('change', function (){
        const period = elPaymentPeriodRadio.value
        console.log(period)

        if (period == 'annualy') {
            elPaymentFeatureValue.forEach(function (elFeature) {
                elFeature.textContent = elFeature.closest('.feature-cards').dataset.paymentAnnual;
            })
        }
        else {
            elPaymentFeatureValue.forEach(function (elFeature) {
                elFeature.textContent = elFeature.closest('.feature-cards').dataset.paymentMonthly;
            })
        }
    });
});