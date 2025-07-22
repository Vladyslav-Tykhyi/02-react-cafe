import s from "./VoteStats.module.css";
import Notification from "../Notification/Notification";

interface VoteStatsProps {
  totalVotes: number;
  votes: { good: number; neutral: number; bad: number };
}

const VoteStats = ({ votes, totalVotes }: VoteStatsProps) => {
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return totalVotes > 0 ? (
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
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  ) : (
    <Notification />
  );
};

export default VoteStats;
