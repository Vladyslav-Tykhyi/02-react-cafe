import s from "./VoteOptions.module.css";

import { VoteType } from "../../types/votes";

interface VoteOptionsProps {
  handleVote: (type: VoteType) => void;
  resetVotes: () => void;
  totalVotes: number;
}

const VoteOptions = ({
  handleVote,
  resetVotes,
  totalVotes,
}: VoteOptionsProps) => {
  return (
    <div className={s.container}>
      <button className={s.button} onClick={() => handleVote("good")}>
        Good
      </button>
      <button className={s.button} onClick={() => handleVote("neutral")}>
        Neutral
      </button>
      <button className={s.button} onClick={() => handleVote("bad")}>
        Bad
      </button>
      {totalVotes > 0 ? (
        <button
          className={`${s.button} ${s.reset}`}
          onClick={() => resetVotes()}
        >
          Reset
        </button>
      ) : (
        false
      )}
    </div>
  );
};

export default VoteOptions;
