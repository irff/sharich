import { Container } from 'unstated';

class PaymentContainer extends Container {
    state = {
        amount: 1200000,
        methods: [
            'Bank Transfer',
            'Card',
            'GoPay'
        ],
        transfer: {
            number: '8881 0824 09',
            name: 'Bank Syariah Mandiri',
            holder: 'PT. Hife Financial Indonesia'
        }
    }
}

export default PaymentContainer;
