import s from "./CafeInfo.module.css";

const CafeInfo = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Sip Happens Café</h1>
      <p className={s.description}>
        Please rate our service by selecting one of the options below.
      </p>
    </div>
  );
};

export default CafeInfo;
