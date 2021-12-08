export default function (values: any) {
  return [
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