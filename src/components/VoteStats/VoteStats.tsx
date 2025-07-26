import s from "./VoteStats.module.css";
import { Votes } from "../../types/votes";

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: string;
}

const VoteStats = ({ votes, totalVotes, positiveRate }: VoteStatsProps) => {
  return (
    <div className={s.container}>
      <p className={s.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={s.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={s.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={s.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={s.stat}>
        Positive: <strong>{positiveRate}</strong>
      </p>
    </div>
  );
};

export default VoteStats;
