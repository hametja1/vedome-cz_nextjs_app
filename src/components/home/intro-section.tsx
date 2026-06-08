import { SplitSection } from '../layout/split-section';

function IntroIllustration() {
  return (
    // Placeholder — replace with actual SVG asset when available
    <div className="border-primary/20 bg-background-secondary flex h-83 w-83 items-center justify-center rounded-full border-4">
      <span className="text-primary text-6xl font-semibold">V</span>
    </div>
  );
}

function IntroContent() {
  return (
    <>
      <h2 className="text-primary text-[40px] leading-13.5 font-semibold">Vědomě</h2>
      <div className="space-y-4 text-base leading-6.5 text-black">
        <p>
          Co když péče o zdraví nemusí být bojem, ale spíše návratem k sobě? Často se stává, že
          hlava zná cestu, ale tělo nebo duše s ní nesouzní. Možná právě v tom prostoru mezi tím, co
          víme, a tím, co skutečně cítíme, leží klíč k laskavějšímu životu.
        </p>
        <p>
          Projekt Vědomě vznikl z touhy propojit dva zdánlivě odlišné světy. Svět medicíny a faktů
          se světem vnitřního prožívání a koučinku. Je to pokus vytvořit prostor, kde se vědecké
          poznatky nestávají dogmatem, ale oporou. Kde péče o tělo nepramení z tlaku na výkon, ale z
          hlubšího pochopení vlastních potřeb.
        </p>
      </div>
    </>
  );
}

export function IntroSection() {
  return (
    <SplitSection
      content={<IntroContent />}
      image={<IntroIllustration />}
      imageSide="right"
      className="py-30 md:py-43.25"
      // imageFluid defaults to false — circle keeps its 332px fixed size
    />
  );
}
