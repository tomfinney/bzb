import { Button } from "@/app/components/Button";

export default function Test() {
  return (
    <main>
      <section className="p-4">
        <h1 className="text-2xl font-bold">the _quiz_ zone</h1>
        <p>the fabled mighty quiz zone. what mysteries await you, traveller</p>
      </section>
      <section className="p-4">
        <h2 className="text-lg font-bold">quiz groups</h2>
        <p>all current groups</p>
        <div className="py-4">
          <h3 className="text-md font-bold">⚽️ epl</h3>
          <p>tales of the english premier league</p>
          <div className="py-4">
            <Button href="/quizzes/epl">to the premier league</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
