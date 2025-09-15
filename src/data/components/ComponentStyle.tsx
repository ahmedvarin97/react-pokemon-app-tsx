// Root
export const MainSectionStyle = "container mx-auto p-5 lg:p-10 flex flex-col gap-5"

// Header Comp
export const ImgStyle = "h-20 mx-auto mb-3"
export const h1Style = "text-[25px] lg:text-5xl font-bold text-center"

// Filter
export const FilterWrapper = "flex flex-col lg:flex-row justify-between gap-3"
export const LabelStyle = "text-1xl text-left lg:block hidden"
export const CompWrapperStyle = "flex flex-col lg:flex-row items-center lg:mt-5 lg:mb-5 gap-3"
export const InputStyle = "bg-white border-0 border-b-2 border-[#acb4d4] focus:outline-none px-2 py-2 text-center lg:px-5 lg:py-5 w-full lg:w-[250px] lg:text-left rounded"
//Count
// export const CountWrapper = "flex flex-col lg:flex-row items-center mt-5 mb-5 gap-3"

// Pokemon List 
export const CardListStyle = "cards grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"

//Pokemon Card
export const CardContentWrapper = "content-wrapper flex flex-col gap-4 py-5 mb-5"
export const PokemonName = "pokemon-name text-3xl font-bold mb-2 capitalize"
export const PokemonDetail = "flex flex-row col-grid-3 gap-5 mx-auto text-center"
export const PokemonHrStyle = "w-[50%] mx-auto border-t-2 border-[#eaecf4]"
export const CardStyle: string = [
  // Layout & base
  'relative',
  'w-full',
  'max-w-[36rem]',
  'bg-white',
  'rounded-[10px]',
  'shadow-[0_6px_24px_#0000000d,0_0_0_1px_#00000014]',

  // Transition
  'transition-all',
  'transition-transform',
  'duration-300',
  'ease-in-out',

  // Hover effects
  'hover:scale-101',
  'hover:rounded-none',
  'hover:shadow-[0_48px_100px_#110c2e26]',

  // ::before styles
  'before:content-[""]',
  'before:absolute',
  'before:top-0',
  'before:left-0',
  'before:w-full',
  'before:h-[40%]',
  'before:rotate-180',
  'before:bg-[#eaecf4]',
  'before:z-0',
  'before:rounded-[30%_70%_70%_30%/30%_30%_70%_70%]',
  'before:transition-all',
  'before:duration-300',

  // ::before hover
  'hover:before:rounded-[50%_50%_100%_0%/99%_100%_0%_1%]'
].join(' ');


export const PokemonAbilities: string = 'bg-[#fec000] px-5 py-[5px] text-black uppercase text-[12px] tracking-[1px] font-medium rounded-full text-center';
export const PokemonInfo: string = 'font-medium text-[#304594] capitalize'
export const PokemonInfoSpan: string =  'font-medium text-black'
export const CardImage = "mx-auto w-[50%] h-[10rem]"
export const CardDetailBtn = "bg-[#e4e6ef] w-[80%] py-3 mx-auto rounded-full cursor-pointer font-medium text-[#304594] hover:bg-[#304594] hover:font-normal hover:text-white text-center"