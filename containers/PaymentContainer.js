import { Container } from 'unstated';

class PaymentContainer extends Container {
    state = {
        amount: 1400000,
        methods: [
            'Bank Transfer',
            'Card',
            'GoPay'
        ],
        selectedMethod: 'Bank Transfer',
        transfer: {
            number: '8881 0824 09',
            name: 'Bank Syariah Mandiri',
            holder: 'PT. Hive Financial Indonesia'
        }
    }

    selectPaymentMethod = (value) => {
        this.setState({ selectedMethod: value })
    }
}

export default PaymentContainer;
