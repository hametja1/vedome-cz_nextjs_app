interface SmallHeroProps {
  title: string;
  imagePath: string;
}

export const SmallHero = ({ title, imagePath }: SmallHeroProps) => {
  return (
    <section
      className="relative h-100 w-full bg-cover bg-center shadow-lg/30"
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <div className="bg-accent/50 absolute inset-0" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-[10%] text-white md:px-[15%]">
        <h1 className="max-w-220 text-5xl/16 font-semibold sm:text-5xl/18 md:text-6xl/18">
          {title}
        </h1>
      </div>
    </section>
  );
};
