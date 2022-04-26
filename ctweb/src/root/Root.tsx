import { Navigation } from "../navigation";
import { Routes } from "../routes";

export default function Root(props: { authenticated: boolean }) {
  return (
    <>
      {props.authenticated && <Navigation />}
      <Routes authenticated={true} />
    </>
  );
}
