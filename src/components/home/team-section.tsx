import Image from 'next/image';
import { SplitSection } from '../layout/split-section';

function TeamImage() {
  return (
    // w-full fills the fluid column; height stays fixed at ~515px
    <div className="relative h-128.75 w-full rounded-lg shadow-[-19px_-18px_0px_0px_#6b705c,0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <Image
        src="/images/green_hand_with_leaves.jpg"
        alt="Dvě cesty, jeden záměr"
        fill
        className="rounded-lg object-cover"
      />
    </div>
  );
}

function TeamContent() {
  return (
    <>
      <h2 className="text-primary text-[40px] leading-13.5 font-semibold">
        Dvě cesty, jeden záměr
      </h2>
      <div className="space-y-4 text-base leading-6.5 text-black">
        <p>
          Náš příběh se začal psát dávno předtím, než jsme tušily, kam nás život zavane. Vyrostly
          jsme spolu a i když se naše studijní a profesní cesty zdánlivě rozešly, nikdy jsme
          neztratily společný směr.
        </p>
        <p>
          Jedna z nás se vydala do světa medicíny zkoumat taje lidského těla a fyziologie. Druhá
          našla své místo v práci s lidmi, v HR a koučinku, kde objevuje potenciál lidské mysli a
          duše. Časem jsme si uvědomily, že tyto dva světy nemohou fungovat odděleně. Že fakta
          potřebují pochopení a tělo potřebuje klidnou mysl.
        </p>
        <p>
          Vědomě je pro nás místem, kde se naše rozdílné zkušenosti setkávají. Spojuje nás nejen
          celoživotní přátelství, ale i neustálá touha se vzdělávat a dívat se na člověka jako na
          celek. Nabízíme vám prostor, kde se medicína potkává s psychologií, logika s intuicí a kde
          je možné hledat své zdraví v souvislostech.
        </p>
      </div>
    </>
  );
}

export function TeamSection() {
  return (
    <SplitSection
      content={<TeamContent />}
      image={<TeamImage />}
      imageSide="left"
      imageFluid // fills its half of the row and shrinks with viewport
    />
  );
}
