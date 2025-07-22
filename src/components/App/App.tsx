import s from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import { Votes, VoteType } from "../../types/votes";

import { useState } from "react";

const App = () => {
  const [votes, setVote] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

  const handleVote = (key: VoteType) => {
    setVote((prev) => ({
      ...prev,
      [key]: prev[key] + 1,
    }));
  };

  const resetVotes = () => {
    setVote({ good: 0, neutral: 0, bad: 0 });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;

  return (
    <div className={s.app}>
      <CafeInfo />
      <VoteOptions
        handleVote={handleVote}
        resetVotes={resetVotes}
        totalVotes={totalVotes}
      />
      <VoteStats votes={votes} totalVotes={totalVotes} />
    </div>
  );
};

export default App;
