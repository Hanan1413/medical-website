

import {  faStethoscope, faStaffSnake, faUserNurse, faScissors, faDollarSign, faClock, faCheck, faTimes, faHeart, faTooth, faEarListen, faEye, faTint} from '@fortawesome/free-solid-svg-icons';
import firstDoc from '../assets/first-doc.webp';
import secondDoc from '../assets/scond-doc.webp';
import thirdDoc from '../assets/third-doc.webp';
import fourthDoc from '../assets/fourth-doc.webp';





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
      "تعمل عيادتنا وفقًا للأوقات التالية:الاثنين - الجمعة: 8:00 ص - 8:00 <السبت: 9:00 ص -6:30 م الأحد - الخميس: 9:00 ص - 3:00 م< ",
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



export const prices = [
  {
    id: 1,
    title: 'العمليات الجراحية',
    price: '$199/ Per Visit',
    icon: faScissors, // Font Awesome Scissors icon
    description: 'تجربة جراحة تجميلية متقدمة على يد خبراء متخصصين.',
    points: [
      { text: "تقييم شامل للحالة الصحية", isCorrect: true, icon: faCheck },
      { text: "استشارة مع أطباء مختصين", isCorrect: true, icon: faCheck },
      { text: "إجراءات عملية معتمدة", isCorrect: true, icon: faCheck },
      { text: "خدمة ما بعد العملية", isCorrect: true, icon: faCheck },
      { text: "فحص متكامل قبل العملية", isCorrect: false, icon: faTimes }
    ]
  },
  {
    id: 2,
    title: 'الاستشارة',
    price: '$50/ Per Visit',
    icon: faDollarSign, // Font Awesome Dollar Sign icon
    description: 'استشارة طبية تفصيلية للحصول على التوجيه الصحيح.',
    points: [
      { text: "تقييم شامل للحالة الصحية", isCorrect: true, icon: faCheck },
      { text: "استشارة مع أطباء مختصين", isCorrect: true, icon: faCheck },
      { text: "تقديم نصائح طبية شخصية", isCorrect: true, icon: faCheck },
      { text: "مراجعة تاريخ الحالة الطبية", isCorrect: false, icon: faTimes },
      { text: "تخطيط خطة علاجية", isCorrect: true, icon: faCheck }
    ]
  },
  {
    id: 3,
    title: 'المتابعة',
    price: '$30/ Per Visit',
    icon: faClock, // Font Awesome Clock icon
    description: 'متابعة دقيقة بعد العلاج لضمان تحقيق أفضل النتائج.',
    points: [
      { text: "مراجعة تقدم العلاج", isCorrect: true, icon: faCheck },
      { text: "تقييم أي آثار جانبية", isCorrect: true, icon: faCheck },
      { text: "تعديل خطة العلاج إذا لزم الأمر", isCorrect: true, icon: faCheck },
      { text: "تقديم نصائح للراحة والتعافي", isCorrect: false, icon: faTimes },
      { text: "فحص نتائج العلاج بدقة", isCorrect: true, icon: faCheck }
    ]
  }
];


export const doctors = [
  { 
    id:1,
    name: "د. أحمد الشمري",
    description: "أخصائي جراحة التجميل، متخصص في الجراحة التجميلية والجراحة المجهرية.",
    image: firstDoc
  },
  {
    
    id:2,
    name: "د. علي السعدي",
    description: "استشاري طب القلب، متخصص في تشخيص وعلاج أمراض القلب والشرايين.",
    image: secondDoc
  },
  {
    id:3,
    name: "د. محمد الزهراني",
    description: "أخصائي جراحة العظام، متخصص في إصابات العظام والمفاصل.",
    image: thirdDoc
  },
  { id:4,
    name: "د. خالد القحطاني",
    description: "استشاري طب الأعصاب، متخصص في علاج أمراض الجهاز العصبي.",
    image: fourthDoc
  },
  { 
    id:5,
    name: "د. أحمد الشمري",
    description: "أخصائي جراحة التجميل، متخصص في الجراحة التجميلية والجراحة المجهرية.",
    image: firstDoc
  },

 
];




export const treatments = [
  {
    id:1,
    service: "العلاج العام",
    description: "يقدم العلاج العام للأمراض والإصابات الشائعة، ويشمل الفحص الطبي العام وإعطاء العلاج اللازم.",
    icon: faHeart
  },
  {
    id:2,
    service: "تبييض الأسنان",
    description: "تقديم خدمات تبييض الأسنان باستخدام تقنيات متطورة لتفتيح لون الأسنان وتحسين المظهر العام.",
    icon: faTooth
  },
  {
    id:3,
    service: "جراحة القلب",
    description: "إجراء عمليات القلب المفتوح وعلاج أمراض القلب والشرايين باستخدام أحدث الأساليب الجراحية.",
    icon: faHeart
  },
  {
    id:4,
    service: "علاج الأذن",
    description: "علاج اضطرابات الأذن والجهاز السمعي، بما في ذلك التهابات الأذن وفقدان السمع.",
    icon: faEarListen
  },
  {
    id:5,
    service: "مشاكل الرؤية",
    description: "تشخيص وعلاج مشاكل الرؤية المختلفة باستخدام أحدث تقنيات الفحص الطبي والعلاج.",
    icon: faEye
  },
  {
    id:6,
    service: "نقل الدم",
    description: "خدمات نقل الدم لإنقاذ الحياة في حالات الطوارئ أو عند الحاجة لتعويض الدم المفقود.",
    icon: faTint
  }
];



export const days = [
  { id: 1, schedule: "الـاثنين الساعة 8:00 ص  " },
  { id: 2, schedule: "الـالثلاثاء  الساعة 8:00ص " },
  { id: 3, schedule: "الأربعاء  الساعة 8:00ص " },
  { id: 4, schedule: "الالخميس  الساعة 8:00 ص    " },
  { id: 5, schedule: "االجمعة  الساعة 8:00 ص   " },
  { id: 6, schedule: "الـسبت  الساعة 9:00 ص   " },
  { id: 7, schedule: "االأحد  الساعة 9:00 ص   " }
];

  
