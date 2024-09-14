
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {  faStethoscope,faStaffSnake, faUserNurse } from '@fortawesome/free-solid-svg-icons';
<FontAwesomeIcon icon="fa-solid " />




export const infoData = [
  {
    id: 1,
    title: "حالات الطوارئ",
    description:
      "نقدم لك خدمات طبية متكاملة وسريعة للتعامل مع حالات الطوارئ. فريقنا من الأطباء والمختصين جاهز على مدار الساعة لتقديم أفضل الرعاية الطبية في الأوقات الحرجة.",
    linkText: "تعرف على المزيد",
  },
  {
    id: 2,
    title: "جدول أطباءنا",
    description:
      "اطلع على جدول مواعيد أطبائنا المتخصصين لتحديد موعد مناسب لك. نحن نقدم لك أفضل الأطباء في تخصصاتهم المختلفة لتلبية احتياجاتك الصحية.",
    linkText: "تعرف على المزيد",
  },
  {
    id: 3,
    title: "ساعات العمل",
    description:
      "تعمل عيادتنا وفقًا للأوقات التالية:الاثنين - الجمعة: 8:00 ص - 8:00 م<السبت: 9:00 ص -6:30 م الأحد - الخميس: 9:00 ص - 3:00 م< ",
    linkText: "تعرف على المزيد",
  },
];



export const services = [
  {
    title: " مساعدة الطوارئ",
    description: "نقدم لك خدمات طبية متكاملة وسريعة للتعامل مع حالات الطوارئ. فريقنا من الأطباء والمختصين جاهز لتقديم أفضل الرعاية الطبية في الأوقات الحرجة.",
    icon: faUserNurse,
  },
  {
    title: "صيدلية متكاملة",
    description: "نوفر لك مجموعة متنوعة من الأدوية والخدمات الصيدلانية لتلبية احتياجاتك الصحية. فريقنا مستعد لمساعدتك في اختيار المنتجات المناسبة.",
    icon: faStaffSnake,
    
  },
  {
    title: "العلاج الطبي",
    description: "نقدم لك رعاية طبية متكاملة تشمل الفحوصات والعلاجات من قبل أطباء متخصصين. هدفنا هو تحسين صحتك وتقديم العلاج الأمثل لحالتك.",
    icon: faStethoscope,
  }
];