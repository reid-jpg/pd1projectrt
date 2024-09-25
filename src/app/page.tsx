import Link from "next/link";
import { db } from "~/server/db"

/*const mockUrls = [
  "https://utfs.io/f/03bdc2a7-0581-49e7-bf4e-42253740792e-2us.jpg",
  "https://utfs.io/f/8e91c6ee-af24-4fe3-b808-11e43a40d0a8-nm33wo.jpg",
  "https://utfs.io/f/b4325caf-1c06-48af-8347-fa8dfc799f14-nm33wo.jpg",
  "https://utfs.io/f/817c63bd-67b1-4be6-8bf4-bab868d47d47-1ody.jpg",
  "https://utfs.io/f/0248c5e4-9412-4287-bdd5-bb6c0446c35f-nm33wo.jpg",
  "https://www.bing.com/images/search?view=detailV2&ccid=Tdya0geK&id=FDE6CCE10358F89B50ACDF260435F9C27D5C78BD&thid=OIP.Tdya0geKS4ReyTFiRYip9wHaLH&mediaurl=https%3a%2f%2fi1.wp.com%2fwww.chopstickchronicles.com%2fwp-content%2fuploads%2f2017%2f05%2fTan-Tan-Ramen.jpg%3fresize%3d980%252C1470%26ssl%3d1&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.4ddc9ad2078a4b845ec931624588a9f7%3frik%3dvXhcfcL5NQQm3w%26pid%3dImgRaw%26r%3d0&exph=1470&expw=980&q=tantan+ramen&simid=608031984010871845&FORM=IRPRST&ck=E19DE224B25A7E2AE36E61BF59049490&selectedIndex=10&itb=0"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
})); */

export default async function HomePage() {
  const images = await db.query.images.findMany();
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
