import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url(/images/home-img.jpg)] bg-cover bg-center">
      <main className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto h-dvh">

        <div className="flex flex-col gap-6 p-12 rounded-xl bg-linear-65 from-green-800 to-yellow-200 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl" >

          <h1 className="text-4xl font-bold">Danapos Computer<br />Repair Shop</h1>
        <address>
          24092 Hamburg <br />
          Germany <br />
        </address>
        <p>
          Open Daily: 9am - 5pm
        </p>
        <Link href="tel:5555555555" className="hover:underline" >
          555-555-5555
        </Link>
        </div>

      </main>

    </div>
  );
}
