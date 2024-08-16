"use client";

import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import apiClient from "@/libs/api";

// This component is used to collect the emails from the landing page
// You'd use this if your product isn't ready yet or you want to collect leads
// For instance: A popup to send a freebie, joining a waitlist, etc.
// It calls the /api/lead/route.js route and store a Lead document in the database
const ButtonLead = ({ extraStyle }: { extraStyle?: string }) => {
  const inputRef = useRef(null);
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const [placeholder, setPlaceholder] = useState<string>("");
  useEffect(() => {
    const placeholders = [
      "lebron@james.com",
      "lionel@messi.com",
      "serena@williams.com",
      "roger@federer.com",
      "usain@bolt.com",
      "michael@jordan.com",
      "cristiano@ronaldo.com",
      "tom@brady.com",
      "michael@phelps.com",
      "tiger@woods.com",
      "mohamed@salah.com",
      "virat@kohli.com",
      "sachin@tendulkar.com",
      "neymar@jr.com",
      "manny@pacquiao.com",
      "mike@tyson.com",
      "venus@williams.com",
      "steph@curry.com",
      "kobe@bryant.com",
      "pele@brazil.com",
      "maradona@argentina.com",
      "beyonce@knowles.com",
      "taylor@swift.com",
      "justin@bieber.com",
      "rihanna@fenty.com",
      "lady@gaga.com",
      "bruno@mars.com",
      "katy@perry.com",
      "ed@sheeran.com",
      "drake@canada.com",
      "ariana@grande.com",
      "kanye@west.com",
      "eminem@usa.com",
      "madonna@usa.com",
      "elton@john.com",
      "michael@jackson.com",
      "freddie@mercury.com",
      "bob@dylan.com",
      "john@lennon.com",
      "paul@mccartney.com",
      "mick@jagger.com",
      "bruce@springsteen.com",
      "david@bowie.com",
      "prince@usa.com",
      "jimmy@page.com",
      "jimi@hendrix.com",
      "bob@marley.com",
      "tom@cruise.com",
      "robert@downeyjr.com",
      "johnny@depp.com",
      "leonardo@dicaprio.com",
      "brad@pitt.com",
      "angelina@jolie.com",
      "scarlett@johansson.com",
      "jennifer@aniston.com",
      "julia@roberts.com",
      "meryl@streep.com",
      "nicole@kidman.com",
      "charlize@theron.com",
      "natalie@portman.com",
      "kate@winslet.com",
      "hugh@jackman.com",
      "george@clooney.com",
      "morgan@freeman.com",
      "denzel@washington.com",
      "samuel@jackson.com",
      "will@smith.com",
      "tom@hanks.com",
      "jack@nicholson.com",
      "al@pacino.com",
      "robert@deniro.com",
      "clint@eastwood.com",
      "harrison@ford.com",
      "sean@connery.com",
      "arnold@schwarzenegger.com",
      "sylvester@stallone.com",
      "bruce@willis.com",
      "keanu@reeves.com",
      "daniel@craig.com",
      "barack@obama.com",
      "nelson@mandela.com",
      "martin@lutherking.com",
      "winston@churchill.com",
      "mahatma@gandhi.com",
      "mother@teresa.com",
      "dalai@lama.com",
      "mikhail@gorbachev.com",
      "bill@gates.com",
      "steve@jobs.com",
      "mark@zuckerberg.com",
      "elon@musk.com",
      "jeff@bezos.com",
      "warren@buffett.com",
      "larry@page.com",
      "sergey@brin.com",
      "jack@dorsey.com",
      "sundar@pichai.com",
      "tim@cook.com",
      "satya@nadella.com",
    ]; // Add more placeholders here
    const randomPlaceholder =
      placeholders[Math.floor(Math.random() * placeholders.length)];
    setPlaceholder(randomPlaceholder);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    setIsLoading(true);
    try {
      await apiClient.post("/lead", { email });

      toast.success("Thanks for joining the waitlist!");

      // just remove the focus on the input
      inputRef.current.blur();
      setEmail("");
      setIsDisabled(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      className={`w-full max-w-xs space-y-3 ${extraStyle ? extraStyle : ""}`}
      onSubmit={handleSubmit}
    >
      <input
        required
        type="email"
        value={email}
        ref={inputRef}
        autoComplete="email"
        placeholder={placeholder}
        className="input input-bordered w-full placeholder:opacity-60"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="btn btn-primary btn-block"
        type="submit"
        disabled={isDisabled}
      >
        Join waitlist
        {isLoading ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      <p className="text-sm md:text-base flex justify-center items-center gap-2 md:text-sm">
        🚀 Public Launch in November
      </p>
    </form>
  );
};

export default ButtonLead;
