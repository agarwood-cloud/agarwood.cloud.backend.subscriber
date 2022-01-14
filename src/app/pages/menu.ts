export default function (values: any) {
  return [
    {
      title: values.dashboard.title,
      open: true,
      children: [
        {
          title: values.dashboard.overview,
          link: '/pages/dashboard/overview',
        },
        {
          title: values.dashboard.customerService,
          link: '/pages/dashboard/customer-service',
        }
      ],
      link: '/pages/dashboard/overview',
      menuIcon: 'icon icon-console',
    },
    {
      title: values.customers.title,
      children: [
        {
          title: values.customers.list,
          link: '/pages/customers/list',
        }
      ],
      link: '/pages/customers/list',
      menuIcon: 'icon icon-member',
    },
    {
      title: values.product.title,
      children: [
        {
          title: values.product.list,
          link: '/pages/product/list',
        }
      ],
      link: '/pages/product/list',
      menuIcon: 'icon icon-marketplace',
    },
    {
      title: values.order.title,
      children: [
        {
          title: values.order.list,
          link: '/pages/order/list',
        }
      ],
      link: '/pages/order/list',
      menuIcon: 'icon icon-list-view',
    },
    {
      title: values.chat.title,
      children: [
        {
          title: values.chat.online,
          link: '/pages/chat',
        }
      ],
      link: '/pages/chat',
      menuIcon: 'icon icon-clever-customer',
    }
  ];
}
