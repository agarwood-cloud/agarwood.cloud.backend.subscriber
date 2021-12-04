export default function (values: any) {
  return [
    // {
    //   title: values['gettingStarted']['title'],
    //   open: false,
    //   children: [
    //     {
    //       title: values['gettingStarted']['sample'],
    //       link: '/pages/getting-started/sample',
    //     },
    //   ],
    //   link: '/pages/getting-started',
    //   menuIcon: 'icon icon-console',
    // },
    {
      title: values.customers.title,
      open: true,
      children: [
        {
          title: values.customers.list,
          link: '/pages/customers/list',
        }
      ],
      link: '/pages/customers/list',
      menuIcon: 'icon icon-console',
    }
  ];
}