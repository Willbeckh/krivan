import Image from "next/image";
import { Metadata } from "next";
interface Service {
  id: number;
  title: string;
  description: string;
  slug: string;
  image?: { url: string };
}

interface ServicePageProps {
  params: { slug: string };
}

/**
 * Generate metadata for SEO/social share previews
 */
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/services?filters[slug][$eq]=${params.slug}&populate=image`
  );
  const data = await res.json();

  const service = data?.data?.[0];

  return {
    title: service?.title || "Service",
    description: service?.description,
    openGraph: {
      title: service?.title,
      description: service?.description,
      images: service?.image?.url
        ? [`${process.env.NEXT_PUBLIC_API_URL}${service.image.url}`]
        : [],
    },
  };
}

async function getServiceBySlug(slug: string): Promise<Service | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/services?filters[slug][$eq]=${slug}&populate=image`,
    { cache: "no-store" }
  );

  const json = await res.json();
  return json.data?.[0] ?? null;
}

export default async function SingleServicePage({ params }: ServicePageProps) {
  const service = await getServiceBySlug(params.slug);

  if (!service) return <div>Service not found.</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {service.image?.url && (
        <div className="relative w-full h-64 mb-6">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${service.image.url}`}
            fill
            alt={service.title}
            className="object-cover rounded-2xl"
          />
        </div>
      )}

      <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
      <p className="text-lg">{service.description}</p>
    </div>
  );
}
