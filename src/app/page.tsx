import { Button } from "./components/Button";

export default function Home() {
  return (
    <main>
      <section className="p-4">
        <h1 className="text-2xl font-bold">welcom to bzb!!!</h1>
        <p>greetings and welcome to tha bzb webzone, visitor</p>
      </section>
      <section className="p-4">
        <h2 className="text-lg font-bold">the quiz zone</h2>
        <p>all of ur (football) quizzing needs in one place!</p>
        <div className="py-4">
          <Button href="/quizzes">enter the quiz zone</Button>
        </div>
      </section>
    </main>
  );
}
