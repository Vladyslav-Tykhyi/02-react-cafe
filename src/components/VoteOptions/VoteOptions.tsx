import s from "./VoteOptions.module.css";
import { VoteType } from "../../types/votes";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

const VoteOptions = ({ onVote, onReset, canReset }: VoteOptionsProps) => {
  return (
    <div className={s.container}>
      <button className={s.button} onClick={() => onVote("good")}>
        Good
      </button>
      <button className={s.button} onClick={() => onVote("neutral")}>
        Neutral
      </button>
      <button className={s.button} onClick={() => onVote("bad")}>
        Bad
      </button>
      {canReset && (
        <button className={`${s.button} ${s.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default VoteOptions;
