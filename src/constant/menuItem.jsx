import {
   BusinessIcon,
   FeedbackIcon,
   KeyboardIcon,
   LanguageIcon,
   LiveIcon,
   LogoutIcon,
   ProfileIcon,
   RechargeIcon,
   SettingIcon,
   ThemeIcon,
} from '../components/Icons/ProfilePopoverIcons/ProfilePopoverIcons'

const MENU_ITEMS = [
   {
      icon: LanguageIcon,
      content: 'Tiếng Việt',
      children: {
         header: 'Ngôn ngữ',
         content: [
            {
               locale: 'vi',
               content: 'Tiếng Việt',
            },
            {
               locale: 'en',
               content: 'English',
            },
         ],
      },
   },
   {
      icon: FeedbackIcon,
      content: 'Phản hồi và trợ giúp',
      to: '/feedback',
   },
   {
      icon: KeyboardIcon,
      content: 'Phím tắt trên bàn phím',
   },
   {
      icon: ThemeIcon,
      content: 'Chủ đề',
   },
]
const LOGIN_MENU_ITEMS = [
   {
      to: '/@ciin',
      icon: ProfileIcon,
      content: 'Xem hồ sơ',
   },
   {
      icon: RechargeIcon,
      content: 'Nhận Xu',
      to: '/coin',
   },
   {
      icon: LiveIcon,
      content: 'LIVE Studio',
   },
   {
      icon: BusinessIcon,
      content: 'Bộ công cụ dành cho doanh nghiệp',
      to: '/business-suite',
   },
   {
      icon: SettingIcon,
      content: 'Cài đặt',
      to: '/setting',
   },
   ...MENU_ITEMS,
   {
      icon: LogoutIcon,
      content: 'Đăng xuất',
      to: '/logout',
      seperate: true,
   },
]

export { MENU_ITEMS, LOGIN_MENU_ITEMS }
