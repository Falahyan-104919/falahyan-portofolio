import { TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';

const ExperienceContent = ({ value }) => {
  return (
    <TabsContent value={value} className="w-full">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{experience.title}</h3>
        <p className="max-w-[600xp] text-white/60 mx-auto xl:mx-0 text-justify">
          {experience.description}
        </p>
        <ScrollArea className="h-[400px]">
          <ul className="grid grid-cols-1 gap-[30px]">
            {experience.items.map((item, index) => {
              return (
                <li
                  key={index}
                  className="bg-zinc-700 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                >
                  <span className="text-accent-default">{item.duration}</span>
                  <h3 className="text-md max-w-[260px] min-h-[30px] text-center font-semibold lg:text-left">
                    {item.position}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] bg-accent-default rounded-full"></span>
                    <p className="text-white/60">{item.company}</p>
                  </div>
                  <ul className="container ml-8">
                    {item.description.map((item, index) => {
                      return (
                        <li key={index} className="list-disc">
                          <p className="text-justify">{item}</p>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </ScrollArea>
      </div>
    </TabsContent>
  );
};

export default ExperienceContent;
