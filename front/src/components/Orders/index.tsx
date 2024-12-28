import { Container } from './styles';
import OrdersBoard from '../OrdersBoard';
import { Order } from '../../types/Order';

const orders: Order[] = [
  {
    '_id': '676dcb5437627b6184b9256a',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1735247741105-quatro-queijos.png',
          'price': 40
        },
        'quantity': 1,
        '_id': '676dcb5437627b6184b9256b'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1735248346640-coca-cola.png',
          'price': 7
        },
        'quantity': 2,
        '_id': '676dcb5437627b6184b9256c'
      }
    ],
  },
  {
    '_id': '676dcbc15f7c234a29ee15a3',
    'table': '2',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1735248346640-coca-cola.png',
          'price': 7
        },
        'quantity': 2,
        '_id': '676dcbc15f7c234a29ee15a4'
      }
    ],
  }
];

export default function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon = "🕒️"
        title = "Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon = "👨‍🍳"
        title = "Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon = "✅"
        title = "Pronto!"
        orders={[]}
      />
    </Container>
  );
}
