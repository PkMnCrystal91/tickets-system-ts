export const amountToPay = (id: any, cantidad_ticket: number) => {
  let total = 0;

  switch (id) {
    case 1:
      return (total = cantidad_ticket * 100);

    case 2:
      return (total = cantidad_ticket * 60);

    default:
      break;
  }
};
