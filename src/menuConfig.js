// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: "Li Yingping's Studio",
    path: 'https://Bye-lemon.github.io',
    external: true,
    newWindow: false,
    icon: 'github',
  },
];

const asideMenuConfig = [
  {
    name: '主页',
    path: '/home',
    icon: 'home2',
  },
  {
    name: '设计狮',
    path: '/Designer',
    icon: 'home',
    children: [
      {
        name: '素材站',
        path: '/Designer/sucai',
      },
      {
        name: '工具箱',
        path: '/Designer/tools',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
