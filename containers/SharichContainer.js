import { Container } from 'unstated';

class SharichContainer extends Container {
    state = {
        user: {
            name: 'Tri Ahmad Irfan',
            email: 'triahmadirfan@gmail.com',
            address: 'Jalan Birah II No. 14, Kebayoran Baru, Jakarta',
            phone: '+6289652567808'
        },
        riskProfile: {
            age: 0,
            reason: 0,
            expectedReturnDate: 0,
            expectedReturnValue: 0
        },
        stocksInvested: []
    }
}

export default SharichContainer;
