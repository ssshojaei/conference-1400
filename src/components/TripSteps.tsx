const TripSteps: React.FC<{}> = () => {
  return (
    <section id="trip" className="container flex flex-col items-center py-9 md:py-12 lg:py-16">
      <h3 className="mb-5 text-center text-2xl font-black leading-normal text-primary md:mb-7 md:text-28 lg:mb-9 lg:text-4xl">
        نگران مسیر و محل اقامت نباشید!
      </h3>
      <p className="mb-5 text-center font-medium leading-relaxed text-gray-500 sm:w-5/6 md:mb-0 md:text-lg lg:w-3/5">
        اگه بابت رفت و آمد و محل اقامتت نگرانی، خیالت راحت باشه. ما یه سری امکانات ویژه برات در نظر
        گرفتیم تا بتونی با خیالی آسوده تو رویداد حضور داشته باشی.
      </p>
      <Lines />
      <div className="flex flex-wrap justify-center self-stretch">
        <Step
          icon="ri-bus-2-fill"
          title="رفت و آمد"
          text="توام مثل ما قصد داری که از تهران راهی بابلسر بشی و تنهایی؟ خبر خوب اینه که یه سرویس رفت و آمد ویژه از ترمینال شرق  در نظر گرفتیم و منتظرتیم که باهم این سفرو شروع کنیم و با رفقای جدید آشنا بشیم."
        />
        <Step
          icon="ri-community-fill"
          title="اقامت راحت"
          text="برای این که خیالتون از بابت محل اقامت راحت باشه، کنار دریا یه اقامتگاه دنج براتون فراهم کردیم."
        />
        <Step
          icon="ri-restaurant-2-fill"
          title="ناهار و پذیرای"
          text="وعده ناهار در سالن لادن میزبان میتونه بهونه خوبی باشه برای پیدا کردن یه بحث جنجالی و باز کردن سر صحبت با دوستای جدیدمون."
        />
      </div>
    </section>
  );
};

const Step: React.FC<{ icon: string; title: string; text: string }> = ({ icon, title, text }) => {
  return (
    <div className="mb-5 flex basis-full flex-col items-center space-y-2 py-4 px-6 last:mb-0 sm:basis-1/2 md:basis-1/3">
      <i
        className={`${icon} block rounded-full bg-gray-100 p-6 text-3xl leading-none text-primary`}
      />
      <h4 className="text-xl font-medium leading-normal text-gray-600">{title}</h4>
      <p className="text-center text-gray-500 2xl:px-10">{text}</p>
    </div>
  );
};

const Lines: React.FC<{}> = () => {
  return (
    <div className="hidden translate-y-16 justify-center self-stretch md:flex">
      <div className="flex w-64 basis-1/3 items-center px-20">
        <hr className="basis-1/2 border-gray-500 opacity-40" />
        <i className="ri-arrow-drop-left-line block leading-none text-gray-500" />
        <hr className="basis-1/2 border-gray-500 opacity-40" />
      </div>
      <div className="flex w-64 basis-1/3 items-center px-20">
        <hr className="basis-1/2 border-gray-500 opacity-40" />
        <i className="ri-arrow-drop-left-line block leading-none text-gray-500" />
        <hr className="basis-1/2 border-gray-500 opacity-40" />
      </div>
    </div>
  );
};

export default TripSteps;
