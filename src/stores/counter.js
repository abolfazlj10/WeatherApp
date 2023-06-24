import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    city : null , 
    country : null , 
    tempC : null , 
    windC : null , 
    tempF : null , 
    windF : null , 
    humidity : null , 
    citySearch : null ,
    citySearchInput : null ,
    statusWeather : null ,
    statusWeatherPersianResultLon: null,
    humidity : null ,
    $ : document , 
    onePartApi : 'https://api.openweathermap.org/data/2.5/weather?q=' ,
    twoPartApi : '&appid=e8f981af2d6e60c08d330aa60ed5450b&units=imperial' ,
    apiAutoSearch : 'https://api.db-ip.com/v2/free/self',
    latFetch : 'https://api.openweathermap.org/data/2.5/weather?lat=' ,
    StartLonSearch : '&lon=',
    LonSeach : '&appid=e8f981af2d6e60c08d330aa60ed5450b&units=imperial',
    styleErorr : false ,
    ModeTemp : 'c',
    SourceImageStatus : null ,
    CheckStatusMainWeather : null,
    displayAutoConmplete : false , 
    namePicture : null , 
    nameState : null , 
    CreateOBJ : null , 
    oBJCity : null ,
    NameFOBJ : null ,
    NameEnONJ : null , 
    lat : null , 
    long : null ,
    dateDay : null ,
    CityArry : [
      ['پرو' , 'peru' , 40.7537  , -86.0689 ] ,    ['ایران' , 'Iran' , 32  , 53 ] ,    ['چین' , 'china' , 25.7  , -99.2333 ] ,    ['استرلیا' , 'Australia' , -25  , 135 ] ,    ['ازبکستان' , 'Uzbekistan' , 41.7075  , 63.8491 ] ,    ['لهستان' , 'Poland' , 44.0606  , -70.3937 ] ,    ['نیجریه' , 'Nigeria' , 10  , 8 ] ,    ['افغانستان' , 'Afghanistan' , 33  , 66 ] ,    ['لبنان' , 'Lebanon' , 36.2081  , -86.2911 ] ,    ['اروگوئه' , 'Uruguay' , -33  , -56 ] ,    ['قطر' , 'Qatar' , 25.5  , 51.25 ] ,    ['کلمبیا' , 'Colombia' , 20.9881  , -77.4297 ] ,    ['کرواسی' , 'Croatia' , 45.1667  , 15.5 ] ,    ['ژاپن' , 'Japan' , 35.6854  , 139.7531 ] ,    ['آرژانتین' , 'Argentina' , -34  , -64 ] ,    ['پرتغال' , 'Portugal' , 39.5  , -8 ] ,    ['ویتنام' , 'Vietnam' , 16.1667  , 107.8333 ] ,    ['ایتالیا' , 'Italy' , 32.184  , -96.8847 ] ,    ['نروژ' , 'Norway' , 45.7869  , -87.9037 ] ,    ['تایلند' , 'Thailand' , 15  , 100 ] ,    ['دانمارک' , 'Denmark' , 33.3227  , -81.1423 ] ,    ['تاجیکستان' , 'Tajikistan' , 39  , 71 ] ,    ['فنلاند' , 'Finland' , 64  , 26 ] ,    ['بلژیک' , 'Belgium' , 43.4997  , -87.8504 ] ,    ['امارات' , 'United Arab Emirates' , 24  , 54 ] ,    ['مالی' , 'Mali' , 12.079  , -12.2982 ] ,    ['عراق' , 'Iraq' , 33  , 44 ] ,    ['کره جنوبی' , 'Muju' , 35.9078  , 127.7669 ] ,    ['بریتانیا' , 'United Kingdom' , 54.7584  , -2.6953 ] ,    ['کاستاریکا' , 'Costa Rica' , -23.4167  , -54.65 ] ,    ['اکراین' , 'Ukraine' , 49  , 32 ] ,    ['مکزیک' , 'Mexico' , 15.0646  , 120.7198 ] ,    ['بحرین' , 'Bahrain' , 26  , 50.5 ] ,    ['اسراییل' , 'Israel' , 31.5  , 34.75 ] ,    ['آلمان' , 'Germany' , 51.5  , 10.5 ] ,    ['کره شمالی' , 'North Korea' , 40  , 127 ] ,    ['اسپانیا' , 'Spain' , 40  , -4 ] ,    ['سنگال' , 'Senegal' , 14  , -14 ] ,    ['غنا' , 'Ghana' , 8  , -2 ] ,    ['سوئد' , 'Sweden' , 62  , 15 ] ,    ['هنگ کنگ' , 'Hong Kong' , 22.2855  , 114.1577 ] ,    ['فیلیپین' , 'Philippines' , 13  , 122 ] ,    ['هلند' , 'Netherlands' , 52.5  , 5.75 ] ,    ['بلغارستان' , 'Bulgaria' , 43  , 25 ] ,    ['ونزوئلا' , 'Venezuela' , 8  , -66 ] ,    ['ایرلند' , 'Ireland' , 53  , -8 ] ,    ['ترکمنستان' , 'Turkmenistan' , 40  , 60 ] ,    ['یمن' , 'Yemen' , 15.5  , 47.5 ] ,    ['روسیه' , 'Russia' , 60  , 100 ] ,    ['مراکش' , 'Morocco' , 40.9462 , -87.4534 ] ,    ['اکوادور' , 'Ecuador' , -2 , -77.5 ] ,    ['کوبا' , 'Cuba' , 22 , -79.5 ] ,    ['کانادا' , 'Canada' , 38.6767 , -0.8141 ] ,    ['عربستان' , 'Saudi Arabia' , 25 , 45 ] ,    ['رومانی' , 'Romania' , 46 , 25 ] ,    ['نیوز لند' , 'New Zealand' , -42 , 174 ] ,    ['برزیل' , 'Brazil' , 39.5237 , -87.125 ] ,    ['ترکیه' , 'Turkey' , 39.059 , 34.9115 ] ,    ['جامائیکا' , 'Jamaica' , 22.9792 , -82.1703 ] ,    ['فرانسه' , 'France' , 5.2038 , -3.7396 ] ,    ['پاکستان' , 'Pakistan' , 30 , 70 ] ,    ['آمریکا' , 'United States' , 39.76 , -98.5 ] ,    ['آذربایجان' , 'Azerbaijan' , 40.5 , 47.5 ] ,    ['قزاقستان' , 'Kazakhstan' , 48 , 68 ] ,    ['لردگان' , 'Borūjen' , 31.5166 , 50.8144 ] ,    ['بنگلادش' , 'Bangladesh' , 24 , 90 ] ,['کردستان' , 'Kurdistan' , 35.4509 ,44.4103] ,    ['تبریز' , 'Tabriz' , 38.0768 ,46.2352] ,    ['آذزبایجان شرقی' , 'East Azerbaijan' , 38  , 46.75] ,    ['آذزبایجان' , 'Azerbaijan' , 340.5  , 47.5 ] ,    ['اردبیل' , 'Ardabil' , 38.2498  , 48.2933 ] ,    ['چهار محال بختیاری' , 'Chaharmahal and Bakhtiari Province' , 32.1667  , 50.75 ] ,    ['شهر کرد' , 'Shahr-e Kord' , 32.3256  , 50.75 ] ,    ['خراسان جنوبی' , 'Ostān-e Khorāsān-e Jonūbī' , 32.517564  , 59.104176 ] ,    ['خراسان شمالی' ,'North Khorasan' ,  37.471  , 57.1013 ] ,    ['خوزستان' , 'Khuzestan' , 31.5  , 49 ] ,    ['سیستان و بلوچستان' , 'Sistan and Baluchestan' , 28.5  , 60.5] ,    ['البرز' , 'Alborz' , 36.0112  , 50.8096 ] ,    ['کهگیلویه و بویراحمد' , 'Kohgiluyeh and Boyer-Ahmad' , 30.7246  , 50.8456 ] ,    ['گلستان' , 'Golestan' , 36.3197  , 59.4074 ] ,    ['گیلان' , 'Rasht' , 37.2809  , 49.5924 ] ,    ['لرستان' , 'Ostān-e Lorestān' , 33.5 , 48.5 ] ,    ['مازندران' , 'Mazandaran' , 36.25  , 52.3333 ] ,    ['مرکزی' , 'Markazi Province' , 34.3333 , 49.8333 ] ,    ['هرمزگان' , 'Hormozgan' , 27.75  , 56.5 ] ,      ['لاهیجان' , 'Lahijan' , 37.2061 , 50.0029 ] ,    ['فارسان' , 'Fārsān' , 32.2569 , 50.561 ] ,    ['بروجن' , 'Borujen' , 31.9719 , 51.2916 ] ,    ['املش' , 'Amlash' , 37.0962 , 50.1844 ] ,    ['صومعه سرا' , 'Ostān-e Gīlān' , 37.3049 , 49.3178 ] ,    ['ماسال' , 'Bandar-e Anzali' , 37.3621 , 49.1315 ] ,    ['ماسوله' , 'Ostān-e Gīlān' , 37.1603 , 48.9923 ] ,    ['رودبار' , 'رودبار' , 36.5645 , 52.365 ] ,    ['هشتپر' , 'Hashtpar' , 37.8008 , 48.9037 ] ,    ['فومن' , 'Fuman' , 37.2273 , 49.3142 ] ,    ['لنگرود' , 'Langarud' , 37.1956 , 50.153 ] ,    ['منجيل' , 'Ostān-e Gīlān' , 36.7399 , 49.411 ] ,    ['تالش' , 'Ostān-e Gīlān' , 36.7399 , 49.411 ] ,    ['آستارا' , 'Astara' , 38.456 , 48.875 ] ,    ['رزن' , 'Razan' , 36.2016 , 52.1814 ] ,    ['نهاوند' , 'Nahavand' , 34.1897 , 48.3716 ] ,    ['ملاير' , 'Larnaka' , 34.302 , 34.302 ] ,    ['اسدآباد' , 'Asadabad' , 34.7826 , 48.1218 ] ,    ['رشت' , 'Rasht' , 37.2808 , 49.5832 ] ,    ['همدان' , 'Hamedan' , 34.7983 , 48.5148 ] ,    ['کوار' , 'Kavar' , 29.2003 , 52.6926 ] ,    ['بوانات' , 'Maḩalleh-ye Fasārūd' , 30.4856 , 53.5933 ] ,    ['زرقان' , 'Shiraz' , 29.7642 , 52.7135 ] ,    ['فراشبند' , 'Fars' , 29 , 53 ] ,    ['سروستان' , 'Fars' , 29.2661 , 53.2234 ] ,    ['سوريان' , 'Maḩalleh-ye Fasārūd' , 30.4667 , 53.45 ] ,    ['صفاشهر' , 'Maḩalleh-ye Fasārūd' , 30.6108 , 53.1911 ] ,    ['ارسنجان' , 'Fars' , 29 , 53 ] ,    ['اردكان' , 'Ardakān' , 32.31 , 54.0175 ] ,    ['حاجي آباد' , 'Hormozgan' , 27.75 , 56.5 ] ,    ['جهرم' , 'Fars' , 29 , 53 ] ,    ['استهبان' , 'Fars' , 29 , 53 ] ,    ['لامرد' , 'Lamerd' , 27.3334 , 53.1816 ] ,    ['فيروز آباد' , 'Fīrūzābād' , 28.8438 , 52.5707 ] ,    ['سپيدان' , 'Ardakān' , 32.31 , 54.0175 ] ,    ['لار' , 'Fars' , 29 , 53 ] ,    ['كازرون' , 'Kāzerūn' , 29.6195 , 51.6541 ] ,    ['آباده' , 'Abadeh' , 31.1627 , 52.6483 ] ,    ['فسا' , 'Fasa' , 28.9366 , 53.6511 ] ,    ['مرودشت' , 'Fars' , 29 , 53 ] ,    ['اقليد' , 'Eqlid' , 30.8925 , 52.6884 ] ,    ['داراب' , 'Dārāb' , 28.7519 , 54.5444 ] ,    ['مهريز' , 'Mahrīz' , 31.5917 , 54.4318 ] ,    ['طبس' , 'Tabas' , 33.5959 , 56.9244 ] ,    ['بافق' , 'Bāfq' , 31.6128 , 55.4107 ] ,    ['اشكذر' , 'Yazd' , 31.8972 , 54.3675 ] ,    ['خضرآباد' , 'Khezrabad' , 37.4088 , 45.2001 ] ,    ['زارچ' , 'Zarch' , 31.9903 , 54.2354 ] ,    ['بانه' , 'Baneh' , 35.9947 , 45.8843 ] ,    ['سنندج' , 'Sanandaj' , 35.3126 , 46.9979 ] ,    ['بيجار' , 'Bījār' , 35.8668 , 47.6051 ] ,    ['سقز' , 'Saqqez' , 36.2499 , 46.2735 ] ,    ['قروه' , 'Qorveh' , 35.1664 , 47.8045 ] ,    ['مريوان' , 'Marivan' , 35.5219 , 46.176 ] ,    ['صلوات آباد' , 'Salavatabad' , 36.0043 , 47.544 ] ,    ['حسن آباد' , 'Ḩasanābād' , 36.5465 , 61.0543 ] ,    ['قائن' , 'Ghayen' , 33.7258 , 59.1893 ] ,    ['بيرجند' , 'Birjand' , 32.8663 , 59.2211 ] ,    ['نهبندان' , 'Ostān-e Khorāsān-e Jonūbī' , 32.5 , 59.5 ] ,    ['سربيشه' , 'Sarbisheh' , 33.5354 , 46.5176 ] ,    ['طبس' , 'Tabas' , 33.5959 , 56.9244 ] ,    ['شيراز' , 'Shiraz' , 29.6036 , 52.5388 ] ,    ['بوئين زهرا' , 'Qazvin' , 36.2797 , 50.0049 ] ,    ['بندرعباس' , 'Bandar Abbas' , 27.1794 , 56.2781 ] ,    ['كيش' , 'Kīsh' , 26.5578 , 54.0194 ] ,    ['بندر لنگه' , 'Bandar-e Lengeh' , 26.5579 , 54.8807 ] ,    ['قشم' , 'Qeshm' , 26.9581 , 56.2719 ] ,    ['بستك' , 'Bastak' , 41.486 , 33.4213 ] ,    ['ميناب' , 'Mīnāb' , 27.1467 , 57.0801 ] ,    ['Dehbārez' , 'Hormozgan' , 27.75 , 56.5 ] ,    ['اراک' , 'Arak' , 34.0956 , 49.6913 ] ,    ['دليجان' , 'Delījān' , 33.9905 , 50.6838 ] ,    ['خمين' , 'Khomeyn' , 33.6423 , 50.0789 ] ,    ['تفرش' , 'Tafresh' , 34.692 , 50.013 ] ,    ['آشتيان' , 'Arak' , 34.0917 , 49.6892 ] ,    ['ساوه' , 'Arak' , 34.0917 , 49.6892 ] ,    ['محلات' , 'Mahallat' , 13.95 , 45.6167 ] ,    ['يزد' , 'Yazd' , 31.8972 , 54.3675 ] ,    ['شازند' , 'Markazi Province' , 34.3333 , 49.8333 ] ,    ['اردكان' , 'Yazd' , 31.8972 , 54.3675 ] ,    ['ابركوه' , 'Yazd' , 31.8972 , 54.3675 ] ,    ['ميبد' , 'Meybod' , 32.2501 , 54.0166 ] ,    ['هرسين' , 'Harsīn' , 34.2721 , 47.5861 ] ,    ['قصر شيرين' ,'Sarpol-e Z̄ahāb' ,  34.5181 , 45.5787 ] ,    ['پاوه' , 'Paveh' , 35.0458 , 46.3622 ] ,    ['جوانرود' , 'Javanrud' , 34.804 , 46.4921 ] ,    ['قزوين' , 'Qazvin' , 36.2797 , 50.0049 ] ,    ['تاكستان' , 'Tākestān' , 36.0696 , 49.6959 ] ,    ['چهاردانگه' , 'چهاردانگه' , 35.6122 , 51.2982 ] ,    ['شريف آباد' , 'Sharifabad' , 35.4202 , 51.7926 ] ,    ['شهريار' , 'Shahrīār' , 35.6596 , 51.0593 ] ,    ['باقرشهر' , 'Baqershahr' , 35.533 , 51.4043 ] ,    ['قرچك' , 'Qarchak' , 35.4394 , 51.5689 ] ,    ['رباط كريم' , 'Robāţ Karīm' , 35.4846 , 51.0829 ] ,    ['ملارد' , 'Malārd' , 35.6659 , 50.9767 ] ,    ['قدس' , 'Qods' , 35.7234 , 51.1051 ] ,    ['ماهشهر' , 'Bandar-e Mahshahr' , 30.5512 , 49.1867 ] ,    ['خرم آباد' , 'Khorramabad' , 33.4842 , 48.3539 ] ,    ['بروجرد' , 'Borūjerd' , 33.8973 , 48.7516 ] ,    ['دورود' , 'Dorud' , 33.4993 , 49.053 ] ,    ['اليگودرز' , 'Aligoodarz' , 33.4006 , 49.6949 ] ,    ['ازنا' , 'Aznā' , 33.6095 , 48.9307 ] ,    ['نور آباد' , 'Nūrābād' , 34.0734 , 47.9725 ] ,    ['الشتر' , 'Aleshtar' , 33.8633 , 48.2619 ] ,    ['كوهدشت' , 'Kūhdasht' , 33.535 , 47.6061 ] ,    ['کرج' , 'Karaj' , 35.8355 , 51.0103 ] ,    ['طالقان' , 'Taleqan' , 36.1779 , 50.7655 ] ,    ['نظرآباد' , 'Nazarabad' , 35.9559 , 50.6097 ] ,    ['اشتهارد' , 'Karaj' , 35.8355 , 47.6061 ] ,    ['هشتگرد' , 'Hashtgerd' , 35.9642 , 50.6858 ] ,    ['ماهدشت' , 'Mahdasht' , 35.7299 , 50.8111 ] ,    ['گرگان' , 'Gorgan' , 36.8393 , 54.4321 ] ,    ['آق قلا' , 'Aghghala' , 37.0137 , 54.4569 ] ,    ['گنبد كاووس' , 'Gonbad-e Kāvūs' , 37.25 , 55.1672 ] ,    ['كلاله' , 'Kalāleh' , 37.3807 , 55.4916 ] ,    ['آزاد شهر' , 'آزاد شهر' , 27.208 , 56.3176 ] ,    ['راميان' , 'Golestan' , 36.3197 , 59.4074 ] ,    ['گچساران' , 'Dogonbadan' , 30.3568 , 50.7943 ] ,    ['دوگنبدان' , 'Gachsaran' , 30.3586 , 50.7981 ] ,    ['ياسوج' , 'Yasuj' , 30.6682 , 51.588 ] ,    ['دهدشت' , 'Dehdasht' , 30.7947 , 50.5646 ] ,
      ['کیش' , 'kish' , 34.3142 , 47.065 ], ['كرمانشاه' , 'Kermanshah' , 34.3142 , 47.065 ] ,    ['اسلام آباد غرب' , 'Kermanshah' , 34.3142 , 47.065 ] ,    ['سنقر' , 'Sonqor' , 34.7837 , 47.6004 ] ,    ['كنگاور' , 'Kangāvar' , 34.5043 , 47.9653 ] ,    ['بلده' , 'Mazandaran' , 36.25 , 52.3333 ] ,    ['نوشهر' , 'Nowshahr' , 36.649 , 51.496 ] ,    ['محمود آباد' , 'Mazandaran' , 36.25 , 52.3333 ] ,    ['قم' , 'Qom' , 34.6401 , 50.8764 ] ,    ['قنوات' , 'Qanavat' , 34.6137 , 51.0246 ] ,    ['کهک' , 'Kahak' , 36.1111 , 49.7623 ] ,    ['دستجرد' , 'Dastjerd' , 37.6917 , 45.0597 ] ,    ['سلفچگان' , 'Salafchegan' , 34.4784 , 50.4577 ] ,    ['جعفریه' , 'Qom' , 34.6401 , 50.8764 ] ,    ['مشهد' , 'Mashhad' , 36.297 , 59.6062 ] ,    ['نيشابور' , 'Neyshabur' , 36.2133 , 58.7958 ] ,    ['سبزوار' , 'Sabzawār' , 36.2126 , 57.6819 ] ,    ['گناباد' , 'Gonabad' , 34.3541 , 58.6842 ] ,    ['كاشمر' , 'Kāshmar' , 35.2383 , 58.4656 ] ,    ['تربت حيدريه' , 'Torbat-e Heydarieh' , 35.2741 , 59.2194 ] ,    ['قوچان' , 'Quchan' , 37.106 , 58.5108 ] ,    ['تربت جام' , 'Torbat-e Jam' , 35.2433 , 60.6263 ] ,    ['سرخس' , 'Sarakhs' , 36.5449 , 61.1577 ] ,    ['تايباد' , 'Tāybād' , 34.74 , 60.7756 ] ,    ['چناران' , 'Chenārān' , 36.6455 , 59.1212 ] ,    ['ورامين' , 'Varāmīn' , 35.3242 , 51.6457 ] ,    ['تهران' , 'Tehran' , 35.6944 , 51.4215 ] ,    ['فيروزكوه' , 'Tehran' , 35.6944 , 51.4215 ] ,    ['دماوند' , 'Damāvand' , 35.7178 , 52.065 ] ,    ['ري' , 'Rye' , 40.9807 , -73.6837 ] ,    ['لواسان' , 'Tehran' , 35.6944 , 51.4215 ] ,    ['اسلامشهر' , 'Eslāmshahr' , 35.5605 , 51.2346 ] ,    ['رودهن' , 'Rudehen' , 35.7348 , 51.9064 ] ,    ['بومهن' , 'Bumahen' , 35.7285 , 51.8643 ] ,    ['تجريش' , 'Tehran' , 35.6944 , 51.4215 ] ,    ['كهريزك' , 'Kahrizak' , 35.5168 , 51.3626 ] ,    ['فشم' , 'Tehran' , 35.6944 , 51.4215 ] ,    ['پاكدشت' , 'Pakdasht' , 35.4752 , 51.6807 ] ,    ['ميرجاوه' , 'Sistan and Baluchestan' , 28.5 , 60.5 ] ,    ['ايرانشهر' , 'Iranshahr' , 27.2025 , 60.6848 ] ,    ['ايلام' , 'Ilām' , 26.9167 , 87.9167 ] ,    ['مهران' , 'Mehrān' , 33.1222 , 46.1646 ] ,    ['آبدانان' , 'Abdanan' , 32.9897 , 47.4224 ] ,    ['دهلران' , 'Dehlorān' , 32.6941 , 47.2679 ] ,    ['دره شهر' , 'Ilām' , 26.9167 , 87.9167 ] ,    ['سرابله' , 'Sarableh' , 33.7676 , 46.5655 ] ,    ['بجنورد' , 'Bojnord' , 37.476 , 57.332 ] ,    ['اسفراين' , 'Esfarāyen' , 37.0765 , 57.5101 ] ,    ['شيروان' , 'Shirvan' , 39.9509 , 48.8994 ] ,    ['آشخانه' , 'Ashkhaneh' , 37.5604 , 56.923 ] ,    ['کرمان' , 'Kerman' , 36.7236 , -120.0599 ] ,    ['راور' , 'Ravar' , 31.2677 , 56.807 ] ,    ['کوهبنان' , 'Kerman' , 36.7236 , -120.0599 ] ,    ['انار' , 'Kerman' , 36.7236 , -120.0599 ] ,    ['سيرجان' , 'Sīrjān' , 29.452 , 55.6814 ] ,    ['رفسنجان' , 'Rafsanjan' , 30.4022 , 55.9942 ] ,    ['بافت' , 'Baft' , 29.234 , 56.6057 ] ,    ['كهنوج' , 'Kerman' , 36.7236 , -120.0599 ] ,    ['زرند' , 'Zarand' , 30.8127 , 56.564 ] ,    ['بم' , 'Bam' , 29.106 , 58.357 ] ,    ['بردسير' , 'Bardsīr' , 29.9227 , 56.5743 ] ,    ['شوش' , 'Shoush' , 48.249 , 32.2004 ] ,    ['جيرفت' , 'Kerman' , 36.7236 , -120.0599 ] ,    ['آبادان' , 'Abadan' , 30.3636 , 48.2591 ] ,    ['ايرانشهر' , 'Iranshahr' , 27.2025 , 60.6848 ] ,    ['اهواز' , 'Ahvaz' , 31.323 , 48.6793 ] ,    ['مسجد سليمان' , 'Khuzestan ' , 31.5 , 49 ] ,    ['خرمشهر' , 'Khorramshahr' , 30.4333 , 48.178 ] ,    ['ايذه' , 'Khuzestan ' , 31.5 , 49 ] ,    ['شوشتر' , 'شوشتر' , 32.0422 , 48.8519 ] ,    ['انديمشك' , 'Andīmeshk' , 32.5333 , 48.3833 ] ,    ['سوسنگرد' , 'Susangerd' , 31.5566 , 48.1881 ] ,    ['دزفول' , 'Dezful' , 32.3811 , 48.4058 ] ,    ['هويزه' , 'Khuzestan ' , 31.5 , 49 ] ,    ['بندر امام خميني' , 'Khuzestan ' , 31.5 , 49 ] ,    ['شادگان' , 'Shadegan' , 30.6495 , 48.6697 ] ,    ['بهبهان' , 'Behbahan' , 30.5922 , 50.2408 ] ,    ['بندر ماهشهر' , 'Bandar-e Mahshahr ' , 30.5512 , 49.1867 ] ,    ['رامهرمز' , 'Ramhormoz' , 31.278 , 49.602 ] ,    ['باغ ملك' , 'Khuzestan ' , 31.5 , 49 ] ,    ['رامشیر' , 'Ramshir' , 30.894 , 49.4093 ] ,    ['هنديجان' , 'Khuzestan ' , 31.5 , 49 ] ,    ['حمیدیه' , 'حمیدیه' , 35.8954 , 50.7866 ] ,    ['ساري' , 'Sari' , 36.5633 , 53.0601 ] ,    ['آمل' , 'Āmol' , 36.4696 , 52.3507 ] ,    ['بابل' , 'Babol' , 36.5513 , 52.679 ] ,    ['بابلسر' , 'Bābolsar' , 36.7025 , 52.6576 ] ,    ['بهشهر' , 'Behshahr' , 36.6912 , 53.5434 ] ,    ['تنكابن' , 'Tonekābon' , 36.8163 , 50.8738 ] ,    ['جويبار' , 'Jūybār' , 36.6412 , 52.9124 ] ,    ['چالوس' , 'Chālūs' , 36.655 , 51.4204 ] ,    ['رامسر' , 'Ramsar' , 36.9226 , 50.6426 ] ,    ['قائم شهر' , 'Qaem Shahr' , 36.4709 , 52.8669 ] ,    ['نكا' , 'Nekā' , 36.6508 , 53.299 ] ,    ['آران و بيدگل' , 'Aran va Bidgol' , 34.0584 , 51.4835 ] ,    ['باغ بهادران' , 'Isfahan ' , 32.6572 , 51.6776 ] ,    ['خوانسار' , 'Khansar' , 33.2269 , 50.3146 ] ,    ['علويجه' , 'Isfahan ' , 32.6572 , 51.6776 ] ,    ['عسگران' , 'عسگران' , 33.3146 , 49.8343 ] ,    ['تودشک' , 'Isfahan ' , 32.6572 , 51.6776 ] ,    ['ورزنه' , 'Isfahan ' , 32.6572 , 51.6776 ] ,    ['سمنان' , 'Semnan' , 35.5729 , 53.3971 ] ,    ['شاهرود' , 'Shahrud' , 36.4182 , 54.9763 ] ,    ['گرمسار' , 'Garmsār' , 35.2182 , 52.3409 ] ,    ['ايوانكي' , 'Semnan' , 35.5729 , 53.3971 ] ,    ['دامغان' , 'Dāmghān' , 36.1683 , 54.348 ] ,    ['بسطام' , 'Bastam' , 36.4829 , 55.0008 ] ,    ['ابهر' , 'Abhar' , 36.1468 , 49.218 ] ,    ['زنجان' , 'Zanjān' , 36.6736 , 48.4787 ] ,    ['خدابنده' , 'Khodabandeh' , 35.2479 , 59.2672 ] ,    ['ماهنشان' , 'Zanjān' , 36.6736 , 48.4787 ] ,    ['خرمدره' , 'Khorramdarreh' , 36.213 , 49.196 ] ,    ['آب بر' , 'Zanjān' , 36.6736 , 48.4787 ] ,    ['قيدار ' , 'Zanjān' , 36.6736 , 48.4787 ] ,    ['بوشهر' , 'Bushehr' , 28.75 , 51.5 ] ,    ['گناوه' , 'گناوه' , 30.4544 , 50.8363 ] ,    ['كنگان' , 'Bushehr' , 28.75 , 51.5 ] ,    ['خورموج' , 'Khormoj' , 28.6543 , 51.3759 ] ,    ['برازجان' , 'Borazjan' , 29.2661 , 51.2121 ] ,    ['جم' , 'Jam' , 27.8263 , 52.3264 ] ,    ['کاکی' , 'Bushehr' , 28.75 , 51.5 ] ,    ['عسلویه' , 'Bushehr' , 28.75 , 51.5 ] ,    ['زاهدان' , 'Zahedan' , 29.4963 , 60.8629 ] ,    ['چابهار' , 'Chabahar' , 25.2933 , 60.6471 ] ,    ['خاش' , 'Khash' , 28.2204 , 61.2137 ] ,    ['سراوان' , 'Saravan' , 39.7196 , 45.6483 ] ,    ['سرباز' , 'Sistan and Baluchestan' , 28.5 , 60.5 ] ,    ['زابل' , 'Zabol' , 31.0278 , 61.4948 ] ,    ['اروميه' , 'Urmia' , 37.5527 , 45.0761 ] ,    ['نقده' , 'Naghadeh' , 36.9553 , 45.388 ] ,    ['ماكو' , 'Maku' , 39.2911 , 44.4521 ] ,    ['تكاب' , 'Takāb' , 36.4009 , 47.1133 ] ,    ['خوي' , 'Khoy' , 38.5504 , 44.9535 ] ,    ['مهاباد' , 'Mahabad' , 36.7631 , 45.7222 ] ,    ['چالدران' , 'Qara Eyni - Siah Cheshmeh - Chaldran' , 39.0651 , 44.3844 ] ,    ['بوكان' , 'Būkān' , 36.521 , 46.2089 ] ,    ['سلماس' , 'Salmas' , 38.1969 , 44.7685 ] ,    ['پيرانشهر' , 'Piranshahr' , 36.701 , 45.1413 ] ,    ['مشگين شهر' , 'Ardabil' , 38.2498 , 48.2933 ] ,    ['نمين' , 'Namīn' , 38.4269 , 48.4839 ] ,    ['تبريز' , 'Tabriz' , 38.08 , 46.2919 ] ,    ['مراغه' , 'Maragheh' , 37.3917 , 46.2398 ] ,    ['شبستر' , 'Shabistar' , 38.1784 , 45.7002 ] ,    ['مرند' , 'Marand' , 38.4329 , 45.7749 ] ,    ['جلفا' , 'Jolfa' , 38.9377 , 45.6251 ] ,    ['سراب' , 'سراب' , 32.8389 , 59.21 ] ,    ['هاديشهر' , 'Hadishahr' , 38.8431 , 45.6635 ] ,    ['بناب' , 'Bonab' , 37.3386 , 46.0593 ] ,    ['اهر' , 'Ahar' , 38.4774 , 47.0699 ] ,    ['صوفیان' , 'Sufian' , 35.3962 , 46.9347 ] ,    ['باسمنج' , 'Basmenj' , 37.9956 , 46.4749 ] ,    ['اصفهان' , 'Isfahan' , 33 , 52.1667 ] ,    ['فلاورجان' , 'Falavarjan' , 32.5577 , 51.5079 ] ,    ['نطنز' , 'Natanz' , 33.5136 , 51.914 ] ,    ['كاشان' , 'Kashan' , 33.9831 , 51.4364 ] ,    ['اردستان' , 'Ardestan' , 33.3798 , 52.3725 ] ,    ['زرين شهر' , 'Isfahan' , 33 , 52.1667 ] ,    
    ],

    resultscityFindArry : [],
  }),

  actions: {

    findCity (){
      fetch(`${this.onePartApi}${this.citySearch}${this.twoPartApi}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        if (data.cod == 200){
          this.city = data.name + ','
          this.country = data.sys.country
          this.tempF = `${Math.floor(data.main.temp)}`
          this.windF =  Math.floor(data.wind.speed) 
          this.tempC = `${Math.floor((data.main.temp -32) * 5/9)}`
          this.windC =  Math.floor(data.wind.speed * 1.6093) 
          this.statusWeather = data.weather[0].description
          this.CheckStatusMainWeather = data.weather[0].main
          this.humidity = data.main.humidity + '%'
          this.CheckStatusWeather()
          this.statusWeatherPersianLan()
          this.displayAutoConmplete = false
        }else {
              this.erorr()
        }
      })  
    },
    apiDate (){
      setInterval(() => {
        fetch('https://api.keybit.ir/time/')
        .then(resp => {
          return resp.json()
        })
        .then(data => {
          this.dateDay = data.date.full.official.usual.en
        })
      }, 1000);
    },
    serachAutoCountry (){
      fetch(this.apiAutoSearch)
      .then(res => res.json())
      .then(data =>{
        this.citySearch = data.stateProv
        this.findCity()
      })
    },
    TimeDate (){
      var HouesTime , MinutesTime
      setInterval(function () {
        // var DatePagesHome = document.getElementById('Date')
        var DatePagesHomeTime = document.getElementById('DateTime')
        // const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
        // const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var time = new Date()
        HouesTime = time.getHours()
        MinutesTime = time.getMinutes()
        if (MinutesTime <= 9){
          MinutesTime = '0' + time.getMinutes()
        }else {
          MinutesTime = time.getMinutes()
        }
        // DatePagesHome.innerHTML = days[time.getDay()] + '   ' + time.getDate() + '   ' + months[time.getMonth()] + '  ' + time.getFullYear()
        DatePagesHomeTime.innerHTML = HouesTime + ':' + MinutesTime
      } , 1000)
    },

    CheckStatusWeather (){
      switch (this.CheckStatusMainWeather){
        case 'Thunderstorm':
          this.namePicture =  'Thunderstorm'
         
          break;
        case 'Drizzle':
          this.namePicture =  'Drizzle'
         
          break;
        case 'Rain':
          this.namePicture =  'Rain'
         
          break;
        case 'Snow':
            this.namePicture =  'Snow'
           
            break;

            case 'Atmosphere':
            case 'Fog': // مه
            case 'Haze':
              this.namePicture = 'Haze'
              break;

          case 'Mist':
          case 'Dust':
          case 'Sand':
          case 'Ash':
          case 'Squall':
          this.namePicture = 'Mist' // غبار
          break;

        case 'Tornado':
          this.namePicture =  'Tornado' // گردباد
         
          break;
        case 'Smoke':          
          this.namePicture = 'Smoke' // دود
          break;
        case 'Clear':
          this.namePicture =  'Clear' // صاف

          break;
        case 'Clouds':
          this.namePicture =  'Clouds' // ابر
          
          break;
      }
    },
    SearchStringInput(e){
      if (e.key == 'Backspace' && this.citySearchInput == ""){
        this.displayAutoConmplete = false
      }
      let searchValue = this.citySearchInput
      
      this.resultscityFindArry = this.CityArry.filter(function (word) {   
        return word[0].startsWith(searchValue) 
      })
    },
    SaveInfoLocation(){
      this.citySearch = this.citySearchInput
      this.CityArry.forEach(el => {
        if (el[0] == this.citySearchInput){
          this.SelectItem(el)
          this.citySearch = el[1]
        }
      })
    },
    erorr (){
      this.styleErorr = true
      setTimeout(() => {
        this.styleErorr = false
      }, 500);
    },
    SelectItem (citys){
      this.oBJCity = citys
      this.NameFOBJ = this.oBJCity[0]
      this.NameEnONJ = this.oBJCity[1]
      this.lat = this.oBJCity[2]
      this.long = this.oBJCity[3]
      this.citySearchInput = this.NameFOBJ
      this.citySearch = this.NameEnONJ
      this.displayAutoConmplete = false
      this.findCity()
      this.citySearchInput = this.NameFOBJ
    },
    statusWeatherPersianLan (){
      switch (this.statusWeather) {
        case 'clear sky':
          
          this.statusWeatherPersianResultLon = 'آسمان صاف'
        
          break;
        case 'few clouds':
          
          this.statusWeatherPersianResultLon = 'چند ابر'
        
          break;
        case 'scattered clouds':
          
          this.statusWeatherPersianResultLon = 'ابرهای پراکنده'
        
          break;
        case 'broken clouds':
          
          this.statusWeatherPersianResultLon = 'ابرهای شکسته'
        
          break;
        case 'shower rain':
          
          this.statusWeatherPersianResultLon = 'باران دوش'
        
          break;
        case 'rain':
          
          this.statusWeatherPersianResultLon = 'باران'
        
          break;
        case 'thunderstorm':
          
          this.statusWeatherPersianResultLon = 'رعد و برق'
        
          break;
        case 'snow':
          
          this.statusWeatherPersianResultLon = 'برف'
        
          break;
        case 'mist':
          
          this.statusWeatherPersianResultLon = 'غبار'
        
          break;
        case 'thunderstorm with light rain':
          
          this.statusWeatherPersianResultLon = 'رعد و برق همراه با باران خفیف'
        
          break;
        case 'thunderstorm with rain':
          
          this.statusWeatherPersianResultLon = 'رعد و برق همراه با باران'
        
          break;
        case 'thunderstorm with heavy rain':
          
          this.statusWeatherPersianResultLon = 'رعد و برق همراه با باران شدید'
        
          break;
        case 'light thunderstorm':
          
          this.statusWeatherPersianResultLon = 'رعد و برق خفیف'
        
          break;
        case 'thunderstorm':
          
          this.statusWeatherPersianResultLon = 'رعد و برق'
        
          break;
        case 'heavy thunderstorm':
          
          this.statusWeatherPersianResultLon = 'رعد و برق شدید'
        
          break;
        case 'ragged thunderstorm':
          
          this.statusWeatherPersianResultLon = 'رعد و برق خشن'
        
          break;
        case 'thunderstorm with light drizzle':
          
          this.statusWeatherPersianResultLon = 'رعد و برق همراه با نم نم باران خفیف'
        
          break;
        case 'thunderstorm with drizzle':
          
          this.statusWeatherPersianResultLon = 'رعد و برق همراه با نم نم نم نم باران'
        
          break;
        case 'thunderstorm with heavy drizzle':
          
          this.statusWeatherPersianResultLon = 'رعد و برق همراه با باران شدید'
        
          break;
        case 'light intensity drizzle':
          
          this.statusWeatherPersianResultLon = 'نم نم با شدت نور'
        
          break;
        case 'drizzle':
          
          this.statusWeatherPersianResultLon = 'باران ریز و نمناک'
        
          break;
        case 'heavy intensity drizzle':
          
          this.statusWeatherPersianResultLon = 'نم نم با شدت شدید'
        
          break;
        case 'light intensity drizzle rain':
          
          this.statusWeatherPersianResultLon = 'بارش باران با شدت کم'
        
          break;
        case 'drizzle rain':
          
          this.statusWeatherPersianResultLon = 'باران نم نم نم باران'
        
          break;
        case 'heavy intensity drizzle rain':
          
          this.statusWeatherPersianResultLon = 'باران با شدت شدید'
        
          break;
        case 'shower rain and drizzle':
          
          this.statusWeatherPersianResultLon = 'باران و نم نم باران'
        
          break;
        case 'heavy shower rain and drizzle':
          
          this.statusWeatherPersianResultLon = 'باران شدید و نم نم باران'
        
          break;
        case 'shower drizzle':
          
          this.statusWeatherPersianResultLon = 'نم نم باران'
        
          break;
        case 'light rain':
          
          this.statusWeatherPersianResultLon = 'باران نور'
        
          break;
        case 'moderate rain':
          
          this.statusWeatherPersianResultLon = 'باران متوسط'
        
          break;
        case 'heavy intensity rain':
          
          this.statusWeatherPersianResultLon = 'باران با شدت شدید'
        
          break;
        case 'very heavy rain':
          
          this.statusWeatherPersianResultLon = 'باران بسیار شدید'
        
          break;
        case 'extreme rain':
          
          this.statusWeatherPersianResultLon = 'باران شدید'
        
          break;
        case 'freezing rain':
          
          this.statusWeatherPersianResultLon = 'باران انجماد'
        
          break;
        case 'light intensity shower rain':
          
          this.statusWeatherPersianResultLon = 'باران رگباری با شدت کم'
        
          break;
        case 'shower rain':
          
          this.statusWeatherPersianResultLon = 'باران دوش'
        
          break;
        case 'heavy intensity shower rain':
          
          this.statusWeatherPersianResultLon = 'باران رگباری شدید'
        
          break;
        case 'ragged shower rain':
          
          this.statusWeatherPersianResultLon = 'باران رگباری دوش'
        
          break;
        case 'light snow':
          
          this.statusWeatherPersianResultLon = 'برف سبک'
        
          break;
        case 'Snow':
          
          this.statusWeatherPersianResultLon = 'برف'
        
          break;
        case 'Heavy snow':
          
          this.statusWeatherPersianResultLon = 'برف سنگین'
        
          break;
        case 'Sleet':
          
          this.statusWeatherPersianResultLon = 'برفک'
        
          break;
        case 'Light shower sleet':
          
          this.statusWeatherPersianResultLon = 'برفک دوش سبک'
        
          break;
        case 'Shower sleet':
          
          this.statusWeatherPersianResultLon = 'باران حمام'
        
          break;
        case 'Light rain and snow':
          
          this.statusWeatherPersianResultLon = 'باران و برف خفیف'
        
          break;
        case 'Rain and snow':
          
          this.statusWeatherPersianResultLon = 'باران و برف'
        
          break;
        case 'Light shower snow':
          
          this.statusWeatherPersianResultLon = 'بارش برف سبک'
        
          break;
        case 'Shower snow':
          
          this.statusWeatherPersianResultLon = 'بارش برف'
        
          break;
        case 'Heavy shower snow':
          
          this.statusWeatherPersianResultLon = 'بارش برف سنگین'
        
          break;
        case 'mist':
          
          this.statusWeatherPersianResultLon = 'غبار'
        
          break;
        case 'Smoke':
          
          this.statusWeatherPersianResultLon = 'دود'
        
          break;
        case 'Haze':
          
          this.statusWeatherPersianResultLon = 'مه'
        
          break;
        case 'sand/ dust whirls':
          
          this.statusWeatherPersianResultLon = 'چرخش شن/گرد و غبار'
        
          break;
        case 'fog':
          
          this.statusWeatherPersianResultLon = 'مه'
        
          break;
        case 'sand':
          
          this.statusWeatherPersianResultLon = 'شن'
        
          break;
        case 'dust':
          
          this.statusWeatherPersianResultLon = 'گرد و خاک'
        
          break;
        case 'volcanic ash':
          
          this.statusWeatherPersianResultLon = 'خاکستر آتشفشانی'
        
          break;
        case 'squalls':
          
          this.statusWeatherPersianResultLon = 'غوغا می کند'
        
          break;
        case 'tornado':
          
          this.statusWeatherPersianResultLon = 'گردباد'
        
          break;
        case 'clear sky':
          
          this.statusWeatherPersianResultLon = 'آسمان صاف'
        
          break;
        case 'few clouds: 11-25%':
          
          this.statusWeatherPersianResultLon = 'چند ابر'
        
          break;
        case 'scattered clouds: 25-50%':
          
          this.statusWeatherPersianResultLon = 'ابرهای پراکنده'
        
          break;
        case 'broken clouds: 51-84%':
          
          this.statusWeatherPersianResultLon = 'ابرهای شکسته'
        
          break;
        case 'overcast clouds: 85-100%':
          
          this.statusWeatherPersianResultLon = 'ابرهای ابری'
        
          break;
          default:
          this.statusWeatherPersianResultLon = 'آسمان صاف'
          break;
      }
    },
  },
  
  getters: {}
})