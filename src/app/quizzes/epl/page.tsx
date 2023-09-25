import { Button } from "@/app/components/Button";

export default function Page() {
  return (
    <main>
      <section className="p-4">
        <h1 className="text-2xl font-bold">epl</h1>
        <p>all about the english premier league!</p>
      </section>
      <section className="p-4">
        <h2 className="text-lg font-bold">quizzes(!!!)</h2>
        <p>all current quizzez</p>
        <div className="py-4">
          <h3 className="text-md font-bold">🏆🥾 golden boot winners</h3>
          <p>who were the mightiest strikers each season</p>
          <div className="py-4">
            <Button href="/quizzes/epl/golden-boot">
              to golden boot winners quiz
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
