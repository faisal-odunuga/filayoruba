import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';

export default function Home() {
  const featuredProduct = products[0];
  const recommendedProducts = products.filter((p) => p.id !== featuredProduct?.id).slice(0, 3);

  return (
    <div className='flex flex-col'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-end pt-32 pb-20 px-8 lg:px-20 overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent z-10'></div>
          <Image
            src='/images/catalogue/jagaban-catalogue.jpg'
            alt='Fìlà Yorùbá hero'
            width={1920}
            height={1080}
            className='w-full h-full object-cover opacity-70'
            priority
          />
        </div>
        <div className='relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end'>
          <div className='lg:col-span-8'>
            <span className='text-primary font-body uppercase tracking-[0.4em] text-xs mb-4 block'>
              Premium Yoruba Caps
            </span>
            <h1 className='font-headline text-6xl md:text-9xl font-black uppercase tracking-[-0.04em] leading-[0.9] text-white'>
              Fìlà Yorùbá <br /> <span className='text-primary'>Crown Your Heritage</span>
            </h1>
          </div>
          <div className='lg:col-span-4 lg:pl-12 pb-4'>
            <p className='font-body text-white/70 text-lg leading-relaxed max-w-sm'>
              Handcrafted fìlà caps woven from heirloom Aso Oke in Nigeria — made for the modern
              monarchs carrying Yoruba legacy forward.
            </p>
          </div>
        </div>

        {/* Vertical Anchor Text */}
        <div className='absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block'>
          <span className='text-monolith font-headline text-8xl font-black text-white/5 uppercase select-none'>
            Aso Oke Crown
          </span>
        </div>
      </section>

      {/* Heritage Section */}
      <section className='py-32 px-8 lg:px-20 bg-background'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
            <div className='order-2 lg:order-1 relative'>
              <div className='absolute -top-10 -left-10 w-40 h-40 border border-primary/20 -z-10'></div>
              <Image
                src='/images/catalogue/hand_knitted-catalogue.jpg'
                alt='Handwoven Yoruba fìlà'
                width={1920}
                height={1080}
                className='w-full aspect-[4/5] object-cover'
              />
              <div className='absolute bottom-0 right-0 p-8 bg-surface-container-highest max-w-[280px]'>
                <p className='font-body text-sm italic text-white/50 leading-relaxed'>
                  &quot;Every strand of Aso Oke carries lineage. Each Fìlà is a nod to the crown of
                  our fathers.&quot;
                </p>
              </div>
            </div>
            <div className='order-1 lg:order-2'>
              <h2 className='font-headline text-5xl font-bold uppercase mb-8 tracking-tighter'>
                Yoruba Heritage
              </h2>
              <div className='space-y-6 text-white/70 font-body text-lg leading-relaxed'>
                <p>
                  The Yoruba fìlà is a symbol of honor — worn to weddings, chieftaincy ceremonies,
                  and rites of passage. Its woven language speaks of family, place, and pride.
                </p>
                <p>
                  Fìlà Yorùbá works with Lagos artisans who still weave Aso Oke by hand, blending
                  ancestral techniques with refined, modern silhouettes for everyday royalty.
                </p>
              </div>
              <div className='mt-12 flex items-center gap-4'>
                <div className='h-[1px] w-20 bg-primary'></div>
                <span className='font-label text-primary uppercase tracking-widest text-xs'>
                  Crafted in Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className='bg-surface-container-low py-32 px-8 lg:px-20 relative overflow-hidden'>
        <div className='absolute left-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none'>
          <span className='text-[20rem] font-black font-headline uppercase leading-none select-none'>
            FÌLÀ
          </span>
        </div>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10'>
          <div className='order-2 md:order-1'>
            <h2 className='text-4xl md:text-6xl font-headline font-bold mb-8 uppercase tracking-tighter leading-none'>
              Signature <br />
              <span className='text-primary'>Gòbì Crown</span>
            </h2>
            <div className='space-y-6 text-lg text-white/80 font-body leading-relaxed max-w-lg'>
              <p>
                Handwoven Aso Oke with a sculpted peak — our Gòbì Heritage Cap is balanced for both
                ceremonies and everyday command. A soft inner band keeps the fit secure while the
                crown holds its proud silhouette.
              </p>
            </div>
            <div className='mt-12'>
              <Link
                href={`/filas/${featuredProduct?.id}`}
                className='inline-flex items-center gap-4 text-primary font-headline font-bold uppercase tracking-widest group'
              >
                View Featured Fìlà
                <span className='material-symbols-outlined group-hover:translate-x-2 transition-transform'>
                  arrow_right_alt
                </span>
              </Link>
            </div>
          </div>
          <div className='order-1 md:order-2'>
            <div className='aspect-[3/4] bg-surface-container-highest relative'>
              <Image
                src={featuredProduct?.image}
                alt={featuredProduct?.category}
                className='w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700'
                width={1920}
                height={1080}
              />
              <div className='absolute -bottom-10 -right-10 w-64 h-80 border-8 border-primary/20 hidden md:block'></div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Showcase */}
      <section className='bg-[#0a0a0a] py-24 px-8 lg:px-20 border-y border-white/5'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <span className='text-primary font-label text-sm tracking-[0.3em] uppercase block mb-4'>
              Explore the Line
            </span>
            <h2 className='text-4xl md:text-6xl font-headline font-bold uppercase tracking-tighter'>
              The Fìlà Categories
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {[
              { name: 'Gòbì', image: '/images/catalogue/gobi-catalogue.jpg' },
              { name: 'Sénítọ̀', image: '/images/catalogue/senito-catalogue.jpg' },
              { name: 'Hand-knitted', image: '/images/catalogue/hand_knitted-catalogue.jpg' },
              { name: 'Fìlástìk Big Band', image: '/images/catalogue/filastik-big-catalogue.jpg' },
              { name: 'Fìlástìk Small Band', image: '/images/catalogue/filastik-small-catalogue.jpg' },
              { name: 'Jagaban', image: '/images/catalogue/jagaban-catalogue.jpg' },
              { name: 'Abetíajá', image: '/images/catalogue/abetiaja-catalogue.jpeg' },
              { name: 'Àdìgún', image: '/images/catalogue/adigun-catalogue.jpg' },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/filas?category=${encodeURIComponent(category.name)}`}
                className='group border border-white/5 bg-surface-container-high hover:border-primary transition-all overflow-hidden block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0a0a0a]'
              >
                <div className='aspect-square relative overflow-hidden'>
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes='(max-width: 768px) 100vw, 25vw'
                    className='object-cover transition-transform duration-500 group-hover:scale-105 group-focus:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300' />
                </div>
                <div className='p-4 flex items-center justify-between'>
                  <span className='font-headline text-sm uppercase tracking-widest text-white group-hover:text-primary group-focus:text-primary transition-colors'>
                    {category.name}
                  </span>
                  <span className='material-symbols-outlined text-primary text-lg transform transition-transform group-hover:translate-x-1 group-focus:translate-x-1'>arrow_right_alt</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fìlà Fit Guide using user posters */}
      <section className='py-24 px-8 lg:px-20 bg-surface-container-low'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <span className='text-primary font-label text-sm tracking-[0.3em] uppercase block mb-4'>
              Precision fit
            </span>
            <h2 className='text-4xl md:text-5xl font-headline font-bold uppercase tracking-tighter'>
              Fìlà Sizing & Measurement
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Image
              src='/images/measurement-guide.jpg'
              alt='How to measure your fìlà size'
              width={1080}
              height={1080}
              className='w-full h-auto object-contain rounded-sm border border-white/10'
            />
            <Image
              src='/images/size-chart.jpg'
              alt='Fìlà size chart'
              width={1080}
              height={1080}
              className='w-full h-auto object-contain rounded-sm border border-white/10'
            />
          </div>
        </div>
      </section>

      {/* Recommended Grid */}
      <section className='py-32 px-8 lg:px-20 max-w-[1920px] mx-auto'>
        <div className='flex justify-between items-end mb-16'>
          <div>
            <span className='text-xs uppercase tracking-[0.5em] text-primary font-black mb-4 block'>
              Complete the Look
            </span>
            <h3 className='text-4xl font-headline font-bold uppercase tracking-tighter'>
              Recommended Additions
            </h3>
          </div>
          <Link
            href='/filas'
            className='text-sm font-label uppercase tracking-widest border-b border-white/20 pb-1 hover:border-primary transition-colors'
          >
            View All
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {recommendedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
