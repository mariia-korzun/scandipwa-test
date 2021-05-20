import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from 'SourceComponent/ContentWrapper'
import {
    BILLING_STEP,
    DETAILS_STEP,
    SHIPPING_STEP
} from 'SourceRoute/Checkout/Checkout.config'

import CheckoutProgressBar from 'src/component/CheckoutProgressBar/CheckoutProgressBar'
export class Checkout extends SourceCheckout {
    steps = [{
        name: SHIPPING_STEP,
        title: 'Shipping'
    },
    {
        name: BILLING_STEP,
        title: 'Billing'
    },
    {
        name: DETAILS_STEP,
        title: 'Details'
    }
    ]
    render() {
        const { checkoutStep } = this.props
        return (
            <main block="Checkout">
                <CheckoutProgressBar steps={this.steps} checkoutStep={checkoutStep} />
                <ContentWrapper
                    wrapperMix={{ block: 'Checkout', elem: 'Wrapper' }}
                    label={__('Checkout page')}
                >
                    {this.renderSummary(true)}
                    <div block="Checkout" elem="Step">
                        {this.renderTitle()}
                        {this.renderGuestForm()}
                        {this.renderStep()}
                        {this.renderLoader()}
                    </div>
                    <div>
                        {this.renderSummary()}
                        {this.renderPromo()}
                        {this.renderCoupon()}
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default Checkout;
