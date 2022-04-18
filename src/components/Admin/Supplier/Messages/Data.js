import userImg1 from '../../../../assets/images/user_sample_icon_1.png'
import userImg2 from '../../../../assets/images/user_sample_icon_2.png'
// message demo data

const data = [
  {
    supplierId: {
      name: 'Supplier Id',
      userImg: userImg1,
      companyName: 'Supplier Co.',
    },
    buyerId: {
      name: 'Buyer Id',
      userImg: userImg2,
      companyName: 'Supplier Co.',
    },
    messages: [
      { messageType: 'supplier', message: 'Hi' },
      { messageType: 'buyer', message: 'Hello' },
    ],
  },
]

export default data
