"use client";

import { Button } from "@/app/components/Button";
import { eplGoldenBoots } from "@/app/consts/eplGoldenBoots";
import { useEffect, useState } from "react";

function QuizItem({
  label,
  value,
  answered,
  ended,
}: {
  label: string;
  value: string;
  answered: boolean;
  ended: boolean;
}) {
  let answerContainerClassName =
    "max-w-xs flex-1 bg-zinc-400 h-full transition ease-in-out";

  let answerClassName = "opacity-0 transition ease-in-out";

  if (answered) {
    answerContainerClassName += " bg-zinc-200";
  }

  if (answered || ended) {
    answerClassName += "opacity-100";
  }

  return (
    <div className="flex">
      <b className="w-24">{label}</b>
      <div className={answerContainerClassName}>
        <span>{answered || ended ? value : ""}</span>
      </div>
    </div>
  );
}

export default function Page() {
  const [answer, setAnswer] = useState("");
  const [finished, setFinished] = useState(false);

  const [correctIndexes, setCorrectIndexes] = useState<number[]>([]);

  useEffect(() => {
    if (!answer) {
      return;
    }

    const answerToLower = answer.toLowerCase();

    const matchedIndexes: number[] = [];

    eplGoldenBoots.forEach((datum, i) => {
      const valueToLower = datum.value.toLowerCase();

      if (valueToLower.includes(",")) {
        const allValues = valueToLower.split(",").map((v) => v.trim());

        allValues.forEach((v) => {
          const parts = v.split(" ");

          if (
            parts[parts.length - 1] === answerToLower ||
            valueToLower === answerToLower
          ) {
            matchedIndexes.push(i);
          }
        });
      } else {
        const parts = valueToLower.split(" ");

        if (
          parts[parts.length - 1] === answerToLower ||
          valueToLower === answerToLower
        ) {
          matchedIndexes.push(i);
        }
      }
    });

    if (matchedIndexes.length > 0) {
      const currentCorrectIndexes = new Set(correctIndexes);
      const newCorrectIndexes = new Set(matchedIndexes);

      setCorrectIndexes(
        Array.from(new Set([...currentCorrectIndexes, ...newCorrectIndexes]))
      );
      setAnswer("");
    }
  }, [answer, correctIndexes]);

  const complete = correctIndexes.length === eplGoldenBoots.length;
  const ended = complete || finished;

  return (
    <main>
      <section className="p-4">
        <h1 className="text-2xl font-bold">epl golden boot winners</h1>
        <p>simply name who won the golden b00t</p>
      </section>
      <section className="p-4 flex gap-2 items-center">
        <input
          className="py-1 px-2 border-solid border-2 border-zinc-600"
          placeholder="type answer!!"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={ended}
        />
        <Button onClick={() => setFinished(true)} disabled={ended}>
          give up
        </Button>
        {ended && (
          <p>
            quiz over sir!!!. you scored:{" "}
            <b>
              {correctIndexes.length}/{eplGoldenBoots.length}
            </b>
          </p>
        )}
      </section>
      <section className="p-4">
        <div className="grid grid-cols-2 gap-2">
          {eplGoldenBoots.map(({ label, value }, i) => (
            <QuizItem
              key={i}
              label={label}
              value={value}
              answered={correctIndexes.includes(i)}
              ended={ended}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
