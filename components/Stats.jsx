'use client';

const stats = [
  {
    num: '±1',
    text: 'Years of Experience',
  },
  {
    num: '250+',
    text: 'Code Committed',
  },
  {
    num: '3+',
    text: 'Project completed',
  },
  {
    num: '±5',
    text: 'Programming Languange Knowledge ',
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80xw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <p className="text-4xl xl:text-6xl font-extrabold">
                  {item.num}
                </p>
                <p
                  className={`${
                    item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                  } leading-snug text-white`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
